export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-16 bg-[#11120D] text-[#D8CFBC]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-widest text-[#565449] mb-4">
            ABOUT
          </p>

          <h1 className="text-4xl md:text-6xl font-light mb-8 text-[#FFFBF4]">
            Our Mission
          </h1>

          <p className="text-[#D8CFBC]/80 leading-relaxed mb-6 max-w-xl">
            Business Investment Advisory (BIA) is a transaction-focused
            infrastructure advisory firm specializing in project structuring,
            credit enhancement, and capital mobilization across emerging markets.
          </p>

          <p className="text-[#D8CFBC]/80 leading-relaxed max-w-xl">
            Operating as a development finance intermediary, BIA plays a critical
            role in bridging projects and capital, enabling efficient execution
            and successful financial close across key sectors.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between">

          {/* GLASS CARD */}
          <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 rounded-2xl p-8 shadow-lg">

            <p className="text-xs tracking-widest text-[#565449] mb-6">
              APPROACH
            </p>

            <div className="space-y-6">

              <div className="border-l-2 border-[#565449] pl-4">
                <h3 className="text-lg font-semibold text-[#FFFBF4] mb-1">Structuring</h3>
                <p className="text-[#D8CFBC]/80 text-sm">
                  Developing bankable frameworks that attract investment and ensure project viability.
                </p>
              </div>

              <div className="border-l-2 border-[#565449] pl-4">
                <h3 className="text-lg font-semibold text-[#FFFBF4] mb-1">Partnership</h3>
                <p className="text-[#D8CFBC]/80 text-sm">
                  Collaborating with governments, developers, and institutional investors.
                </p>
              </div>

              <div className="border-l-2 border-[#565449] pl-4">
                <h3 className="text-lg font-semibold text-[#FFFBF4] mb-1">Execution</h3>
                <p className="text-[#D8CFBC]/80 text-sm">
                  Driving transactions from origination through successful financial close.
                </p>
              </div>

            </div>
          </div>

          {/* STATS */}
          <div className="mt-10 flex gap-10">

            <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 px-6 py-4 rounded-xl shadow">
              <p className="text-xs text-[#565449] mb-1">SECTORS</p>
              <p className="text-xl font-semibold text-[#FFFBF4]">6+</p>
            </div>

            <div className="backdrop-blur-md bg-[#D8CFBC]/10 border border-[#565449]/40 px-6 py-4 rounded-xl shadow">
              <p className="text-xs text-[#565449] mb-1">MARKETS</p>
              <p className="text-xl font-semibold text-[#FFFBF4]">Emerging</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}