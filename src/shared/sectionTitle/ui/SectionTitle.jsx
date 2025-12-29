import clsx from "clsx";

const baseClases = `
  text-lg lg:text-2xl
  text-[#161616] text-center
  font-extrabold uppercase`;

export const SectionTitle = ({ children, className }) => {
  return <h2 className={clsx(baseClases, className)}>{children}</h2>;
};
