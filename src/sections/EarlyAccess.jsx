import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { EnvelopeIcon, SparklesIcon } from "@heroicons/react/24/outline";

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    email: "",
    utilityProvider: "",
    accountType: "personal",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const utilityProviders = [
    "Eko Electricity Distribution Company (EKEDC) – Lagos",
  "Ikeja Electric (IE) – Lagos",
  "Abuja Electricity Distribution Company (AEDC) – FCT, Kogi, Niger, Nasarawa",
  "Lagos State Water Corporation (LSWC)",
  "Abuja Water Board",
  "Kano State Water Board",
   "Dominion Energy",
  "Water Boards",
  "Gas & Energy Providers",
  "TV & Internet (DSTV, Startimes, MTN, etc.)"
  ];

  if (isSubmitted) {
    return (
      <section
        id="early-access"
        className="py-20 lg:py-32 bg-gradient-to-br from-deep-evergreen to-green-800"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            data-aos="zoom-in"
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-lime rounded-full mb-6">
              <SparklesIcon className="w-8 h-8 text-charcoal" />
            </div>
            <h2 className="font-sans font-bold text-2xl lg:text-3xl text-charcoal mb-4">
              Welcome to the Future!!
            </h2>
            <p className="font-sans text-lg text-charcoal/70 mb-6">
              Thanks for joining our early access program! We'll be in touch
              soon with your exclusive invitation.
            </p>
            <p className="font-sans text-sm text-charcoal/60">
              Check your email for confirmation and updates on our launch
              timeline.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="early-access"
      className="py-20 lg:py-32 bg-gradient-to-br from-deep-evergreen to-green-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Get Early Access
          </h2>
          <p className="font-sans text-xl text-white/90 max-w-2xl mx-auto">
            Be among the first to experience the future of utility bill
            management
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div>
              <h3 className="font-sans font-bold text-2xl lg:text-3xl text-charcoal mb-6">
                Join 2,500+ beta users
              </h3>

              <div className="space-y-4 mb-8">
                {[
                  {
                    title: "Early Access",
                    desc: "Be first to try new features",
                  },
                  {
                    title: "Lifetime Discount",
                    desc: "50% off forever for early adopters",
                  },
                  {
                    title: "Priority Support",
                    desc: "Direct access to our team",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start space-x-3"
                    data-aos="fade-up"
                    data-aos-delay={300 + idx * 100}
                  >
                    <div className="w-6 h-6 bg-electric-lime rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-charcoal text-xs font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-sans font-semibold text-charcoal">
                        {item.title}
                      </h4>
                      <p className="font-sans text-sm text-charcoal/70">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="bg-off-white rounded-lg p-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <p className="font-sans text-sm text-charcoal/60 mb-2">
                  Limited spots remaining
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-electric-lime h-2 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
                <p className="font-sans text-xs text-charcoal/50 mt-2">
                  2,187 of 2,500 spots filled
                </p>
              </div>
            </div>

            {/* Right Column (Form) */}
            <div data-aos="fade-left" data-aos-delay="400">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-sans font-medium text-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal/40" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-lime focus:border-transparent font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Utility Provider */}
                <div>
                  <label
                    htmlFor="utilityProvider"
                    className="block font-sans font-medium text-charcoal mb-2"
                  >
                    Primary Utility Provider
                  </label>
                  <select
                    id="utilityProvider"
                    name="utilityProvider"
                    required
                    value={formData.utilityProvider}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-lime focus:border-transparent font-sans"
                  >
                    <option value="">Select your provider</option>
                    {utilityProviders.map((provider) => (
                      <option key={provider} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Account Type */}
                <div>
                  <label className="block font-sans font-medium text-charcoal mb-2">
                    Account Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {["personal", "business"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-electric-lime transition-colors"
                      >
                        <input
                          type="radio"
                          name="accountType"
                          value={type}
                          checked={formData.accountType === type}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div
                          className={`flex-1 text-center ${
                            formData.accountType === type
                              ? "text-electric-lime font-semibold"
                              : "text-charcoal"
                          }`}
                        >
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-electric-lime text-charcoal py-4 rounded-lg font-sans font-bold text-lg hover:bg-lime-400 transition-colors"
                >
                  Join Early Access
                </button>

                <p className="font-sans text-xs text-charcoal/60 text-center">
                  By joining, you agree to our Terms of Service and Privacy
                  Policy. No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
