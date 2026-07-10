import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Toolzmint – Free Online Tools for Developers",
  description:
    "Free browser-based tools for developers and everyday tasks. Line break remover, UUID generator, Base64 encoder, JSON formatter, word counter, and 25+ more utilities — no install needed.",
  metadataBase: new URL("https://toolzmint.com"),
  alternates: {
    canonical: "https://toolzmint.com",
  },
  openGraph: {
    title: "Toolzmint – Free Online Tools for Developers",
    description:
      "Free browser-based tools for developers and everyday tasks. Line break remover, UUID generator, Base64 encoder, JSON formatter, word counter, and 25+ more utilities — no install needed.",
    type: "website",
    url: "https://toolzmint.com",
    siteName: "Toolzmint",
    images: [
      {
        url: "https://toolzmint.com/api/og?title=Toolzmint&description=Free%20browser-based%20tools%20for%20developers.%20No%20install%20needed.",
        width: 1200,
        height: 630,
        alt: "Toolzmint – Free Online Tools for Developers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toolzmint – Free Online Tools for Developers",
    description:
      "Free browser-based tools for developers and everyday tasks. Line break remover, UUID generator, Base64 encoder, JSON formatter, word counter, and 25+ more utilities — no install needed.",
    images: [
      "https://toolzmint.com/api/og?title=Toolzmint&description=Free%20browser-based%20tools%20for%20developers.%20No%20install%20needed.",
    ],
  },
  verification: {
    google: "K8qKF7eQiUAamegngDg817buqx7ekNezCI2XFD3igVU",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={inter?.variable}>
      {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      )}
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-40 border-b border-border/40 bg-background/85 backdrop-blur-xl">
            <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-2xl px-2 py-1 transition-all hover:bg-muted/50"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-sm font-semibold text-primary shadow-sm transition-all group-hover:-translate-y-0.5 group-hover:bg-primary/16 group-hover:shadow-md">
                  T
                </span>
                <div className="space-y-0.5">
                  <p className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
                    Toolzmint
                  </p>
                  <p className="text-xs text-muted-foreground transition-colors group-hover:text-foreground/70">
                    Fast utilities, cleaner workflows
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <nav className="app-shell-nav rounded-full p-1.5 shadow-sm flex items-center gap-2 bg-muted/75">
                  <Link
                    href="/"
                    className="app-shell-link rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
                  >
                    Home
                  </Link>

                  <Link
                    href="/tools"
                    className="app-shell-link rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
                  >
                    Tools
                  </Link>

                  <ThemeToggle />
                </nav>
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
