import AboutUs from "@/components/AboutUs";
import { BentoGridDemo } from "@/components/BentoGridDemo";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { FeaturesSectionDemo } from "@/components/ui/about-detail";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <AboutUs />
      <FeaturesSectionDemo />
      <BentoGridDemo />
      <section>
        <h4 className="text-center pt-16 pb-8">Blog</h4>
      </section>
    </>
  );
}
