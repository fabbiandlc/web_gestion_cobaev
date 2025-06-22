import ProbarAhoraModal from "@/components/ProbarAhoraModal";
import AnimatedSection from "@/components/ui/animated-section";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-in">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
            ¿Listo para revolucionar tus horarios?
          </h2>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" className="animate-stagger-1">
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Optimiza tu gestión escolar digitalizando horarios y procesos. Da el siguiente paso hacia la productividad.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="scale-in" className="animate-stagger-2">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ProbarAhoraModal buttonClassName="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto" />
          </div>
        </AnimatedSection>
        
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { title: "Acceso inmediato", subtitle: "Disponible para Android" },
            { title: "Sin instalación", subtitle: "Solo registra tu correo y solicita" },
            { title: "Soporte dedicado", subtitle: "Ayuda rápida y personalizada" }
          ].map((item, index) => (
            <AnimatedSection 
              key={index}
              animation="slide-in-right"
              className={`animate-stagger-${index + 3}`}
            >
              <div className="text-blue-100">
                <div className="text-2xl font-bold text-white">{item.title}</div>
                <div className="text-sm">{item.subtitle}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
