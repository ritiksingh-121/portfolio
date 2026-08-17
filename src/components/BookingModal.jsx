import React, { useState, useEffect } from "react";
import { X, Calendar, CheckCircle2, Video, ArrowRight } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [selectedDay, setSelectedDay] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("15:00 UTC");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#111116] border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 text-left">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors"
          aria-label="Close Booking Modal"
        >
          <X size={20} />
        </button>

        {!booked ? (
          <div>
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Video size={15} />
              <span>Direct Video Consultation</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
              Schedule a 20-Min Architecture Discovery Call
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 mt-2">
              Discuss your project scope, architecture requirements, delivery timeline, and get a fixed-price sprint roadmap.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Day Selection */}
              <div>
                <label className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider block mb-2">
                  Select Preferred Day
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["Today (Urgent)", "Tomorrow", "This Thursday"].map((day) => (
                    <button
                      type="button"
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        selectedDay === day
                          ? "bg-violet-600/10 dark:bg-violet-600/20 border-violet-500 text-violet-600 dark:text-violet-300 font-bold"
                          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div>
                <label className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider block mb-2">
                  Select Time Slot (UTC)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["13:00 UTC", "15:00 UTC", "18:30 UTC"].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                        selectedTime === time
                          ? "bg-violet-600/10 dark:bg-violet-600/20 border-violet-500 text-violet-600 dark:text-violet-300 font-bold"
                          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Need an MVP built with Next.js & AI scraping pipeline in 6 weeks..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-bold text-xs bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <span>Confirm Video Discovery Call</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
              Discovery Call Confirmed!
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
              We have reserved <strong>{selectedDay} at {selectedTime}</strong> for {email}. A Google Meet invitation and calendar invite has been sent.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setBooked(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
