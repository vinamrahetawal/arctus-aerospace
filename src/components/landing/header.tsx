"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHireMePage = pathname === '/hire-me';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    if (!isHireMePage) {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
    } else {
        setIsScrolled(true);
    }
    return () => {
        if(!isHireMePage) {
            window.removeEventListener("scroll", handleScroll);
        }
    };
  }, [isHireMePage]);
  
  const headerStyle = isScrolled || isHireMePage ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent";
  const textStyle = isScrolled || isHireMePage ? "text-foreground" : "text-white";
  const linkStyle = isScrolled || isHireMePage ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white";
  const buttonStyle = isScrolled || isHireMePage ? "text-foreground" : "text-white hover:text-white hover:bg-white/10";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        headerStyle
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/arctusaerospace_logo.png" alt="Arctus Aerospace Logo" width={40} height={40} className="h-8 w-auto" />
          <span className={cn("text-xl font-bold tracking-tight", textStyle)}>
            Arctus Aerospace
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#about"
            className={cn("text-sm font-medium transition-colors", linkStyle)}
          >
            About
          </Link>
          <Link
            href="/#blog"
            className={cn("text-sm font-medium transition-colors", linkStyle)}
          >
            Blog
          </Link>
          <Link
            href="/#contact"
            className={cn("text-sm font-medium transition-colors", linkStyle)}
          >
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={cn(buttonStyle)}>
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background/95 backdrop-blur-sm">
                    <div className="flex flex-col gap-6 p-6">
                         <SheetClose asChild>
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <Image src="/arctusaerospace_logo.png" alt="Arctus Aerospace Logo" width={40} height={40} className="h-8 w-auto" />
                                <span className="text-xl font-bold tracking-tight text-foreground">
                                    Arctus Aerospace
                                </span>
                            </Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/#about" className="text-lg font-medium">About</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/#blog" className="text-lg font-medium">Blog</Link>
                        </SheetClose>
                        <SheetClose asChild>
                            <Link href="/#contact" className="text-lg font-medium">Contact</Link>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
