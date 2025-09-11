import React, { useState } from 'react';
 import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Paynergy consolidate my utility bills?",
      answer: "Paynergy connects to your utility providers through secure APIs and banking integrations. We automatically fetch your bills, consolidate them into a single monthly payment, and pay each provider on your behalf on their due dates. You get one simple statement and make one payment to us."
    },
    {
      question: "Is my financial information secure?",
      answer: "Absolutely. We use bank-level 256-bit SSL encryption and never store your banking credentials. We're SOC 2 compliant and undergo regular security audits. Your data is protected with the same standards used by major financial institutions."
    },
    {
      question: "Which utility providers do you support?",
      answer: "We currently support 15+ major utility providers including electricity, gas, water, and waste management companies across the United States. We're constantly adding new providers. If your provider isn't supported yet, we'll add them to our roadmap."
    },
    {
      question: "What happens if there's an issue with a payment?",
      answer: "Our system monitors all payments 24/7. If there's ever an issue, we'll immediately notify you via email and SMS, work directly with the utility provider to resolve it, and cover any late fees that might occur due to our error."
    },
    {
      question: "Can I still control when and how much I pay?",
      answer: "Yes! You have full control over your payment schedule, spending limits, and preferences. You can pause, modify, or cancel payments anytime through your dashboard. We also send you advance notifications before processing any payments."
    },
    {
      question: "How much does Paynergy cost?",
      answer: "We charge a simple monthly fee of $9.99 for personal accounts and $29.99 for business accounts, regardless of how many utility bills you have. This includes all features: consolidation, autopay, analytics, notifications, and customer support."
    },
    {
      question: "What if I want to cancel my service?",
      answer: "You can cancel anytime with no fees or penalties. We'll help you transition back to direct payments with your utility providers and ensure there are no service interruptions. Your cancellation takes effect at the end of your current billing cycle."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We offer 24/7 customer support via email, chat, and phone. Our support team is based in the US and can help with everything from setup questions to payment issues. Premium support is included with all accounts at no extra cost."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-green-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-lg text-charcoal/70">
            Everything you need to know about Paynergy
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-off-white/50 transition-colors rounded-xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-sans font-semibold text-charcoal pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUpIcon className="w-5 h-5 text-electric-lime flex-shrink-0" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 text-charcoal/50 flex-shrink-0" />
                )}
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="font-sans text-charcoal/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="font-sans font-bold text-xl text-charcoal mb-4">
            Still have questions?
          </h3>
          <p className="font-sans text-charcoal/70 mb-6">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-electric-lime text-charcoal px-6 py-3 rounded-lg font-sans font-bold hover:bg-lime-400 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-deep-evergreen text-deep-evergreen px-6 py-3 rounded-lg font-sans font-bold hover:bg-deep-evergreen hover:text-white transition-colors">
              Schedule a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
