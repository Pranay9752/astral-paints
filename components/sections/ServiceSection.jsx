import ServiceCard from "../common/cards/ServiceCard";
import SectionLayout from "../layouts/SectionLayout";

export default function ServiceSection({ categories, title, subtitle }) {

  const services = [
    {
      id: 1,
      image: "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/07/image-2.jpg",
      title: "Wall Painting",
      description: "Lorem ipsum dolor sit amet consectetur.",
      gradientColor: "yellow",
      href: "/services/wall-painting",
    },
    {
      id: 2,
      image: "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/07/image-3.jpg",
      title: "Water Solution",
      description: "Lorem ipsum dolor sit amet consectetur.",
      gradientColor: "orange",
      href: "/services/water-solution",
    },
    {
      id: 3,
      image: "https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/07/image-4.jpg",
      title: "Painting",
      description: "Lorem ipsum dolor sit amet consectetur.",
      gradientColor: "green",
      href: "/services/painting",
    },
  ];

  return (
    <SectionLayout
      id={'services'}
      title={title}
      subtitle={subtitle}
      stroke="yellow"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            gradientColor={service.gradientColor}
            href={service.href}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
