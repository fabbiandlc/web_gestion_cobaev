
const StatsSection = () => {
  const stats = [
    { value: "95%", label: "Reducción en tiempo de planificación" },
    { value: "10,000+", label: "Horarios generados mensualmente" },
    { value: "500+", label: "Instituciones educativas" },
    { value: "99.9%", label: "Satisfacción de usuarios" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 animate-fade-in">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm lg:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
