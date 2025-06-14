
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const teacherBenefits = [
    "Horarios personalizados y siempre disponibles",
    "Acceso móvil y web en todo momento",
    "Notificaciones de cambios al instante",
    "Sencilla exportación y consulta",
    "Gestión de disponibilidad sincronizada"
  ];

  const adminBenefits = [
    "Reducción drástica de tiempo en tareas administrativas",
    "Eliminación de errores y conflictos de horarios",
    "Centralización de datos y recursos",
    "Estadísticas y reportes de ocupación inmediatos",
    "Integración con procesos digitales existentes"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Beneficios en Tu Día a Día
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Optimiza procesos y facilita la experiencia de docentes y administrativos con acceso multiplataforma y datos centralizados.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Para Docentes</CardTitle>
              <CardDescription className="text-blue-100">
                Consulta y organiza tu actividad académica sin complicaciones
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {teacherBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Para Administradores</CardTitle>
              <CardDescription className="text-green-100">
                Control total, datos seguros y rapidez operativa
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4">
                {adminBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
