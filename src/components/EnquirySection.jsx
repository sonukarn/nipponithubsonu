import React from "react";
import bgImage from "../../public/assets/bg_memphis_1.png";

const EnquirySection = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative z-10 w-full px-10 md:px-20 lg:px-28 flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Send Us Your Enquiry
          </h2>
          <div className="w-16 h-1 bg-blue-500 mt-4 mb-6"></div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-white pl-0 md:pl-16">
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Ready to Elevate Your IT Experience? Complete the form below, and
            let’s embark on a journey to simplify your technology challenges and
            drive success together.
          </p>
          <p className="text-sm mb-4">
            Fields marked with an <span className="text-red-500">*</span> are
            required
          </p>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-md bg-black bg-opacity-60 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-md bg-black bg-opacity-60 text-white focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 rounded-md bg-black bg-opacity-60 text-white focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
