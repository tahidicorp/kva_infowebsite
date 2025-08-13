"use client";

import { Mail, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function MizanTeam() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-green-700 mb-4">Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The visionaries and innovators powering Mizan Investments&apos; impact across real estate,
          transportation, and technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* CEO Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300 group">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 relative">
              <Image
                src="/logomizan.png"
                alt="CEO - Luqman Cooper"
                fill
                className="rounded-full object-cover border-4 border-green-700"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-700">Luqman Cooper</h3>
              <p className="text-sm text-gray-500 mb-1">Chief Executive Officer</p>
              <a
                href="mailto:mizaninvestments@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
              >
                <Mail size={16} /> mizaninvestments@gmail.com
              </a>
              <div className="mt-2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="hover:text-green-700" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-green-700" aria-label="Twitter / X">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Team Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 text-left hover:shadow-2xl transition duration-300 group">
          <div className="flex items-center gap-6">
            <div className="w-28 h-28 relative">
              <Image
                src="/tahidi2.jpg"
                alt="Tahidi Corp"
                fill
                className="rounded-full object-cover border-4 border-green-700"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-700">Tahidi Corp</h3>
              <p className="text-sm text-gray-500 mb-1">Technology Partner</p>
              <a
                href="mailto:tahidicorp@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
              >
                <Mail size={16} /> tahidicorp@gmail.com
              </a>
              <div className="mt-2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="hover:text-green-700" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="hover:text-green-700" aria-label="Twitter / X">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
