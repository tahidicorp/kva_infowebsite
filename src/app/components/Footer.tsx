"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Logo Section */}
        <div>
          <Image
            src="/logo.png"
            alt="Mizan Logo"
            width={120}
            height={60}
            className="mb-4"
          />
          <p className="text-sm text-gray-400">&copy; 2025 Mizan Investments. All rights reserved.</p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/financing" className="hover:text-green-500">Finance</Link>
            </li>
            <li>
              <Link href="/construction" className="hover:text-green-500">Construction</Link>
            </li>
            <li>
              <Link href="/real-estate" className="hover:text-green-500">Real Estate</Link>
            </li>
            <li>
              <Link href="/kva-ride" className="hover:text-green-500">KVA Ride</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="text-gray-300 space-y-2">
            <p className="flex items-center gap-2">
              <Mail size={16} /> mizaninvestments@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +1 773 746 3519
            </p>
          </div>
          <div className="mt-4 flex gap-4">
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
