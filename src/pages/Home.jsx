import Achievements from "@/components/Achievements";
import ContactSection from "@/components/ContactSection";
import ElevateExperience from "@/components/ElevateExperience";
import EnquirySection from "@/components/EnquirySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ITExcellence from "@/components/ITExcellence";
import SolutionSection from "@/components/SolutionSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkTogether from "@/components/WorkTogether";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <ElevateExperience />
      <ITExcellence />
      <SolutionSection />
      <WhyChooseUs />
      <Testimonials />
      <FAQSection />
      {/* <EnquirySection /> */}
      <WorkTogether />
      <ContactSection />
      <Footer />
    </>
  );
}
