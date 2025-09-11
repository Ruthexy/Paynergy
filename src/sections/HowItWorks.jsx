import React from 'react';
 import { motion } from 'framer-motion';
import { ArrowPathIcon, CreditCardIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HowItWorks = () => {
  const steps = [
    {
      icon: ArrowPathIcon,
      title: "Connect Your Utilities",
      description: "Link all your energy providers in one secure dashboard. We support 15+ major utility companies across the country.",
      color: "text-electric-lime"
    },
    {
      icon: CreditCardIcon,
      title: "Set Your Preferences",
      description: "Choose your payment schedule, set spending limits, and customize how you want to pay your bills.",
      color: "text-electric-lime"
    },
    {
      icon: SparklesIcon,
      title: "Relax & Save",
      description: "We consolidate everything into one simple payment and automatically pay your bills on time, every time.",
      color: "text-electric-lime"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            How It Works
          </h2>
          <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
            Get started in minutes and never worry about utility bills again
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-sans text-lg text-charcoal/70 mb-6">
            Ready to simplify your utility payments?
          </p>
          <button
            onClick={() => document.querySelector('#early-access').scrollIntoView({ behavior: 'smooth' })}
            className="bg-electric-lime text-charcoal px-8 py-4 rounded-lg font-sans font-bold text-lg hover:bg-lime-400 transition-colors"
          >
            Join the Waitlist
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
