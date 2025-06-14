import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Zap, BookOpen, Award, CheckCircle, Star } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import VisionSection from "@/components/VisionSection";
import CapturasDePantallaSection from "@/components/CapturasDePantallaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CapturasDePantallaSection />
      <StatsSection />
      {/* <FeaturesSection /> Sección eliminada */}
      <VisionSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
