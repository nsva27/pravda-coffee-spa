import { itemsData } from "@/entities/advantageItem/model/itemsData";
import { AdvantageItem } from "@/entities/advantageItem";
import { Container } from "@/shared/container";
import { SectionTitle } from "@/shared/sectionTitle";

export const Advantages = () => {
  return (
    <Container>
      <section
        className="
          py-8 lg:py-15
          flex flex-col gap-8 md:gap-10"
      >
        <SectionTitle>Наши преимущества</SectionTitle>
        <div
          className="
            grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6 lg:gap-y-14
            text-sm sm:text-base text-center"
        >
          {itemsData.map((item) => (
            <AdvantageItem key={item.id} icon={item.icon} text={item.text} />
          ))}
        </div>
      </section>
    </Container>
  );
};
