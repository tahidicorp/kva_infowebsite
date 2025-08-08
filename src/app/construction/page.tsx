"use client";

import Image from "next/image";

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
    <div className="bg-white text-gray-900 mt-10 px-6 md:px-20 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">Construction</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          Discover how we build lasting infrastructure with innovation and quality — delivering excellence in every brick, beam, and board.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid gap-8 md:grid-cols-3">
        {constructionData.map((item, index) => (
          <div
            key={index}
            className="relative group bg-gray-100 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-2xl text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
