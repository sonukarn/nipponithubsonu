import { Bookmark } from "lucide-react";
import HeroImg from "../../src/assets/tabhero.jpg";

export default function Hero() {
  return (
    <section className="bg-[#0a1b3d] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Card first */}
        <div
          className="bg-white text-gray-900 rounded-xl shadow-lg p-6 sm:p-8
                        w-full max-w-md mb-6 md:mb-0 
                        md:relative md:z-10 md:-mr-16 md:mt-12"
        >
          <p className="text-sm text-gray-600 mb-2">Welcome To Nippon IT HUB</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Your Gateway to On-Demand Innovation in Japan
          </h2>

          {/* Divider with icon */}
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-gray-300 w-1/3"></span>
            <Bookmark className="text-blue-500 mx-3 w-5 h-5" />
            <span className="border-t border-gray-300 w-1/3"></span>
          </div>

          <p className="text-gray-700 text-sm md:text-base">
            Your dedicated source for on-demand IT excellence in Japan, offering
            a comprehensive range of support services with experienced bilingual
            experts, ensuring your IT needs are met with precision and
            efficiency.
          </p>
        </div>

        {/* Image next */}
        <div className="relative flex-1 flex justify-center md:justify-start">
          <img
            src={HeroImg}
            alt="Nippon IT Hub"
            className="w-full max-w-sm sm:max-w-md md:max-w-[500px] md:h-[500px] object-cover object-center rounded-xl shadow-lg"
          />
        </div>

        {/* Services List */}
        <div className="flex-1 space-y-6 mt-12 md:mt-0 md:pl-12 w-full">
          <h3 className="text-2xl font-bold">What We Do?</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-green-600 p-2 rounded-full">
                <i className="fas fa-desktop"></i>
              </div>
              <div>
                <h4 className="font-semibold">Device Management</h4>
                <p className="text-sm text-gray-300">
                  We use remote hands to check the status of the device and
                  process it according to the customer's needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-pink-600 p-2 rounded-full">
                <i className="fas fa-users"></i>
              </div>
              <div>
                <h4 className="font-semibold">Physical Manpower</h4>
                <p className="text-sm text-gray-300">
                  Rack and stack, relocation, Rack PDU’s installation,
                  peripherals replacement, IMAC.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <i className="fas fa-tools"></i>
              </div>
              <div>
                <h4 className="font-semibold">Troubleshooting</h4>
                <p className="text-sm text-gray-300">
                  Everything from maintenance to replacing parts,
                  troubleshooting and resolving other issues.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="bg-cyan-600 p-2 rounded-full">
                <i className="fas fa-truck"></i>
              </div>
              <div>
                <h4 className="font-semibold">Shipping & Receiving</h4>
                <p className="text-sm text-gray-300">
                  Goods receipt and provision, labeling and inventory of
                  delivered goods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
