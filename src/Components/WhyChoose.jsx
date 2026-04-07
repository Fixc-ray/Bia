export default function WhyChoose() {
  return (
    <section className="bg-[#11120D] px-8 py-24 text-center text-[#D8CFBC]">
      
      {/* HEADER */}
      <div className="mb-16">
        <p className="text-xs tracking-widest text-[#565449] mb-4">
          WHY BIA
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-[#FFFBF4]">
          Why Choose BIA
        </h2>
      </div>

      {/* MAIN TEXT */}
      <p className="max-w-3xl mx-auto text-[#D8CFBC]/80 leading-relaxed text-lg mb-16">
        We bridge the gap between projects and capital. With deep expertise in
        development finance and emerging markets, BIA ensures efficient
        execution, optimized capital structures, and successful financial
        close.
      </p>

      {/* VALUE POINTS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 rounded-2xl p-8 transition hover:-translate-y-2">
          <h3 className="text-[#FFFBF4] text-lg font-semibold mb-3">
            Strategic Expertise
          </h3>
          <p className="text-sm text-[#D8CFBC]/70">
            Deep knowledge in infrastructure and development finance across emerging markets.
          </p>
        </div>

        <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 rounded-2xl p-8 transition hover:-translate-y-2">
          <h3 className="text-[#FFFBF4] text-lg font-semibold mb-3">
            Global Network
          </h3>
          <p className="text-sm text-[#D8CFBC]/70">
            Strong relationships with investors, governments, and financial institutions.
          </p>
        </div>

        <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 rounded-2xl p-8 transition hover:-translate-y-2">
          <h3 className="text-[#FFFBF4] text-lg font-semibold mb-3">
            Proven Execution
          </h3>
          <p className="text-sm text-[#D8CFBC]/70">
            Delivering projects from concept to financial close with precision and efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}