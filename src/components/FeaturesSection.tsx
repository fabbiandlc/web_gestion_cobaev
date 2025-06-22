
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Zap, BookOpen, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Automatización Eficiente",
      description: "Organiza horarios optimizados en segundos, considerando todas las asignaciones y preferencias desde un solo panel."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Gestión Centralizada",
      description: "Administra grupos y clases fácilmente."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      title: "Panel Docente",
      description: "Interfaz exclusiva para profesores con acceso rápido a horarios, materias y recursos asignados."
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-600" />,
      title: "Calendario Integrado",
      description: "Vista diaria, semanal y mensual. Exporta horarios o consúltalos en tu móvil cuando lo necesites."
    },
    {
      icon: <Clock className="h-8 w-8 text-red-600" />,
      title: "Optimización de Tiempo",
      description: "Minimiza tiempos muertos y facilita la gestión eficiente de las clases. Toda la información, siempre actualizada."
    },
    {
      icon: <Award className="h-8 w-8 text-indigo-600" />,
      title: "Reportes Detallados",
      description: "Acceso a estadísticas y reportes para la toma de mejores decisiones en la administración escolar."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Características Destacadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para simplificar la gestión educativa y mejorar la comunicación
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
