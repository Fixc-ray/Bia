export default function Projects() {
  const projects = [
    "Energy Infrastructure",
    "Affordable Housing",
    "Transport Systems",
    "Water & Sanitation",
    "Telecommunications",
    "Agriculture Projects",
  ];

  return (
    <section className="bg-[#222120] px-6 md:px-16 py-28 text-[#cfcdcb]">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <p className="text-xs tracking-[0.3em] text-[#989691] mb-4">
          EXPERIENCE
        </p>

        <h2 className="text-3xl md:text-5xl font-light text-[#f3f3f2] mb-6">
          Projects & Strategic Impact
        </h2>

        <p className="text-[#bcbbb8] leading-relaxed">
          From complex infrastructure developments to high-level advisory mandates, 
          BIA operates at the intersection of capital, policy, and execution — 
          delivering results in environments where others hesitate.
        </p>
      </div>

      {/* HIGHLIGHT STRIP */}
      <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-3 gap-6">

        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-6">
          <p className="text-xs text-[#989691] mb-2">FLAGSHIP IMPACT</p>
          <h3 className="text-[#f3f3f2] font-medium">
            Somalia — The Impossible Achieved
          </h3>
        </div>

        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-6">
          <p className="text-xs text-[#989691] mb-2">ADVISORY ROLE</p>
          <h3 className="text-[#f3f3f2] font-medium">
            Consultant to Coca-Cola Africa
          </h3>
        </div>

        <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-6">
          <p className="text-xs text-[#989691] mb-2">SPECIALIZATION</p>
          <h3 className="text-[#f3f3f2] font-medium">
            EPC-F Structuring & Execution
          </h3>
        </div>

      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group bg-[#363432] border border-[#4a4845] rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-[#3f3d3b]"
          >
            <h3 className="text-[#f3f3f2] font-medium mb-3">
              {project}
            </h3>

            <p className="text-sm text-[#aaa8a5] leading-relaxed">
              Supporting development, structuring, and financing of impactful 
              infrastructure projects across emerging markets.
            </p>

            {/* subtle line */}
            <div className="mt-6 h-[1px] w-12 bg-[#5e5c58] group-hover:w-20 transition-all"></div>
          </div>
        ))}
      </div>

      {/* CLOSING */}
      <div className="max-w-3xl mx-auto text-center mt-24">
        <p className="text-[#aaa8a5] leading-relaxed">
          BIA’s experience spans high-risk, high-impact environments — delivering 
          bankable outcomes through precision, structure, and strategic alignment 
          with global capital.
        </p>
      </div>

    </section>
  );
}