import { Header } from "@/widgets/header";
import { Hero } from "@/widgets/hero";
import { Advantages } from "@/widgets/advantages";
import { Menu } from "@/widgets/menu";
import { About } from "@/widgets/about";
import { Gallery } from "@/widgets/gallery";

import { useActiveSection } from "@/features/navigation";

export const MainPage = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <>
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Hero />
      <Advantages />
      <Menu />
      <About />
      <Gallery />
    </>
  );
};
