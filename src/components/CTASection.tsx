
import ProbarAhoraModal from "@/components/ProbarAhoraModal";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          ¿Listo para revolucionar tus horarios?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Optimiza tu gestión escolar digitalizando horarios y procesos. Da el siguiente paso hacia la productividad.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ProbarAhoraModal buttonClassName="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto" />
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Acceso inmediato</div>
            <div className="text-sm">Disponible móvil y web</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Sin instalación</div>
            <div className="text-sm">Solo registra tu correo y solicita</div>
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
