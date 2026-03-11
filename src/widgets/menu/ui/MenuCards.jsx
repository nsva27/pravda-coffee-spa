import { MenuCarousel } from "./MenuCarousel";

export const MenuCards = () => {
  const classicMenuData = [
    {
      title: "Капучино",
      image: "./src/assets/img/menu/classic/cappuccino.jpg",
      volume: ["250 мл", "350 мл", "450 мл", "550 мл"],
      price: ["170 ₽", "220 ₽", "270 ₽", "300 ₽"],
    },
    {
      title: "Латте",
      image: "./src/assets/img/menu/classic/latte.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["220 ₽", "250 ₽", "270 ₽"],
    },
    {
      title: "Американо",
      image: "./src/assets/img/menu/classic/americano.jpg",
      volume: ["250 мл", "350 мл", "450 мл", "550 мл"],
      price: ["170 ₽", "220 ₽", "270 ₽", "300 ₽"],
    },
    {
      title: "Флэт уайт",
      image: "./src/assets/img/menu/classic/flat-white.jpg",
      volume: ["250 мл"],
      price: ["170 ₽"],
    },
    {
      title: "Эспрессо",
      image: "./src/assets/img/menu/classic/espresso.jpg",
      volume: ["250 мл"],
      price: ["170 ₽"],
    },
    {
      title: "Какао",
      image: "./src/assets/img/menu/classic/cacao.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["220 ₽", "270 ₽", "300 ₽"],
    },
    {
      title: "Чай",
      image: "./src/assets/img/menu/classic/tea.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["170 ₽", "220 ₽", "270 ₽"],
    },
    {
      title: "Матча",
      image: "./src/assets/img/menu/classic/matcha.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "300 ₽", "320 ₽"],
    },
    {
      title: "Солёная карамель",
      image: "./src/assets/img/menu/classic/salt-caramel.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "300 ₽", "320 ₽"],
    },
  ];

  const rafMenuData = [
    {
      title: "Классический раф",
      image: "./src/assets/img/menu/raf/raf-classic.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
    {
      title: "Малиновый раф",
      image: "./src/assets/img/menu/raf/raf-raspberry.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
    {
      title: "Апельсиновый раф",
      image: "./src/assets/img/menu/raf/raf-orange.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
  ];

  const seasonMenuData = [
    {
      title: "Капучино Брауни",
      image: "./src/assets/img/menu/season/cappuccino-brauny.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
    {
      title: "Капучино Персиковое облако",
      image: "./src/assets/img/menu/season/cappuccino-peach.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
    {
      title: "Капучино Малина",
      image: "./src/assets/img/menu/season/cappuccino-raspberry.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
    {
      title: "Тропический латте",
      image: "./src/assets/img/menu/season/latte-tropic.jpg",
      volume: ["350 мл", "450 мл", "550 мл"],
      price: ["270 ₽", "320 ₽", "370 ₽"],
    },
  ];

  const freshMenuData = [
    {
      title: "Апельсиновый фреш",
      image: "./src/assets/img/menu/fresh/fresh-orange.jpg",
      volume: ["300 мл", "500 мл"],
      price: ["400 ₽", "600 ₽"],
    },
    {
      title: "Грейпфрутовый фреш",
      image: "./src/assets/img/menu/fresh/fresh-grapefruit.jpg",
      volume: ["300 мл", "500 мл"],
      price: ["400 ₽", "600 ₽"],
    },
    {
      title: "Фреш микс",
      image: "./src/assets/img/menu/fresh/fresh-mix.jpg",
      volume: ["300 мл", "500 мл"],
      price: ["400 ₽", "600 ₽"],
    },
  ];

  return (
    <section>
      <h3 className="mt-8 md:mt-10 text-5xl sm:text-6xl font-extrabold uppercase text-[#E1E1E1]/45 text-center">
        Классика
      </h3>
      <MenuCarousel data={classicMenuData} />
      <h3 className="mt-8 md:mt-10 text-5xl sm:text-6xl font-extrabold uppercase text-[#E1E1E1]/45 text-center">
        Раф
      </h3>
      <MenuCarousel data={rafMenuData} />
      <h3 className="mt-8 md:mt-10 text-5xl sm:text-6xl font-extrabold uppercase text-[#E1E1E1]/45 text-center">
        Сезонное
      </h3>
      <MenuCarousel data={seasonMenuData} />
      <h3 className="mt-8 md:mt-10 text-5xl sm:text-6xl font-extrabold uppercase text-[#E1E1E1]/45 text-center">
        Фреши
      </h3>
      <MenuCarousel data={freshMenuData} />
    </section>
  );
};
