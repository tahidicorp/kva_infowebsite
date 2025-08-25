"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// --- Content ---
const bullets = [
  { title: "Competitive Rates, Up to 3 years", text: "Lock in pricing for peace of mind and predictable energy costs." },
  { title: "$100 Cash Gift Card*", text: "Limited-time promo on qualifying plans." },
  { title: "100% Clean Energy", text: "Choose renewable electricity for your home." },
  { title: "Free to Enroll", text: "No sign-up fee on eligible plans." },
];

const gallery = [
  "/thinkenergy/Texas Think Energy Benefits Social Image.png",
  "/thinkenergy/Texas Imagen de los beneficios de Think Energy.png",
  "/thinkenergy/thinkenergy3.jpg",
  "/thinkenergy/thinkenergy4.jpg",
  "/thinkenergy/thinkenergy6.jpg",
  "/thinkenergy/thinkenergy8.jpg",
];

// Video & testimonial embeds (YouTube + Vimeo)
const videos = [
  {
    id: "828414235",
    provider: "vimeo",
    title: "Think Energy Overview",
    description: "A concise look at how Think Energy plans work and what to expect as a customer.",
    embed: "https://player.vimeo.com/video/828414235",
  },
  {
    id: "1071910376",
    provider: "vimeo",
    title: "Customer Testimonial #1",
    description: "Real experience switching to Think Energy—costs, signup, and service.",
    embed: "https://player.vimeo.com/video/1071910376",
  },
  {
    id: "1071907642",
    provider: "vimeo",
    title: "Customer Testimonial #2",
    description: "Another firsthand story on savings and enrollment experience.",
    embed: "https://player.vimeo.com/video/1071907642",
  },
];

// NEW: FAQs
const faqs = [
  {
    q: "What is Think Energy?",
    a: "A retail electricity provider offering competitive fixed-rate plans (up to 3 years) with renewable options and simple enrollment.",
  },
  {
    q: "Is there a sign-up fee?",
    a: "Many plans have no enrollment fee. Always review plan details during checkout for exact terms.",
  },
  {
    q: "Do you offer 100% clean energy?",
    a: "Yes—eligible plans source renewable electricity via RECs to match your usage.",
  },
  {
    q: "How do I enroll?",
    a: "Scan the QR code on this page or click the “View Plans & Benefits” button to enroll online in a few minutes.",
  },
  {
    q: "Do promotions change?",
    a: "Promotions (like a $100 cash gift card) can change and have eligibility requirements. See the latest details at the link above.",
  },
];

export default function ThinkEnergyPage() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPromo(true), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white text-gray-900 mt-5px">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0e1230]">
        <div className="relative h-[58vh] w-full">
          <Image
            src="/thinkenergy/thinkenergy1.jpg"
            alt="Think Energy home hero"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1230] via-[#0e1230]/60 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-10 sm:mt-16 md:mt-24"
        >


          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight ">
            Think Energy — Smart, Clean, Competitive
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Transform the way you think about energy. Enjoy competitive rates
            and renewable electricity options with a simple enrollment.
          </p>
          <motion.a
            href="https://get.thinkenergy.com/thinkbenefits"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            View Plans & Benefits
          </motion.a>
        </motion.div>
      </section>

      {/* Benefits */}
      <section className=" px-6 md:px-16 lg:px-24 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-emerald-700"
        >
          Why Choose Think Energy
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bullets.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-700">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6 max-w-3xl mx-auto text-center">
          *Promotions subject to eligibility, availability, and change. See official details at the link above.
        </p>
      </section>

      {/* QR Join */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">Scan to Join</h2>
            <p className="text-gray-700 leading-relaxed">
              Use your camera to scan and visit our enrollment page. Prefer a link?
              Click below to see plans and current offers.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://get.thinkenergy.com/thinkbenefits"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-emerald-700 transition"
              >
                Explore Benefits
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full overflow-hidden rounded-2xl bg-white p-6 shadow-lg flex items-center justify-center"
          >
            <Image
              src="/thinkenergy/Think QR Code Image.png"
              alt="Think Energy QR code"
              width={600}
              height={800}
              className="object-contain max-h-[600px] w-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Advisor Card */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl bg-[#121741] text-white p-8 shadow-xl">
            <h3 className="text-2xl font-bold tracking-wide">ZACHARY COPPER</h3>
            <p className="text-white/80 italic mt-1">Independent Energy Advisor</p>
            <div className="h-1 w-36 bg-emerald-500 rounded-full my-4" />
            <ul className="space-y-3">
              <li className="flex items-center gap-3"><span>📞</span> <span>3122857262</span></li>
              <li className="flex items-center gap-3"><span>✉️</span> <span>mizaninvestments@gmail.com</span></li>
              <li className="flex items-center gap-3"><span>🔗</span> <span>thinkenergy.plus/thinkbenefits</span></li>
            </ul>
          </div>
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg bg-indigo-50">
            <Image
              src="/thinkenergy/Think Business Card-2.png"
              alt="Think Energy business card"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">Materials & Promos</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-xl shadow group aspect-[4/3] bg-white"
            >
              <Image
                src={src}
                alt={`Think Energy asset ${i + 1}`}
                fill
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">FAQs</h2>
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
                <span className="text-emerald-700 group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* Videos & Testimonials */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">Customer Stories & Demos</h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
          Watch brief clips from Think Energy customers and quick explainers. Short, clear, and easy to browse.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <motion.article
              key={v.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden flex flex-col"
            >
              <div className="relative w-full pt-[56.25%] bg-gray-100">
                <iframe
                  src={v.embed}
                  className="absolute inset-0 w-full h-full"
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-gray-900">{v.title}</h3>
                <p className="text-gray-600 mt-1 text-sm flex-1">{v.description}</p>
                <div className="mt-3 text-xs text-gray-400">{v.provider === "youtube" ? "YouTube" : "Vimeo"}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-14 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Ready to enroll with Think Energy?</h3>
        <p className="mt-2 text-white/90">See current offers and simple enrollment options.</p>
        <motion.a
          href="https://get.thinkenergy.com/thinkbenefits"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="mt-5 inline-block bg-white text-emerald-700 font-semibold px-7 py-3 rounded-full shadow"
        >
          View Benefits
        </motion.a>
      </section>

      {/* Timed Promo Popup */}
      <AnimatePresence>
        {showPromo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-emerald-700">Limited-Time Offer</h4>
                <p className="text-gray-700 mt-2">Competitive rates and a $100 cash gift card on qualifying plans.</p>
                <a
                  href="https://get.thinkenergy.com/thinkbenefits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow"
                >
                  See Details
                </a>
                <button
                  onClick={() => setShowPromo(false)}
                  className="mt-4 block w-full rounded-lg border border-gray-300 px-6 py-2.5 text-gray-700 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
