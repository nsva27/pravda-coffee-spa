import { BurgerMenu } from "./BurgerMenu";
import { navData } from "@entities/navigation/model/navData";
import { Logo } from "@shared/ui/logo/Logo";
import { Navigation } from "@entities/navigation/ui/Navigation";
import { CartButton } from "@features/cart/ui/CartButton";

export const Header = () => {
  return (
    <header
      className="
        h-10 md:h-14 lg:h-16 w-full mx-auto fixed z-1000
        font-['Open_Sans', sans-serif] bg-[#0c0c0c]"
    >
      <div
        className="
          h-full mx-4 sm:mx-12 md:mx-16 lg:mx-20 px-2 md:px-4 lg:px-6
          flex justify-between items-center"
      >
        <BurgerMenu data={navData} />
        <Logo />
        <Navigation />
        <CartButton />
      </div>
    </header>
  );
};
