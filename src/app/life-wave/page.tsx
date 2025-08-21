"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  { icon: "⚡", title: "Vitality", text: "Reawaken your inner vitality and reclaim an active spirit." },
  { icon: "🏃", title: "Activity", text: "Enhance physical performance and recover faster from exercise." },
  { icon: "🌙", title: "Sleep", text: "Improve your sleep quality and duration for deeper rest." },
  { icon: "🦵", title: "Movement", text: "Unlock better mobility and elevate overall fitness." },
  { icon: "❤️", title: "Wellness", text: "Leverage your body&apos;s inherent energy for holistic well-being." },
  { icon: "💆‍♀️", title: "Skin Care", text: "Science + nature to bring out the best in your skin." },
];

const steps = [
  { step: "01", title: "Patch Up", text: "Apply your LifeWave patch to recommended placement points." },
  { step: "02", title: "Wear It", text: "Let phototherapy work—no drugs or stimulants, just light." },
  { step: "03", title: "Share It", text: "Track your results and invite others to experience it." },
];

const gallery = [
  "/lifewave1.jpg",
  "/lifewave2.jpg",
  "/lifewave3.jpg",
  "/lifewave4.jpg",
  "/lifewave5.jpg",
  "/lifewave6.jpg",
];

// NEW: FAQs
const faqs = [
  {
    q: "What are LifeWave patches?",
    a: "They’re topical phototherapy patches designed to reflect specific wavelengths of your body’s own infrared energy back into the skin—supporting wellness without drugs or stimulants.",
  },
  {
    q: "How long do I wear a patch?",
    a: "Most protocols suggest up to 12 hours on, then remove. Always follow product instructions and listen to your body.",
  },
  {
    q: "Will I feel something immediately?",
    a: "Some users report quick changes (energy, focus, or sleep). Others notice gradual benefits over consistent daily use.",
  },
  {
    q: "Where do I place the patches?",
    a: "Placement can vary by patch type. We’ll share recommended points and simple diagrams—reach out if you want guidance.",
  },
  {
    q: "Is there a guarantee?",
    a: "Yes—LifeWave offers a money-back guarantee within the stated period. See official terms when purchasing.",
  },
];

export default function LifeWavePage() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPromo(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <Image src="/lifewave1.jpg" alt="LifeWave X39 wellness" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Elevate, Activate, Regenerate with LifeWave
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Phototherapy patches designed to tap into your body’s natural energy
            for vitality, recovery, sleep, and overall wellness.
          </p>
          <motion.a
            href="https://lifewave.com/mizaninvestments"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Shop LifeWave
          </motion.a>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-green-700"
        >
          Discover Your Body’s Potential
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 p-6 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{b.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-700">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Science */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-green-700 mb-4">How Phototherapy Works</h2>
            <p className="text-gray-700 leading-relaxed">
              LifeWave patches reflect specific wavelengths of your body’s own infrared energy back into the skin.
              This gentle light interaction is designed to support biochemical processes associated with vitality,
              recovery, and overall wellness—without drugs or stimulants.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Many users incorporate patches like X39® into daily routines to support performance, sleep quality,
              and an active lifestyle.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contacts" className="inline-block bg-white border border-green-600 text-green-700 px-5 py-2.5 rounded-lg font-medium hover:bg-green-50 transition">
                Ask a Question
              </Link>
              <a
                href="https://lifewave.com/mizaninvestments"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-green-700 transition"
              >
                Shop LifeWave
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image src="/lifewave2.jpg" alt="How phototherapy works" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* How It Works (Steps) */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">Begin Living Younger Today</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <span className="text-green-700 text-4xl font-extrabold block mb-3">{s.step}</span>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">LifeWave in Action</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl shadow group aspect-[4/3]"
            >
              <Image src={src} alt={`LifeWave ${i + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700">FAQs</h2>
        <div className="mt-10 max-w-4xl mx-auto divide-y rounded-2xl bg-white shadow">
          {faqs.map((f, i) => (
            <motion.details
              key={f.q}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group p-6"
            >
              <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-green-700 group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">Money-Back Guarantee</h2>
          <p className="text-gray-700">
            Try LifeWave with confidence. If you’re not satisfied within the stated guarantee period,
            you can request a full refund from LifeWave.
          </p>
          <motion.a
            href="https://lifewave.com/mizaninvestments"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-lg font-semibold shadow"
          >
            Shop LifeWave
          </motion.a>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-14 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to experience elevated wellness?</h3>
        <p className="mt-2 text-white/90">Explore LifeWave’s breakthrough phototherapy technology today.</p>
        <motion.a
          href="https://lifewave.com/mizaninvestments"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-5 inline-block bg-white text-green-700 font-semibold px-7 py-3 rounded-full shadow"
        >
          Shop Now
        </motion.a>
      </section>

      {/* Timed Promo Popup */}
      <AnimatePresence>
        {showPromo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
            <motion.div initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 24, opacity: 0 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-40">
                <Image src="/lifewave3.jpg" alt="LifeWave promo" fill className="object-cover" />
                <button onClick={() => setShowPromo(false)} className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 grid place-items-center" aria-label="Close promo">
                  ×
                </button>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-green-700">Limited-Time Spotlight</h4>
                <p className="text-gray-700 mt-2">Explore LifeWave’s most popular wellness patches and start your journey.</p>
                <a href="https://lifewave.com/mizaninvestments" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow">
                  Shop LifeWave
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
