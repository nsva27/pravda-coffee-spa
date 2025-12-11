import { headerNavLink } from "@/app/styles/classes";

export const NavItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.href}
        className={
          item.isChecked
            ? `inline-block relative
              text-xs font-medium md:text-sm lg:text-base text-amber-500
              lg:after:content-[''] lg:after:w-full lg:after:h-[1.5px]
              lg:after:scale-x-0 lg:after:origin-right
              lg:after:absolute lg:after:right-0 lg:after:top-6
              lg:after:transition-transform lg:after:duration-250 ease-in
              lg:after:rounded-2xl lg:after:bg-amber-500
              lg:hover:after:scale-x-100 lg:hover:after:origin-left`
            : headerNavLink
        }
      >
        {item.name}
      </a>
    </li>
  );
};
