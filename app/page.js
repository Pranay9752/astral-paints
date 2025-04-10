import '@/envConfig.js'
import HeroSection from "@/components/sections/HeroSection";
import { getHomepageData } from "@/libs/queries";

export default async function HomePage() {
  const homepage = await getHomepageData();
  console.log('homepage: ', homepage);

  return (
    <main>
      <HeroSection data={homepage.banners} />
    </main>
  );
}
