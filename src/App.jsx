import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ResumeSection from "./components/ResumeSection";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Handles Android hardware back button in Capacitor APK
function AndroidBackHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only register when running inside Capacitor
    if (!window.Capacitor) return;

    const handleBackButton = () => {
      // If we're on the home page, minimize the app instead of exiting
      if (location.pathname === "/") {
        if (window.Capacitor?.Plugins?.App) {
          window.Capacitor.Plugins.App.minimizeApp();
        }
      } else {
        // Navigate back in history
        navigate(-1);
      }
    };

    // Listen to Capacitor's backButton event
    let removeListener;
    if (window.Capacitor?.Plugins?.App) {
      window.Capacitor.Plugins.App.addListener("backButton", handleBackButton)
        .then((handle) => { removeListener = handle; });
    }

    return () => {
      if (removeListener?.remove) removeListener.remove();
    };
  }, [location.pathname, navigate]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <AndroidBackHandler />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <ResumeSection />
      <Footer />
    </div>
  );
}
