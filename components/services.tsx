"use client";

import { motion } from "framer-motion";
import { Shovel, Droplet, Calendar, Phone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Section } from "./section";
import { siteConfig } from "@/lib/site";

const iconMap = {
  shovel: Shovel,
  droplet: Droplet,
  calendar: Calendar,
};

export function Services() {
  return (
    <Section
      id="services"
      title="What We Do"
      subtitle="Professional snow removal services tailored to your needs"
    >
      <div className="grid gap-8 md:grid-cols-3">
        {siteConfig.services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-snow-ice to-blue-400">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-bebas text-2xl uppercase tracking-wide text-snow-navy">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-gradient-to-r from-snow-ice to-blue-400 p-8 text-center shadow-lg"
      >
        <p className="mb-6 text-xl font-medium text-white md:text-2xl">
          First snow? Don&apos;t wait—text The Snow Guy before it piles up.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="inline-flex items-center justify-center rounded-2xl border-2 border-snow-navy bg-white px-8 py-4 text-lg font-medium text-snow-navy transition-all hover:bg-snow-gray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2"
        >
          <Phone className="mr-2 h-5 w-5" />
          {siteConfig.phoneDisplay}
        </a>
      </motion.div>
    </Section>
  );
}


