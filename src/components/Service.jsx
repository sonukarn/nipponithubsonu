import { useState } from "react";
import { ChevronDown, CheckSquare } from "lucide-react";

const services = [
  {
    title: "DATA CENTER SUPPORT",
    description: `With our team of bilingual and experienced engineers, we provide comprehensive solutions, 
    from a critical IT infrastructure to round-the-clock Data Center Operations and IT hardware maintenance support.
    Uptime is of utmost importance in a data center as it directly impacts the reliability and availability of critical 
    IT infrastructure and services. With our 24/7 Service Desk, we ensure seamless operations and timely 
    response to deliver the tailored solutions that precisely meet your needs.
    We ensure business continuity, customer satisfaction, data protection, regulatory compliance, and cost efficiency.`,
    points: [
      "Remote Hands Support / Onsite Support",
      "Device Installation and Decommission",
      "Data Center Capacity Management",
      "Data Center Move",
      "Asset Inventory Management",
      "Security and Audit Compliance",
      "Shipping and Receiving",
      "Vendor Management",
      "ITAD and Remarketing",
    ],
    image: "../../public/serviceAsset/img_service_1.jpg",
  },
  {
    title: "DESKTOP / END USER SUPPORT",
    description:
      "We deliver on-site and remote support for desktops, laptops, and end users. Our bilingual engineers assist with troubleshooting, installations, and ongoing IT needs.",
    points: [
      "Onsite & Remote Support",
      "Software Installation",
      "Hardware Troubleshooting",
      "User Training",
    ],
    image: "../../public/serviceAsset/img_service_2.jpg",
  },
  {
    title: "24/7 HARDWARE MAINTENANCE",
    description:
      "We offer global hardware maintenance services with spare parts, on-site engineers, and fast response times to minimize downtime.",
    points: [
      "Proactive Hardware Monitoring",
      "Global Spare Parts Support",
      "24/7 Onsite Response",
      "Vendor Coordination",
    ],
    image: "../../public/serviceAsset/img_service_3.jpg",
  },
];

export default function Service() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative bg-cover bg-center text-white py-16"
      style={{
        backgroundImage: "url('/services-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-6">SERVICES</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Our IT managed services provide custom-made solutions to global
          companies and IT service providers who need bilingual and highly
          skilled engineers to complete their work and projects.
        </p>

        {/* Accordion */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => toggleService(index)} // whole block clickable
              className={`bg-black/50 rounded-2xl overflow-hidden transition-all cursor-pointer border border-transparent 
                hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 duration-300`}
            >
              {/* Accordion Header */}
              <div className="w-full flex justify-between items-center px-6 py-4 font-bold text-lg">
                {service.title}
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Accordion Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openIndex === index ? "max-h-[1000px] py-8" : "max-h-0"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                  {/* Left side: text */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 whitespace-pre-line">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckSquare
                            size={18}
                            className="text-blue-400 mt-1 flex-shrink-0"
                          />
                          <span className="text-gray-200">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right side: image */}
                  <div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
