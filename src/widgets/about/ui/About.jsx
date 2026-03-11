import { useEffect, useRef } from "react";

import { SectionTitle } from "@/shared/sectionTitle";
import { Container } from "@shared/container";

export const About = ({ setActive }) => {
  const sectionRef = useRef(null);

  // Observe section viewport
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setActive("about");
  //       } else {
  //         setActive(null);
  //       }
  //     },
  //     { threshold: 0.8 },
  //   );

  //   observer.observe(sectionRef.current);

  //   return () => observer.disconnect;
  // }, []);

  return (
    <Container>
      <section
        className="
        h-150 py-8
        flex flex-col items-center gap-y-30
        bg-amber-300"
        ref={sectionRef}
      >
        <SectionTitle>О нас</SectionTitle>
        <h2 className="text-3xl text-amber-950 font-bold text-center">
          "About" section comming soon...
        </h2>
      </section>
    </Container>
  );
};
