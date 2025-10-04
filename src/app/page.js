import SnowAnimation from '../components/SnowAnimation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@thesnowguy.com';

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-frost shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-winter-blue to-accent-gold rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-bold">❄️</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-winter-blue">The Snow Guy</span>
                <p className="text-xs text-body-text/70 font-medium">Family-owned. Michigan-tough.</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href={`tel:${phone}`} 
                className="bg-winter-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-winter-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                📞 Call Now
              </a>
              <a 
                href="#quote" 
                className="bg-accent-gold text-winter-blue px-6 py-3 rounded-xl font-semibold hover:bg-accent-gold/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </header>

      <SnowAnimation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-frost via-white to-frost py-20 sm:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-32 h-32 bg-winter-blue rounded-full"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-accent-gold rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-winter-blue rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-accent-gold/20 text-winter-blue px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🏆 #1 Shoveling Service in St. Clair County
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-bold text-winter-blue leading-tight mb-6">
                  We're <span className="text-accent-gold">Shovelers</span>,<br />
                  Not Just Plowers
                </h1>
                
                <p className="text-xl text-body-text mb-8 leading-relaxed">
                  While others rush by with plows, we <strong>stop and shovel</strong>. 
                  We clear what plows miss—your walkways, steps, and the details that matter. 
                  Family-owned precision for Michigan winters.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-lg">
                    <span className="text-2xl mr-3">🎯</span>
                    <span className="font-semibold text-winter-blue">Precision Shoveling</span>
                  </div>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-lg">
                    <span className="text-2xl mr-3">👨‍👩‍👧‍👦</span>
                    <span className="font-semibold text-winter-blue">Family-Owned</span>
                  </div>
                  <div className="flex items-center bg-white rounded-xl px-4 py-3 shadow-lg">
                    <span className="text-2xl mr-3">⚡</span>
                    <span className="font-semibold text-winter-blue">Storm Ready</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#quote" 
                    className="bg-winter-blue text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:bg-winter-blue/90 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
                  >
                    Get Your Quote
                  </a>
                  <a 
                    href={`tel:${phone}`} 
                    className="bg-accent-gold text-winter-blue px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:bg-accent-gold/90 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
                  >
                    Call {phone}
                  </a>
                </div>
              </div>
              
              <div className="relative">
                {/* Hero Image Placeholder */}
                <div className="relative bg-gradient-to-br from-winter-blue to-accent-gold rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🧹</div>
                    <h3 className="text-2xl font-bold text-winter-blue mb-4">Professional Shoveling</h3>
                    <p className="text-body-text mb-6">We don't just plow past—we stop and clear every detail</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-frost rounded-xl p-3">
                        <div className="font-semibold text-winter-blue">Walkways</div>
                        <div className="text-body-text/70">Cleared by hand</div>
                      </div>
                      <div className="bg-frost rounded-xl p-3">
                        <div className="font-semibold text-winter-blue">Steps</div>
                        <div className="text-body-text/70">Safe & accessible</div>
                      </div>
                      <div className="bg-frost rounded-xl p-3">
                        <div className="font-semibold text-winter-blue">Driveways</div>
                        <div className="text-body-text/70">Complete clearing</div>
                      </div>
                      <div className="bg-frost rounded-xl p-3">
                        <div className="font-semibold text-winter-blue">Commercial</div>
                        <div className="text-body-text/70">Storefronts & lots</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-winter-blue mb-6">
                Why We're Different
              </h2>
              <p className="text-xl text-body-text max-w-3xl mx-auto">
                While others rush by with plows, we're the ones who <strong>stop and shovel</strong>. 
                Here's what makes us Michigan's premier shoveling service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-frost to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-winter-blue mb-4">Precision Over Speed</h3>
                <p className="text-body-text mb-6">
                  Plows rush by and miss details. We <strong>shovel by hand</strong> to clear 
                  walkways, steps, and corners that matter to your daily life.
                </p>
                <div className="bg-accent-gold/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-winter-blue">
                    "They cleared my steps so carefully, even my 85-year-old mom could walk safely."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent-gold/10 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-accent-gold/20">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-2xl font-bold text-winter-blue mb-4">Family Values</h3>
                <p className="text-body-text mb-6">
                  We're not a faceless corporation. We're a <strong>Michigan family</strong> 
                  who treats your property like our own.
                </p>
                <div className="bg-winter-blue/10 rounded-xl p-4">
                  <p className="text-sm font-semibold text-winter-blue">
                    "Finally, a service that actually cares about our family's safety."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-frost to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-winter-blue mb-4">Storm-Day Ready</h3>
                <p className="text-body-text mb-6">
                  When storms hit, we're <strong>already there</strong>. Our shoveling crews 
                  are dispatched before you even finish your morning coffee.
                </p>
                <div className="bg-accent-gold/20 rounded-xl p-4">
                  <p className="text-sm font-semibold text-winter-blue">
                    "They showed up before I finished my coffee. Incredible service."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <section className="py-20 bg-gradient-to-br from-frost to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-winter-blue mb-6">
                What We Shovel
              </h2>
              <p className="text-xl text-body-text max-w-3xl mx-auto">
                From dustings to deep dumps, we handle every detail that plows miss.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-bold text-winter-blue mb-3">Driveway Shoveling</h3>
                <p className="text-body-text mb-4">Complete clearing from garage to street. No shortcuts.</p>
                <div className="text-sm text-accent-gold font-semibold">Starting at $25</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">🚶</div>
                <h3 className="text-xl font-bold text-winter-blue mb-3">Walkways & Steps</h3>
                <p className="text-body-text mb-4">Hand-cleared for safety. Your ankles will thank us.</p>
                <div className="text-sm text-accent-gold font-semibold">Included</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-winter-blue mb-3">Commercial Lots</h3>
                <p className="text-body-text mb-4">Storefronts, parking lots, and business entrances.</p>
                <div className="text-sm text-accent-gold font-semibold">Custom pricing</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-3xl mb-4">🧂</div>
                <h3 className="text-xl font-bold text-winter-blue mb-3">Salting & Ice Melt</h3>
                <p className="text-body-text mb-4">Pet-safe options when Michigan turns icy.</p>
                <div className="text-sm text-accent-gold font-semibold">Add-on service</div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-winter-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-frost/90 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what St. Clair County families say about our shoveling service.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-gold text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg mb-6">
                  "They showed up before I finished my coffee. Professional, fast, and didn't miss a spot. 
                  Finally, a service that actually cares about the details."
                </blockquote>
                <cite className="text-accent-gold font-semibold">— Amanda, Port Huron</cite>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-gold text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg mb-6">
                  "They cleared my steps so carefully, even my 85-year-old mom could walk safely. 
                  That's the kind of care you get from a family business."
                </blockquote>
                <cite className="text-accent-gold font-semibold">— Mike, St. Clair</cite>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent-gold text-xl">⭐⭐⭐⭐⭐</div>
                </div>
                <blockquote className="text-lg mb-6">
                  "They cleared our entire parking lot before we opened. Our customers could actually park safely. 
                  Worth every penny."
                </blockquote>
                <cite className="text-accent-gold font-semibold">— Sarah, Marysville</cite>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-winter-blue mb-6">
                  Proudly Serving St. Clair County
                </h2>
                <p className="text-xl text-body-text mb-8">
                  We're your local shoveling team, serving the heart of Michigan's thumb. 
                  From the shores of Lake Huron to the rolling hills inland—when winter hits, 
                  The Snow Guy shows up with shovels in hand.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Kimball</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Port Huron</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Marysville</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Fort Gratiot</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">St. Clair</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Clyde</span>
                  </div>
                  <div className="bg-frost rounded-xl p-4 text-center hover:bg-accent-gold/20 transition-colors cursor-pointer">
                    <span className="font-semibold text-winter-blue">Columbus</span>
                  </div>
                  <div className="bg-accent-gold/20 rounded-xl p-4 text-center">
                    <span className="font-semibold text-accent-gold">And More!</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-winter-blue to-accent-gold rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-8 text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h3 className="text-2xl font-bold text-winter-blue mb-4">Local & Reliable</h3>
                    <p className="text-body-text mb-6">We know these streets because we live here too</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center bg-frost rounded-xl p-3">
                        <span className="font-semibold text-winter-blue">Response Time</span>
                        <span className="text-accent-gold font-bold">&lt; 2 hours</span>
                      </div>
                      <div className="flex justify-between items-center bg-frost rounded-xl p-3">
                        <span className="font-semibold text-winter-blue">Service Area</span>
                        <span className="text-accent-gold font-bold">St. Clair County</span>
                      </div>
                      <div className="flex justify-between items-center bg-frost rounded-xl p-3">
                        <span className="font-semibold text-winter-blue">Years Serving</span>
                        <span className="text-accent-gold font-bold">10+ years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-frost">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-winter-blue mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-body-text">
                Everything you need to know about our shoveling service.
              </p>
            </div>
            <div className="space-y-6">
              <details className="bg-white rounded-2xl p-6 shadow-xl">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer hover:text-accent-gold transition-colors">
                  What makes you different from plow services?
                </summary>
                <p className="mt-4 text-body-text">
                  We're <strong>shovelers, not just plowers</strong>. While plows rush by and miss details, 
                  we stop and clear walkways, steps, and corners by hand. We care about the details that matter to your daily life.
                </p>
              </details>
              <details className="bg-white rounded-2xl p-6 shadow-xl">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer hover:text-accent-gold transition-colors">
                  Do you handle commercial jobs?
                </summary>
                <p className="mt-4 text-body-text">
                  Absolutely. We clear storefronts, parking lots, and business entrances. 
                  Ask about our storm priority routes for commercial properties.
                </p>
              </details>
              <details className="bg-white rounded-2xl p-6 shadow-xl">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer hover:text-accent-gold transition-colors">
                  What if it keeps snowing?
                </summary>
                <p className="mt-4 text-body-text">
                  We return during active storms per your plan or per-visit terms. 
                  We don't leave you stranded when winter keeps dumping.
                </p>
              </details>
              <details className="bg-white rounded-2xl p-6 shadow-xl">
                <summary className="text-xl font-semibold text-winter-blue cursor-pointer hover:text-accent-gold transition-colors">
                  Are you insured?
                </summary>
                <p className="mt-4 text-body-text">
                  Yes. Licensed & insured. Happy to send COI for commercial properties.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section id="quote" className="py-20 bg-gradient-to-br from-winter-blue to-accent-gold text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of St. Clair County families who trust us with their winter safety.
            </p>
            <ContactForm />
            <p className="text-white/80 mt-6">
              Prefer to talk? Call <a href={`tel:${phone}`} className="text-accent-gold hover:underline font-semibold">{phone}</a>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}