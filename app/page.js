import '@/envConfig.js'
import HeroSection from "@/components/sections/HeroSection";
import { getHomepageData } from "@/libs/queries";
import CategorySection from '@/components/sections/CategorySection';
import ServiceSection from '@/components/sections/ServiceSection';
import BlogSection from '@/components/sections/BlogSecttion';

export default async function HomePage() {
  const homepage = await getHomepageData();
  console.log('homepage: ', homepage);

  return (
    <main>
      <HeroSection data={homepage.banners} />
      <CategorySection title={homepage.homeCategoryTitle} subtitle={homepage.homeCategorySubtitle} categories={homepage.categories} />
      <ServiceSection title={homepage.homeServicesTitle} subtitle={homepage.homeServicesSubtitle} categories={homepage.categories} />
      <BlogSection />
    </main>
  );
}
