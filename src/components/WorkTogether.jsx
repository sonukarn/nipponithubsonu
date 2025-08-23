import mapImg from "../../src/assets/map_bg.png";
export default function WorkTogether() {
  return (
    <section className="relative isolate overflow-hidden h-[90vh]">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${mapImg})` }}
      />

      {/* Light navy overlay */}
      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(180deg,rgba(12,27,46,0.85)_0%,rgba(18,38,63,0.92)_100%)]"
      />

      <div
        className="absolute inset-x-0 top-0 h-[60%] -z-10
        bg-[radial-gradient(80%_50%_at_50%_0%,rgba(24,144,255,0.25)_0%,rgba(24,144,255,0)_70%)]"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center text-white">
        {/* small "Get started" */}
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-[#1890FF]">
          Get started
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold sm:text-5xl">
          Let’s Work Together! Tell Us About Your Project.
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-white/70">
          Join the Nippon IT Hub family and discover the power of simplified,
          bilingual IT solutions for your success!
        </p>

        {/* Solid Blue Button */}
        <button
          className="mt-8 rounded-md bg-[#1890FF] px-6 py-3 font-medium text-white shadow-lg 
                     hover:bg-[#1475cc] transition"
        >
          Send Us Enquiry
        </button>
      </div>
    </section>
  );
}
