"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-125">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // put this in /public
        alt="Restaurant ambiance"
        fill
        priority
        className="object-cover font-display"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Hot Stuff Dining
        </h1>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-6">
          Bold flavors. Late nights. Unforgettable meals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/menu"
            className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            View Menu
          </Link>

          <Link
            href="/reservation"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-black transition"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
