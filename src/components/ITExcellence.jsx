import React from "react";
import {
  Server,
  Cable,
  Handshake,
  Wrench,
  Layers,
  Package,
} from "lucide-react"; // lucide icons
import bgPattern from "../../src/assets/bg_memphis_1.png"; // decorative background (like screenshot)

const services = [
  {
    icon: <Server className="w-8 h-8 text-green-400" />,
    title: "Remote Management",
    description:
      "We have a team of experienced bilingual engineers who can work remotely as per the requirements.",
  },
  {
    icon: <Cable className="w-8 h-8 text-pink-400" />,
    title: "Cabling Services",
    description:
      "Create a patching plan and share it with us. We can perform cable patching and removal on your behalf.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-400" />,
    title: "Smart Hands Support Services",
    description:
      "Smart Hands support service is an around-the-clock, on-site, operational support service.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-teal-400" />,
    title: "Troubleshooting",
    description:
      "As part of Nippon IT Hub Smart Hands support services, our field technicians can take care of all sorts of data center tasks.",
  },
  {
    icon: <Layers className="w-8 h-8 text-green-400" />,
    title: "Rack and Stack, Equipment Installation Services",
    description:
      "We can perform Racking and Stacking, Devices Installation and Decommission, Relocation of Devices, Peripherals installation, Rack PDU’s installation, IMAC.",
  },
  {
    icon: <Package className="w-8 h-8 text-pink-400" />,
    title: "Asset Management",
    description:
      "Under our asset Management services, we can take care of your equipment or peripherals inventory.",
  },
];

const ITExcellence = () => {
  return (
    <section
      className="relative bg-[#0A1124] text-white py-20"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left",
        backgroundSize: "300px",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Streamlining IT Excellence in Japan and Beyond
          </h2>
          <p className="text-gray-300 max-w-lg">
            Simplifying technology solutions for businesses in Japan and around
            the world. Experience excellence in IT support, delivered with
            precision and care.
          </p>
          <div className="w-12 h-[2px] bg-blue-500 mt-6"></div>
        </div>

        {/* Right Services Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#0f1a36] p-6 rounded-xl flex flex-col items-start hover:shadow-lg transition"
            >
              <div className="mb-4 p-3 rounded-full bg-[#182342]">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITExcellence;
