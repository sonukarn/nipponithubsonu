import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-500 to-sky-400 py-16">
      <div className="container mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Send Us Your Enquiry
          </h2>
          <div className="h-[3px] w-12 bg-white mb-6"></div>
        </div>

        {/* Right Side Form */}
        <div className="bg-transparent">
          <p className="text-white text-sm md:text-base mb-4">
            Ready to Elevate Your IT Experience? Complete the form below, and
            let’s embark on a journey to simplify your technology challenges and
            drive success together.
          </p>
          <p className="text-white text-xs mb-4">
            Fields marked with an <span className="text-red-400">*</span> are
            required
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-4 py-3 rounded-md bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-md hover:opacity-90 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
