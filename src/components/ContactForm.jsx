import { useState } from "react";
import { Mail, MapPin, Send, MessageSquare, User, AlertCircle, CheckCircle2 } from "lucide-react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("error");
      return;
    }

    const mailtoLink = `mailto:ritikkumarsinghdeo6@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute top-[30%] right-0 w-[45%] h-[40%] rounded-full aurora-1 opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Let's Collaborate.
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Have a project concept or open full-time position? Get in touch.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left panel: details info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 glass shadow-md">
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-6">
                Connect Directly
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900 text-violet-600 dark:text-violet-400 shadow-sm">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email address</h4>
                    <a href="mailto:ritikkumarsinghdeo6@gmail.com" className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-violet-600 transition">
                      ritikkumarsinghdeo6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900 text-cyan-500 shadow-sm">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Location</h4>
                    <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                      India
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-8" />

              {/* Status banner */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Active Freelance Bookings Open
              </div>
            </div>
          </div>

          {/* Right panel: Glass Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div className="relative">
                <label htmlFor="name" className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2 block">Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                    <User size={16} />
                  </span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-5 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition duration-300 font-medium text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2 block">Email</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
                    <Mail size={16} />
                  </span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-5 py-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition duration-300 font-medium text-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="text-xs font-bold uppercase text-zinc-400 tracking-wider mb-2 block">Message</label>
                <div className="relative">
                  <span className="absolute left-4 top-5 text-zinc-400 pointer-events-none">
                    <MessageSquare size={16} />
                  </span>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Describe your vision or inquiry..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full pl-11 pr-5 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition duration-300 resize-none font-medium text-sm"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-bold rounded-2xl hover:bg-violet-600 dark:hover:bg-violet-500 dark:hover:text-white shadow-lg active:scale-[0.98] transition-all duration-300"
              >
                Send Message
                <Send size={16} />
              </button>

              {/* Success / Error Messages */}
              <div className="h-6">
                {status === "success" && (
                  <p className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-bold justify-center">
                    <CheckCircle2 size={14} />
                    Message sent! Direct client redirection initiated.
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400 text-xs font-bold justify-center">
                    <AlertCircle size={14} />
                    Please fill out all fields with a valid email.
                  </p>
                )}
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;
