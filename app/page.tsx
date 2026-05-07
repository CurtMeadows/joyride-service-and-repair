import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgePercent,
  CarFront,
  CheckCircle2,
  Cog,
  Cpu,
  Disc3,
  Droplets,
  Gauge,
  Mail,
  MapPin,
  Phone,
  Radio,
  ShieldCheck,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";
import { brandAssets, businessInfo, getHomePageStructuredData, siteConfig } from "@/lib/site";
import { HeaderNav } from "@/components/header-nav";

const offerings: { title: string; icon: LucideIcon }[] = [
  { title: "Yearly maintenance", icon: Cog },
  { title: "Tuneups", icon: Gauge },
  { title: "Stereo systems", icon: Radio },
  { title: "Upgrades", icon: Wrench },
  { title: "Oil changes", icon: Droplets },
  { title: "Brake changes", icon: Disc3 },
  { title: "Wire diagnostics & repair", icon: Cpu },
  { title: "And much more", icon: CheckCircle2 },
];

const rideTypes: { title: string; icon: LucideIcon }[] = [
  { title: "Side-by-Sides (UTVs)", icon: Truck },
  { title: "All-Terrain Vehicles (ATVs)", icon: Gauge },
  { title: "Personal Watercraft (PWC)", icon: Waves },
  { title: "Golf carts", icon: CarFront },
  { title: "Dirt Bikes", icon: Wrench },
  { title: "Dune Buggies", icon: CarFront },
  { title: "Three-Wheel Roadsters", icon: Gauge },
  { title: "Autocycles", icon: Wrench },
  { title: "Neighborhood Electric Vehicles (NEVs)", icon: Cpu },
  { title: "Go-Karts", icon: CarFront },
  { title: "Mini-Bikes", icon: Wrench },
  { title: "Amphibious Vehicles", icon: Waves },
  { title: "Utility Task Vehicles", icon: Truck },
  { title: "Low-Speed Vehicles (LSVs)", icon: Cpu },
  { title: "Sport Boats", icon: Waves },
  { title: "Micro-Cars", icon: CarFront },
];

const quickFacts = [
  "Free pick up and delivery within a 10 mile radius.",
  "Includes the Anthem Community in Florence.",
  "10% off to first responders and military members.",
];

const featuredImages = [
  {
    src: "/images/golf-cart-fairway.jpg",
    alt: "Golf cart on a fairway",
    title: "Golf carts",
    href: "https://commons.wikimedia.org/wiki/File:Golf-cart_fairway.jpg",
    credit: "CC0 via Wikimedia Commons",
  },
  {
    src: "/images/utv-cfmoto-zforce.jpg",
    alt: "CFMoto side-by-side utility vehicle outdoors",
    title: "Side-by-sides and UTVs",
    href: "https://commons.wikimedia.org/wiki/File:CFMoto_ZForce,_Ribnitz-Damgarten_(P1060445)_(cropped).jpg",
    credit: "CC BY-SA 4.0, Matti Blume via Wikimedia Commons",
  },
  {
    src: "/images/dune-buggy-dubai.jpg",
    alt: "Dune buggy in the desert",
    title: "Off-road desert machines",
    href: "https://commons.wikimedia.org/wiki/File:Dune_buggy_dubai.jpg",
    credit: "CC BY-SA 4.0 via Wikimedia Commons",
  },
];

export default function Home() {
  const structuredData = getHomePageStructuredData();

  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div aria-hidden className="chassis-noise pointer-events-none absolute inset-0" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-6 sm:px-8 lg:gap-24 lg:px-12 lg:py-10">
        <HeaderNav />

        <section>
          <div className="machine-panel lift-hover px-6 py-8 sm:px-8 sm:py-10">
            <div className="relative z-10 space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="machine-label flex items-center gap-2 text-[var(--muted-foreground)]">
                    <span className="machine-led machine-led-warn" />
                    Florence, Coolidge &amp; San Tan Valley
                  </span>
                  <span className="machine-label rounded-full bg-white/55 px-3 py-1 text-[var(--muted-foreground)] shadow-[var(--shadow-recessed)]">
                    Service • Repair • Upgrades
                  </span>
                </div>
                <a className="machine-button w-full sm:w-auto" href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-6">
                  <div className="order-2 flex justify-center lg:order-2 lg:justify-end">
                    <Image
                      src={brandAssets.logo}
                      alt={`${siteConfig.name} logo`}
                      width={1536}
                      height={1024}
                      className="h-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[320px]"
                    />
                  </div>
                  <h1 className="text-emboss order-1 max-w-3xl text-5xl font-extrabold tracking-[-0.04em] text-foreground sm:text-6xl lg:order-1 lg:text-7xl">
                    Repairing your ride, reviving your adventure.
                  </h1>
                </div>
                <p className="max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
                  Joyride Sport Machines handles recreational and sport vehicle service for
                  side-by-sides, ATVs, PWCs, golf carts, dirt bikes, boats, and more with
                  local pickup, repair, maintenance, and upgrade work across Florence,
                  Coolidge, and San Tan Valley.
                </p>
              </div>

              <div className="machine-panel overflow-hidden p-3">
                <div className="relative z-10 overflow-hidden rounded-[1.25rem]">
                  <div className="relative aspect-[16/8]">
                    <Image
                      src={featuredImages[2].src}
                      alt={featuredImages[2].alt}
                      fill
                      sizes="(min-width: 1024px) 896px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                    <div>
                      <p className="machine-label text-white/80">Featured ride</p>
                      <p className="text-lg font-semibold text-white">{featuredImages[2].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {rideTypes.map(({ title, icon: Icon }) => (
                  <div
                    key={title}
                    className="recessed-well flex items-center gap-3 px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    <Icon className="h-4 w-4 text-[var(--accent)]" />
                    {title}
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="machine-button w-full sm:w-auto" href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  {businessInfo.phoneDisplay}
                </a>
                <a
                  className="machine-button-secondary w-full sm:w-auto"
                  href={businessInfo.emailHref}
                >
                  <Mail className="h-4 w-4 text-[var(--accent)]" />
                  Email the shop
                </a>
              </div>

              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div key={fact} className="recessed-well px-4 py-4">
                    <p className="text-sm leading-6 text-[var(--muted-foreground)]">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div>
              <p className="machine-label mb-3 text-[var(--accent)]">Workshop capabilities</p>
              <h2 className="text-emboss text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
                What we offer
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {offerings.map(({ title, icon: Icon }) => (
                <article
                  key={title}
                  className="machine-panel lift-hover flex min-h-24 items-center px-4 py-3"
                >
                  <div className="relative z-10 flex w-full items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--background)] shadow-[var(--shadow-floating)]">
                      <Icon className="h-4 w-4 text-[var(--accent)]" />
                    </div>
                    <div className="flex min-h-10 flex-1 items-center">
                      <h3 className="text-base font-semibold leading-tight text-foreground sm:text-lg">
                        {title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside id="coverage" className="machine-panel-dark p-6 sm:p-8">
            <div className="relative z-10 space-y-6">
              <div>
                <p className="machine-label mb-3 text-orange-200/90">Local coverage</p>
                <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                  Free pick up and delivery within 10 miles.
                </h2>
              </div>

              <div className="space-y-4 text-base leading-7 text-slate-300">
                <p>
                  Joyride Sport Machines offers free pick up and delivery within a 10 mile
                  radius across Florence, Coolidge, and San Tan Valley.
                </p>
                <p>
                  Complimentary of Door Dash Towing, with local service coordination across
                  the Florence, Coolidge, and San Tan Valley area.
                </p>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={featuredImages[1].src}
                    alt={featuredImages[1].alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-white/10 bg-black/15 px-4 py-3">
                  <p className="machine-label text-orange-200/80">Local pickup support</p>
                  <p className="mt-1 text-sm text-slate-200">{featuredImages[1].title}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-1 h-5 w-5 text-orange-300" />
                    <div>
                      <p className="machine-label text-orange-200/80">Pickup zone</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Florence, Coolidge, and San Tan Valley within the local service area.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <BadgePercent className="mt-1 h-5 w-5 text-orange-300" />
                    <div>
                      <p className="machine-label text-orange-200/80">Special offer</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        10% off to first responders and military members.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-white/10 bg-white/6 px-4 py-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-1 h-5 w-5 text-orange-300" />
                    <div>
                      <p className="machine-label text-orange-200/80">Shop focus</p>
                      <p className="mt-1 text-sm leading-6 text-slate-200">
                        Service, repair, and upgrades for recreational and sport vehicles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="machine-label mb-3 text-[var(--accent)]">Vehicle types</p>
              <h2 className="text-emboss text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl">
                Built for the machines Joyride services every day
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
              From UTVs and golf carts to dirt bikes, sport boats, and micro-cars, Joyride
              supports a wide range of recreational and sport machines.
            </p>
          </div>

          <div className="machine-panel overflow-hidden p-3">
            <div className="relative z-10 overflow-hidden rounded-[1.25rem]">
              <div className="relative aspect-[16/7]">
                <Image
                  src={featuredImages[0].src}
                  alt={featuredImages[0].alt}
                  fill
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-4">
                <p className="machine-label text-white/80">Off-road focus</p>
                <p className="mt-1 text-lg font-semibold text-white">{featuredImages[0].title}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {rideTypes.map(({ title, icon: Icon }) => (
              <article key={title} className="machine-panel lift-hover px-5 py-5">
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--background)] shadow-[var(--shadow-floating)]">
                    <Icon className="h-5 w-5 text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-6 text-foreground">{title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="machine-panel-dark p-6 sm:p-8 lg:p-10">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div>
                <p className="machine-label mb-3 text-orange-200/90">Schedule local service</p>
                <h2 className="text-4xl font-bold tracking-[-0.03em] text-white sm:text-5xl">
                  Get your recreational or sport vehicle back in action.
                </h2>
              </div>

              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Reach Joyride Sport Machines for service, repair, or upgrades in Florence,
                Coolidge, and San Tan Valley, and use the local pickup option if you are
                within the covered area.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="machine-button w-full sm:w-auto" href={businessInfo.phoneHref}>
                  <Phone className="h-4 w-4" />
                  Call to schedule
                </a>
                <a
                  className="machine-button-secondary w-full sm:w-auto"
                  href={businessInfo.emailHref}
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.72)",
                    background: "linear-gradient(145deg, #f4f7fb, #dde4ee)",
                    boxShadow:
                      "inset 1px 1px 0 rgba(255, 255, 255, 0.5), 0 4px 10px rgba(15, 23, 42, 0.14)",
                    color: "var(--foreground)",
                  }}
                >
                  <Mail className="h-4 w-4 text-orange-300" />
                  Send an email
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <a
                className="rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-5 transition-transform duration-300 hover:-translate-y-1"
                href={businessInfo.phoneHref}
              >
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="machine-label text-orange-200/80">Phone</p>
                    <p className="mt-2 text-2xl font-bold text-white">
                      {businessInfo.phoneDisplay}
                    </p>
                  </div>
                </div>
              </a>

              <a
                className="rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-5 transition-transform duration-300 hover:-translate-y-1"
                href={businessInfo.address.mapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="machine-label text-orange-200/80">Address</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      {businessInfo.address.streetAddress}
                    </p>
                    <p className="text-base text-slate-300">
                      {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion}{" "}
                      {businessInfo.address.postalCode}
                    </p>
                  </div>
                </div>
              </a>

              <a
                className="rounded-[1.4rem] border border-white/10 bg-white/6 px-5 py-5 transition-transform duration-300 hover:-translate-y-1"
                href={businessInfo.emailHref}
              >
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-orange-300" />
                  <div>
                    <p className="machine-label text-orange-200/80">Email</p>
                    <p className="mt-2 break-all text-lg font-semibold text-white">
                      {businessInfo.email}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <footer className="px-1 pb-6">
          <div className="flex flex-col gap-3 text-sm text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
            <p className="machine-label flex items-center gap-2">
              <span className="machine-led" />
              Joyride Sport Machines
            </p>
            <p>Florence, Coolidge &amp; San Tan Valley • Recreational and sport vehicle repair shop</p>
            <a className="inline-flex items-center gap-2 font-semibold text-foreground" href="#top">
              Back to top
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-xs leading-5 text-[var(--muted-foreground)]">
            <p className="machine-label text-[var(--accent)]">Photo credits</p>
            <p>
              <a className="underline decoration-dotted underline-offset-4" href={featuredImages[0].href} target="_blank" rel="noreferrer">
                {featuredImages[0].title}
              </a>{" "}
              — {featuredImages[0].credit}
            </p>
            <p>
              <a className="underline decoration-dotted underline-offset-4" href={featuredImages[1].href} target="_blank" rel="noreferrer">
                {featuredImages[1].title}
              </a>{" "}
              — {featuredImages[1].credit}
            </p>
            <p>
              <a className="underline decoration-dotted underline-offset-4" href={featuredImages[2].href} target="_blank" rel="noreferrer">
                {featuredImages[2].title}
              </a>{" "}
              — {featuredImages[2].credit}
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
