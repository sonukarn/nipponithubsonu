export default function ContactHeader() {
  return (
    <section className="relative bg-gradient-to-b from-[#3456ac] to-[#172b5f] text-white min-h-screen flex items-center rounded-br-[200px] overflow-hidden">
      {/* Background images overlay */}
      <div className="absolute inset-0 z-0">
        {/* Circle decorative image */}
        <img
          src="../../public/assets/bg_memphis_1.png"
          alt="Pattern"
          className="absolute right-0 top-0 w-1/2 h-full object-contain opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <span className="text-blue-300 font-medium">Contact</span>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
            What can we help you with?
          </h1>
          <p className="text-gray-200 text-lg mt-6 md:mt-0 md:text-right max-w-md">
            Let&apos;s Connect – Your Gateway to Seamless IT Solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
