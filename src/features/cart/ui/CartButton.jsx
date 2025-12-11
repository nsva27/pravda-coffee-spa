import { FaShoppingBasket } from "react-icons/fa";

export const CartButton = () => {
  return (
    <button type="button" aria-label="Открыть корзину">
      <FaShoppingBasket className=" text-white w-6 h-6 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
    </button>
  );
};
