import AboutSection from "@/components/landing/about-section";
import BlogSection from "@/components/landing/blog-section";
import ContactSection from "@/components/landing/contact-section";
import HeroSection from "@/components/landing/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 font-headline">
            Welcome to Arctus's Space
          </h2>
          <div className="flex justify-center">
            <Image
              src="/arctusfooter.png"
              alt="Arctus Aerospace Drone"
              data-ai-hint="sleek drone"
              width={1200}
              height={675}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
