import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/snowguy-logo.png"
      alt={`${siteConfig.name} Logo`}
      width={60}
      height={60}
      className={className}
      priority
    />
  );
}

export function LogoWithWordmark() {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <div className="font-bebas text-2xl uppercase tracking-wide text-snow-navy">
        {siteConfig.name}
      </div>
    </div>
  );
}


