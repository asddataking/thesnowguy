import SnowAnimation from '../components/SnowAnimation';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '(555) 123-SNOW';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'contact@thesnowguy.com';
  const cityList = process.env.NEXT_PUBLIC_CITY_LIST || 'St. Clair, Port Huron, and surrounding areas';

  return (
    <>
      <SnowAnimation />
      
      <main className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* HERO */}
        <section className="pt-10 sm:pt-16 pb-10 text-center">
          <div className="inline-block rounded-2xl bg-white/10 px-4 py-2 mb-4">
            <span className="text-sm tracking-wide uppercase">Friendly • Reliable • Local</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            The Snow Guy
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-ice/90 max-w-2xl mx-auto">
            Neighborly snow shoveling for driveways, walkways, and small commercial spots the plows miss.
            Warm service, safe paths, happier winters.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`tel:${phone}`} className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-candy px-6 py-4 text-lg font-semibold shadow-cozy hover:opacity-90 focus-visible:outline-none">
              📞 Call Now
            </a>
            <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-holly px-6 py-4 text-lg font-semibold shadow-cozy hover:opacity-90">
              ❄️ Request Service
            </a>
          </div>

          <p className="mt-4 text-sm text-ice/80">
            Licensed • Insured • Senior-friendly • Family-owned
          </p>
        </section>

        {/* PROMISE */}
        <section className="rounded-2xl bg-white/5 p-6 sm:p-8 shadow-cozy">
          <h2 className="text-2xl sm:text-3xl font-semibold">Our Winter Promise</h2>
          <p className="mt-3 text-ice/90">
            We don't try to miss a single flake—but if we do, we make it right. If something's not cleared to your liking,
            we come back, no hassle. Your safety and peace of mind come first.
          </p>
        </section>

        {/* SERVICES */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">What We Clear</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-ice/90">
            <li className="rounded-2xl bg-white/5 p-4">✔ Driveways</li>
            <li className="rounded-2xl bg-white/5 p-4">✔ Walkways & Sidewalks</li>
            <li className="rounded-2xl bg-white/5 p-4">✔ Porch & Steps</li>
            <li className="rounded-2xl bg-white/5 p-4">✔ Mailbox Paths</li>
            <li className="rounded-2xl bg-white/5 p-4">✔ Garage & Trash Bin Paths</li>
            <li className="rounded-2xl bg-white/5 p-4">✔ Small Commercial Entrances</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Simple, Honest Pricing</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white/5 p-6 shadow-cozy">
              <h3 className="text-xl font-semibold">Per Visit</h3>
              <p className="mt-2 text-ice/90">Pay only when it snows.</p>
              <p className="mt-4 text-3xl font-bold">$25+</p>
              <p className="text-sm text-ice/80 mt-1">Property size & depth vary.</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 shadow-cozy border border-white/10">
              <h3 className="text-xl font-semibold">Monthly</h3>
              <p className="mt-2 text-ice/90">Peace-of-mind coverage all month.</p>
              <p className="mt-4 text-3xl font-bold">$99+</p>
              <p className="text-sm text-ice/80 mt-1">Includes return visits during active storms.</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 shadow-cozy">
              <h3 className="text-xl font-semibold">Season Pass</h3>
              <p className="mt-2 text-ice/90">Full season of worry-free clearing.</p>
              <p className="mt-4 text-3xl font-bold">$399+</p>
              <p className="text-sm text-ice/80 mt-1">Great for seniors & families.</p>
            </div>
          </div>
          <p className="mt-3 text-sm text-ice/80">Need salt, pet-safe de-icer, or special access notes? Add them at booking.</p>
        </section>

        {/* SERVICE AREA */}
        <section className="mt-8 sm:mt-10 rounded-2xl bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Service Area</h2>
          <p className="mt-3 text-ice/90">
            Proudly serving {cityList} and nearby neighborhoods. Not sure if we cover you?
            <a href="#contact" className="underline decoration-ice hover:opacity-90"> Ask us</a> — we'll do our best to help.
          </p>
        </section>

        {/* TESTIMONIALS */}
        <section className="mt-8 sm:mt-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Neighbors Say…</h2>
          <div className="mt-5 grid md:grid-cols-3 gap-4">
            <figure className="rounded-2xl bg-white/5 p-5">
              <blockquote className="text-ice/90">"Fast, friendly, and careful with our steps. Lifesaver on icy mornings!"</blockquote>
              <figcaption className="mt-3 text-sm text-ice/70">— Carol, St. Clair</figcaption>
            </figure>
            <figure className="rounded-2xl bg-white/5 p-5">
              <blockquote className="text-ice/90">"They cleared exactly what we asked and came back when it kept snowing."</blockquote>
              <figcaption className="mt-3 text-sm text-ice/70">— Mike & Jean</figcaption>
            </figure>
            <figure className="rounded-2xl bg-white/5 p-5">
              <blockquote className="text-ice/90">"Easy to book, fair price, great for my parents."</blockquote>
              <figcaption className="mt-3 text-sm text-ice/70">— Ashley</figcaption>
            </figure>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-8 sm:mt-10 rounded-2xl bg-white/5 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">How It Works</h2>
          <ol className="mt-4 grid sm:grid-cols-3 gap-4 text-ice/90">
            <li className="rounded-2xl bg-white/5 p-4">1) Tell us your address & notes</li>
            <li className="rounded-2xl bg-white/5 p-4">2) We confirm ETA & price</li>
            <li className="rounded-2xl bg-white/5 p-4">3) We clear your paths — you stay cozy</li>
          </ol>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-8 sm:mt-10 mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Request Service</h2>
          <p className="mt-2 text-ice/90">Prefer to talk? Call <a className="underline decoration-ice" href={`tel:${phone}`}>{phone}</a>.</p>
          <ContactForm />
          <p className="mt-3 text-sm text-ice/80">Open 6am–9pm during snowfall. Emergency clears when possible.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}