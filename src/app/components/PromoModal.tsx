"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type PromoModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc: string;
  href: string;
};

export default function PromoModal({
  open,
  onClose,
  title,
  subtitle,
  imageSrc,
  href,
}: PromoModalProps) {
  return (
    <AnimatePresence>
      {open && (
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
            <Link href={href} onClick={onClose} className="block group">
              <div className="relative h-44 sm:h-56">
                <Image src={imageSrc} alt={title} fill className="object-cover" />
                <button
                  aria-label="Close promo"
                  className="absolute top-3 right-3 bg-black/50 text-white rounded-full w-8 h-8 grid place-items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                  }}
                >
                  ×
                </button>
              </div>
              <div className="p-5">
                <h4 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {title}
                </h4>
                {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
                <div className="mt-4 inline-block bg-emerald-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow">
                  Learn more
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
