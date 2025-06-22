import AnimatedSection from "@/components/ui/animated-section";

const stats = [
  { value: "80%", label: "Mejora en la organización escolar" },
  { value: "+50%", label: "Menos tiempo gastado en planificaciones" },
  { value: "95%", label: "Docentes más satisfechos" },
  { value: "70%", label: "Menos incidencias de solapamiento" }
];

const StatsSection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <AnimatedSection 
            key={index} 
            animation="bounce-in"
            className={`animate-stagger-${index + 1}`}
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm lg:text-base font-medium">
                {stat.label}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
