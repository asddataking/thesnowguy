export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 py-8 text-sm text-ice/80">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {currentYear} The Snow Guy. All rights reserved.</p>
        <p>Licensed • Insured • Family-Owned</p>
      </div>
    </footer>
  );
}
