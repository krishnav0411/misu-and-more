import { Hero } from "@/components/sections/hero";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { HowOrderingWorks } from "@/components/sections/how-ordering-works";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { FromOurKitchen } from "@/components/sections/from-our-kitchen";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCollection />
      <HowOrderingWorks />
      <WhyChooseUs />
      <FromOurKitchen />
    </>
  );
}
