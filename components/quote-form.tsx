"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Section } from "./section";
import { siteConfig } from "@/lib/site";

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  drivewayWidth: z.string().optional(),
  message: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request");
      }

      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try calling us directly.");
      console.error("Quote submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="quote"
      title="Get a Free Estimate"
      subtitle="Tell us about your property and we'll reach out with a quote"
      className="bg-snow-bg"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
              <h3 className="mb-2 text-2xl font-bold text-snow-navy">
                Thanks for reaching out!
              </h3>
              <p className="text-slate-600">
                The Snow Guy will reach out before the next snowfall.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  className="mt-1"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder="(810) 555-0137"
                  className="mt-1"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Property Address *</Label>
                <Input
                  id="address"
                  {...register("address")}
                  placeholder="123 Main St, Port Huron, MI 48060"
                  className="mt-1"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="drivewayWidth">Driveway Width (Optional)</Label>
                <select
                  id="drivewayWidth"
                  {...register("drivewayWidth")}
                  className="mt-1 flex h-12 w-full rounded-2xl border border-snow-gray bg-snow-white px-4 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2"
                >
                  <option value="">Select width</option>
                  <option value="single">Single car (8-10 ft)</option>
                  <option value="double">Double car (16-20 ft)</option>
                  <option value="triple">Triple+ car (24+ ft)</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message">Additional Details (Optional)</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Any special requirements or questions..."
                  className="mt-1"
                />
              </div>

              {error && (
                <div className="rounded-2xl bg-red-50 p-4 text-sm text-red-600">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Request Quote
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-8"
        >
          <div>
            <h3 className="mb-4 font-bebas text-3xl uppercase tracking-wide text-snow-navy">
              Prefer to Call or Text?
            </h3>
            <p className="mb-6 text-slate-600">
              We're here to help! Reach out anytime for immediate assistance.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-snow-ice">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-600">Call or Text</div>
                <div className="text-xl font-semibold text-snow-navy">
                  {siteConfig.phoneDisplay}
                </div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-snow-ice">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-slate-600">Email</div>
                <div className="text-xl font-semibold text-snow-navy">
                  {siteConfig.email}
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}


