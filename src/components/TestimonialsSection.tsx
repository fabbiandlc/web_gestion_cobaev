import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Directora Académica",
      institution: "Instituto Tecnológico Madrid",
      content: "Hemos reducido el tiempo de creación de horarios de 2 semanas a 30 minutos. Es increíble cómo la IA maneja todas las restricciones automáticamente.",
      rating: 5
    },
    {
      name: "Prof. Carlos Ruiz",
      role: "Docente de Matemáticas",
      institution: "Universidad Complutense",
      content: "Finalmente puedo ver todos mis horarios de forma clara y recibir notificaciones cuando hay cambios. La app es intuitiva y muy útil.",
      rating: 5
    },
    {
      name: "Ana Martín",
      role: "Coordinadora Académica",
      institution: "Colegio San Patricio",
      content: "Los reportes de ocupación nos han ayudado a optimizar nuestros espacios. Ahora podemos planificar mejor los recursos de la institución.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Lo Que Dicen Nuestros Usuarios
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de educadores confían en nosotros para gestionar sus horarios
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              animation="slide-in-left"
              className={`animate-stagger-${index + 1}`}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-base mb-6 leading-relaxed text-muted-foreground">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.institution}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
