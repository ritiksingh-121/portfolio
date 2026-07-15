import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Mock contributions calendar data (columns = weeks, rows = days)
const WEEKS_COUNT = 24;
const DAYS_COUNT = 7;
const COMMIT_LEVELS = [0, 1, 2, 3, 4]; // 0 is no commits, 4 is maximum commits

// Generate mock data for grid cells
const generateGridData = () => {
  const data = [];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  for (let w = 0; w < WEEKS_COUNT; w++) {
    const week = [];
    for (let d = 0; d < DAYS_COUNT; d++) {
      const level = Math.floor(Math.random() * 5); // 0 to 4
      const monthIdx = Math.floor((w / WEEKS_COUNT) * 12);
      const dayNum = Math.floor(Math.random() * 28) + 1;
      week.push({
        level,
        commits: level === 0 ? "No commits" : `${level * 2} commits`,
        date: `${months[monthIdx]} ${dayNum}, 2025`
      });
    }
    data.push(week);
  }
  return data;
};

const GRID_DATA = generateGridData();

function GithubSection() {
  const [hoveredCell, setHoveredCell] = useState(null);

  const getLevelColor = (level) => {
    switch (level) {
      case 0: return "bg-zinc-100 dark:bg-zinc-800/80";
      case 1: return "bg-emerald-500/20 dark:bg-emerald-950/40";
      case 2: return "bg-emerald-500/40 dark:bg-emerald-800/50";
      case 3: return "bg-emerald-500/70 dark:bg-emerald-600/70";
      case 4: return "bg-emerald-500 dark:bg-emerald-500";
      default: return "bg-zinc-100 dark:bg-zinc-800/80";
    }
  };

  return (
    <section id="github" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[20%] right-[10%] w-[35%] h-[35%] rounded-full aurora-1 opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Open Source
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            GitHub Activity
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Contribution streaks and pinned code repositories.
          </p>
        </div>

        {/* Contribution Graph Panel */}
        <div className="p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 glass shadow-sm mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-5">
            <div className="flex items-center gap-2">
              <FaGithub size={20} className="text-zinc-700 dark:text-zinc-300" />
              <h3 className="font-bold text-zinc-950 dark:text-white text-base">@ritiksingh-121</h3>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <Sparkles size={12} className="text-violet-500" />
                400+ Contributions this year
              </span>
              <span>Streak: 12 days</span>
            </div>
          </div>

          {/* Grid Layout scrollable for small devices */}
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700">
            <div className="min-w-[620px] flex justify-center">
              <div className="grid grid-flow-col gap-1.5">
                {GRID_DATA.map((week, wIdx) => (
                  <div key={wIdx} className="grid grid-rows-7 gap-1.5">
                    {week.map((cell, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredCell(cell)}
                        onMouseLeave={() => setHoveredCell(null)}
                        className={`h-3 w-3 rounded-sm transition-colors duration-200 hover:ring-2 hover:ring-violet-500/50 cursor-pointer ${getLevelColor(cell.level)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Graph footer */}
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-4 px-2">
            <span>Learn how we count contributions</span>
            <div className="flex items-center gap-1">
              <span>Less</span>
              <div className="h-3 w-3 rounded-sm bg-zinc-100 dark:bg-zinc-800/80" />
              <div className="h-3 w-3 rounded-sm bg-emerald-500/20 dark:bg-emerald-950/40" />
              <div className="h-3 w-3 rounded-sm bg-emerald-500/40 dark:bg-emerald-800/50" />
              <div className="h-3 w-3 rounded-sm bg-emerald-500/70 dark:bg-emerald-600/70" />
              <div className="h-3 w-3 rounded-sm bg-emerald-50 dark:bg-emerald-500" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Cell Tooltip */}
          <div className="h-6 mt-4 flex items-center justify-center">
            <AnimatePresence>
              {hoveredCell && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs font-bold text-violet-600 dark:text-violet-400"
                >
                  {hoveredCell.commits} on {hoveredCell.date}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}

export default GithubSection;
