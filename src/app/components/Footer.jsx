import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="w-full max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-[2rem] bg-muted/65 px-6 py-8 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <p className="text-lg font-semibold tracking-tight">Toolzmint</p>
              <p className="max-w-md text-sm text-muted-foreground">
                Fast, browser-based utility tools designed to stay simple,
                useful, and easy to trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href="/about"
                className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="rounded-full px-4 py-2 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:bg-card hover:text-primary hover:shadow-sm"
              >
                Terms
              </Link>
            </div>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Toolzmint
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
