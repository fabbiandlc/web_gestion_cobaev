
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
          <Zap className="mr-2 h-4 w-4" />
          Automatización Inteligente
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Horarios
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Perfectos</span>
          <br />
          En Segundos
        </h1>
        <p className="mb-8 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed">
          Olvídate del caos de coordinar horarios. Nuestra IA crea automáticamente horarios optimizados para docentes y grupos, 
          ahorrándote horas de trabajo manual.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <Calendar className="mr-2 h-5 w-5" />
            Comenzar Gratis
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:bg-gray-50 transition-colors">
            Ver Demo
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          ✨ Prueba gratuita de 14 días • Sin tarjeta de crédito
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
