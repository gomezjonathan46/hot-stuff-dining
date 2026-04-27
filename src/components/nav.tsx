"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <Image
            src="/icon.svg"
            alt="Midnight Bistro logo"
            width={28}
            height={28}
            priority
          />
          <span>Hot Stuff Dining</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="hover:text-gray-300">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/reservation" className="hover:text-gray-300">
              Reservation
            </Link>
          </li>{" "}
          <li>
            <Link href="/events" className="hover:text-gray-300">
              Events
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" onClick={() => setIsOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/reservation" onClick={() => setIsOpen(false)}>
                Reservation
              </Link>
            </li>
            <li>
              <Link href="/events" onClick={() => setIsOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
