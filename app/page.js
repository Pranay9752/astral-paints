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

  const {
    title,
    metaDesc,
    metaKeywords,
    canonical,
    opengraphType,
    opengraphSiteName,
    opengraphTitle,
    opengraphDescription,
    opengraphUrl,
    opengraphImage,
    schema,
  } = seo;

  const ogImage = opengraphImage?.mediaItemUrl;

  return {
    title: `Astral Paints | ${title}`,
    description: metaDesc || "",
    keywords: metaKeywords || "",
    icons: {
      icon: "/astral-fav-icon.png", 
    },
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: opengraphType || "website",
      siteName: opengraphSiteName || "",
      title: opengraphTitle || title,
      description: opengraphDescription || metaDesc,
      url: opengraphUrl || canonical,
      images: ogImage ? [{ url: ogImage, alt: title }] : [],
    },
    twitter: {
      title: opengraphTitle || title,
      description: opengraphDescription || metaDesc,
      images: ogImage ? [ogImage] : [],
    },
    other: {
      ...(schema?.raw && { "application/ld+json": schema.raw }),
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
          <div className="w-0 md:w-3 lg:w-4 absolute h-full bg-[linear-gradient(to_bottom,#c90100,#f08213,#e7db3d,#03a23f,#00bddb)]" />
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
