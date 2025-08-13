'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    pathname === href
      ? 'text-green-700 underline underline-offset-4'
      : 'hover:text-green-700';

  const navLinks = [
     { name: 'Home', href: '/' }, 
    { name: 'Real Estate', href: '/real-estate' },
    { name: 'Construction', href: '/construction' },
    { name: 'Financing', href: '/financing' },

  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-2 bg-white/80 backdrop-blur-sm shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logomizan.png"
            alt="Mizan Investment Logo"
            width={140}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-gray-800 font-medium">
          {navLinks.map(({ name, href }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact button (desktop) */}
        <a
          href="/contacts"
          className="hidden md:inline-block bg-green-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-800 transition"
        >
          Contact
        </a>

        {/* Hamburger Icon (mobile) */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-800 font-medium">
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              className={`${linkClass(href)} block`}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}
          <a
            href="/contacts"
            className="block bg-green-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-800 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
