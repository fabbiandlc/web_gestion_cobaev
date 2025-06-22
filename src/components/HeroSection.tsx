import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Zap, Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const HeroSection = () => {
  const handleContactClick = () => {
    const subject = encodeURIComponent("Quiero probar la aplicación de gestión de horarios");
    const body = encodeURIComponent("Hola,\n\nMe interesa probar la aplicación de gestión de horarios escolares. ¿Podrías proporcionarme más información sobre cómo obtener acceso?\n\nSaludos.");
    const mailtoLink = `mailto:fahuervodelacruz@hotmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10" />
      <div className="relative mx-auto max-w-4xl text-center">
        <AnimatedSection animation="bounce-in">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
            <Zap className="mr-2 h-4 w-4" />
            App de gestión educativa
          </Badge>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" className="animate-stagger-1">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Gestión de Horarios Escolar COBAEV
          </h1>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" className="animate-stagger-2">
          <p className="mb-8 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Organiza y digitaliza los horarios de clases y docentes del COBAEV en un solo lugar. Accede desde tu móvil: seguro, rápido y centralizado.
          </p>
        </AnimatedSection>
        
        <AnimatedSection animation="scale-in" className="animate-stagger-3">
          <div className="flex flex-col gap-4 justify-center items-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
                  <Mail className="mr-2 h-5 w-5" />
                  Obtener aplicación
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>¿Te quieres poner en contacto?</DialogTitle>
                  <DialogDescription>
                    Te redirigiremos a tu aplicación de correo para que puedas enviarme un mensaje y obtener más información sobre la aplicación.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col sm:flex-row gap-2">
                  <Button 
                    onClick={handleContactClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Sí, contactar
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline">
                      Cancelar
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" className="animate-stagger-4">
          <p className="mt-4 text-sm text-muted-foreground">
            ✨ Accesible desde tu dispositivo Android
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
