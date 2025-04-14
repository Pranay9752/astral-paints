import { ColorCard } from "../common/cards/ColorCard";
import SectionLayout from "../layouts/SectionLayout";



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
