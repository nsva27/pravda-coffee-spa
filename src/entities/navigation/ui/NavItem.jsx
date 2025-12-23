import { headerNavLink, navLinkIsChecked } from "@/app/styles/classes";

export const NavItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.href}
        className={item.isChecked ? navLinkIsChecked : headerNavLink}
      >
        {item.name}
      </a>
    </li>
  );
};
