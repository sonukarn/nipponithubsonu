import React from "react";
import bgImage from "../../src/assets/using-new-mobile-app-.jpg";

const ElevateExperience = () => {
  return (
    <section
      className="relative bg-fixed bg-top bg-cover h-[95vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg">
          Ready to Elevate Your IT Experience?
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-100 mb-8 drop-shadow">
          Nippon IT Hub stands out as the best choice, combining extensive
          expertise, a commitment to excellence, and a dedication to simplifying
          complex IT challenges, ensuring your success with every service.
        </p>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold text-lg py-3 px-10 rounded-full shadow-xl transition-transform duration-300 ease-in-out hover:scale-110">
          Let&apos;s Solve Your Problem!
        </button>
      </div>
    </section>
  );
};

export default ElevateExperience;
