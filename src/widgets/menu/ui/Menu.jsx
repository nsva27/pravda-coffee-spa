import { menuNavData } from "@/entities/navigation/model/menuNavData";

import { SectionTitle } from "@/shared/sectionTitle";
import { Navigation } from "@/entities/navigation";
// import { MenuCards } from "./MenuCards";

// import { menuNavLink } from "../../../app/styles/classes";

export const Menu = ({ isActive }) => {
  return (
    <section className="pt-10 lg:pt-20 bg-[#FDFDFD]">
      <SectionTitle>Меню кофейни</SectionTitle>

      <div className="my-auto">
        <Navigation
          className="
            h-10 lg:h-15 w-full
            flex justify-center items-center
            mt-3 sm:mt-6
            bg-amber-500
            "
          variant="menu"
          navItems={menuNavData}
          isActive={isActive}
        />
      </div>

      {/* <MenuCards /> */}
    </section>
  );
};
