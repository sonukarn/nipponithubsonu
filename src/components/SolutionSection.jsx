import React from "react";
import bgImage from "../../src/assets/blade-servers-background.jpg"; // change to your background
import videoThumb from "../../src/assets/it-engineer-in-server-room.jpg"; // preview image

const SolutionSection = () => {
  return (
    <section className="relative">
      {/* Background Hero */}
      <div
        className="relative bg-cover bg-center bg-fixed h-screen flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto mt-12 text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Providing the simplest solution for the most complex problem.
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Nippon IT Hub excels at delivering straightforward solutions to
            intricate IT issues, streamlining your technology requirements with
            expertise and ease.
          </p>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-md shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 mb-12">
            Contact Now!
          </button>
        </div>
      </div>

      {/* Video Card */}
      <div className="relative z-20 -mt-20 max-w-3xl mx-auto px-6">
        <div className=" rounded-2xl shadow-2xl overflow-hidden border-[10px] border-white">
          <div className="relative">
            <img
              src={videoThumb}
              alt="Video Thumbnail"
              className="w-full max-w-3xl mx-auto object-cover"
            />
            {/* Play Button */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-blue-600"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
