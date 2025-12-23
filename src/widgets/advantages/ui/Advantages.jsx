import { itemsData } from "../model/itemsData";
import { AdvantageItem } from "./AdvantageItem";

export const Advantages = () => {
  return (
    <section className="pt-8 lg:pt-15">
      <h2 className="text-lg lg:text-2xl font-extrabold uppercase text-[#161616] text-center">
        Наши преимущества
      </h2>
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 lg:gap-y-14
          mt-6 lg:mt-10 px-4
          text-sm sm:text-base text-center"
      >
        {itemsData.map((item) => (
          <AdvantageItem key={item.id} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
};
