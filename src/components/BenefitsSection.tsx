
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const teacherBenefits = [
    "Horarios personalizados automáticamente",
    "Vista clara de todas tus clases",
    "Notificaciones de cambios instantáneas",
    "Exportación a tu calendario personal",
    "Gestión de disponibilidad simplificada"
  ];

  const adminBenefits = [
    "Reducción del 95% en tiempo de planificación",
    "Eliminación de conflictos de horarios",
    "Optimización automática de recursos",
    "Reportes detallados de ocupación",
    "Integración con sistemas existentes"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Beneficios para Todos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones diseñadas específicamente para docentes y administradores educativos
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
              <CardTitle className="text-2xl">Para Docentes</CardTitle>
              <CardDescription className="text-blue-100">
                Simplifica tu día a día académico
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
                Gestión eficiente y profesional
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
