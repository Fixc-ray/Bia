import { Briefcase, TrendingUp, Layers, DollarSign } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Project Structuring",
      icon: <Layers size={28} />,
    },
    {
      title: "Credit Enhancement",
      icon: <TrendingUp size={28} />,
    },
    {
      title: "Capital Mobilization",
      icon: <DollarSign size={28} />,
    },
    {
      title: "Financial Advisory",
      icon: <Briefcase size={28} />,
    },
  ];

  return (
    <section className="bg-[#11120D] px-8 py-20 text-[#D8CFBC]">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest text-[#565449] mb-4">
          SERVICES
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-[#FFFBF4]">
          What We Offer
        </h2>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="group relative backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:border-[#D8CFBC]/40"
          >
            
            {/* ICON */}
            <div className="mb-6 text-[#D8CFBC] group-hover:text-[#FFFBF4] transition">
              {service.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#FFFBF4] mb-3">
              {service.title}
            </h3>

            {/* TEXT */}
            <p className="text-sm text-[#D8CFBC]/70 leading-relaxed">
              Delivering tailored solutions to ensure project bankability and
              investor confidence.
            </p>

            {/* HOVER LINE EFFECT */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D8CFBC] group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
}