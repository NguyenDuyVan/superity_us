import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import Metrics from "@/components/Metrics";
import OneStop from "@/components/OneStop";
import HowItWorks from "@/components/HowItWorks";
import DtcBrand from "@/components/DtcBrand";
import ExperienceStats from "@/components/ExperienceStats";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Marketplaces from "@/components/Marketplaces";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <Services />
        <Metrics />
        <OneStop />
        <HowItWorks />
        <DtcBrand />
        <ExperienceStats />
        <Testimonials />
        <Faq />
        <Marketplaces />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
