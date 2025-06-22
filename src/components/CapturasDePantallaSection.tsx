import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimatedSection from "@/components/ui/animated-section";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, X } from "lucide-react";

const screenshots = [
  {
    src: "/img/1.jpg",
    alt: "Pantalla principal de la app móvil"
  },
  {
    src: "/img/2.jpg",
    alt: "Gestión de horarios en la app"
  },
  {
    src: "/img/3.jpg",
    alt: "Vista de actividades y calendario"
  },
  {
    src: "/img/4.jpg",
    alt: "Configuración de horarios"
  },
  {
    src: "/img/5.jpg",
    alt: "Dashboard principal"
  },
  {
    src: "/img/6.jpg",
    alt: "Vista de estadísticas"
  },
  {
    src: "/img/7.jpg",
    alt: "Perfil de usuario"
  },
  {
    src: "/img/8.jpg",
    alt: "Notificaciones y alertas"
  },
  {
    src: "/img/9.jpg",
    alt: "Configuración avanzada"
  },
  {
    src: "/img/10.jpg",
    alt: "Vista de reportes"
  }
];

const CapturasDePantallaSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentModalImageIndex, setCurrentModalImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [lastDirection, setLastDirection] = useState<'left' | 'right'>('right');
  const [isZoomDragging, setIsZoomDragging] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [zoomStartPosition, setZoomStartPosition] = useState({ x: 0, y: 0 });
  const [hasDragged, setHasDragged] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const modalImageRef = useRef<HTMLImageElement>(null);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(Math.min(100, progress));
    }
  };

  const animateImageHover = (imageIndex: number) => {
    const cards = scrollContainerRef.current?.querySelectorAll('.screenshot-card');
    if (cards && cards[imageIndex]) {
      const card = cards[imageIndex] as HTMLElement;
      
      // Aplicar efecto hover
      card.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      card.style.transform = 'scale(1.05) translateY(-4px)';
      card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      
      // Remover efecto después de un tiempo
      setTimeout(() => {
        card.style.transform = 'scale(1) translateY(0)';
        card.style.boxShadow = '';
      }, 300);
    }
  };

  const navigateLeft = () => {
    // Si cambió la dirección, resetear el contador
    if (lastDirection !== 'left') {
      setClickCount(0);
      setLastDirection('left');
    }
    
    // Incrementar contador de clicks
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    // Calcular nueva imagen objetivo
    const newImageIndex = Math.max(0, currentImageIndex - 1);
    setCurrentImageIndex(newImageIndex);
    
    // Siempre hacer hover en la imagen actual
    animateImageHover(newImageIndex);
    
    // Solo hacer scroll cada 3 clicks
    if (newClickCount % 3 === 0) {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 288 + 16; // w-72 + gap-4
        
        // Para retroceder, calcular la posición basada en el índice actual
        let targetScroll;
        if (newImageIndex >= 3) {
          // Si hay suficientes imágenes atrás, ir 3 posiciones hacia atrás
          targetScroll = (newImageIndex - 2) * cardWidth;
        } else {
          // Si estamos cerca del inicio, ir al inicio
          targetScroll = 0;
        }
        
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const navigateRight = () => {
    // Si cambió la dirección, resetear el contador
    if (lastDirection !== 'right') {
      setClickCount(0);
      setLastDirection('right');
    }
    
    // Incrementar contador de clicks
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    
    // Calcular nueva imagen objetivo
    const newImageIndex = Math.min(screenshots.length - 1, currentImageIndex + 1);
    setCurrentImageIndex(newImageIndex);
    
    // Siempre hacer hover en la imagen actual
    animateImageHover(newImageIndex);
    
    // Solo hacer scroll cada 3 clicks
    if (newClickCount % 3 === 0) {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const cardWidth = 288 + 16; // w-72 + gap-4
        
        // Para avanzar, ir a la posición de la imagen actual
        const targetScroll = newImageIndex * cardWidth;
        
        container.scrollTo({
          left: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleScrollbarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current) {
      const scrollbar = event.currentTarget;
      const rect = scrollbar.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const scrollbarWidth = rect.width;
      const clickPercentage = clickX / scrollbarWidth;
      
      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const targetScrollLeft = maxScroll * clickPercentage;
      
      scrollContainerRef.current.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleDrag(event);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      handleDrag(event);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDrag = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    
    const scrollbar = scrollContainerRef.current.parentElement?.querySelector('.scrollbar-track') as HTMLElement;
    if (!scrollbar) return;
    
    const rect = scrollbar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const scrollbarWidth = rect.width;
    const clickPercentage = Math.max(0, Math.min(1, clickX / scrollbarWidth));
    
    const { scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScrollLeft = maxScroll * clickPercentage;
    
    scrollContainerRef.current.scrollLeft = targetScrollLeft;
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollProgress);
      window.addEventListener('resize', updateScrollProgress);
      
      // Event listeners para drag
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        container.removeEventListener('scroll', updateScrollProgress);
        window.removeEventListener('resize', updateScrollProgress);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const openModal = (imageIndex: number) => {
    setCurrentModalImageIndex(imageIndex);
    setSelectedImage(screenshots[imageIndex].src);
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
    setIsZoomDragging(false);
    setHasDragged(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
    setIsZoomDragging(false);
    setHasDragged(false);
  };

  const navigateModalLeft = () => {
    const newIndex = Math.max(0, currentModalImageIndex - 1);
    setCurrentModalImageIndex(newIndex);
  };

  const navigateModalRight = () => {
    const newIndex = Math.min(screenshots.length - 1, currentModalImageIndex + 1);
    setCurrentModalImageIndex(newIndex);
  };

  const toggleZoom = () => {
    if (isZoomed) {
      // Si está ampliada, desactivar zoom y resetear posición
      setIsZoomed(false);
      setZoomPosition({ x: 0, y: 0 });
    } else {
      // Si no está ampliada, activar zoom sin resetear posición
      setIsZoomed(true);
    }
  };

  // Funciones para manejar zoom con arrastre
  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    // Solo hacer zoom si no estamos arrastrando y no hubo arrastre
    if (!isZoomDragging && !hasDragged) {
      toggleZoom();
    }
    // Resetear la bandera de arrastre
    setHasDragged(false);
  };

  const handleImageDoubleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    // Doble clic siempre desactiva el zoom
    setIsZoomed(false);
    setZoomPosition({ x: 0, y: 0 });
  };

  const handleImageMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
    // Prevenir el comportamiento por defecto del arrastre
    event.preventDefault();
    
    if (isZoomed) {
      setIsZoomDragging(true);
      setHasDragged(false); // Resetear la bandera al inicio del arrastre
      setZoomStartPosition({
        x: event.clientX - zoomPosition.x,
        y: event.clientY - zoomPosition.y
      });
    }
  };

  const handleImageMouseMove = (event: MouseEvent) => {
    if (isZoomed && isZoomDragging) {
      // Marcar que hubo arrastre
      setHasDragged(true);
      
      // Mantener la posición X fija (solo se puede arrastrar verticalmente)
      const newY = event.clientY - zoomStartPosition.y;
      
      // Límites para el desplazamiento vertical
      const maxY = window.innerHeight * 1.0;
      
      setZoomPosition(prev => ({
        x: 0, // Mantener X en 0 para evitar movimiento horizontal
        y: Math.max(-maxY, Math.min(maxY, newY))
      }));
    }
  };

  const handleImageMouseUp = () => {
    // Solo detener el arrastre, no resetear el zoom
    setIsZoomDragging(false);
  };

  // Agregar efecto para cerrar modal con ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedImage) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  // Agregar event listeners para el zoom con arrastre
  useEffect(() => {
    if (isZoomed) {
      document.addEventListener('mousemove', handleImageMouseMove);
      document.addEventListener('mouseup', handleImageMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleImageMouseMove);
        document.removeEventListener('mouseup', handleImageMouseUp);
      };
    }
  }, [isZoomed, isZoomDragging, zoomStartPosition]);

  return (
  <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <AnimatedSection animation="fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">Capturas de Pantalla</h2>
      </AnimatedSection>
      
        {/* Indicador de scroll arriba */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-3 text-sm text-muted-foreground bg-gray-50 px-4 py-2 rounded-full">
            <ChevronLeft className="w-4 h-4" />
            <span>Desliza para ver más capturas</span>
            <ChevronRight className="w-4 h-4" />
          </div>
          
          {/* Scrollbar minimalista futurista */}
          <div className="mt-4 flex justify-center">
            <div 
              className="relative w-48 h-1 bg-gray-100 rounded-full overflow-hidden backdrop-blur-sm cursor-pointer hover:bg-gray-200 transition-colors duration-200 scrollbar-track"
              onClick={handleScrollbarClick}
              onMouseDown={handleMouseDown}
            >
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out shadow-lg" 
                   style={{ width: `${scrollProgress}%` }}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Botón de navegación izquierda */}
          <button
            onClick={navigateLeft}
            className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Botón de navegación derecha */}
          <button
            onClick={navigateRight}
            className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-200 opacity-80 hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide smooth-scroll px-2 momentum-scroll smooth-scroll-container"
            style={{ scrollBehavior: 'smooth' }}
          >
        {screenshots.map((s, i) => (
          <AnimatedSection 
            key={i} 
            animation="scale-in"
                className={`animate-stagger-${(i % 4) + 1} flex-shrink-0 screenshot-card`}
              >
                <Card 
                  className="shadow-lg rounded-xl overflow-hidden w-72 h-auto cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  onClick={() => openModal(i)}
                >
              <img 
                src={s.src} 
                alt={s.alt}
                    draggable="false"
                    className="w-full h-auto object-contain"
                loading="lazy"
                    onMouseDown={handleImageMouseDown}
              />
            </Card>
          </AnimatedSection>
        ))}
      </div>
        </div>

        {/* Modal */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={(open) => !open && closeModal()}>
            <DialogContent className="max-w-none max-h-none p-0 bg-transparent border-none shadow-none">
              <div className="relative w-screen h-screen flex items-center justify-center">
                {/* Botón cerrar */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Botón navegación izquierda */}
                {currentModalImageIndex > 0 && (
                  <button
                    onClick={navigateModalLeft}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}

                {/* Botón navegación derecha */}
                {currentModalImageIndex < screenshots.length - 1 && (
                  <button
                    onClick={navigateModalRight}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                )}

                {/* Botón zoom */}
                <button
                  onClick={toggleZoom}
                  className="absolute top-4 left-4 z-50 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
                >
                  {isZoomed ? <ZoomOut className="w-6 h-6" /> : <ZoomIn className="w-6 h-6" />}
                </button>

                {/* Contador de imágenes */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentModalImageIndex + 1} / {screenshots.length}
                </div>

                {/* Imagen */}
                <img 
                  ref={modalImageRef}
                  src={screenshots[currentModalImageIndex].src} 
                  alt={screenshots[currentModalImageIndex].alt}
                  draggable="false"
                  className={`object-contain rounded-lg transition-all duration-300 ${
                    isZoomed 
                      ? 'max-w-none max-h-none w-auto h-auto cursor-grab active:cursor-grabbing' 
                      : 'max-w-[90vw] max-h-[90vh] cursor-zoom-in'
                  }`}
                  style={{ 
                    transform: isZoomed ? `translate(${zoomPosition.x}px, ${zoomPosition.y}px)` : 'none',
                    transition: isZoomDragging ? 'none' : 'transform 0.3s ease-out'
                  }}
                  onClick={handleImageClick}
                  onDoubleClick={handleImageDoubleClick}
                  onMouseDown={handleImageMouseDown}
                />
              </div>
            </DialogContent>
          </Dialog>
        )}
    </div>
  </section>
);
};

export default CapturasDePantallaSection;
