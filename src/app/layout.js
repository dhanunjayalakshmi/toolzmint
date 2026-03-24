import Link from "next/link";
import "./globals.css";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

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
    <html lang="en" className={inter?.variable} suppressHydrationWarning>
      {/* <head>
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (prefersDark) {
                document.documentElement.classList.add('dark');
              }
            })();
          `}
        </Script>
      </head> */}
      <body className="font-sans antialiased bg-white text-black">
        {/* Navbar */}
        <header className="border-b">
          <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <h1 className="text-xl font-bold text-blue-600">Toolzmint</h1>

            <nav className="flex gap-6 text-sm">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
              <a href="/tools" className="hover:text-blue-600">
                Tools
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
