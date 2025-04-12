import SectionLayout from "../layouts/SectionLayout";

const ColorCard = ({ title, colourInfo }) => {
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

export default function ColorSection({ colors, title, subtitle, buttonData }) {
  return (
    <SectionLayout
      title={title}
      subtitle={subtitle}
      id={'colours'}
      stroke="green"
      buttonData={{...buttonData, className:"border border-[#58b978] text-[#58b978] px-3 py-2 md:px-6 md:py-4 whitespace-nowrap text-xs md:text-sm rounded-full hover:bg-[#58b978] hover:text-white transition "}}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 ">
        {colors.map((color, idx) => (
          <ColorCard key={color.slug} {...color} />
        ))}
      </div>
    </SectionLayout>
  );
}
