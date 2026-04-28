import ImageTextSection from "../src/components/ImageTextSection";
import Hero from "../src/components/Hero";
import HoursSection from "../src/components/HoursSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <ImageTextSection
        title="Our Mission"
        description="Every dish we serve is meant to feel bold, comforting, and a little unexpected. I built this menu to bring people together over flavors that stay with you long after the last bite."
        imageSrc="/chef.jpg"
        author="— Chef Marco Alvarez"
      />
      <HoursSection />
    </div>
  );
}
