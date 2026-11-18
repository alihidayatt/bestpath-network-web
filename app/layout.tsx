import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer/component";
import Navbar from "./components/navigation/navbar/component";
import SiteMotion from "./components/SiteMotion";

const schibsted = Schibsted_Grotesk({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-brand" });
// The deployment owner supplies the public origin; an email domain is not proof
// of the website's canonical origin. Local preview uses the local server only.
const siteOrigin = new URL(process.env.SITE_URL || "http://localhost:3000");
if (!["http:", "https:"].includes(siteOrigin.protocol) || siteOrigin.username || siteOrigin.password) {
  throw new Error("SITE_URL must be an absolute HTTP(S) URL without credentials");
}
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin.origin),
  title: { default: "Bestpath Network — Network services and technical training", template: "%s | Bestpath Network" },
  description: "Network planning, implementation, maintenance and technical training for engineers and organizations in Indonesia.",
  other: { "page-type": "service", "site-kind": "other" },
  openGraph: { title: "Bestpath Network", description: "Network services and technical training in Indonesia.", type: "website", images: ["/wall-banner-1.jpg"] },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#f7f8f5" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={schibsted.variable} data-type="service" data-radius="soft" data-buttons="arrow" data-motion="on" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/system.css" />
        <link rel="stylesheet" href="/assets/motion/motion.css" />
        <link rel="stylesheet" href="/assets/layout/layout.css" />
        <link rel="stylesheet" href="/assets/moments/picture-develops/moment.css" />
      </head>
      <body>
        {/* Service / other; brand palette, Schibsted 400, photo hero, nav-mega, footer-dark,
            close-type, surface-pairs, arrow buttons; existing logo replaces dots; picture-develops film. */}
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <SiteMotion />
      </body>
    </html>
  );
}
