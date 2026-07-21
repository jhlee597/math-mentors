import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import FeaturedResources from "@/components/home/FeaturedResources";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import JoinCta from "@/components/home/JoinCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedResources />
      <Stats />
      <Testimonials />
      <JoinCta />
    </>
  );
}
