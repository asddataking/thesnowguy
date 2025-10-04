import SnowAnimation from '../components/SnowAnimation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@thesnowguy.com';

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-frost">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">❄️</span>
              <span className="text-xl font-bold text-winter-blue">The Snow Guy</span>
              <span className="text-sm text-body-text/70 hidden sm:block">Family-owned. Michigan-tough.</span>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href={`tel:${phone}`} 
                className="bg-winter-blue text-white px-4 py-2 rounded-xl font-semibold hover:bg-winter-blue/90 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="#quote" 
                className="bg-accent-gold text-winter-blue px-4 py-2 rounded-xl font-semibold hover:bg-accent-gold/90 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      <SnowAnimation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-frost to-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-winter-blue leading-tight">
              Snow happens. We shovel.
            </h1>
            <p className="mt-6 text-xl text-body-text max-w-3xl mx-auto">
              Family-owned & operated in St. Clair County. Driveways, walkways, storefronts—residential and commercial. 
              We show up when it dumps.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="bg-accent-gold text-winter-blue px-4 py-2 rounded-full font-semibold text-sm">
                Family-Owned
              </span>
              <span className="bg-winter-blue text-white px-4 py-2 rounded-full font-semibold text-sm">
                Licensed & Insured
              </span>
              <span className="bg-frost text-winter-blue px-4 py-2 rounded-full font-semibold text-sm">
                Commercial-Ready
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#quote" 
                className="bg-winter-blue text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-cozy hover:bg-winter-blue/90 transition-colors"
              >
                Get a Fast Quote
              </a>
              <a 
                href={`tel:${phone}`} 
                className="bg-accent-gold text-winter-blue px-8 py-4 rounded-xl text-lg font-semibold shadow-cozy hover:bg-accent-gold/90 transition-colors"
              >
                Call {phone}
              </a>
            </div>
          </div>
        </section>

        {/* Quick Promise Bar */}
        <section className="bg-winter-blue text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">⚡</span>
                <span className="font-semibold">Storm-day dispatch</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🚶</span>
                <span className="font-semibold">Walkways cleared</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">🧂</span>
                <span className="font-semibold">Salt on request</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl mb-2">💰</span>
                <span className="font-semibold">No-nonsense pricing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-winter-blue text-center mb-12">
              What We Clear
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Driveway Shoveling & Snowblowing</h3>
                <p className="text-body-text">From dustings to deep dumps. We keep your car from playing snowplow.</p>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Walkways & Steps</h3>
                <p className="text-body-text">Your ankles (and grandma) will thank us.</p>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Commercial Lots & Storefronts</h3>
                <p className="text-body-text">Keep your doors open and your liability closed.</p>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Salting & Ice Melt (Add-On)</h3>
                <p className="text-body-text">When Michigan turns into a skating rink.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Residential vs Commercial */}
        <section className="py-16 bg-frost">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-cozy">
                <h3 className="text-2xl font-semibold text-winter-blue mb-4">Homeowners</h3>
                <p className="text-body-text mb-6">Seasonal or per-visit. We understand your driveway is your castle's moat.</p>
                <a href="#quote" className="bg-winter-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-winter-blue/90 transition-colors">
                  Get Home Quote
                </a>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-cozy">
                <h3 className="text-2xl font-semibold text-winter-blue mb-4">Property Managers & Shops</h3>
                <p className="text-body-text mb-6">Priority routes and storm SLAs. Keep your lot open and customers safe.</p>
                <a href="#quote" className="bg-accent-gold text-winter-blue px-6 py-3 rounded-xl font-semibold hover:bg-accent-gold/90 transition-colors">
                  Get Commercial Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Snapshot */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-winter-blue text-center mb-12">
              Pricing Snapshot
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Seasonal Plans (Nov–Mar)</h3>
                <p className="text-3xl font-bold text-winter-blue mb-2">Starting at $XX/mo</p>
                <p className="text-body-text">Worry-free all season coverage</p>
              </div>
              <div className="bg-accent-gold/20 rounded-xl p-6 shadow-cozy border-2 border-accent-gold">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Per-Visit</h3>
                <p className="text-3xl font-bold text-winter-blue mb-2">Starting at $XX</p>
                <p className="text-body-text">Pay only when it snows</p>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <h3 className="text-xl font-semibold text-winter-blue mb-3">Commercial Routes</h3>
                <p className="text-3xl font-bold text-winter-blue mb-2">Custom</p>
                <p className="text-body-text">SLA, time windows, priority pass</p>
              </div>
            </div>
            <p className="text-center text-body-text/70 mt-6">
              Final quotes depend on driveway size, distance, and the sky's attitude.
            </p>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-16 bg-winter-blue text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Proudly clearing St. Clair County
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xl mb-6">
                  We serve the heart of Michigan's thumb, from the shores of Lake Huron to the rolling hills inland. 
                  Whether you're near the bustling streets of Port Huron or the quiet neighborhoods of Kimball, 
                  we're your local snow removal team.
                </p>
                <p className="text-lg">
                  From Wadhams to I-94, M-136 to the St. Clair River—when winter hits St. Clair County, 
                  The Snow Guy shows up.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a href="#kimball" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Kimball</span>
                </a>
                <a href="#port-huron" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Port Huron</span>
                </a>
                <a href="#marysville" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Marysville</span>
                </a>
                <a href="#fort-gratiot" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Fort Gratiot</span>
                </a>
                <a href="#st-clair" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">St. Clair</span>
                </a>
                <a href="#clyde" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Clyde</span>
                </a>
                <a href="#columbus" className="bg-white/10 rounded-xl p-4 text-center hover:bg-white/20 transition-colors">
                  <span className="font-semibold">Columbus</span>
                </a>
                <div className="bg-accent-gold/20 rounded-xl p-4 text-center">
                  <span className="font-semibold text-accent-gold">And More!</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-winter-blue text-center mb-12">
              What Our Customers Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <blockquote className="text-body-text mb-4">
                  "They showed up before I finished my coffee. Professional, fast, and didn't miss a spot."
                </blockquote>
                <cite className="text-winter-blue font-semibold">— Amanda, Port Huron</cite>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <blockquote className="text-body-text mb-4">
                  "Finally, a snow service that actually shows up when they say they will. Worth every penny."
                </blockquote>
                <cite className="text-winter-blue font-semibold">— Mike, St. Clair</cite>
              </div>
              <div className="bg-frost rounded-xl p-6 shadow-cozy">
                <blockquote className="text-body-text mb-4">
                  "They cleared our entire parking lot before we opened. Our customers could actually park safely."
                </blockquote>
                <cite className="text-winter-blue font-semibold">— Sarah, Marysville</cite>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-frost">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-winter-blue text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <details className="bg-white rounded-xl p-6 shadow-cozy">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer">
                  Do you handle commercial jobs?
                </summary>
                <p className="mt-4 text-body-text">
                  Yep. Lots, storefronts, HOAs—ask about our storm priority routes.
                </p>
              </details>
              <details className="bg-white rounded-xl p-6 shadow-cozy">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer">
                  Do you clear walkways and steps?
                </summary>
                <p className="mt-4 text-body-text">
                  Absolutely. That's kind of our thing.
                </p>
              </details>
              <details className="bg-white rounded-xl p-6 shadow-cozy">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer">
                  Do you offer salting/ice melt?
                </summary>
                <p className="mt-4 text-body-text">
                  On request. We use pet- and concrete-considerate options.
                </p>
              </details>
              <details className="bg-white rounded-xl p-6 shadow-cozy">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer">
                  What if it keeps snowing?
                </summary>
                <p className="mt-4 text-body-text">
                  We return during active events per plan or per-visit terms.
                </p>
              </details>
              <details className="bg-white rounded-xl p-6 shadow-cozy">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer">
                  Are you insured?
                </summary>
                <p className="mt-4 text-body-text">
                  Yes. Licensed & insured. Happy to send COI.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="quote" className="py-16 bg-winter-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              Get a Fast Quote
            </h3>
            <p className="text-center text-xl mb-8">
              No spam. Just plows.
            </p>
            <ContactForm />
            <p className="text-center text-frost/80 mt-6">
              Prefer to talk? Call <a href={`tel:${phone}`} className="text-accent-gold hover:underline">{phone}</a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}