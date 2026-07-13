import { menuNavData } from "@/shared/navigation/model/menuNavData";
import { menuData } from "@/widgets/menu/model/menuData";

import { SectionTitle } from "@/shared/sectionTitle";
import { Navigation } from "@/shared/navigation";
import { MenuCategories } from "./MenuCategories";

export const Menu = ({ isActive }) => {
  return (
    <section id="menu" className="pt-10 lg:pt-20 bg-[#FDFDFD]">
      {/* Menu title */}
      <SectionTitle>Меню кофейни</SectionTitle>
      {/* Menu navigation */}
      <div className="my-auto">
        <Navigation
          className="
            h-10 lg:h-15 w-full
            flex justify-center items-center
            mt-3 sm:mt-6
            bg-[#FFB759]
            "
          variant="menu"
          navItems={menuNavData}
          isActive={isActive}
        />
      </div>
      {/* Menu categories */}
      <MenuCategories data={menuData} />
    </section>
  );
};
