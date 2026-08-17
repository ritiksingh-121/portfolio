import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "ApexCraft delivered our real-time coordinates socket tracking client in record time. The architecture was modular, the MongoDB queries were aggressively optimized, and our route rendering latency dropped under 40ms.",
    author: "Alexander Reed",
    role: "VP of Engineering",
    company: "SaaS Systems Labs",
    rating: 5,
  },
  {
    quote:
      "Exceptional full-stack execution and UI craft. Ritik and the team translated our complex AI workflow specs into a blazing fast React application with zero design debt and full WCAG accessibility compliance.",
    author: "Sarah Jenkins",
    role: "Product Director",
    company: "Vivid Digital Studio",
    rating: 5,
  },
  {
    quote:
      "A proactive software consultancy that writes clean, self-documenting code with comprehensive test coverage. Their automated scraping engine cut our weekly data ingestion overhead by over 80%.",
    author: "David Chen",
    role: "Co-Founder & CTO",
    company: "DevFlow Intelligence",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      next();
    }, 7000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60"
    >
      <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] rounded-full aurora-3 opacity-15 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400 font-mono">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Client Testimonials
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Feedback from technical collaborators, CTOs, and project stakeholders.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-sm relative"
            >
              <Quote
                size={64}
                className="absolute top-6 left-6 text-zinc-200 dark:text-zinc-800/80 -z-0 pointer-events-none"
              />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Rating stars */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-base md:text-xl text-zinc-700 dark:text-zinc-300 italic font-medium leading-relaxed max-w-2xl">
                  "{TESTIMONIALS[current].quote}"
                </p>

                {/* Author info */}
                <div className="mt-8">
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">
                    {TESTIMONIALS[current].author}
                  </h4>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    {TESTIMONIALS[current].role} ·{" "}
                    <span className="text-violet-600 dark:text-violet-400">
                      {TESTIMONIALS[current].company}
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -left-6 md:-left-16 -translate-y-1/2 flex">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm transition"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute top-1/2 -right-6 md:-right-16 -translate-y-1/2 flex">
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx
                  ? "w-8 bg-violet-600 dark:bg-violet-400"
                  : "w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
