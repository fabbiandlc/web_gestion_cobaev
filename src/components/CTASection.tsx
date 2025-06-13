
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          ¿Listo para Revolucionar tus Horarios?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Únete a miles de instituciones educativas que ya confían en nuestra plataforma. 
          Comienza tu prueba gratuita hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <Calendar className="mr-2 h-5 w-5" />
            Comenzar Prueba Gratuita
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 transition-all duration-300">
            Hablar con Ventas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">14 días</div>
            <div className="text-sm">Prueba gratuita</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Sin compromiso</div>
            <div className="text-sm">Cancela cuando quieras</div>
          </div>
          <div className="text-blue-100">
            <div className="text-2xl font-bold text-white">Soporte 24/7</div>
            <div className="text-sm">Ayuda cuando la necesites</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
