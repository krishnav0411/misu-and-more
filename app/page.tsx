import { Hero } from "@/components/sections/hero";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { HowOrderingWorks } from "@/components/sections/how-ordering-works";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FromOurKitchen } from "@/components/sections/from-our-kitchen";
import { HomeScrollOnNavigate } from "@/components/layout/section-scroll";

export default function Home() {
  return (
    <>
      <HomeScrollOnNavigate />
      <Hero />
      <FeaturedCollection />
      <HowOrderingWorks />
      <WhyChooseUs />
      <FromOurKitchen />
    </>
  );
}
