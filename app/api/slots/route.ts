import { NextRequest, NextResponse } from "next/server";
import { getBusySlots, getAvailableSlots } from "@/lib/google";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  console.log("###############")
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date. Use YYYY-MM-DD." }, { status: 400 });
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (new Date(date) < today) {
    return NextResponse.json({ error: "Date is in the past." }, { status: 400 });
  }

  try {
    const busy = await getBusySlots(date);
    const available = getAvailableSlots(date, busy);
    return NextResponse.json({ date, slots: available });
  } catch (err) {
    console.error("Slots error:", err);
    return NextResponse.json({ error: "Failed to fetch availability." }, { status: 500 });
  }
}