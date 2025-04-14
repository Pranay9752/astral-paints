

export const ColorCard = ({ title, colourInfo }) => {
    return (
      <div
        className={`flex group flex-col bg-white items-center justify-between rounded-2xl gap-1 py-2 hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)] transition-all duration-300 `}
      >
        <span className="text-xs font-semibold text-center text-transparent group-hover:text-gray-800 transition-all duration-100 ease-in py-1">
          Astral Paints
        </span>
        <div
          className="p-2 w-full"
          style={{
            backgroundColor: colourInfo.selectColor,
          }}
        >
          <div
            className={`container w-full aspect-square  border-1 bg-transparent border-white`}
          />
        </div>
        <div className="mt-2 text-center">
          <p className=" font-semibold mb-1">{title}</p>
          <p className="text-sm text-gray-500">{colourInfo.selectColor}</p>
        </div>
      </div>
    );
  };