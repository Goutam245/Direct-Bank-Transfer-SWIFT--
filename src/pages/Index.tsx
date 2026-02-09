import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceOverview from "@/components/ServiceOverview";
import KeyBenefits from "@/components/KeyBenefits";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import Eligibility from "@/components/Eligibility";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "SWIFT Transfer Services | Direct Bank Transfer | Prominence Bank";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Send secure international wire transfers through SWIFT network. Global reach, bank-grade verification, and enhanced tracking. Available to Prominence Bank account holders."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Send secure international wire transfers through SWIFT network. Global reach, bank-grade verification, and enhanced tracking. Available to Prominence Bank account holders.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServiceOverview />
        <KeyBenefits />
        <HowItWorks />
        <UseCases />
        <Eligibility />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
