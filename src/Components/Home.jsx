import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AboutPage from "./About";
import Services from "./Services";
import { Section } from "lucide-react";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";
import KeySectors from "./KeySectors";

export default function Home() {

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
      title: "Structuring Bankable Infrastructure",
      text: "We design financially viable projects that attract institutional capital across emerging markets."
    },
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      title: "Mobilizing Global Capital",
      text: "Connecting governments and developers to local and international financing solutions."
    },
    {
      image: "https://images.unsplash.com/photo-1460472178825-e5240623afd5",
      title: "From Concept to Financial Close",
      text: "We guide projects through structuring, risk mitigation, and successful execution."
    },
    {
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      title: "Infrastructure That Drives Growth",
      text: "Energy, housing, transport, and more — building the backbone of economies."
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextIndex = (current + 1) % slides.length;

  return (
    <div className="w-full min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-end px-6 md:px-16 pb-10 md:pb-16">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            key={current}
            src={slides[current].image}
            className="w-full h-full object-cover zoom-out"
            alt=""
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between gap-6">

          {/* TEXT */}
          <div className="max-w-xl mb-20">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              {slides[current].title}
            </h1>

            <p className="mt-4 text-gray-300 text-sm md:text-base max-w-md">
              {slides[current].text}
            </p>

            <div className="flex gap-4 mt-6">
              <Link
                to="/services"
                className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full"
              >
                Our Services
              </Link>

              <Link
                to="/contact"
                className="px-6 py-2 border border-white text-white text-sm rounded-full"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="hidden md:flex flex-col items-end">
            <img
              src={slides[nextIndex].image}
              className="w-28 h-36 object-cover rounded-md opacity-80 border border-gray-700"
              alt="Next"
            />
          </div>

        </div>
      </section>

      <section>
        <AboutPage />
      </section>

      <section>
        <Services />
      </section>

      {/* SECTORS */}
    <section>
        <KeySectors />
    </section>

      <section>
        <WhyChoose />
      </section>

      {/* FOOTER */}
      <section>
        <Footer />
      </section>

    </div>
  );
}