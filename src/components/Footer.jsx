import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/paynergy-icon-w-bg.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#early-access' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Security', href: '#features' },
    ],
    company: [
      { name: 'About', href: '#testimonials' },
      { name: 'Careers', href: '#testimonials' },
      { name: 'Press', href: '#testimonials' },
      { name: 'Contact', href: '#early-access' },
      { name: 'Support', href: '#faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className='bg-charcoal text-black py-16 lg:py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='col-span-2 flex flex-col' data-aos='fade-up'>
            <a href='#' className='flex items-center space-x-2'>
              <img
                src={logo}
                alt='Paynergy Logo'
                className='h-8 w-auto object-contain'
              />
              <span className='font-sans font-bold text-xl lg:text-2xl text-charcoal'>
                Paynergy
              </span>
            </a>
            <p className='font-sans text-black mb-6 max-w-md leading-relaxed mt-3'>
              One Click. Every Bill. Paid. Simplify your utility payments with
              our intelligent consolidation and autopay platform.
            </p>

            {/* Contact Info */}
            <div className='space-y-3 mb-6'>
              <div className='flex items-center space-x-3'>
                <EnvelopeIcon className='w-5 h-5 text-electric-lime' />
                <span className='font-sans text-black'>hello@paynergy.com</span>
              </div>
              <div className='flex items-center space-x-3'>
                <PhoneIcon className='w-5 h-5 text-electric-lime' />
                <span className='font-sans text-black'>+234 8176777772</span>
              </div>
              <div className='flex items-center space-x-3'>
                <MapPinIcon className='w-5 h-5 text-electric-lime' />
                <span className='font-sans text-black'>Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div data-aos='fade-up' data-aos-delay='100'>
            <h3 className='font-sans font-bold text-lg text-black mb-4'>
              Product
            </h3>
            <ul className='space-y-3'>
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className='font-sans text-black hover:text-electric-lime transition-colors'>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div data-aos='fade-up' data-aos-delay='200'>
            <h3 className='font-sans font-bold text-lg text-black mb-4'>
              Company
            </h3>
            <ul className='space-y-3'>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className='font-sans text-black hover:text-electric-lime transition-colors'>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div data-aos='fade-up' data-aos-delay='300'>
            <h3 className='font-sans font-bold text-lg text-black mb-4'>
              Legal
            </h3>
            <ul className='space-y-3'>
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='font-sans text-black hover:text-electric-lime transition-colors'>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div
          className='mt-12 pt-8 border-t border-white/20'
          data-aos='fade-up'
          data-aos-delay='400'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
            <div className='text-center lg:text-left'>
              <h3 className='font-sans font-bold text-xl text-black mb-2'>
                Stay Updated
              </h3>
              <p className='font-sans text-black'>
                Get the latest news and updates about Paynergy
              </p>
            </div>
            <form className='flex w-full lg:w-auto max-w-sm'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-electric-lime font-sans'
              />
              <button
                type='submit'
                className='bg-electric-lime text-charcoal px-6 py-3 rounded-r-lg font-sans font-bold hover:bg-lime-400 transition-colors'>
                <PaperAirplaneIcon className='w-5 h-5' />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className='mt-12 pt-8 border-t border-white/20'
          data-aos='fade-up'
          data-aos-delay='500'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
            <p className='font-sans text-black text-sm'>
              © {currentYear} Paynergy. All rights reserved.
            </p>
            <div className='flex items-center space-x-6'>
              <span className='font-sans text-black text-sm'>
                Made with ❤️ in Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
