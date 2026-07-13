import { MenuCategoriesTitle } from "@/shared/menuCategoriesTitle";
import { MenuCarousel } from "./MenuCarousel";

export const MenuCategories = ({ data }) => {
  return (
    <section className="menu-categories">
      {/* Menu categories list */}
      {data.map((category) => (
        <div key={category.id}>
          <MenuCategoriesTitle>{category.category}</MenuCategoriesTitle>
          <MenuCarousel items={category.items} />
        </div>
      ))}
    </section>
  );
};
