'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: 'residential',
    drivewayLength: 'medium',
    walkwayCount: '1-2',
    salting: 'no',
    timing: 'asap',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error submitting your request. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/20 backdrop-blur-sm border-2 border-accent-gold rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="text-3xl font-bold text-white mb-4">Thanks! We'll be in touch shortly.</h3>
        <p className="text-white/90 mb-6 text-lg">
          We'll call you within 24 hours to confirm your quote and schedule your shoveling service.
        </p>
        <a 
          href={`tel:${process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123'}`}
          className="bg-accent-gold text-winter-blue px-8 py-4 rounded-xl font-semibold hover:bg-accent-gold/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          Or Call Now
        </a>
      </div>
    );
  }

  return (
    <form className="mt-8 grid gap-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Name *</span>
          <input 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Phone *</span>
          <input 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required 
            placeholder="(810) 555-0123"
          />
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Email</span>
          <input 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Service Type *</span>
          <select 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="block mb-2 text-white font-semibold text-lg">Address *</span>
        <input 
          className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
          type="text" 
          name="address"
          value={formData.address}
          onChange={handleChange}
          required 
          placeholder="Street address, city, ZIP"
        />
      </label>

      <div className="grid md:grid-cols-3 gap-6">
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Driveway Length</span>
          <select 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            name="drivewayLength"
            value={formData.drivewayLength}
            onChange={handleChange}
          >
            <option value="short">Short (1-2 cars)</option>
            <option value="medium">Medium (3-4 cars)</option>
            <option value="long">Long (5+ cars)</option>
          </select>
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Walkway Count</span>
          <select 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            name="walkwayCount"
            value={formData.walkwayCount}
            onChange={handleChange}
          >
            <option value="none">None</option>
            <option value="1-2">1-2 walkways</option>
            <option value="3-4">3-4 walkways</option>
            <option value="5+">5+ walkways</option>
          </select>
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold text-lg">Salting Needed?</span>
          <select 
            className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
            name="salting"
            value={formData.salting}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
            <option value="maybe">Maybe (ask)</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="block mb-2 text-white font-semibold text-lg">Preferred Timing</span>
        <select 
          className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
          name="timing"
          value={formData.timing}
          onChange={handleChange}
        >
          <option value="asap">ASAP (next storm)</option>
          <option value="seasonal">Seasonal contract</option>
          <option value="per-visit">Per-visit basis</option>
          <option value="commercial">Commercial route</option>
        </select>
      </label>

      <label className="block">
        <span className="block mb-2 text-white font-semibold text-lg">Notes (gates, pets, special areas, etc.)</span>
        <textarea 
          className="w-full rounded-xl bg-white/20 border border-white/30 px-4 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold focus:border-accent-gold text-lg" 
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special instructions or access notes..."
        ></textarea>
      </label>

      <button 
        className="bg-accent-gold text-winter-blue px-10 py-5 rounded-xl text-xl font-bold shadow-2xl hover:bg-accent-gold/90 transition-all duration-200 hover:shadow-3xl hover:-translate-y-1 disabled:opacity-50" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get My Shoveling Quote'}
      </button>
    </form>
  );
}
