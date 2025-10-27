import { menuNavLink } from "../styles/classes";
import { MenuCards } from "./MenuCards";

export const Menu = () => {
  const navData = [
    {name: 'Классика', href: '/'},
    {name: 'Раф', href: '/'},
    {name: 'Сезонное', href: '/'},
    {name: 'Фреши', href: '/'},
  ];

  const navItems =
    navData.map((item, index) => (
      <li
        key={index}>
        <a 
          href={item.href}
          className={menuNavLink}
        >
          {item.name}
        </a>
      </li>
    ));

  return (
    <section className="pt-10 lg:pt-20 bg-[#FDFDFD]">
      <h2 className="text-lg lg:text-2xl font-extrabold uppercase text-[#161616] text-center">Меню кофейни</h2>
      <nav className="h-[40px] lg:h-[60px] w-full flex items-center justify-center mt-3 sm:mt-6 bg-[#FFB759]">
        <ul className="
          flex gap-x-5 sm:gap-x-6 md:gap-x-10">
          {navItems}
        </ul>
      </nav>
      <MenuCards />
    </section>
  )
}