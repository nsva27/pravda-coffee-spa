import { headerNavData } from "@/shared/navigation/model/headerNavData";

import { BurgerMenu } from "./BurgerMenu";
import { Logo } from "@/shared/logo";
import { Navigation } from "@/shared/navigation";
import { CartButton } from "@/features/cart";

export const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header
      className="
        h-12 md:h-14 lg:h-16 w-full
        mx-auto fixed z-1000
        bg-[#0c0c0c]"
    >
      <div
        className="
          h-full
          mx-4 sm:mx-12 md:mx-16 lg:mx-20 px-2 md:px-4 lg:px-6
          flex justify-between items-center"
      >
        <BurgerMenu navItems={headerNavData} />
        <Logo />
        <Navigation
          className="hidden sm:block"
          variant="header"
          navItems={headerNavData}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <CartButton />
      </div>
    </header>
  );
};
