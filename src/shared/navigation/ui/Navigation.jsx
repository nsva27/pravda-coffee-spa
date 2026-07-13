import { NavItem } from "./NavItem";

export const Navigation = ({
  navItems = [],
  className,
  variant,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav className={className}>
      <ul className="flex gap-10 justify-center items-center">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            variant={variant}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        ))}
      </ul>
    </nav>
  );
};
