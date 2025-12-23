import { mobileNavLink, navLinkIsChecked } from "@/app/styles/classes";
import { FaTelegram } from "react-icons/fa6";
// import { useEffect } from "react";

export const SlideMobileMenu = ({ isOpen, data }) => {
  // Запретить скролл при открытом бургер-меню через useEffect
  // useEffect(() => ())

  return (
    <div
      className={`
        mobile-menu
        min-h-screen w-screen
        fixed left-0 top-0 z-2
        flex flex-col items-center
        bg-neutral-900
        transform transition-transform duration-700
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Navigation */}
      <nav
        className="
          w-full
          flex justify-center
          mt-30"
      >
        <ul
          className="
            flex flex-col items-center gap-8"
        >
          {data.map((item, id) => (
            <li key={id}>
              <a
                href={item.href}
                className={
                  item.isChecked
                    ? "text-xl text-amber-500 font-medium"
                    : mobileNavLink
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-40 h-px bg-white mt-15"></div>
      {/* Social links */}
      <div className="social-links mt-10">
        <a href="/" target="_blank">
          <FaTelegram className="text-5xl text-white" />
        </a>
      </div>
    </div>
  );
};
