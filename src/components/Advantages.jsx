
export const Advantages = () => {
  const items = [
    {icon: './src/assets/icons/coffee-bean.svg', text: 'Своя обжарка зёрен',},
    {icon: './src/assets/icons/coffee-cup.svg', text: '100% арабика',},
    {icon: './src/assets/icons/ruble.svg', text: 'Разумные цены',},
    {icon: './src/assets/icons/quality.svg', text: 'Премиальное качество',},
    {icon: './src/assets/icons/student-cap.svg', text: 'Своя школа бариста',},
    {icon: './src/assets/icons/location.svg', text: 'Большая сеть кофеен',},
  ];

  return (
    <section className="pt-8">
      <h2 className="text-lg font-extrabold uppercase text-[#161616] text-center">Наши преимущества</h2>
      <div className="
        grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-6
        mt-6 px-4
        text-sm sm:text-base text-center">
        {items.map((item, i) => (
          <div 
            key={i}
            className="flex flex-col items-center gap-y-2 text-center">
            <img 
              src={item.icon} 
              alt="icon"
              className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-2" />
              <span className="text-sm md:text-base lg:text-lg lg:font-medium">
                {item.text}
              </span>
          </div>
        ))}
      </div>
    </section>
  )
}