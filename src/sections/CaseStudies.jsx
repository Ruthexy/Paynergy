import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BuildingOfficeIcon,
  UsersIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const CaseStudies = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const caseStudies = [
    {
      icon: BuildingOfficeIcon,
      title: "Green Valley Restaurant Chain",
      description:
        "A regional restaurant chain with 12 locations struggled with managing separate utility accounts for each restaurant.",
      challenge:
        "12 separate utility bills monthly, missed payments leading to late fees, inconsistent billing cycles",
      solution:
        "Consolidated all locations into one dashboard, automated payments, unified billing cycle",
      results: {
        timeSaved: "15 hours/month",
        lateFees: "$0",
        satisfaction: "95%",
      },
      testimonial:
        "Paynergy saved us countless hours and eliminated all late fees. Our accounting team can finally focus on growing the business instead of chasing utility bills.",
    },
    {
      icon: UsersIcon,
      title: "TechHub Co-working Space",
      description:
        "A busy co-working space with 200+ members needed better utility cost management across their 3-floor facility.",
      challenge:
        "Complex utility allocation, seasonal cost variations, manual reconciliation",
      solution:
        "Automated allocation system, predictive analytics, real-time usage monitoring",
      results: {
        timeSaved: "8 hours/month",
        costReduction: "18%",
        accuracy: "99.5%",
      },
      testimonial:
        "The analytics dashboard gives us insights we never had before. We've optimized our energy usage and saved significantly on costs.",
    },
    {
      icon: TruckIcon,
      title: "SwiftLogistics Warehouse",
      description:
        "A 50,000 sq ft distribution center needed to streamline utility payments across multiple service providers.",
      challenge:
        "Multiple providers, peak usage charges, complex rate structures",
      solution:
        "Single payment consolidation, usage optimization alerts, rate comparison tools",
      results: {
        timeSaved: "20 hours/month",
        costReduction: "22%",
        providers: "8 → 1",
      },
      testimonial:
        "Going from 8 separate bills to just one payment has been a game-changer. The cost savings were an unexpected bonus!",
    },
  ];

  return (
    <section id="case-studies" className="py-20 lg:py-32 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-green-800 mb-4">
            Success Stories
          </h2>
          <p className="font-sans text-lg text-charcoal/70 max-w-2xl mx-auto">
            See how businesses like yours are saving time and money with
            Paynergy
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-electric-lime rounded-full mb-6">
                  <study.icon className="w-8 h-8 text-green-800" />
                </div>
                <h3 className="font-sans font-bold text-2xl lg:text-3xl text-green-800 mb-4">
                  {study.title}
                </h3>
                <p className="font-sans text-charcoal mb-6 leading-relaxed">
                  {study.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-sans font-semibold text-green-800 mb-2">
                      Challenge:
                    </h4>
                    <p className="font-sans text-charcoal">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-green-800 mb-2">
                      Solution:
                    </h4>
                    <p className="font-sans text-charcoal/70">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="text-center bg-white p-4 rounded-lg"
                    >
                      <div className="font-sans font-bold text-electric-lime text-lg lg:text-xl mb-1">
                        {value}
                      </div>
                      <div className="font-sans text-xs text-charcoal/60 capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1" data-aos="fade-left">
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-deep-evergreen rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-serif text-2xl">"</span>
                    </div>
                    <p className="font-serif text-lg text-charcoal/80 leading-relaxed mb-6">
                      {study.testimonial}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-electric-lime rounded-full flex items-center justify-center">
                      <study.icon className="w-5 h-5 text-charcoal" />
                    </div>
                    <div className="ml-3">
                      <div className="font-sans font-semibold text-charcoal">
                        {study.title}
                      </div>
                      <div className="font-sans text-sm text-charcoal/60">
                        Paynergy Customer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
