import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

const FAQS = [
  {
    question: "How does your sprint-based delivery process work?",
    answer:
      "We operate in 1 to 2-week agile sprints. Before writing code, we align on explicit milestone deliverables. At the end of every week, you receive a private staging URL and an async video walkthrough demonstrating working software. There is zero black-box development."
  },
  {
    question: "Who owns the source code and intellectual property (IP)?",
    answer:
      "You own 100% of the code, database schemas, Figma assets, and deployment keys from day one. Upon milestone completion, full Git repository permissions and cloud credentials are transferred directly to your organization."
  },
  {
    question: "What is your pricing model and payment structure?",
    answer:
      "We believe in transparent, fixed-price milestone contracts based on clear project specifications, or dedicated weekly engineering retainers for continuous scaling. You know exact timelines and investment upfront with zero surprise billing."
  },
  {
    question: "What happens after the product is launched?",
    answer:
      "Every project includes 30 days of post-launch code warranty and active SLA monitoring at zero extra cost. We fix any edge-case bugs, fine-tune server performance, and provide full technical documentation for your internal team."
  },
  {
    question: "Can you build or integrate custom AI / LLM workflows?",
    answer:
      "Yes. We specialize in building low-latency AI agents, structured web scrapers, real-time voice synthesis pipelines (STT/TTS), and RAG vector database search systems utilizing Groq, OpenAI GPT-4o, and open-source Llama 3 models."
  },
  {
    question: "Do you work with non-technical founders?",
    answer:
      "Absolutely. We translate high-level product visions into robust system architectures, database designs, and user-friendly interfaces, guiding you through cloud hosting, domain setup, and payment gateways step-by-step."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60"
    >
      <div className="absolute top-[30%] left-[10%] w-[35%] h-[35%] rounded-full aurora-1 opacity-15 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400 font-mono flex items-center gap-1.5">
            <HelpCircle size={14} />
            <span>Transparency & Process</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Everything you need to know about our engineering standards, delivery timelines, and client guarantees.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-violet-500/50 bg-white dark:bg-[#15151C] shadow-lg shadow-violet-950/10 ring-1 ring-violet-500/20"
                    : "border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-xl transition-colors shrink-0 ${
                      isOpen
                        ? "bg-violet-600 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-zinc-100 dark:border-zinc-800/60 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Trust Reassurance */}
        <div className="mt-12 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-zinc-950 dark:text-white">
                Have a specific question or custom requirement?
              </h4>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                We sign mutual NDAs before any discovery call to protect your intellectual property.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 dark:hover:text-white transition whitespace-nowrap"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}
