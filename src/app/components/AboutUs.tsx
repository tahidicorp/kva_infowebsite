"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Header Section */}
      <section className="text-center px-4 sm:px-6 md:px-10 py-14 sm:py-16 md:py-20 relative">
        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.05, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[url('/pattern.svg')] bg-center bg-repeat pointer-events-none"
        />

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 mb-6 relative z-10"
        >
          About Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed relative z-10"
        >
          At <span className="font-semibold">Mizan Investments</span>, we are more than a business —
          we are a mission-driven team committed to empowering communities through innovative solutions in{" "}
          <span className="font-semibold text-green-700">Financing</span>,{" "}
          <span className="font-semibold text-green-700">Construction</span>, and{" "}
          <span className="font-semibold text-green-700">Real Estate</span>.
          Our passion lies in creating opportunities, delivering excellence, and building a future where
          growth is accessible to all.
        </motion.p>
      </section>

      {/* Vision / Mission Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          {
            title: "Our Vision",
            desc: "To be the trusted bridge between ambition and success — enabling individuals, families, and businesses to thrive in sustainable ways.",
            icon: "🌍",
          },
          {
            title: "Our Mission",
            desc: "Deliver high-impact solutions in financing, construction, and real estate with transparency, innovation, and community at heart.",
            icon: "🚀",
          },
          {
            title: "Our Values",
            desc: "Integrity, inclusivity, and excellence guide every decision we make — ensuring we leave a positive mark in every community we touch.",
            icon: "💎",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-green-700">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-green-800"
        >
          What Our Clients Say
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 transition-all">
            <p className="italic text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              "Thanks to Mizan's real estate team, I finally found the perfect home at a price I could afford.
              Their support through the process made buying stress-free and transparent!"
            </p>
            <div>
              <p className="text-green-700 font-bold">Amina K.</p>
              <p className="text-sm text-gray-500">Homeowner, Texas</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-sm p-5 sm:p-6 md:p-8 transition-all">
            <p className="italic text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
              "KVA Ride has changed the way I move around. It's fast, reliable, and super easy to use.
              I book my rides in seconds, and the drivers are always professional."
            </p>
            <div>
              <p className="text-green-700 font-bold">James W.</p>
              <p className="text-sm text-gray-500">Commuter, California</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
