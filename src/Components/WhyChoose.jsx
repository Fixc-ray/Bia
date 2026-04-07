export default function WhyChoose() {
  return (
    <section className="bg-[#222120] px-6 md:px-16 py-24 text-center text-[#cfcdcb]">

      {/* HEADER */}
      <div className="mb-16">
        <p className="text-xs tracking-widest text-[#989691] mb-4">
          WHY BIA
        </p>

        <h2 className="text-3xl md:text-5xl font-light text-[#f3f3f2]">
          Why Choose BIA
        </h2>
      </div>

      {/* MAIN TEXT */}
      <p className="max-w-3xl mx-auto text-[#bcbbb8] leading-relaxed text-lg mb-20">
        We bridge the gap between projects and capital. With deep expertise in
        development finance and emerging markets, BIA ensures efficient
        execution, optimized capital structures, and successful financial close.
      </p>

      {/* VALUE POINTS */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* CARD */}
        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#3f3d3b]">
          <h3 className="text-[#f3f3f2] text-lg font-medium mb-3">
            Strategic Expertise
          </h3>
          <p className="text-sm text-[#aaa8a5] leading-relaxed">
            Deep knowledge in infrastructure and development finance across emerging markets.
          </p>
        </div>

        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#3f3d3b]">
          <h3 className="text-[#f3f3f2] text-lg font-medium mb-3">
            Global Network
          </h3>
          <p className="text-sm text-[#aaa8a5] leading-relaxed">
            Strong relationships with investors, governments, and financial institutions.
          </p>
        </div>

        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#3f3d3b]">
          <h3 className="text-[#f3f3f2] text-lg font-medium mb-3">
            Proven Execution
          </h3>
          <p className="text-sm text-[#aaa8a5] leading-relaxed">
            Delivering projects from concept to financial close with precision and efficiency.
          </p>
        </div>

      </div>
    </section>
  );
}