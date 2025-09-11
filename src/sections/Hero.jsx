import React from 'react';
 import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-evergreen via-green-800 to-green-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-lime rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-electric-lime rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-lime rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            One Click.
            <br />
            <span className="text-electric-lime">Every Bill.</span>
            <br />
            Paid.
          </h1>
          
          <p className="font-sans text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Consolidate all your bills into one simple payment. Recharge your Electricity,Gas and diesel, Dstv and more with ease.
            Save time, reduce stress, and never miss a utility payment again.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => document.querySelector('#early-access').scrollIntoView({ behavior: 'smooth' })}
              className="animate-slide-up"
            >
              Get Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#how-it-works').scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-white hover:bg-white hover:text-charcoal"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-sans font-bold text-electric-lime mb-2">15+</div>
              <div className="text-white/80 font-sans">Utility Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-sans font-bold text-electric-lime mb-2">2.5k+</div>
              <div className="text-white/80 font-sans">Beta Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-sans font-bold text-electric-lime mb-2">98%</div>
              <div className="text-white/80 font-sans">Satisfaction Rate</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
