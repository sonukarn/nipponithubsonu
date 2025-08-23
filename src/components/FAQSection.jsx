import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import bgImage from "../../public/assets/bg_footer.png"; // adjust path

const faqs = [
  {
    question: "WHAT SERVICES DOES NIPPON IT HUB OFFER?",
    answer:
      "We provide a wide range of IT services including software development, IT consulting, support, and more tailored to your business needs.",
  },
  {
    question: "HOW CAN I REQUEST YOUR SERVICES?",
    answer:
      "You can reach out to us via our website contact form, email, or phone. Our team will connect with you promptly.",
  },
  {
    question: "ARE YOUR EXPERTS BILINGUAL?",
    answer:
      "Yes, our team consists of bilingual experts proficient in both English and Japanese for smooth communication.",
  },
  {
    question: "WHAT AREAS DO YOU SERVE IN JAPAN?",
    answer:
      "We serve clients across Japan, including Tokyo, Osaka, Nagoya, and surrounding regions.",
  },
  {
    question: "HOW DO YOU ENSURE DATA SECURITY AND CONFIDENTIALITY?",
    answer:
      "We follow strict data security policies, encrypted communication, and NDAs to ensure your information remains secure and confidential.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative text-white py-32 px-6 lg:px-20 overflow-hidden"
      style={{
        backgroundColor: "#0A0F1C",
      }}
    >
      {/* Background image aligned to left */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-no-repeat bg-left bg-contain"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/5"></div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side */}
        <div>
          <p className="text-blue-400 font-semibold mb-4 text-xl">FAQ</p>
          <h2 className="text-6xl font-extrabold leading-tight">
            Frequently Ask <br /> Questions.
          </h2>
          <p className="mt-6 text-gray-300 text-xl max-w-md">
            Your Questions, Our Answers! Quick insights into our services and
            expertise
          </p>
          <div className="w-14 h-[3px] bg-blue-500 mt-8"></div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-6 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronDown className="w-7 h-7 text-gray-400" />
                ) : (
                  <ChevronRight className="w-7 h-7 text-gray-400" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
