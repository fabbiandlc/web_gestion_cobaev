
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import ProbarAhoraModal from "./ProbarAhoraModal";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
      <div className="relative mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
          <Zap className="mr-2 h-4 w-4" />
          App de gestión educativa
        </Badge>
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Gestión de Horarios Escolar
        </h1>
        <p className="mb-8 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed">
          Organiza y digitaliza tus horarios de clases y docentes en un solo lugar. Accede desde tu móvil: seguro, rápido y centralizado.
        </p>
        <div className="flex flex-col gap-4 justify-center items-center">
          <ProbarAhoraModal buttonClassName="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" />
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          ✨ Accesible desde tu dispositivo Android • Mejor organización, menos esfuerzo
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
