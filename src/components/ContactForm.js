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
      <div className="bg-accent-gold/20 border-2 border-accent-gold rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-winter-blue mb-4">Thanks! We'll be in touch shortly.</h3>
        <p className="text-body-text mb-6">
          We'll call you within 24 hours to confirm your quote and schedule.
        </p>
        <a 
          href={`tel:${process.env.NEXT_PUBLIC_PHONE || '(810) 555-0123'}`}
          className="bg-winter-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-winter-blue/90 transition-colors"
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
          <span className="block mb-2 text-white font-semibold">Name *</span>
          <input 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            placeholder="Your full name"
          />
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold">Phone *</span>
          <input 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
          <span className="block mb-2 text-white font-semibold">Email</span>
          <input 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </label>
        <label className="block">
          <span className="block mb-2 text-white font-semibold">Service Type *</span>
          <select 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
        <span className="block mb-2 text-white font-semibold">Address *</span>
        <input 
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
          <span className="block mb-2 text-white font-semibold">Driveway Length</span>
          <select 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
          <span className="block mb-2 text-white font-semibold">Walkway Count</span>
          <select 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
          <span className="block mb-2 text-white font-semibold">Salting Needed?</span>
          <select 
            className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
        <span className="block mb-2 text-white font-semibold">Preferred Timing</span>
        <select 
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-gold" 
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
        <span className="block mb-2 text-white font-semibold">Notes (gates, pets, special areas, etc.)</span>
        <textarea 
          className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-gold" 
          rows="4"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Any special instructions or access notes..."
        ></textarea>
      </label>

      <button 
        className="bg-accent-gold text-winter-blue px-8 py-4 rounded-xl text-lg font-semibold shadow-cozy hover:bg-accent-gold/90 transition-colors disabled:opacity-50" 
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get My Quote'}
      </button>
    </form>
  );
}
