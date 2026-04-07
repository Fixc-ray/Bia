import { Zap, Home, Truck, Droplet, Wifi, Leaf } from "lucide-react";

export default function Sectors() {
  const sectors = [
    { name: "Energy", icon: <Zap size={26} /> },
    { name: "Housing", icon: <Home size={26} /> },
    { name: "Transport", icon: <Truck size={26} /> },
    { name: "Water", icon: <Droplet size={26} /> },
    { name: "Telecommunications", icon: <Wifi size={26} /> },
    { name: "Agriculture", icon: <Leaf size={26} /> },
  ];

  return (
    <section className="relative px-6 md:px-16 py-28 bg-[#11120D] text-[#D8CFBC] overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-20 blur-3xl bg-gradient-to-tr from-[#565449] via-transparent to-[#D8CFBC]"></div>

      {/* HEADER */}
      <div className="relative text-center mb-20">
        <p className="text-xs tracking-[0.3em] text-[#565449] mb-4">
          SECTORS
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-[#FFFBF4]">
          Key Sectors We Influence
        </h2>
      </div>

      {/* GRID */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {sectors.map((sector, i) => (
          <div
            key={i}
            className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-[#565449]/40 to-transparent hover:from-[#D8CFBC]/40 transition duration-500"
          >
            {/* CARD */}
            <div className="relative h-full rounded-2xl bg-[#0D0E0A]/80 backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center transition duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">

              {/* ICON */}
              <div className="mb-5 text-[#D8CFBC] group-hover:text-[#FFFBF4] transition">
                {sector.icon}
              </div>

              {/* TEXT */}
              <p className="tracking-wide text-sm text-[#D8CFBC]/80 group-hover:text-[#FFFBF4] transition">
                {sector.name}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-[#D8CFBC]/10 to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM LINE */}
      <div className="relative mt-20 flex justify-center">
        <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[#565449] to-transparent"></div>
      </div>

    </section>
  );
}