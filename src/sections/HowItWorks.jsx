import React, { useEffect } from "react";
import AOS from "aos";
import {
  ArrowPathIcon,
  CreditCardIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      icon: ArrowPathIcon,
      title: "Connect Your Utilities",
      description:
        "Link all your energy providers in one secure dashboard. We support 15+ major utility companies across the country.",
    },
    {
      icon: CreditCardIcon,
      title: "Set Your Preferences",
      description:
        "Choose your payment schedule, set spending limits, and customize how you want to pay your bills.",
    },
    {
      icon: SparklesIcon,
      title: "Relax & Save",
      description:
        "We consolidate everything into one simple payment and automatically pay your bills on time, every time.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            How It Works
          </h2>
          <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
            Get started in minutes and never worry about utility bills again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="relative"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-lime rounded-full mb-6">
                  <step.icon className="w-8 h-8 text-charcoal" />
                </div>
                <h3 className="font-sans font-bold text-xl lg:text-2xl text-charcoal mb-4">
                  {step.title}
                </h3>
                <p className="font-sans text-charcoal/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-electric-lime/30 -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-aos="fade-up" className="text-center mt-16">
          <p className="font-sans text-lg text-charcoal/70 mb-6">
            Ready to simplify your utility payments?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#early-access")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-electric-lime text-charcoal px-8 py-4 rounded-lg font-sans font-bold text-lg hover:bg-lime-400 transition-colors"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
