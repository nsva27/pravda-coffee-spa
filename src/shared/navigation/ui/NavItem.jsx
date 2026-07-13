import clsx from "clsx";

import { navItemStyles } from "../navItemStyles";

export const NavItem = ({ item, variant, activeSection, scrollToSection }) => {
  const hanleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById(item.id);

    if (section) {
      scrollToSection();
    }
  };

  const isCurrentSection = activeSection === item.id;

  return (
    <li>
      <a
        href={item.href}
        onClick={hanleClick}
        className={clsx(
          navItemStyles.base,
          item.isChecked
            ? "text-amber-500"
            : isCurrentSection
              ? navItemStyles.state.active[variant]
              : navItemStyles.variants[variant],
        )}
      >
        <span
          className={clsx(
            item.isChecked && navItemStyles.state.navItemIsChecked,
          )}
        >
          {item.name}
        </span>
      </a>
    </li>
  );
};

// Разобраться с подсветкой пункта меню
// Настроить скролл к определенной высоте секции
// Сделать более плавный скролл
