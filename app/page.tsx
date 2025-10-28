import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Areas } from "@/components/areas";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { QuoteForm } from "@/components/quote-form";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Gallery items={siteConfig.galleryImages} />
        <Testimonials testimonials={siteConfig.testimonials} />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}


