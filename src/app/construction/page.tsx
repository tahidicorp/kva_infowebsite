"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const constructionData = [
  {
    title: "Multi Unit New Builds",
    description:
      "From apartment complexes to townhouses, we develop scalable multi-unit buildings with durability and cost-efficiency in mind.",
    image: "/image1.jpg",
  },
  {
    title: "Single-Family Homes",
    description:
      "Modern and affordable single-family homes designed for comfort, elegance, and practicality.",
    image: "/image2.jpg",
  },
  {
    title: "Custom Container Homes",
    description:
      "Innovative container-based housing for eco-conscious clients seeking style, flexibility, and fast delivery.",
    image: "/image3.jpg",
  },
];

export default function ConstructionPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/construction.jpg"
          alt="Construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Building the Future
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We craft strong, innovative structures that stand the test of time
            — blending quality, style, and sustainability.
          </p>
        </motion.div>
      </div>

      {/* Projects Section */}
      <section className="px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every project we undertake reflects our commitment to excellence,
            innovation, and sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {constructionData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="mb-6 text-lg text-gray-200">
            Let’s bring your vision to life with our expert team of builders
            and designers.
          </p>
          <motion.a
            href="/contacts"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Contact Us Today
          </motion.a>
        </div>
      </section>
    </div>
  );
}
