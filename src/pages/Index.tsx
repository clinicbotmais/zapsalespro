import Header from "@/components/Header";
import PresentationSection from "@/components/PresentationSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <PresentationSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CommunitySection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
