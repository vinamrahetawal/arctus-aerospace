"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const headlines = [
  "Zero Infrastructure.",
  "45,000 Feet.",
  "24 Hours of Vision.",
];

const HeroSection = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const timers = headlines.map((_, index) =>
      setTimeout(() => {
        setVisibleIndex(index);
      }, (index + 1) * 1200)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-center">
      <Image
        src="/flighthome.png"
        alt="UAV in flight"
        data-ai-hint="drone flight"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <h1 className="text-4xl font-headline font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl flex flex-col">
          {headlines.map((text, index) => (
            <span
              key={index}
              className={cn(
                "transition-opacity duration-1000",
                index <= visibleIndex ? "opacity-100" : "opacity-0"
              )}
            >
              {text}
            </span>
          ))}
        </h1>
        <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
          Arctus Aerospace works on building unmanned medium altitude long
          endurance aerial vehicles. We build integrated flight systems and
          combat capable UAVs with payloads ranging from 100 to 250 kg.
        </p>
        <div className="pt-4">
          <Button
            asChild
            size="lg"
            className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="#about">
              Explore More
              <ArrowRight className="h-5 w-0 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
