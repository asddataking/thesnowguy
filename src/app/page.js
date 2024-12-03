"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="bg-gray-900 text-white w-full py-4 text-center">
        <h1 className="text-2xl font-bold">The Snow Guy</h1>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow px-6">
        <div className="text-center">
          <Image
            src="/snow_guy_logo.png"
            alt="The Snow Guy Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold text-gray-800 mt-6">
            Professional Snow Removal Services
          </h2>
          <p className="text-gray-600 mt-4">
            Fast, reliable, and tailored to your needs.
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="mt-8">
          <Link
            href="/booking"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow"
          >
            Book Now
          </Link>
        </div>
      </main>

     
    </div>
  );
}




