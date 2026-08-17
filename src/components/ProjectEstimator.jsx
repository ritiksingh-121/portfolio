import React, { useState } from "react";
import { Calculator, ArrowRight, Check, Sparkles, Clock, DollarSign } from "lucide-react";

export default function ProjectEstimator({ onOpenBooking }) {
  const [projectType, setProjectType] = useState("mvp");
  const [platforms, setPlatforms] = useState(["web"]);
  const [selectedFeatures, setSelectedFeatures] = useState(["auth", "database", "payments"]);
  const [speed, setSpeed] = useState("standard");
  const [includeAI, setIncludeAI] = useState(true);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const togglePlatform = (id) => {
    if (platforms.includes(id)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter((p) => p !== id));
      }
    } else {
      setPlatforms([...platforms, id]);
    }
  };

  const calculateEstimate = () => {
    let basePrice = 4500;
    let baseWeeks = 4;

    if (projectType === "saas") {
      basePrice = 7500;
      baseWeeks = 6;
    } else if (projectType === "ai") {
      basePrice = 6000;
      baseWeeks = 5;
    } else if (projectType === "fullstack") {
      basePrice = 9000;
      baseWeeks = 8;
    }

    const featureCost = selectedFeatures.length * 800;
    const featureWeeks = Math.floor(selectedFeatures.length / 2);

    const aiCost = includeAI ? 1800 : 0;
    const aiWeeks = includeAI ? 1 : 0;

    const platformMultiplier = platforms.length > 1 ? 1.35 : 1;

    let totalPrice = Math.round((basePrice + featureCost + aiCost) * platformMultiplier);
    let totalWeeks = baseWeeks + featureWeeks + aiWeeks;

    if (speed === "express") {
      totalPrice = Math.round(totalPrice * 1.25);
      totalWeeks = Math.max(3, Math.round(totalWeeks * 0.7));
    }

    return {
      priceMin: Math.round(totalPrice * 0.9),
      priceMax: Math.round(totalPrice * 1.15),
      weeksMin: Math.max(3, totalWeeks - 1),
      weeksMax: totalWeeks + 1
    };
  };

  const estimate = calculateEstimate();

  const featureOptions = [
    { id: "auth", label: "Auth & RBAC Roles", cost: "+$800" },
    { id: "database", label: "Relational / NoSQL Schemas", cost: "+$800" },
    { id: "payments", label: "Stripe Billing & Subscriptions", cost: "+$800" },
    { id: "realtime", label: "Live WebSockets & Notifications", cost: "+$800" },
    { id: "analytics", label: "Custom Telemetry & Metrics", cost: "+$800" },
    { id: "cms", label: "Admin Portal & Content CMS", cost: "+$800" },
    { id: "api", label: "Public Developer REST API", cost: "+$800" },
    { id: "cicd", label: "Automated CI/CD & Cloud Infra", cost: "+$800" }
  ];

  return (
    <section id="estimator" className="relative py-28 border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 overflow-hidden">
      <div className="absolute top-[30%] right-[10%] w-[40%] h-[40%] rounded-full aurora-2 opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-violet-600 dark:text-violet-400 font-bold">
            Transparent Pricing Engine
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white mt-3 tracking-tight">
            Interactive Project Scope & Cost Calculator
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
            Configure your technical requirements below to generate an instant timeline and ballpark budget estimate for your project.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm">
            {/* Step 1: Project Type */}
            <div>
              <label className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider block mb-3">
                1. Project Architecture Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: "mvp", label: "Startup MVP", desc: "0-to-1 Launch" },
                  { id: "saas", label: "B2B SaaS", desc: "Multi-Tenant" },
                  { id: "ai", label: "AI Workflow", desc: "LLM & Scraping" },
                  { id: "fullstack", label: "Custom App", desc: "Complex System" }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all duration-200 ${
                      projectType === type.id
                        ? "bg-violet-600/10 dark:bg-violet-600/20 border-violet-500 text-violet-600 dark:text-violet-300 font-bold shadow-sm"
                        : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <span className="text-xs font-bold block">{type.label}</span>
                    <span className="text-[10px] text-zinc-400 font-mono mt-0.5 block">{type.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Platform */}
            <div>
              <label className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider block mb-3">
                2. Target Platforms
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "web", label: "Responsive Web" },
                  { id: "pwa", label: "PWA / Hybrid" },
                  { id: "api", label: "Backend API Only" }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => togglePlatform(p.id)}
                    className={`p-3 rounded-2xl text-left border text-xs font-medium transition-all duration-200 ${
                      platforms.includes(p.id)
                        ? "bg-violet-600/10 dark:bg-violet-600/20 border-violet-500 text-violet-600 dark:text-violet-300 font-bold"
                        : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Feature Modules */}
            <div>
              <label className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider block mb-3">
                3. Feature Modules & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {featureOptions.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`px-4 py-3 rounded-xl text-left border flex items-center justify-between text-xs transition-all duration-200 ${
                        isSelected
                          ? "bg-violet-600/10 dark:bg-violet-600/20 border-violet-500 text-violet-600 dark:text-violet-300 font-bold"
                          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isSelected
                              ? "bg-violet-600 border-violet-600 text-white"
                              : "border-zinc-400 dark:border-zinc-600"
                          }`}
                        >
                          {isSelected && <Check size={12} />}
                        </div>
                        <span>{feat.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400">{feat.cost}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: AI & Timeline Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <button
                type="button"
                onClick={() => setIncludeAI(!includeAI)}
                className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all duration-200 ${
                  includeAI
                    ? "bg-emerald-500/10 dark:bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-300 font-bold"
                    : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <Sparkles size={14} className="text-cyan-500" />
                    <span>Include AI / LLM Workflow</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 mt-1 block font-normal">
                    Groq, OpenAI, RAG or custom scrapers
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-500">+$1.8k</span>
              </button>

              <button
                type="button"
                onClick={() => setSpeed(speed === "standard" ? "express" : "standard")}
                className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all duration-200 ${
                  speed === "express"
                    ? "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-300 font-bold"
                    : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                }`}
              >
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-xs">
                    <Clock size={14} className="text-amber-500" />
                    <span>Express Sprint Delivery</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 mt-1 block font-normal">
                    Priority capacity (+25% speedup)
                  </span>
                </div>
                <span className="text-[10px] font-mono text-amber-500">+25%</span>
              </button>
            </div>
          </div>

          {/* Results Summary Column (5 Cols) */}
          <div className="lg:col-span-5 p-8 rounded-3xl sticky top-28 border border-violet-500/40 bg-white dark:bg-[#18181B] shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Calculator size={20} className="text-violet-600 dark:text-violet-400" />
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white">Estimated Project Scope</h3>
            </div>

            {/* Price Range Box */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6 text-center">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                Estimated Investment
              </span>
              <div className="flex items-center justify-center gap-1 text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
                <DollarSign size={28} className="text-emerald-500 -mr-1" />
                <span>{estimate.priceMin.toLocaleString()}</span>
                <span className="text-zinc-400 text-2xl font-normal mx-1">–</span>
                <span>${estimate.priceMax.toLocaleString()}</span>
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-2 block">
                Fixed-price milestone contract with full code ownership
              </span>
            </div>

            {/* Timeline Range */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 mb-6">
              <div className="flex items-center gap-2.5">
                <Clock size={18} className="text-cyan-500" />
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Delivery Timeline</span>
              </div>
              <span className="font-mono text-sm font-bold text-zinc-950 dark:text-white">
                {estimate.weeksMin} – {estimate.weeksMax} Weeks
              </span>
            </div>

            {/* Included in estimate */}
            <div className="space-y-2 mb-8">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">
                Included in Every Sprint:
              </span>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Check size={14} className="text-emerald-500" />
                <span>100% Full IP & Source Repository Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Check size={14} className="text-emerald-500" />
                <span>Weekly Working Staging Demos & Syncs</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Check size={14} className="text-emerald-500" />
                <span>30-Day Post-Launch Code Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                <Check size={14} className="text-emerald-500" />
                <span>Mutual NDA & Enterprise Confidentiality</span>
              </div>
            </div>

            {/* Booking CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full py-4 px-6 rounded-2xl font-bold text-xs bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Lock In Estimate on Discovery Call</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
