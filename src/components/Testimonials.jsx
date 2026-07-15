import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Ritik's full-stack execution was fantastic. He built our real-time coordinates socket tracking client in a weekend, optimizing DB calls and rendering routes with perfect speed.",
    author: "Alexander Reed",
    role: "Freelance Project Director",
    company: "SaaS Systems Labs",
    rating: 5
  },
  {
    quote: "Incredible attention to UI details and clean modular structures. Ritik is very strong with JavaScript frameworks, bringing fluid styling, neat layouts, and high accessibility compliance.",
    author: "Sarah Jenkins",
    role: "Lead Frontend Engineer",
    company: "Vivid Designs Studio",
    rating: 5
  },
  {
    quote: "A proactive developer who writes neat, self-documenting code. Ritik bridges the gap between client socket integrations and responsive interfaces. Highly recommended.",
    author: "David Chen",
    role: "Senior Open Source Mentor",
    company: "DevFlow Labs",
    rating: 5
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] rounded-full aurora-3 opacity-15 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Client Testimonials
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Feedback from technical collaborators and project stakeholders.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative min-h-[280px] flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-sm relative"
            >
              {/* Quote Mark */}
              <Quote size={64} className="absolute top-6 left-6 text-zinc-200 dark:text-zinc-800/80 -z-0 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Stars Rating */}
                <div className="flex gap-1 mb-6 text-amber-500">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-base md:text-xl text-zinc-700 dark:text-zinc-300 italic font-medium leading-relaxed max-w-2xl">
                  &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
                </p>

                {/* Author Credentials */}
                <div className="mt-8">
                  <h4 className="text-base font-bold text-zinc-950 dark:text-white">
                    {TESTIMONIALS[activeIndex].author}
                  </h4>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                    {TESTIMONIALS[activeIndex].role} &bull; <span className="text-violet-600 dark:text-violet-400">{TESTIMONIALS[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons (Desktop) */}
          <div className="absolute top-1/2 -left-6 md:-left-16 -translate-y-1/2 flex">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:border-violet-500 dark:hover:border-violet-400 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition duration-200 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-6 md:-right-16 -translate-y-1/2 flex">
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:border-violet-500 dark:hover:border-violet-400 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition duration-200 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx ? "w-6 bg-violet-600 dark:bg-violet-400" : "w-2 bg-zinc-300 dark:bg-zinc-800"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
