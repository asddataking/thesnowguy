export default function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'hello@thesnowguy.com';
  
  return (
    <footer className="bg-winter-blue text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Snow Guy</h3>
            <p className="text-frost/80 mb-4">
              Family-owned & operated snow removal service serving St. Clair County, Michigan.
            </p>
            <p className="text-frost/80">
              Licensed • Insured • 24/7 during storms
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-frost/80">
              <p><a href={`tel:${phone}`} className="hover:text-accent-gold transition-colors">{phone}</a></p>
              <p><a href={`mailto:${email}`} className="hover:text-accent-gold transition-colors">{email}</a></p>
              <p>Normal office: 7am–7pm</p>
              <p>24/7 during storms</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <div className="text-frost/80 space-y-1">
              <p>Kimball • Port Huron</p>
              <p>Marysville • Fort Gratiot</p>
              <p>St. Clair • Clyde</p>
              <p>Columbus & surrounding areas</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-frost/60 text-sm">
            © {currentYear} The Snow Guy. Family-owned in Michigan.
          </p>
          <div className="flex items-center space-x-4 text-sm text-frost/60">
            <a href={`tel:${phone}`} className="hover:text-accent-gold transition-colors">Call Now</a>
            <a href={`mailto:${email}`} className="hover:text-accent-gold transition-colors">Email</a>
            <a href="#quote" className="hover:text-accent-gold transition-colors">Get Quote</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
