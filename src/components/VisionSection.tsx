
import { CalendarCheck, Users, ShieldCheck, BarChart3, RefreshCcw } from "lucide-react";

const items = [
  {
    icon: <CalendarCheck className="h-8 w-8 text-blue-600 mb-2" />,
    title: "Gestión Centralizada y Eficiente",
    description:
      "Administra horarios de docentes, asigna materias y grupos, y genera estadísticas en tiempo real en una única plataforma digital accesible. Olvídate de documentos físicos y la información dispersa: todo está centralizado y fácilmente consultable."
  },
  {
    icon: <Users className="h-8 w-8 text-green-600 mb-2" />,
    title: "Beneficio para Toda la Comunidad",
    description:
      "Administrativos, docentes, estudiantes y padres pueden acceder y consultar horarios o asignaciones al instante, evitando superposiciones y asegurando una correcta distribución de las clases."
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
          Una plataforma todo en uno para transformar la gestión académica. Diseñada pensando en la experiencia de administrativos, docentes, estudiantes y familias.
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
