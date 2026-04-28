import ImageTextSection from "../src/components/ImageTextSection";
import Navbar from "../src/components/nav"
import Hero from '../src/components/Hero';

export default function Home() {
  return (
    <div>
      <ImageTextSection
        title="Our Story"
        description="Hot Stuff Dining brings bold flavors and late-night comfort food."
        imageSrc="/../src/assets/chef.jpg"
      />
      <Navbar/>
      <Hero />
    </div>
  );
}