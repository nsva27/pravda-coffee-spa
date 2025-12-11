import { mobileNavLink } from "../../../app/styles/classes";
// import { useEffect } from "react";

export const SlideMobileMenu = ({ isOpen, data }) => {
  // Запретить скролл при открытом бургер-меню через useEffect
  // useEffect(() => ())

  return (
    <nav
      className={`
        flex justify-center
        fixed top-0 left-0 h-full w-full z-30 bg-neutral-900
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <ul className="pt-18 space-y-5 text-center">
        {data.map((item, index) => (
          <li key={index}>
            <a href={item.href} className={mobileNavLink}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
