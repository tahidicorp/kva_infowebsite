"use client";

import { Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function MizanTeam() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div 
        className="max-w-4xl mx-auto text-center mb-16 animate-fadeInUp"
      >
        <h2 className="text-4xl font-bold text-green-700 mb-4">Our Leadership</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the visionary driving Mizan Investments towards sustainable growth and impact.
        </p>
      </div>

      {/* CEO Card */}
      <div 
        className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
      >
        <div className="w-32 h-32 mx-auto relative">
          <Image
            src="/logomizan.png" // Ensure logo is square for perfect circle crop
            alt="CEO - Luqman Cooper"
            width={128}
            height={128}
            className="rounded-full object-cover border-4 border-green-700"
          />
        </div>
        <h3 className="text-2xl font-semibold text-green-700 mt-6">Luqman Cooper</h3>
        <p className="text-sm text-gray-500 mb-3">Chief Executive Officer</p>
        <p className="text-gray-600 mb-4">
          With a passion for innovation and community growth, Luqman has led Mizan Investments in delivering solutions that transform lives and build stronger futures.
        </p>
        <a
          href="mailto:mizaninvestments@gmail.com"
          className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-green-700 transition-colors"
        >
          <Mail size={16} /> mizaninvestments@gmail.com
        </a>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-green-700 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-green-700 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
