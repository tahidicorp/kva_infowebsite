"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AboutUs from "./components/AboutUs";
import MizanTeam from "./components/mizanTeam";

const screens = [
  {
    title: "Rides",
    description:
      "Affordable and fast ride-hailing solutions tailored for urban and rural users across the USA. Schedule rides, track drivers, and enjoy a seamless urban commute.",
    image: "/kva_drive.jpg",
    route: "/kva-ride",
  },
  {
    title: "Finance",
    description:
      "Smart financial tools to help you manage loans, microcredit, and investment opportunities — all based on real-time performance analytics.",
    image: "/invest.jpg",
    route: "/financing",
  },
  {
    title: "Construction",
    description:
      "From residential to commercial, we offer modern, affordable construction services that suit every budget and timeline.",
    image: "/construction.jpg",
    route: "/construction",
  },
  {
    title: "Real Estate",
    description:
      "Explore and invest in real estate with confidence. Discover listings, schedule viewings, and manage property portfolios.",
    image: "/real_estate.jpg",
    route: "/real-estate",
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (index: number) => {
    setCurrentIndex(index);
  };

  const { title, description, image, route } = screens[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-10 text-white max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-green-600 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light drop-shadow-md max-w-xl">
            {description}
          </p>
          <button
            onClick={() => router.push(route)}
            className="mt-6 sm:mt-8 px-5 py-3 bg-green-600 hover:bg-green-700 transition rounded-lg font-semibold shadow-lg w-max"
          >
            Explore
          </button>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-6 right-6 flex gap-4 z-20">
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length)
            }
            className="w-10 h-10 rounded-full bg-white/20 text-white border border-white/40 hover:bg-white/30"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % screens.length)}
            className="w-10 h-10 rounded-full bg-white/20 text-white border border-white/40 hover:bg-white/30"
          >
            →
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => handleScrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <AboutUs />
      <MizanTeam />
    </>
  );
}
