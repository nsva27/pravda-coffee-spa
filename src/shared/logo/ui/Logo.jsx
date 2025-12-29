export const Logo = () => {
  return (
    <a href="/">
      {/* Symbol logo - tablet, mobile */}
      <img
        src="src/assets/img/logo-white-symbol.png"
        alt="Pravda Coffee"
        className="w-12 md:w-14 lg:hidden lg:w-16 relative z-100"
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
