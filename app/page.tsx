import AboutUs from "@/components/AboutUs";
import { ImagesSliderDemo } from "@/components/ImagesSliderDemo";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import WhatHaveWeDone from "@/components/WhatHaveWeDone";

export default function Home() {
  return (
    <>
      <ImagesSliderDemo />
      <AboutUs />
      <StickyScrollRevealDemo />
      <WhatHaveWeDone />
    </>
  );
}
