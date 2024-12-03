import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          The Snow Guy
        </Link>
        <div className="flex space-x-4">
          <Link href="/services" className="hover:text-purple-300">
            Services
          </Link>
          <Link href="/booking" className="hover:text-purple-300">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
