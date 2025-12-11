export const MenuCard = (props) => {
  const {card} = props;

  return (
    <div className="w-[300px] rounded-2xl bg-[#FDFDFD] shadow-[0px_0px_8px_#5B5B5B]/25 mx-auto">
      {/* Title */}
      <h3 className="py-2 text-base font-light text-center">{card.title}</h3>

      {/* Card image */}
      <img
        src={card.image} 
        alt="cup-image"
        className="h-[256px] object-cover" />

      {/* Volume & price */}
      <div className="flex gap-x-2 justify-center p-4">
        {card.volume.map((vol, i) => (
          <button 
            key={i}
            className={
              vol === '550 мл' 
              ? `flex flex-col justify-between items-center gap-y-3
              p-2 border-1 border-[#FFB759] rounded-[10px] relative
              text-sm text-[#5B5B5B]`
              : `flex flex-col justify-between items-center gap-y-3
              p-2 border-1 border-[#E1E1E1] rounded-[10px] relative
              text-sm text-[#5B5B5B]`
            }
          >
            <span 
              className="
                font-semibold text-xs
                after:absolute after:w-[25px] after:h-[1px]
                after:left-[50%] after:top-[50%] after:translate-[-50%]
                after:rounded-2xl after:bg-[#CCCCCC]"
            >{vol}</span>
            <span className="font-bold text-base text-[#5B5B5B]">{card.price[i]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};