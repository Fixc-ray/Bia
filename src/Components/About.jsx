export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-16 bg-[#222120] text-[#cfcdcb]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT */}
        <div>
          <p className="text-xs tracking-widest text-[#989691] mb-4">
            ABOUT
          </p>

          <h1 className="text-4xl md:text-6xl font-light mb-8 text-[#f3f3f2]">
            Our Mission
          </h1>

          <p className="text-[#bcbbb8] leading-relaxed mb-6 max-w-xl">
            Business Investment Advisory (BIA) is a transaction-focused
            infrastructure advisory firm specializing in project structuring,
            credit enhancement, and capital mobilization across emerging markets.
          </p>

          <p className="text-[#bcbbb8] leading-relaxed max-w-xl">
            Operating as a development finance intermediary, BIA plays a critical
            role in bridging projects and capital, enabling efficient execution
            and successful financial close across key sectors.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-between">

          {/* CARD (no glass anymore — solid layer) */}
          <div className="bg-[#363432] border border-[#4a4845] rounded-2xl p-8">

            <p className="text-xs tracking-widest text-[#989691] mb-6">
              APPROACH
            </p>

            <div className="space-y-6">

              <div className="border-l border-[#5e5c58] pl-4">
                <h3 className="text-lg font-medium text-[#f3f3f2] mb-1">
                  Structuring
                </h3>
                <p className="text-[#aaa8a5] text-sm leading-relaxed">
                  Developing bankable frameworks that attract investment and ensure project viability.
                </p>
              </div>

              <div className="border-l border-[#5e5c58] pl-4">
                <h3 className="text-lg font-medium text-[#f3f3f2] mb-1">
                  Partnership
                </h3>
                <p className="text-[#aaa8a5] text-sm leading-relaxed">
                  Collaborating with governments, developers, and institutional investors.
                </p>
              </div>

              <div className="border-l border-[#5e5c58] pl-4">
                <h3 className="text-lg font-medium text-[#f3f3f2] mb-1">
                  Execution
                </h3>
                <p className="text-[#aaa8a5] text-sm leading-relaxed">
                  Driving transactions from origination through successful financial close.
                </p>
              </div>

            </div>
          </div>

          {/* STATS */}
          <div className="mt-10 flex gap-10">

            <div className="bg-[#363432] border border-[#4a4845] px-6 py-4 rounded-xl">
              <p className="text-xs text-[#989691] mb-1">SECTORS</p>
              <p className="text-xl font-medium text-[#f3f3f2]">6+</p>
            </div>

            <div className="bg-[#363432] border border-[#4a4845] px-6 py-4 rounded-xl">
              <p className="text-xs text-[#989691] mb-1">MARKETS</p>
              <p className="text-xl font-medium text-[#f3f3f2]">Emerging</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}