import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-8 text-center text-sm text-muted-foreground">
      <div className="space-x-6">
        <Link href="/about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-primary transition-colors">
          Contact
        </Link>
        <Link
          href="/privacy-policy"
          className="hover:text-primary transition-colors"
        >
          Privacy
        </Link>
        <Link href="/terms" className="hover:text-primary transition-colors">
          Terms
        </Link>
      </div>

      <p className="mt-3">© {new Date().getFullYear()} Toolzmint</p>
    </footer>
  );
};

export default Footer;
