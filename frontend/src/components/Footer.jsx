/** @format */
import { FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-12">

        {/* MOBILE VIEW */}
        <div className="block md:hidden space-y-6">
          {/* Agency Intro */}
          <div className="text-xs text-gray-400 space-y-1">
            <p>A Full-Service Digital Marketing Agency</p>
            <p>902 Marathon Icon</p>
            <p>Off GK Marg, Lower Parel West</p>
            <p>Mumbai 400 013</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-teal-400 text-sm font-semibold uppercase">
              Contact Us
            </h3>
            <p className="text-sm">+91 22 4004 8865 / 8864 / 8832</p>
            <a
              href="mailto:letstalk@mecstudio.com"
              className="block text-sm mt-2 underline"
            >
              letstalk@mecstudio.com
            </a>
            <a
              href="#"
              className="text-sm mt-2 inline-block underline"
            >
              Get Directions
            </a>
          </div>

          {/* Big Email */}
          <div>
            <a
              href="mailto:letstalk@mecstudio.com"
              className="text-lg font-medium text-teal-100"
            >
              letstalk@mecstudio.com
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6">
            {/* Agency */}
            <div>
              <h3 className="text-teal-400 text-sm font-semibold uppercase">
                Agency
              </h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#">Home</a></li>
                <li><a href="#">Capabilities</a></li>
                <li><a href="#">Our Work / Portfolio</a></li>
                <li><a href="#">Studio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-teal-400 text-sm font-semibold uppercase">
                Solutions
              </h3>
              <ul className="space-y-1 text-sm">
                <li><a href="#">Branding</a></li>
                <li><a href="#">Website UX/UI</a></li>
                <li><a href="#">Marketing Collaterals</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Presentation</a></li>
                <li><a href="#">Illustrations</a></li>
                <li><a href="#">Animation & Video</a></li>
                <li><a href="#">Research & Insights</a></li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-2xl">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="flex flex-col gap-10">
            {/* Top Row */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif tracking-wide">MINDSEYE</h2>
              <a
                href="mailto:letstalk@mecstudio.com"
                className="text-2xl font-medium"
              >
                letstalk@mecstudio.com
              </a>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-4 gap-8">
              {/* Address */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">
                  Address
                </h3>
                <p className="text-sm leading-relaxed">
                  902 Marathon Icon,<br />
                  Off GK Marg,<br />
                  Lower Parel West,<br />
                  Mumbai 400 013
                </p>
                <div className="flex gap-4 mt-4 text-2xl">
                  <a href="#"><FaYoutube /></a>
                  <a href="#"><FaLinkedin /></a>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">
                  Contact Us
                </h3>
                <p className="text-sm">+91 22 4004 8865 / 8864 / 8832</p>
                <a href="mailto:letstalk@mecstudio.com" className="block text-sm mt-2 underline">
                  letstalk@mecstudio.com
                </a>
                <a href="#" className="text-sm mt-2 inline-block underline">
                  Get Directions
                </a>
              </div>

              {/* Agency Links */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">
                  Agency
                </h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Capabilities</a></li>
                  <li><a href="#">Our Work / Portfolio</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              {/* Solutions Links */}
              <div>
                <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">
                  Solutions
                </h3>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Branding</a></li>
                  <li><a href="#">Website UX/UI</a></li>
                  <li><a href="#">Marketing Collaterals</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">Presentation</a></li>
                  <li><a href="#">Illustrations</a></li>
                  <li><a href="#">Animation & Video</a></li>
                  <li><a href="#">Research & Insights</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
