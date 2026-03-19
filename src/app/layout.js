import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Toolzmint",
  description: "Free online tools for everyday use",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-white text-black">
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
      </body>
    </html>
  );
};

export default RootLayout;
