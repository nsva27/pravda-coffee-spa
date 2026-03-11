import clsx from "clsx";

import { navStyles } from "../styles";

export const NavItem = ({ item, variant, isActive }) => {
  return (
    <li>
      <a
        href={item.href}
        className={clsx(
          navStyles.base,
          item.isChecked ? "text-amber-500" : navStyles.variants[variant],
        )}
      >
        <span
          className={clsx(item.isChecked && navStyles.state.navItemIsChecked)}
        >
          {item.name}
        </span>
      </a>
    </li>
  );
};
