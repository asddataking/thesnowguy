'use client';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We\'ll be in touch shortly.');
  };

  return (
    <form className="mt-5 grid gap-4 sm:max-w-xl" onSubmit={handleSubmit}>
      <label className="block">
        <span className="block mb-1">Name</span>
        <input className="w-full rounded-2xl bg-white/10 px-4 py-3" type="text" required />
      </label>
      <label className="block">
        <span className="block mb-1">Address</span>
        <input className="w-full rounded-2xl bg-white/10 px-4 py-3" type="text" required />
      </label>
      <label className="block">
        <span className="block mb-1">Phone</span>
        <input className="w-full rounded-2xl bg-white/10 px-4 py-3" type="tel" required />
      </label>
      <label className="block">
        <span className="block mb-1">Notes (gates, pets, special areas)</span>
        <textarea className="w-full rounded-2xl bg-white/10 px-4 py-3" rows="4"></textarea>
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="rounded-2xl bg-holly px-6 py-4 font-semibold shadow-cozy hover:opacity-90" type="submit">
          Submit
        </button>
        <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contact@thesnowguy.com'}`} className="rounded-2xl bg-white/10 px-6 py-4 text-center font-semibold hover:opacity-90">
          Or Email Us
        </a>
      </div>
    </form>
  );
}
