import Hero from "@/components/home/Hero";
import SeriesShelf from "@/components/home/SeriesShelf";
import TopicIndex from "@/components/home/TopicIndex";
import Colophon from "@/components/home/Colophon";
import BackCover from "@/components/home/BackCover";

export default function Home() {
  return (
    // The back cover runs straight into the footer, so cancel main's bottom space.
    <div className="-mb-28">
      <Hero />
      <SeriesShelf />
      <TopicIndex />
      <Colophon />
      <BackCover />
    </div>
  );
}
