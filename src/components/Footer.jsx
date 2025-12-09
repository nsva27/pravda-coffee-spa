
export const Footer = () => {

  return (
    <footer 
      className="
        w-full sm:h-[80px] md:h-[100px] lg:h-[130px]
        py-2 px-4 sm:px-14 md:px-20 lg:px-26
        font-['Open_Sans', sans-serif]
        flex justify-between items-center bg-neutral-900">
          <div className="flex gap-10 items-center">
            <a href="#">
              {/* small dysplay logo config */}
              <img 
                src="src/assets/img/logo-footer-symbol.png" 
                alt="Pravda Coffee" 
                aria-label="Главная страница"
                className="w-10 sm:hidden lg:w-14 sm:right-7 sm:top-6.5 md:right-15 md:top-9.5 lg:right-20 lg:top-11.5" />
              {/* normal dysplay logo config */}
              <img 
                src="src/assets/img/logo-footer.png" 
                alt="Pravda Coffee" 
                aria-label="Главная страница"
                className="hidden sm:block sm:w-10 md:block md:w-15 lg:block lg:w-20" />
            </a>
            <div className="hidden sm:flex flex-col gap-y-0.5 select-none">
              <span className="text-[#323232] font-bold text-sm">ИП Хатин</span>
              <span className="text-[#323232] font-bold text-sm">&copy; 2019-2025</span>
              <span className="text-[#323232] font-bold text-sm">All Rights Reserved.</span>
            </div> 
          </div>

      <div className="relative flex flex-col md:gap-1.5 lg:gap-3">
        <a
          href="tel:89913402686"
          className="text-xs sm:text-sm md:text-xl lg:text-2xl font-bold text-[#4d4d4d]">8 (991) 340-26-86</a>
        <a href="#" className=" hidden sm:block self-start">
          <span className="
            text-xs md:text-sm lg:text-base
            sm:font-medium md:font-bold text-[#323232]">Мы на карте</span>
          <img
            src="src/assets/icons/location-footer.svg"
            alt="location"
            className="
              sm:w-[16px] md:w-[18px] lg:w-[22px]
              absolute sm:right-7 sm:top-6.5 md:right-15 md:top-9.5 lg:right-20 lg:top-11.5" />
        </a>
      </div>
    </footer>
  )
}