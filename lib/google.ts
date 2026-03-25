import { google } from "googleapis";


export function getGoogleAuth() {
const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  console.log("KEY START:", key?.substring(0, 40));
  console.log("KEY LINES:", key?.split("\n").length);
  return new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
    // subject: process.env.YOUR_EMAIL
  });
}

export async function getCalendar() {
  const auth = getGoogleAuth();
  await auth.authorize();
  return google.calendar({ version: "v3", auth });
}

// Returns array of { start, end } ISO strings that are already booked
export async function getBusySlots(date: string) {
  const calendar = await getCalendar();

  const dayStart = new Date(`${date}T00:00:00`);
  const dayEnd = new Date(`${date}T23:59:59`);

  const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      items: [{ id: process.env.GOOGLE_CALENDAR_ID! }]
    }
  });

  const calendars = res.data.calendars;

  if (!calendars) return [];

  const cal = calendars[process.env.GOOGLE_CALENDAR_ID!];

  return (res.data.calendars?.[process.env.GOOGLE_CALENDAR_ID!]?.busy ?? [])
  .filter((b): b is { start: string; end: string } => 
    typeof b.start === "string" && typeof b.end === "string"
  );
}

// Generates all 30-min slots in your working hours (9am–5pm)
export function generateSlots(date: string): string[] {
  const slots: string[] = [];
  for (let hour = 9; hour < 17; hour++) {
    for (const min of [0, 30]) {
      const h = String(hour).padStart(2, "0");
      const m = String(min).padStart(2, "0");
      slots.push(`${h}:${m}`);
    }
  }
  return slots;
}

// Filters out busy slots
export function getAvailableSlots(
  date: string,
  busySlots: { start: string; end: string }[]
): string[] {
  const all = generateSlots(date);

  return all.filter((slot) => {
    const [h, m] = slot.split(":").map(Number);
    const slotStart = new Date(`${date}T${slot}:00`);
    const slotEnd = new Date(slotStart.getTime() + 30 * 60 * 1000);

    return !busySlots.some((busy) => {
      const busyStart = new Date(busy.start);
      const busyEnd = new Date(busy.end);
      // Overlaps if slot starts before busy ends AND slot ends after busy starts
      return slotStart < busyEnd && slotEnd > busyStart;
    });
  });
}
