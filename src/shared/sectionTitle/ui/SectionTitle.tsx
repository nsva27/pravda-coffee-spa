import clsx from "clsx";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const baseClasses = `
  text-lg lg:text-2xl
  text-[#161616] text-center
  font-extrabold uppercase`;

export const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return <h2 className={clsx(baseClasses, className)}>{children}</h2>;
};
