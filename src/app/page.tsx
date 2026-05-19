import { AboutPreview } from "@/components/sections/AboutPreview";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Pricing />
      <Contact />
    </>
  );
}
