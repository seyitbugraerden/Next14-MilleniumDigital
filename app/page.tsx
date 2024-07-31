import AboutUs from "@/components/AboutUs";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import Blog from "@/components/Blog";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { FeaturesSectionDemo } from "@/components/ui/about-detail";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <AboutUs />
      <FeaturesSectionDemo />
      <BentoGridDemo />
      <Blog />
    </>
  );
}
