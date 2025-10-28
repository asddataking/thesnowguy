"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Section } from "./section";
import { siteConfig } from "@/lib/site";

function MapIllustration() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-auto w-full max-w-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DA6FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#003366" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      
      {/* Map background */}
      <rect
        x="50"
        y="30"
        width="300"
        height="240"
        rx="20"
        fill="url(#mapGradient)"
        stroke="#003366"
        strokeWidth="2"
      />
      
      {/* Decorative roads */}
      <path
        d="M 100 100 Q 200 150 300 100"
        stroke="#003366"
        strokeWidth="3"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M 150 50 L 150 250"
        stroke="#003366"
        strokeWidth="3"
        opacity="0.3"
      />
      <path
        d="M 250 50 L 250 250"
        stroke="#003366"
        strokeWidth="3"
        opacity="0.3"
      />
      
      {/* Location markers */}
      {[
        { x: 150, y: 100 },
        { x: 200, y: 130 },
        { x: 250, y: 90 },
        { x: 180, y: 180 },
        { x: 230, y: 200 },
      ].map((pos, i) => (
        <g key={i}>
          <circle
            cx={pos.x}
            cy={pos.y}
            r="8"
            fill="#4DA6FF"
            opacity="0.8"
          />
          <circle
            cx={pos.x}
            cy={pos.y}
            r="4"
            fill="white"
          />
        </g>
      ))}
    </svg>
  );
}

export function Areas() {
  return (
    <Section
      id="areas"
      title="Areas We Serve"
      subtitle="Proudly serving our neighbors across St. Clair County"
      className="bg-snow-bg"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Map illustration */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <MapIllustration />
        </motion.div>

        {/* Areas list */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <div className="mb-8 flex flex-wrap gap-3">
            {siteConfig.areas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-sm"
              >
                <MapPin className="h-5 w-5 text-snow-ice" />
                <span className="font-medium text-snow-navy">{area}</span>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-lg font-medium italic text-slate-600 lg:text-left">
            Born and raised in Michigan—serving our neighbors first.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}


