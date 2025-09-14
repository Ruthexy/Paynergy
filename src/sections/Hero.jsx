import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Button";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-evergreen via-green-800 to-green-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/heroImage.png"
          alt="Paynergy Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-electric-lime rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 bg-electric-lime rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-64 sm:h-64 bg-electric-lime rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" className="max-w-4xl mx-auto">
          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            One Click.
            <br />
            <span className="text-electric-lime">Every Bill.</span>
            <br />
            Paid.
          </h1>

          <p className="font-sans text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Consolidate all your bills into one simple payment. Recharge your
            Electricity, Gas and Diesel, DStv and more with ease. Save time,
            reduce stress, and never miss a utility payment again.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() =>
                document
                  .querySelector("#early-access")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto animate-slide-up"
            >
              Get Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .querySelector("#how-it-works")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-charcoal"
            >
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white mb-2">
                15+
              </div>
              <div className="text-white/80 font-sans text-sm sm:text-base">
                Utility Providers
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white mb-2">
                2.5k+
              </div>
              <div className="text-white/80 font-sans text-sm sm:text-base">
                Beta Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white mb-2">
                98%
              </div>
              <div className="text-white/80 font-sans text-sm sm:text-base">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-in"
        data-aos-delay="1000"
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
