export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-700 to-blue-900 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-4">Snow Problem? We’ve Got You Covered!</h1>
        <p className="text-lg mb-6">Fast, reliable snow removal services tailored to your needs.</p>
        <a
          href="/booking"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
        >
          Book Now
        </a>

        {/* Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <ul className="flex justify-center space-x-6">
            <li className="text-center">
              <div className="text-3xl">❄️</div>
              Driveway Shoveling
            </li>
            <li className="text-center">
              <div className="text-3xl">🚪</div>
              Walkway Clearing
            </li>
            <li className="text-center">
              <div className="text-3xl">🧂</div>
              Salting
            </li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-8">
          <p>© {new Date().getFullYear()} The Snow Guy</p>
          <p>
            <a href="/booking" className="hover:underline">
              Book Now
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}


