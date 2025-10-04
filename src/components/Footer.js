export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@thesnowguy.com';
  
  return (
    <footer className="bg-gradient-to-br from-winter-blue to-accent-gold text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl font-bold">❄️</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">The Snow Guy</h3>
                <p className="text-white/80 font-medium">Family-owned. Michigan-tough.</p>
              </div>
            </div>
            <p className="text-white/90 mb-6 text-lg max-w-md">
              We're the shovelers who stop when others rush by. Family-owned & operated 
              snow removal service serving St. Clair County with precision and care.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <span className="text-sm font-semibold">Licensed</span>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <span className="text-sm font-semibold">Insured</span>
              </div>
              <div className="bg-white/20 rounded-xl px-4 py-2">
                <span className="text-sm font-semibold">24/7 Storm Ready</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center space-x-3">
                <span className="text-xl">📞</span>
                <a href={`tel:${phone}`} className="hover:text-accent-gold transition-colors font-semibold">{phone}</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">✉️</span>
                <a href={`mailto:${email}`} className="hover:text-accent-gold transition-colors font-semibold">{email}</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-xl">🕐</span>
                <div>
                  <div className="font-semibold">Normal office: 7am–7pm</div>
                  <div className="text-sm">24/7 during storms</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Service Areas</h4>
            <div className="text-white/90 space-y-2">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Kimball</div>
                <div>Port Huron</div>
                <div>Marysville</div>
                <div>Fort Gratiot</div>
                <div>St. Clair</div>
                <div>Clyde</div>
                <div>Columbus</div>
                <div className="text-accent-gold font-semibold">And More!</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm">
              © {currentYear} The Snow Guy. Family-owned in Michigan. We're shovelers, not just plowers.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <a href={`tel:${phone}`} className="hover:text-accent-gold transition-colors font-semibold">Call Now</a>
              <a href={`mailto:${email}`} className="hover:text-accent-gold transition-colors font-semibold">Email</a>
              <a href="#quote" className="hover:text-accent-gold transition-colors font-semibold">Get Quote</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
