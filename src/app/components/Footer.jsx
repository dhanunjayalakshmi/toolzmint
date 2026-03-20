import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-10 py-6 text-center text-sm text-gray-500">
      <div className="space-x-4">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>

      <p className="mt-2">© {new Date().getFullYear()} Toolzmint</p>
    </footer>
  );
};

export default Footer;
