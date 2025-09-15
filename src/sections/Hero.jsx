import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../components/Button';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id='hero'
      className='
        relative 
        min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] 
        pt-16 md:pt-20 
        flex items-center justify-center 
        overflow-hidden 
        bg-gradient-to-br from-deep-evergreen via-green-800 to-green-900
      '>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/heroImage.png'
          alt='Paynergy Background'
          className='w-full h-full object-cover object-right'
        />
        {/* Overlay for readability */}
        <div className='absolute inset-0 bg-black/60'></div>
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-32 h-32 bg-electric-lime rounded-full blur-3xl animate-float'></div>
        <div
          className='absolute bottom-20 right-20 w-48 h-48 bg-electric-lime rounded-full blur-3xl animate-float'
          style={{ animationDelay: '2s' }}></div>
        <div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-electric-lime rounded-full blur-3xl animate-float'
          style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div data-aos='fade-up' className='max-w-4xl mx-auto'>
          <h1 className='font-sans font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight'>
            One Click.
            <br />
            <span className='text-electric-lime'>Every Bill.</span>
            <br />
            Paid.
          </h1>

          <p className='font-sans text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed'>
            Consolidate all your bills into one simple payment. Recharge your
            Electricity, Gas and Diesel, DStv and more with ease. Save time,
            reduce stress, and never miss a utility payment again.
          </p>

          {/* Buttons */}
          <div
            data-aos='fade-up'
            data-aos-delay='300'
            className='flex flex-col sm:flex-row gap-4 cursor-pointer justify-center items-center'>
            <Button
              size='lg'
              onClick={() =>
                document
                  .querySelector('#early-access')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='animate-slide-up'>
              Get Early Access
            </Button>
            <Button
              variant='outline'
              size='lg'
              onClick={() =>
                document
                  .querySelector('#how-it-works')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='border-white text-white cursor-pointer hover:bg-white hover:text-charcoal'>
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div
            data-aos='fade-up'
            data-aos-delay='600'
            className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto'>
            <div className='text-center'>
              <div className='text-3xl lg:text-4xl font-sans font-bold text-white mb-2'>
                15+
              </div>
              <div className='text-white/80 font-sans'>Utility Providers</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl lg:text-4xl font-sans font-bold text-white mb-2'>
                2.5k+
              </div>
              <div className='text-white/80 font-sans'>Beta Users</div>
            </div>
            <div className='text-center'>
              <div className='text-3xl lg:text-4xl font-sans font-bold text-white mb-2'>
                98%
              </div>
              <div className='text-white/80 font-sans'>Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos='fade-in'
        data-aos-delay='1000'
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce'></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
