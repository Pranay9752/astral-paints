import SectionLayout from "../layouts/SectionLayout";

export default function CategorySection({ categories, title, subtitle }) {
    // Make sure we have categories data
    if (!categories || categories.length < 5) {
        return <div>Loading categories...</div>;
    }

    // Separate the first category for the large feature card
    const featuredCategory = categories[0];
    const remainingCategories = categories.slice(1);

    return (

        <SectionLayout title={title} subtitle={subtitle} classname={'bg-gradient-to-r from-orange-400'}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="col-span-2 row-span-2 relative">
                    <div className="relative overflow-hidden h-full ">
                        <img
                            src={featuredCategory.image.node.sourceUrl}
                            alt={featuredCategory.title}
                            className="w-full h-full object-cover hover:scale-105 transition-all duration-400 ease-in-out"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#c18640] to-[#dd934a] flex justify-between p-6">
                            <h2 className="text-white text-2xl font-bold mb-2">{featuredCategory.title}</h2>
                            <a href={featuredCategory.link} className="bg-white  text-[#dd954b] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition inline-block">Read More</a>
                        </div>
                    </div>
                </div>

                {remainingCategories.map((category, index) => (
                    <a href={category.link} key={index} className="block">
                        <div className="relative overflow-hidden">
                            <img
                                src={category.image.node.sourceUrl}
                                alt={category.title}
                                className="w-full h-full object-cover hover:scale-105 transition-all duration-400 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-transparent p-4">
                                <h2 className="text-white text-xl font-bold">{category.title}</h2>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </SectionLayout>
    );
}

// Example usage:
// <PaintCategoryShowcase categories={categoriesFromApi} />