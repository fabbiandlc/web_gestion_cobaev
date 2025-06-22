import { CalendarCheck, Users, ShieldCheck, BarChart3, RefreshCcw, FileText } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const items = [
  {
    icon: <CalendarCheck className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Gestión Centralizada y Eficiente",
    description:
      "Administra horarios de docentes, asigna materias y grupos, y genera estadísticas en tiempo real en una única aplicación móvil accesible."
  },
  {
    icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
    title: "Beneficio para Toda la Comunidad",
    description:
      "Administrativos pueden acceder y consultar horarios o asignaciones al instante, evitando superposiciones y asegurando una correcta distribución de las clases."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />,
    title: "Panel de Administración Ágil",
    description:
      "Herramientas sencillas para actualizar información de docentes, materias y grupos en minutos, optimizando flujos de trabajo y minimizando tiempos en tareas repetitivas."
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-indigo-600 mb-2" />,
    title: "Seguridad y Privacidad de Datos",
    description:
      "Implementa medidas robustas para proteger información sensible, cumpliendo normativas de privacidad para generar confianza en la comunidad educativa."
  },
  {
    icon: <RefreshCcw className="h-8 w-8 text-emerald-600 mb-2" />,
    title: "Respaldo Automático",
    description:
      "Copia de seguridad automática garantiza la integridad y disponibilidad de la información ante cualquier fallo técnico. La fiabilidad y la tranquilidad están aseguradas."
  },
  {
    icon: <FileText className="h-8 w-8 text-orange-600 mb-2" />,
    title: "Generación de Reportes en PDF",
    description:
      "Exporta horarios, listas y estadísticas en formato PDF con un solo clic, facilitando la distribución y el archivo de información académica."
  }
];

const VisionSection = () => (
  <section className="py-24 bg-gradient-to-br from-blue-50 to-green-50">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <AnimatedSection animation="fade-in">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Visión General
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una plataforma todo en uno para transformar la gestión académica. Diseñada pensando en la experiencia de administrativos, docentes, estudiantes y familias.
          </p>
        </div>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, idx) => (
          <AnimatedSection 
            key={idx} 
            animation="scale-in"
            className={`animate-stagger-${Math.min(idx + 1, 5)}`}
          >
            <div className="bg-white/80 rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-foreground text-center">{item.title}</h3>
              </div>
              <p className="text-base text-muted-foreground text-center">{item.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;