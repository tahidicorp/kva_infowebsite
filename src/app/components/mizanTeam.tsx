"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative text-white pt-16 px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/invest.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-12 animate-fade-up">
        
        {/* Logo & About */}
        <div className="space-y-4">
          <Image
            src="/logo.png"
            alt="Mizan Logo"
            width={100}
            height={100}
            className="mb-2 rounded-lg shadow-lg"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Empowering growth across real estate, finance, and construction —
            driven by innovation and excellence.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-500 pb-2">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300">
            {[
              { name: "Finance", href: "/financing" },
              { name: "Construction", href: "/construction" },
              { name: "Real Estate", href: "/real-estate" },
              { name: "KVA Ride", href: "/kva-ride" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative inline-block hover:text-green-400 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-400 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-green-500 pb-2">
            Contact
          </h3>
          <div className="text-gray-300 space-y-2">
            <p className="flex items-center gap-2 hover:text-green-400 transition">
              <Mail size={16} /> mizaninvestments@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-green-400 transition">
              <Phone size={16} /> +1 773 746 3519
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            {[
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                className="p-2 rounded-full bg-white/10 hover:bg-green-500 transition duration-300 transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 mt-12 border-t border-white/20 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Mizan Investments. All rights reserved.
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
