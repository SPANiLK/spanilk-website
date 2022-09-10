import HeroSection from "../components/Home/HeroSection";
import WhatWeDo from "../components/Home/WhatWeDoSection";
import OurProjects from "../components/Home/OurProjectsSection";
import Testimony from "../components/Home/TestimonySection.js";
import Blog from "../components/Home/BlogSection.js";
import { useRouter } from "next/dist/client/router";

export default function Home(props) {
  return (
    <>
      <HeroSection />
      <WhatWeDo className="justify-self-center" />
      <OurProjects className="justify-self-center" limit={3} />
      <Testimony className="justify-self-center" />
    </>
  );
}
