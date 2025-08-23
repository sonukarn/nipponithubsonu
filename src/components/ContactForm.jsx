import ContactImg from "../../src/assets/business-meeting-and-teamwork-by-business-people.jpg";
export default function ContactForm() {
  return (
    <section className="relative bg-[#071225] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Form Section */}
        <div>
          <span className="text-blue-400 font-medium">Get in touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Don&apos;t hesitate, drop us a line
          </h2>
          <p className="text-gray-300 mt-4 max-w-lg">
            Reach out to Nippon IT Hub today and let’s simplify your IT journey.
          </p>

          <p className="text-sm text-gray-400 mt-6">
            Fields marked with an <span className="text-red-500">*</span> are
            required
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 transition"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src={ContactImg}
            alt="Team Discussion"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
