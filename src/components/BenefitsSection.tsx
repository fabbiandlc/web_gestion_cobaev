
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
</lov_write>

<lov-write file_path="src/components/VisionSection.tsx">
import { CalendarCheck, Users, ShieldCheck, BarChart3, RefreshCcw } from "lucide-react";

const items = [
  {
    icon: <CalendarCheck className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Gestión Centralizada y Eficiente",
    description:
      "Administra horarios de docentes, asigna materias y grupos, y genera estadísticas en tiempo real en una única plataforma digital accesible. Olvídate de papeles y archivos dispersos: todo está centralizado y disponible desde cualquier lugar."
  },
  {
    icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
    title: "Beneficio para Toda la Comunidad",
    description:
      "Administrativos, docentes, estudiantes y padres pueden consultar horarios o asignaciones al instante, evitando superposiciones y asegurando una distribución justa de las clases."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Panel de Administración Ágil",
    description:
      "Actualiza información de docentes, materias y grupos en minutos con herramientas intuitivas, optimizando flujos de trabajo y tiempos en tareas repetitivas."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Seguridad y Privacidad",
    description:
      "Implementa medidas robustas para proteger información sensible y cumplir normativas, brindando confianza a toda la comunidad educativa."
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Copia de Seguridad Automática",
    description:
      "Las copias automáticas garantizan la integridad y disponibilidad de la información ante cualquier imprevisto, reforzando la fiabilidad de tu escuela."
  }
];

const VisionSection = () => (
  <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Visión General
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Una solución multiplataforma para transformar la gestión académica. Diseñada para administrativos, docentes, estudiantes y familias conectados y organizados.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/80 rounded-xl shadow-lg p-8 hover-scale animate-fade-in">
            <div className="flex flex-col items-center mb-4">
              {item.icon}
              <h3 className="text-xl font-semibold text-foreground text-center">{item.title}</h3>
            </div>
            <p className="text-base text-muted-foreground text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
</lov_write>

<lov-write file_path="src/components/CTASection.tsx">
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          ¿Listo para Modernizar la Gestión Escolar?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Únete a instituciones educativas que ya gestionan y consultan sus horarios desde cualquier dispositivo. Simplifica, centraliza y lleva tu administración escolar al siguiente nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Calendar className="mr-2 h-5 w-5" />
            Probar la App
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300">
            Hablar con Ventas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Acceso inmediato</div>
            <div className="text-sm">Disponible en móvil y web</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Sin instalación</div>
            <div className="text-sm">Solo inicia sesión y organiza</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Soporte dedicado</div>
            <div className="text-sm">Ayuda rápida y personalizada</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
</lov_write>
