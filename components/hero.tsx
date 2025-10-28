"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, FileText } from "lucide-react";
import { LogoWithWordmark } from "./brand";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes: Array<{
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();

        flake.y += flake.speed;
        if (flake.y > canvas.height) {
          flake.y = 0;
          flake.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-hero-gradient"
    >
      {/* Background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Snow animation */}
      <SnowCanvas />

      <div
        id="main-content"
        className="container relative z-10 mx-auto flex min-h-screen items-center px-4 py-20 md:px-6"
      >
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <LogoWithWordmark />
            </div>

            <h1 className="mb-6 font-bebas text-5xl uppercase leading-tight tracking-wide text-snow-navy md:text-6xl lg:text-7xl">
              {siteConfig.tagline}
            </h1>

            <p className="mb-8 text-lg text-slate-700 md:text-xl">
              {siteConfig.description}
            </p>

            {/* CTA Buttons */}
            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group inline-flex items-center justify-center rounded-2xl bg-snow-ice px-8 py-4 text-lg font-medium text-snow-navy shadow-lg shadow-snow-ice/30 transition-all hover:bg-[#3D95EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-snow-ice focus-visible:ring-offset-2"
              >
                <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                Call Now
              </a>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("quote")}
              >
                <FileText className="mr-2 h-5 w-5" />
                Get a Free Estimate
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {siteConfig.badges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full bg-snow-white/80 px-4 py-2 text-sm font-medium text-snow-navy shadow-sm backdrop-blur-sm"
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden items-center justify-center lg:flex"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-snow-ice/20 to-snow-navy/20 blur-3xl" />
              <div className="relative flex h-96 w-96 items-center justify-center rounded-full bg-gradient-to-br from-snow-ice to-blue-400 shadow-2xl">
                <div className="text-center">
                  <div className="mb-4 text-8xl">❄️</div>
                  <p className="font-bebas text-3xl uppercase tracking-wider text-white">
                    Ready to Serve
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-12 w-8 rounded-full border-2 border-snow-navy/30"
        >
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-snow-navy/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}


