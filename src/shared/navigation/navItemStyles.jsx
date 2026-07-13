// Navigation item styles
export const navItemStyles = {
  base: `
    lg:px-[10px] lg:py-[10px]
    rounded-4xl transition delay-25 ease-in`,
  variants: {
    header: `
      text-xs md:text-sm lg:text-base text-[#FDFDFD] font-medium 
      lg:hover:bg-amber-500 lg:hover:text-black`,
    menu: `
      text-base font-medium lg:font-semibold
      lg:hover:text-[#5B5B5B] lg:hover:bg-[#FDFDFD] lg:hover:shadow-[inset_0_0_4px_rgba(0,0,0,0.3)]`,
  },
  state: {
    navItemIsChecked: `
      relative
      text-sm lg:text-base text-amber-500 font-medium

      lg:after:content-[''] lg:after:w-full lg:after:h-[2px]
      lg:after:absolute lg:after:right-0 lg:after:top-6
      lg:after:scale-x-0 lg:after:origin-right
      lg:after:transition-transform lg:after:duration-250 ease-in
      lg:after:rounded-2xl lg:after:bg-amber-500
      lg:hover:after:scale-x-100 lg:hover:after:origin-left`,
    active: {
      header: `bg-amber-500 text-black font-medium`,
      menu: `text-[#5B5B5B] bg-[#FDFDFD] shadow-[inset_0_0_4px_rgba(0,0,0,0.3)]`,
    },
  },
};
