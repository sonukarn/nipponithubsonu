import React from "react";
import { Layers, Cog, Users, RefreshCw } from "lucide-react";

const features = [
  {
    id: 1,
    title: "On-Demand Expertise",
    description:
      "We're your on-demand IT workforce in Japan. Whenever you need us, we're here to address your IT challenges promptly, ensuring your business operations run smoothly.",
    icon: <Layers className="w-10 h-10" />,
    bgColor: "bg-green-50",
    iconColor: "bg-green-500",
  },
  {
    id: 2,
    title: "Simplified Solutions",
    description:
      "Our goal is to simplify the most complex IT issues. We provide straightforward solutions that make your technology requirements more manageable, so you can focus on what you do best.",
    icon: <Cog className="w-10 h-10" />,
    bgColor: "bg-blue-50",
    iconColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Collaborative Teams",
    description:
      "Our expert teams work collaboratively with your internal staff, ensuring seamless integration and enhanced productivity across all IT projects.",
    icon: <Users className="w-10 h-10" />,
    bgColor: "bg-blue-50",
    iconColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Continuous Improvement",
    description:
      "We continuously refine and optimize IT processes, leveraging the latest technologies to help your business stay ahead in a competitive environment.",
    icon: <RefreshCw className="w-10 h-10" />,
    bgColor: "bg-pink-50",
    iconColor: "bg-pink-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16 px-6">
        <p className="text-blue-600 font-semibold text-lg md:text-xl mb-4">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug max-w-3xl mx-auto">
          Maximize your IT potential starting with Nippon
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          At Nippon IT Hub, we don’t just offer IT solutions; we create
          experiences. Here’s why you should choose us:
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`relative rounded-2xl p-10 shadow-md ${feature.bgColor} transition-all duration-300 min-h-[320px] group`}
          >
            <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
              {/* Icon */}
              <div
                className={`w-20 h-20 flex items-center justify-center rounded-full mb-6 text-white transition-all duration-300 ${feature.iconColor} group-hover:bg-black hover:scale-110`}
              >
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
