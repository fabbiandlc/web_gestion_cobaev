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
import { Mail } from "lucide-react";
import AnimatedSection from "@/components/ui/animated-section";

const CTASection = () => {
  const handleContactClick = () => {
    const subject = encodeURIComponent("Quiero probar la aplicación de gestión de horarios");
    const body = encodeURIComponent("Hola,\n\nMe interesa probar la aplicación de gestión de horarios escolares. ¿Podrías proporcionarme más información sobre cómo obtener acceso?\n\nSaludos.");
    const mailtoLink = `mailto:fahuervodelacruz@hotmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <section className="pt-24 pb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 text-lg font-semibold">
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
      </div>
      <div className="w-full border-t border-white/20 mt-10 mb-6"></div>
      <footer className="w-full flex flex-col sm:flex-row items-center justify-center gap-2 mt-4 text-white/80 text-sm">
        <span>Creado por <a href="https://twitter.com/fabianhuervo" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">@fabianhuervo</a></span>
        <span className="flex items-center gap-1">
          <a href="https://twitter.com/fabianhuervo" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 text-white/80 hover:text-white transition-colors fill-current">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </a>
          |
          <a href="mailto:fahuervodelacruz@hotmail.com" className="hover:underline ml-1">fahuervodelacruz@hotmail.com</a>
        </span>
      </footer>
    </section>
  );
};

export default CTASection;
