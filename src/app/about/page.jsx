import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "About Toolzmint – Free Online Tools for Developers",
  description:
    "Toolzmint is a free browser-based utility platform offering 35+ tools for developers and everyday users — no install, no sign-up, no data sent to servers.",
  path: "/about",
});

const AboutPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">About Toolzmint</h1>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint is a free collection of browser-based utility tools built for
          developers, writers, and anyone who needs to get things done quickly
          without installing software or creating an account.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">What we offer</h2>
        <p className="text-muted-foreground leading-relaxed">
          We currently offer 35+ tools covering text manipulation, developer
          utilities, generators, encoders, converters, and calculators — all free
          and available instantly in your browser.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Tools include a UUID generator, JSON formatter, Base64 and URL encoder
          and decoder, regex tester, diff checker, word counter, word frequency
          counter, password generator, QR code generator, hash generator, image
          resizer, and many more.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Privacy by design</h2>
        <p className="text-muted-foreground leading-relaxed">
          Every tool on Toolzmint runs entirely in your browser. Your text,
          files, and data are never sent to our servers. There is nothing to
          sign up for and no account required.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Our goal</h2>
        <p className="text-muted-foreground leading-relaxed">
          We built Toolzmint to make common tasks faster. Instead of switching
          between apps, writing scripts, or hunting through complex software,
          you can open a tool, paste your input, and get your result in seconds.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We are continuously adding new tools and improving existing ones. If
          there is a tool you need that we do not have, reach out — we would
          love to hear your suggestions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
