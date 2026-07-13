import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export const MenuCategoriesTitle = ({ children }: Props) => {
  return (
    <h3 className="mt-8 md:mt-10 text-5xl sm:text-6xl font-extrabold uppercase text-[#E1E1E1]/45 text-center">
      {children}
    </h3>
  );
};
