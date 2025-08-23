export default function Footer() {
  return (
    <footer className="relative bg-[#0a0f1c] text-white">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-black/80"
        style={{
          backgroundImage: `url(${footerImg})`, // place bg image in public/
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        {/* Left: Logo & tagline */}
        <div>
          <img
            src="../../public/assets/nippon-it-logo-white.png" // replace with your logo
            alt="Nippon IT Hub"
            className="h-12 mb-4"
          />
          <p className="text-gray-300 text-sm">
            Simplifying IT Excellence in Japan and Beyond
          </p>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold mb-3 border-b border-blue-500 inline-block">
            Menu
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3 border-b border-blue-500 inline-block">
            Contact Us
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            Office Address: 3-19-16 Higashinakazawa, <br />
            Kamagaya, Chiba, 273-0112
          </p>
          <p className="mt-2 text-sm">
            E-Mail:{" "}
            <a
              href="mailto:sales@nipponithub.com"
              className="hover:text-blue-400"
            >
              sales@nipponithub.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>
          Copyright © 2023 Nippon IT Hub, All rights reserved. Powered by Nippon
          IT Hub.
        </p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Instagram size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-white">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
