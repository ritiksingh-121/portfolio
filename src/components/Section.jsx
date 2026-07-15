import { useEffect, useRef } from "react";

function Section({ id, title, children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0f] py-24 fade-in scroll-mt-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h1 className="text-4xl uppercase text-center mb-16 font-bold text-cyan-600 dark:text-cyan-400">
            {title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
}

export default Section;
