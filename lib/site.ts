import type { Metadata } from "next";

export const serviceOfferings = [
  "Yearly maintenance",
  "Tuneups",
  "Stereo systems",
  "Upgrades",
  "Oil changes",
  "Brake changes",
  "Wire diagnostics & repair",
  "And much more",
] as const;

export const supportedVehicleTypes = [
  "Side-by-Sides (UTVs)",
  "All-Terrain Vehicles (ATVs)",
  "Personal Watercraft (PWC)",
  "Golf carts",
  "Dirt Bikes",
  "Dune Buggies",
  "Three-Wheel Roadsters",
  "Autocycles",
  "Neighborhood Electric Vehicles (NEVs)",
  "Go-Karts",
  "Mini-Bikes",
  "Amphibious Vehicles",
  "Utility Task Vehicles",
  "Low-Speed Vehicles (LSVs)",
  "Sport Boats",
  "Micro-Cars",
] as const;

export const siteConfig = {
  name: "Joyride Sport Machines",
  shortName: "Joyride",
  title: "Joyride Sport Machines | Florence, Coolidge & San Tan Valley",
  titleTemplate: "%s | Joyride Sport Machines",
  description:
    "Service, repair, and upgrades for recreational and sport vehicles in Florence, Coolidge, and San Tan Valley.",
  url: "https://www.joyridesportmachines.com",
  locale: "en_US",
  language: "en-US",
  category: "Automotive",
  themeColor: "#e0e5ec",
  keywords: [
    "Joyride Sport Machines",
    "UTV repair Arizona",
    "golf cart repair Coolidge AZ",
    "ATV repair Florence AZ",
    "PWC repair San Tan Valley",
    "recreational vehicle repair Arizona",
    "sport vehicle repair Coolidge",
    "side-by-side service Florence",
    "off-road vehicle maintenance Arizona",
    "local pickup vehicle repair",
  ],
} as const;

export const seoAssets = {
  brandIcon: "/favicon.ico",
  ogImage: "/opengraph-image",
  twitterImage: "/twitter-image",
  primaryImage: "/images/dune-buggy-dubai.jpg",
} as const;

export const brandAssets = {
  logo: "/images/transparent-logo.png",
  logoFilePath: "public/images/transparent-logo.png",
} as const;

export const businessInfo = {
  phoneDisplay: "(480) 433-6609",
  phoneHref: "tel:4804336609",
  phoneInternational: "+14804336609",
  email: "Jeffery@Joyrideazsports.com",
  emailHref: "mailto:Jeffery@Joyrideazsports.com",
  address: {
    streetAddress: "230 E Coolidge Ave",
    addressLocality: "Coolidge",
    addressRegion: "AZ",
    postalCode: "85128",
    addressCountry: "US",
    mapsUrl: "https://maps.google.com/?q=230+E+Coolidge+Ave,+Coolidge,+AZ+85128",
  },
  serviceAreas: ["Florence, Arizona", "Coolidge, Arizona", "San Tan Valley, Arizona"],
  pickupRadiusMiles: 10,
  discount: "10% off to first responders and military members.",
} as const;

function getEnvValue(...names: string[]) {
  for (const name of names) {
    const value = process.env[name]?.trim();

    if (value) {
      return value;
    }
  }

  return undefined;
}

export function getSiteUrl() {
  return (getEnvValue("NEXT_PUBLIC_SITE_URL", "SITE_URL") ?? siteConfig.url).replace(/\/+$/, "");
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${getSiteUrl()}/`).toString();
}

export function getVerificationMetadata(): Metadata["verification"] | undefined {
  const google = getEnvValue("GOOGLE_SITE_VERIFICATION", "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION");
  const yahoo = getEnvValue("YAHOO_SITE_VERIFICATION", "NEXT_PUBLIC_YAHOO_SITE_VERIFICATION");
  const yandex = getEnvValue("YANDEX_SITE_VERIFICATION", "NEXT_PUBLIC_YANDEX_SITE_VERIFICATION");
  const bing = getEnvValue("BING_SITE_VERIFICATION", "NEXT_PUBLIC_BING_SITE_VERIFICATION");
  const pinterest = getEnvValue(
    "PINTEREST_SITE_VERIFICATION",
    "NEXT_PUBLIC_PINTEREST_SITE_VERIFICATION",
    "PINTEREST_DOMAIN_VERIFY",
    "NEXT_PUBLIC_PINTEREST_DOMAIN_VERIFY",
  );
  const facebook = getEnvValue(
    "FACEBOOK_DOMAIN_VERIFICATION",
    "NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION",
  );

  const other = Object.fromEntries(
    [
      ["msvalidate.01", bing],
      ["p:domain_verify", pinterest],
      ["facebook-domain-verification", facebook],
    ].filter(([, value]) => Boolean(value)),
  );

  if (!google && !yahoo && !yandex && Object.keys(other).length === 0) {
    return undefined;
  }

  return {
    google,
    yahoo,
    yandex,
    other: Object.keys(other).length > 0 ? other : undefined,
  };
}

export function getSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: siteConfig.title,
      template: siteConfig.titleTemplate,
    },
    description: siteConfig.description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords],
    category: siteConfig.category,
    alternates: {
      canonical: "/",
    },
    authors: [{ name: siteConfig.name, url: getSiteUrl() }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    manifest: "/manifest.webmanifest",
    icons: {
      icon: [{ url: seoAssets.brandIcon, type: "image/x-icon", sizes: "any" }],
      shortcut: [{ url: seoAssets.brandIcon, type: "image/x-icon", sizes: "any" }],
      apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: "/",
      siteName: siteConfig.name,
      title: siteConfig.title,
      description: siteConfig.description,
      images: [
        {
          url: seoAssets.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [seoAssets.twitterImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: getVerificationMetadata(),
  };
}

export function getHomePageStructuredData() {
  const siteUrl = getSiteUrl();
  const businessId = `${siteUrl}/#localbusiness`;
  const websiteId = `${siteUrl}/#website`;
  const webpageId = `${siteUrl}/#webpage`;
  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    image: [
      absoluteUrl(seoAssets.primaryImage),
      absoluteUrl("/images/utv-cfmoto-zforce.jpg"),
      absoluteUrl("/images/golf-cart-fairway.jpg"),
    ],
    telephone: businessInfo.phoneInternational,
    email: businessInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.9749,
      longitude: -111.5214,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      // Add your Google Business Profile URL here once claimed:
      // "https://maps.app.goo.gl/YOUR_LISTING_ID",
      // Add Facebook, Instagram, etc. as you create them
    ],
    areaServed: businessInfo.serviceAreas,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: businessInfo.phoneInternational,
        email: businessInfo.email,
        areaServed: businessInfo.serviceAreas,
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [...supportedVehicleTypes],
    makesOffer: serviceOfferings.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: {
          "@id": websiteId,
        },
        about: {
          "@id": businessId,
        },
        primaryImageOfPage: absoluteUrl(seoAssets.primaryImage),
      },
      localBusiness,
      {
        "@type": "AutoRepair",
        "@id": `${siteUrl}/#autorepair`,
        isPartOf: {
          "@id": businessId,
        },
        name: siteConfig.name,
        url: siteUrl,
      },
    ],
  };
}
