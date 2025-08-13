"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const realEstateListings = [
  {
    title: "Luxury Apartments",
    description:
      "Modern apartments located in prime areas with top-notch amenities and stunning views.",
    image: "/real-estate-apartment.jpg",
  },
  {
    title: "Spacious Villas",
    description:
      "Elegant villas with private gardens and pools, perfect for family living.",
    image: "/real-estate-villa.jpg",
  },
  {
    title: "Commercial Spaces",
    description:
      "Strategically located office and retail spaces to grow your business.",
    image: "/real-estate-commercial.jpg",
  },
];

export default function RealEstatePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/real-estate-hero.jpg"
          alt="Real Estate"
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
            Discover Your Perfect Property
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From luxury homes to prime commercial spaces — find what you’re
            looking for with us.
          </p>
        </motion.div>
      </div>

      {/* Real Estate Listings */}
      <section className="px-6 md:px-20 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-green-700 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated listings, hand-picked for quality, location, and
            value.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          {realEstateListings.map((item, index) => (
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

      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">
            How It Works
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Browse Listings",
                text: "Search through our collection of properties and find the one that fits your needs.",
              },
              {
                step: "02",
                title: "Schedule a Viewing",
                text: "Book a visit and explore the property in person with our agents.",
              },
              {
                step: "03",
                title: "Secure Your Deal",
                text: "Negotiate, sign, and move in — we make the process smooth and secure.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                <span className="text-green-700 text-4xl font-bold block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-700 py-12 mt-12">
        <div className="max-w-4xl mx-auto text-center text-white px-6">
          <h3 className="text-3xl font-bold mb-4">
            Find Your Dream Property Today
          </h3>
          <p className="mb-6 text-lg text-gray-200">
            Contact us to schedule a viewing and take the first step toward your
            new property.
          </p>
          <motion.a
            href="/contacts"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-white text-green-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Contact Us
          </motion.a>
        </div>
      </section>
    </div>
  );
}
