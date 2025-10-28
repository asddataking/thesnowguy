"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Section } from "./section";

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  // Hide section if no testimonials
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <Section
      id="testimonials"
      title="What Our Customers Say"
      className="bg-snow-bg"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative rounded-2xl bg-white p-8 shadow-sm"
          >
            <Quote className="mb-4 h-10 w-10 text-snow-ice opacity-50" />
            <blockquote className="mb-4 text-lg text-slate-700">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <cite className="not-italic font-medium text-snow-navy">
              — {testimonial.author}
            </cite>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


