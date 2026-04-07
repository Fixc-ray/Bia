import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AboutPage from "./About";
import Services from "./Services";
import { Section } from "lucide-react";
import WhyChoose from "./WhyChoose";
import Footer from "./Footer";
import KeySectors from "./KeySectors";
import Projects from "./Projects";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpeg";
import image4 from "../Images/image4.jpeg";
import Affiliates from "./Affiliates";

export default function Home() {

  const slides = [
    {
      image: image1,
      title: "Structuring Bankable Infrastructure",
      text: "We design financially viable projects that attract institutional capital across emerging markets."
    },
    {
      image: image2,
      title: "Mobilizing Global Capital",
      text: "Connecting governments and developers to local and international financing solutions."
    },
    {
      image: image3,
      title: "From Concept to Financial Close",
      text: "We guide projects through structuring, risk mitigation, and successful execution."
    },
    {
      image: image4,
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

        </div>
      </section>

      <section>
        <AboutPage />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Affiliates />
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