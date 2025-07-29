import { FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Top Row: Brand + Email */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-2xl font-serif tracking-wide">MINDSEYE</h2>
          <a
            href="mailto:letstalk@mecstudio.com"
            className="text-xl md:text-2xl font-medium mt-3 md:mt-0"
          >
            letstalk@mecstudio.com
          </a>
        </div>

        {/* Bottom Row: Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Address Section */}
          <div>
            <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Address</h3>
            <p className="text-sm leading-relaxed">
              902 Marathon Icon,<br />
              Off GK Marg,<br />
              Lower Parel West,<br />
              Mumbai 400 013
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-2xl">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Contact Us</h3>
            <p className="text-sm">+91 22 4004 8865 / 8864 / 8832</p>
            <a
              href="mailto:letstalk@mecstudio.com"
              className="block text-sm font-medium mt-2 footer-link"
            >
              letstalk@mecstudio.com
            </a>
            <a href="#" className="text-sm font-semibold mt-2 inline-block footer-link">
              Get Directions
            </a>

            <a href="#" className="text-sm font-semibold mt-2 inline-block footer-link">
              Get Directions
            </a>
          </div>

          {/* Agency Links */}
          <div>
            <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Agency</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">Capabilities</a></li>
              <li><a href="#" className="footer-link">Our Work / Portfolio</a></li>
              <li><a href="#" className="footer-link">Studio</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h3 className="text-teal-400 text-sm font-semibold uppercase mb-2">Solutions</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="footer-link">Branding</a></li>
              <li><a href="#" className="footer-link">Website UX/UI</a></li>
              <li><a href="#" className="footer-link">Marketing Collaterals</a></li>
              <li><a href="#" className="footer-link">Events</a></li>
              <li><a href="#" className="footer-link">Presentation</a></li>
              <li><a href="#" className="footer-link">Illustrations</a></li>
              <li><a href="#" className="footer-link">Animation & Video</a></li>
              <li><a href="#" className="footer-link">Research & Insights</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
