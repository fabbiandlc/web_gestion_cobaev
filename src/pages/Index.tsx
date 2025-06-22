
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import VisionSection from "@/components/VisionSection";
import CapturasDePantallaSection from "@/components/CapturasDePantallaSection";
import { Analytics } from "@vercel/analytics/react";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Analytics />
      <HeroSection />
      <CapturasDePantallaSection />
      <StatsSection />
      {/* <FeaturesSection /> Sección eliminada */}
      <VisionSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
