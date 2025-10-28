"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "./section";

interface GalleryItem {
  before: string;
  after: string;
  alt: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3]">
        {/* Before image */}
        <Image
          src={item.before}
          alt={`${item.alt} - Before`}
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 0 : 1 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* After image */}
        <Image
          src={item.after}
          alt={`${item.alt} - After`}
          fill
          className="object-cover transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Labels */}
        <div className="absolute bottom-4 left-4 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
          {isHovered ? "After" : "Before"}
        </div>

        {/* Hover instruction on desktop */}
        <div className="absolute inset-0 hidden items-center justify-center bg-black/0 transition-all group-hover:bg-black/10 md:flex">
          <span className="rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-snow-navy opacity-0 transition-opacity group-hover:opacity-100">
            Hover to see after
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery({ items }: GalleryProps) {
  return (
    <Section
      id="gallery"
      title="Before & After"
      subtitle="See the difference professional snow removal makes"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <GalleryCard key={index} item={item} index={index} />
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500 md:hidden">
        Tap images to see the transformation
      </p>
    </Section>
  );
}


