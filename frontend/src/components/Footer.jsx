// Footer.js
import React from 'react';

const FooterSection = ({ title, children }) => (
  <div className="mb-8 md:mb-0">
    <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-4">{title}</h3>
    <ul className="space-y-2">
      {children}
    </ul>
  </div>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className="text-white hover:text-gray-300 text-sm">
      {children}
    </a>
  </li>
);

const SocialLink = ({ href, iconClass }) => (
  <a href={href} className="text-white hover:text-gray-300 mr-4 text-xl">
    <i className={iconClass}></i>
  </a>
);

function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-light tracking-wide">MINDSEYE</h2>
          </div>
          <div>
            <p className="text-xl font-light">letstalk@mecstudio.com</p>
          </div>
        </div>

        <hr className="border-gray-700 mb-8" />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection title="ADDRESS">
            <li className="text-white text-sm">902 Marathon Icon,</li>
            <li className="text-white text-sm">Off GK Marg,</li>
            <li className="text-white text-sm">Lower Parel West,</li>
            <li className="text-white text-sm">Mumbai 400 013</li>
            <li className="mt-4">
              <SocialLink href="#" iconClass="fab fa-youtube" /> {/* Placeholder for YouTube icon */}
              <SocialLink href="#" iconClass="fab fa-linkedin-in" /> {/* Placeholder for LinkedIn icon */}
            </li>
          </FooterSection>

          <FooterSection title="CONTACT US">
            <li className="text-white text-sm">+91 22 4004 8865 / 8864 / 8832</li>
            <li className="text-white text-sm">letstalk@mecstudio.com</li>
            <li className="mt-4">
              <FooterLink href="#">Get Directions</FooterLink>
            </li>
          </FooterSection>

          <FooterSection title="AGENCY">
            <FooterLink href="#">Home</FooterLink>
            <FooterLink href="#">Capabilities</FooterLink>
            <FooterLink href="#">Our Work / Portfolio</FooterLink>
            <FooterLink href="#">Studio</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterSection>

          <FooterSection title="SOLUTIONS">
            <FooterLink href="#">Branding</FooterLink>
            <FooterLink href="#">Website UX/UI</FooterLink>
            <FooterLink href="#">Marketing Collaterals</FooterLink>
            <FooterLink href="#">Events</FooterLink>
            <FooterLink href="#">Presentation</FooterLink>
            <FooterLink href="#">Illustrations</FooterLink>
            <FooterLink href="#">Animation & Video</FooterLink>
            <FooterLink href="#">Research & Insights</FooterLink>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
}

export default Footer;