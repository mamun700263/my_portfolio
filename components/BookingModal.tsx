"use client";

import { useState } from "react";

type Step = "date" | "slot" | "details" | "success";

interface BookingState {
  date: string;
  slot: string;
  name: string;
  email: string;
  message: string;
}

export default function BookingModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("date");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const [booking, setBooking] = useState<BookingState>({
    date: "",
    slot: "",
    name: "",
    email: "",
    message: "",
  });

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  async function handleDateSubmit() {
    if (!booking.date) return;
    setLoadingSlots(true);
    setError("");
    try {
      const res = await fetch(`/api/slots?date=${booking.date}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      if (data.slots.length === 0) {
        setError("No available slots on this day. Please pick another date.");
        return;
      }
      setSlots(data.slots);
      setStep("slot");
    } catch (e: any) {
      setError(e.message || "Could not load slots.");
    } finally {
      setLoadingSlots(false);
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setMeetLink(data.meetLink);
      setStep("success");
    } catch (e: any) {
      setError(e.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(`${dateStr}T12:00:00`).toLocaleDateString("en-GB", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  function formatSlot(slot: string) {
    const [h, m] = slot.split(":").map(Number);
    const endH = h + (m === 30 ? 1 : 0);
    const endM = m === 30 ? "00" : "30";
    return `${slot} – ${String(endH).padStart(2, "0")}:${endM}`;
  }

  const inputClass =
    "w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors";

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-gray-700">
          <div>
            <h3 className="text-white font-semibold text-lg">Book a meeting</h3>
            {step !== "date" && step !== "success" && (
              <p className="text-gray-400 text-sm mt-0.5">
                {booking.date && formatDate(booking.date)}
                {booking.slot && ` · ${formatSlot(booking.slot)}`}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-300 transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Progress */}
        {step !== "success" && (
          <div className="flex gap-1.5 px-6 pt-4">
            {(["date", "slot", "details"] as Step[]).map((s) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s === step ? "bg-purple-500" : "bg-gray-700"
                }`}
              />
            ))}
          </div>
        )}

        {/* Step: Pick date */}
        {step === "date" && (
          <div className="p-6 space-y-4">
            <p className="text-gray-400 text-sm">Select a date for your meeting</p>
            <input
              type="date"
              min={today}
              max={maxDate}
              value={booking.date}
              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
              className={inputClass}
              style={{ colorScheme: "dark" }}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              disabled={!booking.date || loadingSlots}
              onClick={handleDateSubmit}
              className="w-full bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-lg transition-colors text-sm"
            >
              {loadingSlots ? "Checking availability…" : "See available times →"}
            </button>
          </div>
        )}

        {/* Step: Pick slot */}
        {step === "slot" && (
          <div className="p-6 space-y-4">
            <p className="text-gray-400 text-sm">Choose a time that works for you</p>
            <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setBooking({ ...booking, slot })}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                    booking.slot === slot
                      ? "bg-purple-600 border-purple-500 text-white"
                      : "bg-gray-800 border-gray-700 text-gray-300 hover:border-purple-500"
                  }`}
                >
                  {formatSlot(slot)}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center pt-1">
              <button
                onClick={() => setStep("date")}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                ← Back
              </button>
              <button
                disabled={!booking.slot}
                onClick={() => setStep("details")}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-5 py-2 rounded-lg transition-colors text-sm"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step: Details */}
        {step === "details" && (
          <div className="p-6 space-y-3">
            <p className="text-gray-400 text-sm">Just a few details</p>
            <input
              placeholder="Your name"
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
              className={inputClass}
            />
            <input
              placeholder="Your email"
              type="email"
              value={booking.email}
              onChange={(e) => setBooking({ ...booking, email: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="What's this about? (optional)"
              value={booking.message}
              onChange={(e) => setBooking({ ...booking, message: e.target.value })}
              rows={3}
              className={`${inputClass} resize-none`}
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <div className="flex justify-between items-center pt-1">
              <button
                onClick={() => setStep("slot")}
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                ← Back
              </button>
              <button
                disabled={!booking.name || !booking.email || submitting}
                onClick={handleSubmit}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-medium px-5 py-2 rounded-lg transition-colors text-sm"
              >
                {submitting ? "Booking…" : "Confirm booking"}
              </button>
            </div>
          </div>
        )}

        {/* Step: Success */}
        {step === "success" && (
          <div className="p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-xl">
              ✓
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg">You're booked!</h4>
              <p className="text-gray-400 text-sm mt-1">
                Check your email for the confirmation and Google Meet link.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date</span>
                <span className="text-gray-200">{formatDate(booking.date)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Time</span>
                <span className="text-gray-200">{formatSlot(booking.slot)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Duration</span>
                <span className="text-gray-200">30 minutes</span>
              </div>
            </div>
            {meetLink && (
              <a
                href={meetLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-500 text-white font-medium px-6 py-2.5 rounded-lg transition-colors text-sm"
              >
                Open Google Meet
              </a>
            )}
            <button
              onClick={onClose}
              className="block w-full text-gray-500 hover:text-gray-300 text-sm transition-colors pt-1"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}