import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Copy, Check, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectScope: "mvp",
    budgetRange: "$5k - $10k",
    message: "",
    honeypot: "" // Anti-spam bot trap
  });

  const [status, setStatus] = useState("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ritikkumarsinghdeo6@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam defense
    if (formData.honeypot) {
      console.warn("Bot detected.");
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      // Async submission handler
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectScope: "mvp",
        budgetRange: "$5k - $10k",
        message: "",
        honeypot: ""
      });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60"
    >
      <div className="absolute top-[30%] right-0 w-[45%] h-[40%] rounded-full aurora-1 opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400 font-mono">
            Direct Lead Intake
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Let's Architect Your Next Product.
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Have a project scope, an MVP to build, or an AI pipeline to engineer? Send us your requirements for an architectural review within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B] shadow-md space-y-6">
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                Direct Channels
              </h3>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      ritikkumarsinghdeo6@gmail.com
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* WhatsApp Fast-Track */}
              <a
                href="https://wa.me/919999999999?text=Hi%20ApexCraft,%20I'd%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Fast-Track WhatsApp
                    </span>
                    <span className="text-xs font-bold text-zinc-900 dark:text-white">
                      Direct Chat with Founder
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-500 font-mono">Online →</span>
              </a>

              {/* Social Channels */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-3">
                  Verified Social Networks:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/ritiksingh-121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 transition"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ritiksingh-121/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 transition"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* NDA Trust Box */}
            <div className="p-5 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B] shadow-sm flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
              <ShieldCheck size={20} className="text-emerald-500 shrink-0" />
              <span>Strict mutual NDA guaranteed. We treat all product inquiries with complete enterprise confidentiality.</span>
            </div>
          </div>

          {/* Right Column: Intake Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B] shadow-xl">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">Project Inquiry Transmitted</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto">
                    Thank you for reaching out. Our lead architect will review your project requirements and respond within 24 hours with architecture recommendations and schedule availability.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2.5 rounded-full text-xs font-bold bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-4">
                    Project Intake Form
                  </h3>

                  {/* Honeypot Bot Trap */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jordan Belfort"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jordan@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                        Scope Category
                      </label>
                      <select
                        name="projectScope"
                        value={formData.projectScope}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs focus:border-violet-500 outline-none"
                      >
                        <option value="mvp">0-to-1 MVP Engineering</option>
                        <option value="saas">Custom SaaS Platform</option>
                        <option value="ai">AI System / LLM Automation</option>
                        <option value="scaling">Architecture & Performance Scaling</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                        Target Budget
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs focus:border-violet-500 outline-none"
                      >
                        <option value="$5k - $10k">$5,000 – $10,000</option>
                        <option value="$10k - $25k">$10,000 – $25,000</option>
                        <option value="$25k+">$25,000+</option>
                        <option value="hourly">Weekly Agile Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block mb-1.5">
                      Project Requirements & Target Deliverables *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe what you are building, target timeline, technical requirements, or existing bottlenecks..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white text-xs placeholder:text-zinc-400 focus:border-violet-500 outline-none resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs">
                      <AlertCircle size={15} />
                      <span>Please ensure all fields are filled out with a valid email.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 px-6 rounded-2xl font-bold text-xs bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <span className="animate-pulse">Transmitting Specs...</span>
                    ) : (
                      <>
                        <span>Submit Project Requirements</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
