export const headerNavLink = `
  lg:px-[10px] lg:pt-[6px] lg:pb-[9px]
  text-xs font-medium md:text-sm lg:text-base
  lg:hover:bg-amber-500 lg:hover:text-black
  lg:rounded-4xl transition delay-25 ease-in`;

export const mobileNavLink = `
  text-xl text-white tracking-widest
  font-['Open_Sans', sans-serif] font-medium`;

export const menuNavLink = `
  lg:px-[10px] lg:pt-[6px] lg:pb-[9px]
  text-sm sm:text-base lg:font-medium
  lg:hover:text-[#5B5B5B] lg:hover:bg-[#FDFDFD] lg:hover:shadow-[inset_0_0_4px_rgba(0,0,0,0.3)]
  lg:rounded-4xl transition delay-25 ease-in`;

export const navLinkIsChecked = `
  relative
  text-sm lg:text-base text-amber-500 font-medium

  lg:after:content-[''] lg:after:w-full lg:after:h-[1.5px]
  lg:after:scale-x-0 lg:after:origin-right
  lg:after:absolute lg:after:right-0 lg:after:top-6
  lg:after:transition-transform lg:after:duration-250 ease-in
  lg:after:rounded-2xl lg:after:bg-amber-500
  lg:hover:after:scale-x-100 lg:hover:after:origin-left`;
