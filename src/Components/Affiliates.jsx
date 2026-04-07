import { useState } from "react";
import Modal from "./Modal";
import image1 from "../Images/image1.jpeg";

export default function Affiliates() {
  const [selected, setSelected] = useState(null);

  const affiliates = [
    {
      name: "Amanah",
      description: "Data infrastructure & digital backbone solutions.",
      link: "https://amanah21.com/",
      type: "link",
    },
    {
      name: "Flatrace",
      description: "Investment banking & corporate finance advisory.",
      link: "https://flatrace.com/about/",
      type: "link",
    },
    {
      name: "Jangisar Holdings",
      description: "A progresssive agro based estate",
      pdf: "/pdf/JH_CorporateProfile_2024.pdf",
      type: "pdf",
    },
    {
      name: "CONSULTANCY & STRATEGIC ADVISORY PROCEDURE",
      description: "Commodity Transactions, Infrastructure & Structured Finance Projects",
      pdf: "/pdf/CONSULTANCY.pdf",
      type: "pdf",
    },
  ];

  return (
    <section className="relative px-6 md:px-16 py-24 text-[#cfcdcb] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src= {image1}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#222120]/70" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-[#989691] mb-4">
            NETWORK
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-[#f3f3f2]">
            Strategic Affiliations
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {affiliates.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                if (item.type === "link") {
                  window.open(item.link, "_blank");
                } else {
                  setSelected(item);
                }
              }}
              className="cursor-pointer group bg-[#363432]/90 border border-[#4a4845] rounded-2xl p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-[#3f3d3b]"
            >
              <h3 className="text-xl font-medium text-[#f3f3f2] mb-3">
                {item.name}
              </h3>

              <p className="text-sm text-[#aaa8a5] mb-4">
                {item.description}
              </p>

              <span className="text-xs text-[#989691] group-hover:text-[#f3f3f2] transition">
                {item.type === "pdf" ? "View Document →" : "Visit Partner →"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        content={selected || {}}
      />
    </section>
  );
}