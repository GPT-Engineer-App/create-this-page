import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CustomerLogos from "@/components/CustomerLogos";
import InformationalSection from "@/components/InformationalSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingPlans from "@/components/PricingPlans";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CustomerLogos />
      <InformationalSection />
      <FeaturesSection />
      <PricingPlans />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;