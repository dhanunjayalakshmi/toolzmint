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
          {/* Navbar */}
          <header className="border-b">
            <div className="w-full max-w-5xl mx-auto flex items-center justify-between p-4">
              <h1 className="text-xl font-bold text-primary">Toolzmint</h1>

              <nav className="flex gap-6 text-md text-foreground">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>

                <Link
                  href="/tools"
                  className="hover:text-primary transition-colors"
                >
                  Tools
                </Link>
              </nav>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
