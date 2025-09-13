import React from "react";
import {
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BanknotesIcon,
  CogIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Features = () => {
  const features = [
    {
      icon: ClockIcon,
      title: "Auto-Pay on Time",
      description:
        "Never miss a payment again. We automatically pay all your utility bills on their due dates.",
      highlight: "Save 5+ hours monthly",
    },
    {
      icon: ShieldCheckIcon,
      title: "Bank-Level Security",
      description:
        "Your data is encrypted with 256-bit SSL and we never store your banking credentials.",
      highlight: "SOC 2 compliant",
    },
    {
      icon: ChartBarIcon,
      title: "Spending Analytics",
      description:
        "Track your energy usage and spending patterns with detailed monthly reports and insights.",
      highlight: "Real-time dashboard",
    },
    {
      icon: BanknotesIcon,
      title: "One Simple Payment",
      description:
        "Consolidate all your utility bills into a single monthly payment that fits your budget.",
      highlight: "Flexible scheduling",
    },
    {
      icon: CogIcon,
      title: "Smart Notifications",
      description:
        "Get alerts about unusual usage, rate changes, and upcoming payments via email or SMS.",
      highlight: "Customizable alerts",
    },
    {
      icon: HeartIcon,
      title: "Carbon Offset Option",
      description:
        "Automatically offset your energy consumption's carbon footprint with certified programs.",
      highlight: "Go green easily",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to make utility bill management
            effortless
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-400 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Security Badges */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-8">Trusted by thousands of users</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Bank-Level Security",
              "256-bit Encryption",
              "SOC 2 Compliant",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-gray-800"
              >
                <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">✓</span>
                </div>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
