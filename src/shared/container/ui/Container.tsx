import clsx from "clsx";
// Задачи на сегодня:
// 1. Сделать контейнер и внедрить его во все виджеты
// 2. Запушить изменения, слить ветку advantages с главной (узнать можно ли уже)
// 3. Разобраться с стилями в classes
const baseClasses = `
  w-full max-w-7xl
  mx-auto px-4`;

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(baseClasses, className)}>{children}</div>;
};
