import "@/envConfig.js";
import HeroSection from "@/components/sections/HeroSection";
import { getHomepageData } from "@/libs/queries";
import CategorySection from "@/components/sections/CategorySection";
import ServiceSection from "@/components/sections/ServiceSection";
import BlogSection from "@/components/sections/BlogSecttion";
import Seo from "@/components/common/SEO";
import ColorSection from "@/components/sections/ColorsSection";
import DealerSection from "@/components/sections/DealerSection";
import AboutSection from "@/components/sections/AboutSection";
import { getAsset } from "@/utils/getAsset";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export async function generateMetadata() {
  const { seo } = await getHomepageData();

  return {
    title: seo.title,
    description: seo.metaDesc,
    openGraph: {
      title: seo.opengraphTitle || seo.title,
      description: seo.opengraphDescription || seo.metaDesc,
      url: seo.opengraphUrl,
      images: [
        {
          url: seo.opengraphImage?.mediaItemUrl || "default.jpg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.metaDesc,
      images: [seo.opengraphImage?.mediaItemUrl],
    },
  };
}

export default async function HomePage() {
  const { homepage, colors, blogs } = await getHomepageData();
  return (
    <>
      <main>
        <Navbar />
        <HeroSection data={homepage.banners} />
        <div className="relative flex flex-col gap-12 pb-12">
          <div className="w-0 md:w-3 lg:w-4 absolute h-full bg-[linear-gradient(to_bottom,#e90000,#ffa94d,#fff176,#a5f59f,#82b1ff)]" />
          <AboutSection
            buttonInfo={homepage.homeAboutButton}
            videoUrl={getAsset(homepage.homeAboutVideoImage)}
            title={homepage.homeAboutTitle}
            subtitle={homepage.homeAboutSubtitle}
            description={homepage.homeAboutDescription}
          />
          <CategorySection
            title={homepage.homeCategoryTitle}
            subtitle={homepage.homeCategorySubtitle}
            categories={homepage.categories}
          />
          <ServiceSection
            title={homepage.homeServicesTitle}
            subtitle={homepage.homeServicesSubtitle}
            categories={homepage.categories}
          />
          <ColorSection
            buttonData={homepage.homeColoursButton}
            subtitle={homepage.homeColoursSubtitle}
            title={homepage.homeColoursTitle}
            colors={colors[0].colours?.nodes || []}
          />
          <DealerSection
            backgroundImage={getAsset(homepage.homeJoinBackgroundImage)}
            title={homepage.homeJoinTitle}
            subtitle={homepage.homeJoinSubtitle}
            description={homepage.homeJoinDescription}
            buttonData={homepage.homeJoinButton}
          />
          <BlogSection
            title={homepage.blogTitle}
            subtitle={homepage.blogSubtitle}
            blogs={blogs}
          />
        </div>
        <Footer backgroundImage={getAsset(homepage.homeJoinBackgroundImage)} />
      </main>
    </>
  );
}
