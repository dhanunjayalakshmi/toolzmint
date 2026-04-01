import Link from "next/link";
import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Toolzmint",
  description: "Free online tools for everyday use",
  verification: {
    google: "K8qKF7eQiUAamegngDg817buqx7ekNezCI2XFD3igVU",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={inter?.variable}>
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

              <nav className="flex items-center gap-2 rounded-full bg-muted/75 p-1.5 shadow-sm">
                <Link
                  href="/"
                  className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
                >
                  Home
                </Link>

                <Link
                  href="/tools"
                  className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
                >
                  Tools
                </Link>
              </nav>
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
