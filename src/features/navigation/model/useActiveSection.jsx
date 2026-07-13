import { useState, useEffect, useRef } from "react";

// Observe section viewport
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const isScrollingRef = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0, rootMargin: "-5% 0px -90% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    isScrollingRef.current = true;
    setActiveSection(id);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  clearTimeout(timeoutRef.current);
  timeoutRef.current = setTimeout(() => {
    isScrollingRef.current = false;
  }, 1000);

  return { activeSection, scrollToSection };
};

// Сделать у галереи lg:pt-20
// Настроить скролл,  понять, как он работает
