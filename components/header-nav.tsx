"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { brandAssets, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pickup & delivery", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

export function HeaderNav() {
  return (
    <header className="machine-panel px-5 py-4 sm:px-6">
      <div className="z-10 flex items-center justify-between lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        {/* Logo — left edge on mobile, left-aligned on desktop */}
        <a className="flex items-center" href="#top" aria-label={siteConfig.name}>
          <Image
            src={brandAssets.logo}
            alt={siteConfig.name}
            width={1536}
            height={1024}
            priority
            className="h-auto w-[230px] sm:w-[230px] lg:w-[200px]"
          />
        </a>

        {/* Mobile: hamburger button — right edge */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon-lg" aria-label="Open menu" />}>
              <Menu className="size-7" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-8 flex flex-col gap-2 text-base font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3 py-2 text-[var(--muted-foreground)] hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop: inline nav */}
        <div className="hidden lg:flex lg:flex-col lg:gap-3 lg:items-end">
          <nav className="flex flex-wrap items-center gap-1 text-sm font-medium text-[var(--muted-foreground)] lg:justify-end">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
