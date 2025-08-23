import React from "react";
import { CheckCircle, LineChart, Clock, Infinity } from "lucide-react";

const Achievements = () => {
  return (
    <section className="bg-[#0a1630] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            The Story Of Years Of <br /> Achievements and Passion
          </h2>
          <p className="mt-4 text-gray-300">
            Our years of skill set and passion have led us to:
          </p>
        </div>

        {/* Right Content - Stats */}
        <div className="grid grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <CheckCircle className="text-green-400 w-10 h-10 mb-2 mx-auto md:mx-0" />
            <h3 className="text-2xl font-bold text-green-400">450+</h3>
            <p className="text-gray-300">Successful IT Projects Completed</p>
          </div>
          <div>
            <LineChart className="text-blue-400 w-10 h-10 mb-2 mx-auto md:mx-0" />
            <h3 className="text-2xl font-bold text-blue-400">7+ Years</h3>
            <p className="text-gray-300">Of Experience</p>
          </div>
          <div>
            <Clock className="text-pink-500 w-10 h-10 mb-2 mx-auto md:mx-0" />
            <h3 className="text-2xl font-bold text-pink-500">99.9% Uptime</h3>
            <p className="text-gray-300">Guarantee for critical support</p>
          </div>
          <div>
            <Infinity className="text-blue-400 w-10 h-10 mb-2 mx-auto md:mx-0" />
            <h3 className="text-2xl font-bold text-blue-400">
              Team Of Experts
            </h3>
            <p className="text-gray-300">Bilingual IT experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
