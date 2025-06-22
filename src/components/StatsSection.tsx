import AnimatedSection from "@/components/ui/animated-section";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const stats = [
  { value: 92, label: "Optimización de la gestión escolar", suffix: "%" },
  { value: 99.38, label: "Reducción en tiempo de planificación", suffix: "%", prefix: "+" },
  { value: 100, label: "Eliminación de conflictos de horarios", suffix: "%" }
];

const StatItem = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const { count, ref } = useCounterAnimation({
    endValue: stat.value,
    duration: 1500,
    delay: index * 200 // Cada contador se inicia con un pequeño delay
  });

  return (
    <AnimatedSection 
      animation="bounce-in"
      className={`animate-stagger-${index + 1}`}
    >
      <div className="text-center" ref={ref}>
        <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
          {stat.prefix || ""}{count}{stat.suffix || ""}
        </div>
        <div className="text-blue-100 text-sm lg:text-base font-medium">
          {stat.label}
        </div>
      </div>
    </AnimatedSection>
  );
};

const StatsSection = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-8">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;