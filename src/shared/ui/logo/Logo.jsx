export const Logo = () => {
  return (
    <a href="/">
      {/* Symbol logo - tablet, mobile */}
      <img
        src="src/assets/img/logo-white-symbol.png"
        alt="Pravda Coffee"
        className="w-10 md:w-12 lg:hidden lg:w-14 relative z-100"
        aria-label="Главная страница"
      />
      {/* Fullsized logo - desktop */}
      <img
        src="src/assets/img/logo-white.png"
        alt="Pravda Coffee"
        className="hidden lg:block lg:w-12"
        aria-label="Главная страница"
      />
    </a>
  );
};
