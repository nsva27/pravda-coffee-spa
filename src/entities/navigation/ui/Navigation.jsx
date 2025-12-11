import { NavItem } from "./NavItem";
import { navData } from "../model/navData";

export const Navigation = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-10 text-white">
        {navData.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
};
