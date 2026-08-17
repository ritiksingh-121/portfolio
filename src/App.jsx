import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedShowcase from "./components/FeaturedShowcase";
import Services from "./components/Services";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ProjectEstimator from "./components/ProjectEstimator";
import TechStack from "./components/TechStack";
import Guarantees from "./components/Guarantees";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectDetail from "./components/ProjectDetail";
import BookingModal from "./components/BookingModal";

function HomePage({ onOpenBooking }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="relative z-10">
      <Hero onOpenBooking={onOpenBooking} />
      <FeaturedShowcase />
      <Services onOpenBooking={onOpenBooking} />
      <Process />
      <Projects />
      <ProjectEstimator onOpenBooking={onOpenBooking} />
      <TechStack />
      <Guarantees />
      <FAQ />
      <ContactForm />
    </main>
  );
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Navbar onOpenBooking={() => setBookingOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage onOpenBooking={() => setBookingOpen(true)} />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <BackToTop />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}

export default App;
