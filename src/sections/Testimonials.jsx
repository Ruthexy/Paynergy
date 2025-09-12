import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { StarIcon } from "@heroicons/react/24/solid";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Austin, TX",
      rating: 5,
      text: "Paynergy has been a lifesaver! I used to spend hours every month managing utility bills for my rental properties. Now it's all automated and I never worry about missed payments.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Small Business Owner",
      location: "Seattle, WA",
      rating: 5,
      text: "As a restaurant owner, the last thing I want to worry about is utility bills. Paynergy consolidated everything and even helped us identify cost savings. Highly recommend!",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Property Manager",
      location: "Miami, FL",
      rating: 5,
      text: "Managing utilities for 50+ units was a nightmare. Paynergy streamlined everything into one simple dashboard. Our tenants are happier and our books are cleaner.",
      avatar: "ER",
    },
    {
      name: "David Kim",
      role: "Startup Founder",
      location: "San Francisco, CA",
      rating: 5,
      text: "The carbon offset feature is brilliant. We're reducing our environmental impact while simplifying payments. It's a win-win for our company and the planet.",
      avatar: "DK",
    },
    {
      name: "Lisa Thompson",
      role: "Finance Director",
      location: "Denver, CO",
      rating: 5,
      text: "The analytics dashboard gives us insights we never had before. We've optimized our energy usage and the cost savings have been substantial.",
      avatar: "LT",
    },
    {
      name: "Robert Martinez",
      role: "Facilities Manager",
      location: "Chicago, IL",
      rating: 5,
      text: "Going from 15 separate utility bills to just one payment has transformed our monthly accounting process. The time savings alone justify the cost.",
      avatar: "RM",
    },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
            What Our Users Say
          </h2>
          <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who've simplified their
            utility payments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-off-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-electric-lime" />
                ))}
              </div>

              <p className="font-serif text-lg text-charcoal/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-electric-lime rounded-full flex items-center justify-center">
                  <span className="font-sans font-bold text-charcoal">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="font-sans font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="font-sans text-sm text-charcoal/60">
                    {testimonial.role}
                  </div>
                  <div className="font-sans text-xs text-charcoal/50">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="font-sans text-lg text-charcoal/70 mb-6">
            Ready to join our satisfied customers?
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#early-access")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-electric-lime text-charcoal px-8 py-4 rounded-lg font-sans font-bold cursor-pointer text-lg hover:bg-lime-400 transition-colors"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
