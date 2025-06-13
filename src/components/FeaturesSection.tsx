
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Zap, BookOpen, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Generación Automática",
      description: "Algoritmos inteligentes que crean horarios optimizados en segundos, considerando todas las restricciones y preferencias."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Gestión de Grupos",
      description: "Organiza múltiples grupos, clases y recursos con facilidad. Visualiza conflictos y disponibilidad en tiempo real."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Panel Docente",
      description: "Interfaz dedicada para profesores con vista personalizada de sus horarios, aulas y recursos asignados."
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-600" />,
      title: "Calendario Inteligente",
      description: "Visualización intuitiva con vista diaria, semanal y mensual. Exporta a Google Calendar o Outlook con un clic."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Optimización Temporal",
      description: "Minimiza tiempos muertos y maximiza la eficiencia. Considera desplazamientos entre aulas y descansos necesarios."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Reportes Avanzados",
      description: "Estadísticas detalladas, análisis de ocupación y reportes de eficiencia para tomar mejores decisiones."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Características Poderosas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar horarios de manera profesional y eficiente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
