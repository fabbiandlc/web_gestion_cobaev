
import { Card } from "@/components/ui/card";

const screenshots = [
  {
    src: "/placeholder.svg",
    alt: "Pantalla principal de la app móvil"
  },
  {
    src: "/placeholder.svg",
    alt: "Gestión de horarios en la app"
  },
  {
    src: "/placeholder.svg",
    alt: "Vista de actividades y calendario"
  }
];

const CapturasDePantallaSection = () => (
  <section className="py-16 bg-white">
    <div className="mx-auto max-w-5xl px-6 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">Capturas de Pantalla</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-center">
        {screenshots.map((s, i) => (
          <Card key={i} className="shadow-lg rounded-xl overflow-hidden w-full max-w-xs mx-auto hover-scale animate-fade-in">
            <img 
              src={s.src} 
              alt={s.alt}
              className="w-full h-72 object-cover bg-gray-100"
              loading="lazy"
            />
            <div className="p-4 text-center text-muted-foreground text-sm">{s.alt}</div>
          </Card>
        ))}
      </div>
      <div className="mt-6 text-xs text-center text-muted-foreground">
        Ilustrativo. Si quieres probar la app, utiliza el botón <span className="font-medium">Probar ahora</span>.
      </div>
    </div>
  </section>
);

export default CapturasDePantallaSection;
