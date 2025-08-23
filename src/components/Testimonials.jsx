import React from "react";
const testimonials = [
  {
    id: 1,
    name: "Mary Johnson",
    role: "IT Manager",
    feedback:
      "The team at Nippon IT Hub has consistently provided us with top-notch IT support. Their quick response time and comprehensive solutions have been crucial in maintaining our IT infrastructure’s reliability.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Kenji Yamamoto",
    role: "COO",
    feedback:
      "Nippon IT Hub's simplified solutions have been a game-changer for our business. Their expertise in data center migration and bilingual support has made a significant impact on our IT efficiency.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Samantha Lee",
    role: "CTO",
    feedback:
      "Nippon IT Hub offers unparalleled support that goes beyond the norm. Their dedication to excellence and competitive rates have made them our go-to partner for all our IT needs.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url("/assets/bg_memphis_1.png")`, // ✅ reference from public folder
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Section Content */}
      <div className="relative z-10 text-center mb-16 px-6">
        <p className="text-blue-500 font-semibold text-lg mb-2">Testimonial</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug max-w-3xl mx-auto">
          Let Our Clients Speak for Themselves
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Nippon IT Hub proudly serves a diverse array of clients, ranging from
          global enterprises to local businesses. Our clientele represents a
          tapestry of industries, each benefiting from our customized IT
          solutions.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-xl p-8 text-left transition-transform hover:scale-[1.02] hover:shadow-2xl duration-300"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">{t.feedback}</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-gray-300"
              />
              <div>
                <h4 className="text-gray-900 font-semibold">{t.name}</h4>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Avatars */}
      <img
        src="https://randomuser.me/api/portraits/men/85.jpg"
        alt="client"
        className="absolute top-10 left-10 w-16 h-16 rounded-full border-4 border-white shadow-lg hidden md:block"
      />
      <img
        src="https://randomuser.me/api/portraits/women/22.jpg"
        alt="client"
        className="absolute top-20 right-16 w-16 h-16 rounded-full border-4 border-white shadow-lg hidden md:block"
      />
      <img
        src="https://randomuser.me/api/portraits/men/45.jpg"
        alt="client"
        className="absolute bottom-20 left-16 w-16 h-16 rounded-full border-4 border-white shadow-lg hidden md:block"
      />
      <img
        src="https://randomuser.me/api/portraits/women/12.jpg"
        alt="client"
        className="absolute bottom-10 right-28 w-16 h-16 rounded-full border-4 border-white shadow-lg hidden md:block"
      />
    </section>
  );
};

export default Testimonials;
