"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const benefits = [
  { icon: "📈", title: "Foundations", text: "Understand Bitcoin, Ethereum, blockchains, wallets, and keys." },
  { icon: "🔐", title: "Security", text: "Protect your assets: seed phrases, hardware wallets, scams to avoid." },
  { icon: "💱", title: "Trading 101", text: "Spot vs. P2P, order types, risk management, and basic chart reading." },
  { icon: "🏦", title: "On/Off Ramps", text: "How to buy/sell safely and move funds to your bank or M-Pesa." },
];

const modules = [
  {
    wk: "01",
    title: "Crypto Basics & Safety",
    points: [
      "What is money? Why Bitcoin?",
      "Private/public keys, seed phrases",
      "Custodial vs. self-custody wallets",
      "Common scams & red flags",
    ],
  },
  {
    wk: "02",
    title: "Wallets & Networks",
    points: [
      "Setting up a wallet (mobile & hardware)",
      "Ethereum & smart contracts (gas, fees)",
      "Stablecoins (USDT/USDC) use-cases",
      "Sending/receiving safely",
    ],
  },
  {
    wk: "03",
    title: "Exchanges & Trading",
    points: [
      "Centralized vs. decentralized exchanges",
      "Spot trading & order types (market/limit)",
      "Risk management basics (position sizing)",
      "Intro to charts & trends",
    ],
  },
  {
    wk: "04",
    title: "DeFi & Earning",
    points: [
      "What is DeFi? AMMs & liquidity",
      "Staking & yield (risks & rewards)",
      "Bridges & cross-chain basics",
      "Security checklists for DeFi",
    ],
  },
];

const faqs = [
  {
    q: "When do classes start?",
    a: "We’re finalizing schedules now. Use the contact button below to pre-register and pick your preferred days/times.",
  },
  {
    q: "Do I need experience?",
    a: "No. We start from zero — perfect for beginners. We also offer intermediate sessions for returning learners.",
  },
  {
    q: "What do I need to bring?",
    a: "A smartphone (Android/iOS). A notebook. Optional: a laptop and a hardware wallet if you already own one.",
  },
  {
    q: "Will you cover taxes or compliance?",
    a: "We’ll touch on record-keeping and general concepts. For personal tax/legal matters, consult a licensed professional.",
  },
];

export default function CryptoPage() {
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPromo(true), 7000);
    return () => clearTimeout(t);
  }, []);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied!");
    } catch {
      alert("Could not copy. Please copy manually.");
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-[#0e1230]">
        <div className="relative h-[58vh] w-full">
          <Image
            src="/crypto/workshop.jpg" // /public/crypto/hero.jpg
            alt="Crypto classes hero"
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
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Crypto Classes — Coming Soon
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
            Learn crypto from zero: wallets, security, buying/selling, and safe participation in web3.
          </p>
          <motion.a
            href="/contacts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Pre-Register / Contact Us
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
          className="text-3xl md:text-4xl font-bold text-center text-emerald-700"
        >
          What You’ll Gain
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl bg-gradient-to-br from-indigo-50 to-white p-6 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{b.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-700">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6 max-w-3xl mx-auto text-center">
          We focus on practical, safe usage first — no hype, no complex jargon.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-4">How the Classes Run</h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Short weekly sessions (in-person or online) with live demos.</li>
              <li>• Step-by-step wallet setup and safety checks.</li>
              <li>• Guided practice on test networks before real funds.</li>
              <li>• Optional: hardware wallet onboarding workshop.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contacts"
                className="inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow hover:bg-emerald-700 transition"
              >
                Pre-Register
              </a>
              <a
                href="/contacts"
                className="inline-block bg-white border border-emerald-600 text-emerald-700 px-5 py-2.5 rounded-lg font-medium hover:bg-emerald-50 transition"
              >
                Ask a Question
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src="/crypto/hero.jpg" 
              alt="Crypto workshop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* NEW: Referral Bonus */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* QR Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-lg text-center"
          >
            <div className="mx-auto w-full max-w-xs">
              <Image
                src="/crypto/crypto_referrall.png" // 
                alt="Crypto.com Referral QR"
                width={640}
                height={640}
                className="object-contain w-full h-auto"
                priority={false}
              />
            </div>
        
          </motion.div>

          {/* Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-emerald-700 mb-2">Referral Bonus — Up to $100</h2>
            <p className="text-gray-700">
              Use our Crypto.com referral and we both get up to <b>$100 USD</b> in rewards. It’s a simple way to
              onboard safely before classes start.
            </p>
            <div className="mt-4 rounded-xl bg-gray-50 p-4 border">
              <div className="text-sm text-gray-600">Referral Code</div>
              <div className="text-xl font-semibold tracking-wide">7gsepka7kg</div>
              <div className="mt-3 text-sm text-gray-600">Referral Link</div>
              <a
                href="https://crypto.com/app/7gsepka7kg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 break-all underline"
              >
                https://crypto.com/app/7gsepka7kg
              </a>
            </div>

            <a
              href="https://crypto.com/app/7gsepka7kg"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow"
            >
              Sign Up with Referral
            </a>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Outline */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-700">
          Beginner-Friendly Curriculum
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {modules.map((m, i) => (
            <motion.div
              key={m.wk}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <span className="text-emerald-700 text-4xl font-extrabold block mb-3">
                {m.wk}
              </span>
              <h3 className="text-xl font-semibold mb-3">{m.title}</h3>
              <ul className="space-y-2 text-gray-700">
                {m.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
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
                <span className="text-emerald-600 group-open:rotate-45 transition-transform">＋</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-14 text-center">
        <h3 className="text-2xl md:text-3xl font-bold">Crypto Classes — Coming Soon</h3>
        <p className="mt-2 text-white/90">
          Pre-register to reserve your seat and get the schedule first.
        </p>
        <motion.a
          href="/contacts"
          whileHover={{ scale: 1.05 }}
          className="mt-5 inline-block bg-white text-emerald-700 font-semibold px-7 py-3 rounded-full shadow"
        >
          Contact Us / Pre-Register
        </motion.a>
      </section>

      {/* Simple timed promo (optional) */}
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
              <div className="relative h-40">
                <Image src="/crypto/promo.jpg" alt="Crypto promo" fill className="object-cover" />
                <button
                  onClick={() => setShowPromo(false)}
                  className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 grid place-items-center"
                  aria-label="Close promo"
                >
                  ×
                </button>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-emerald-700">Crypto Classes — Coming Soon</h4>
                <p className="text-gray-700 mt-2">Sign up to get dates, syllabus, and pricing first.</p>
                <a
                  href="/contacts"
                  className="mt-4 inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-semibold shadow"
                >
                  Pre-Register
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
