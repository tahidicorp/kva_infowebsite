"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AboutUs from "@/app/components/AboutUs";
import MizanTeam from "@/app/components/mizanTeam";
import PromoModal from "@/app/components/PromoModal";

const screens = [
  {
    title: "Finance",
    description:
      "Smart financial tools to help you manage loans, microcredit, and investments — all with real-time analytics.",
    image: "/invest.jpg",
    route: "/financing",
  },
  {
    title: "Construction",
    description:
      "From residential to commercial, we offer modern, affordable construction services that fit your needs.",
    image: "/construction.jpg",
    route: "/construction",
  },
  {
    title: "Real Estate",
    description:
      "Explore and invest in real estate with confidence. Browse listings, book viewings, and grow your portfolio.",
    image: "/real_estate.jpg",
    route: "/real-estate",
  },
  {
    title: "Clean Energy (ThinkEnergy)",
    description:
      "Join the clean energy movement. Discover innovative energy solutions designed for a sustainable future.",
    image: "/thinkenergy1.jpg",
    route: "/thinkenergy/think-energy",
  },
  {
    title: "Health & Stem Cell Tech (LifeWave)",
    description:
      "Explore breakthrough health and stem cell technology with LifeWave — improving wellness and vitality.",
    image: "/lifewave1.jpg",
    route: "/life-wave",
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  // Promo state
  const [showLifeWave, setShowLifeWave] = useState(false);
  const [showThinkEnergy, setShowThinkEnergy] = useState(false);

  // Hero carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Trigger LifeWave popup after 6s
  useEffect(() => {
    const seen = sessionStorage.getItem("homepage-promos-seen");
    if (!seen) {
      const t = setTimeout(() => setShowLifeWave(true), 6000);
      return () => clearTimeout(t);
    }
  }, []);

  // Show ThinkEnergy after LifeWave closes
  useEffect(() => {
    if (!showLifeWave && !sessionStorage.getItem("homepage-promos-seen") && !showThinkEnergy) {
      const t = setTimeout(() => setShowThinkEnergy(true), 1500);
      return () => clearTimeout(t);
    }
  }, [showLifeWave, showThinkEnergy]);

  // Mark as seen
  useEffect(() => {
    if (showLifeWave || showThinkEnergy) {
      sessionStorage.setItem("homepage-promos-seen", "1");
    }
  }, [showLifeWave, showThinkEnergy]);

  const { title, description, image, route } = screens[currentIndex];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 flex flex-col justify-center h-full px-6 sm:px-12 text-white max-w-3xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-green-500 drop-shadow-lg"
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light drop-shadow-md mb-6">
            {description}
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(route)}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg"
            >
              Explore
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push("/contacts")}
              className="px-6 py-3 bg-transparent border border-white hover:bg-white/20 rounded-lg font-semibold shadow-lg"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Sections */}
      <AboutUs />
      <MizanTeam />

      {/* Promo Popups */}
      <PromoModal
        open={showLifeWave}
        onClose={() => setShowLifeWave(false)}
        title="Elevate, Activate, Regenerate with LifeWave"
        subtitle="Tap into your body’s natural energy for vitality, recovery, and sleep."
        imageSrc="/lifewave1.jpg"
        href="/life-wave"
      />
      <PromoModal
        open={showThinkEnergy}
        onClose={() => setShowThinkEnergy(false)}
        title="Think Energy — Smart, Clean, Competitive"
        subtitle="Explore competitive rates and 100% clean energy options."
        imageSrc="/thinkenergy/thinkenergy1.jpg"
        href="/think-energy"
      />
    </>
  );
}
