import { FaShoppingBasket } from "react-icons/fa";
import { BurgerMenu } from "./BurgerMenu";
import { navLink } from "../styles/classes";

export const Header = () => {
  const navData = [
    {name: 'Меню', href: '/'},
    {name: 'Галерея', href: '/'},
    {name: 'О нас', href: '/'},
    {name: 'Контакты', href: '/'},
    {name: 'Акции', href: '/', isChecked: true},
  ];

  const navItems = 
    navData.map((item, index) => (
      <li key={index}>
        <a href={item.href}
            className={
            item.isChecked 
              ? `inline-block relative
                text-xs font-medium md:text-sm lg:text-base text-amber-500
                lg:after:content-[''] lg:after:w-[100%] lg:after:h-[1.5px]
                lg:after:scale-x-0 lg:after:origin-right
                lg:after:absolute lg:after:right-0 lg:after:top-6
                lg:after:transition-transform lg:after:duration-250 ease-in
                lg:after:rounded-2xl lg:after:bg-amber-500
                lg:hover:after:scale-x-100 lg:hover:after:origin-left`
              : navLink}>
          {item.name}
        </a>
      </li>
    ));

  return (
    <header className="
      h-10 md:h-14 lg:h-16 mx-auto relative
      font-['Open_Sans', sans-serif] bg-neutral-900">
      <div className="
        h-full mx-4 sm:mx-12 px-2 md:mx-16 md:px-4 lg:mx-20 lg:px-6
        flex justify-between items-center">
      <BurgerMenu data={navData} />
        <a href="/">
          <img 
            src="src/assets/img/logo-white-symbol.png" 
            alt="Pravda Coffee" 
            className="w-10 md:w-12 lg:hidden lg:w-14 relative z-100"
            aria-label="Главная страница" />

          <img 
            src="src/assets/img/logo-white.png" 
            alt="Pravda Coffee" 
            className="hidden lg:block lg:w-12"
            aria-label="Главная страница" />
        </a>

        <nav className="hidden sm:block">
          <ul className="flex  gap-10 text-white">
            {navItems}
          </ul>
        </nav>

        <button type="button" aria-label="Открыть корзину">
          <FaShoppingBasket className=" text-white w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
      </div>
    </header>
  )
}