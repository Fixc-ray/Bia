export default function Footer() {
  return (
    <footer className="bg-[#0D0E0A] border-t border-[#565449]/40 px-6 md:px-16 py-16 text-[#D8CFBC]">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-light text-[#FFFBF4] mb-3">
            Business Investment Advisory
          </h2>
          <p className="text-sm text-[#D8CFBC]/70 leading-relaxed">
            Bridging projects and capital across emerging markets through
            structured, strategic, and scalable financial solutions.
          </p>
        </div>

        {/* NAV */}
        <div>
          <p className="text-xs tracking-widest text-[#565449] mb-4">
            NAVIGATION
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/" className="hover:text-[#FFFBF4] transition">Home</a>
            <a href="/about" className="hover:text-[#FFFBF4] transition">About</a>
            <a href="/services" className="hover:text-[#FFFBF4] transition">Services</a>
            <a href="/projects" className="hover:text-[#FFFBF4] transition">Projects</a>
            <a href="/contact" className="hover:text-[#FFFBF4] transition">Contact</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs tracking-widest text-[#565449] mb-4">
            CONTACT
          </p>
          <p className="text-sm text-[#D8CFBC]/70 mb-2">
            info@bia-advisory.com
          </p>
          <p className="text-sm text-[#D8CFBC]/70">
            Nairobi, Kenya
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="mt-12 border-t border-[#565449]/30 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#565449]">

        <p>
          © {new Date().getFullYear()} BIA. All rights reserved.
        </p>

        <p className="mt-2 md:mt-0">
          Designed for clarity. Built for impact.
        </p>

      </div>
    </footer>
  );
}