import Link from "next/link";
import { getMetadata } from "@/lib/metadata";

const GITHUB_URL = "https://github.com/dhanunjayalakshmi";
const REPO_URL = "https://github.com/dhanunjayalakshmi/toolzmint";

export const metadata = getMetadata({
  title: "About Toolzmint – Who Builds These Free Online Tools",
  description:
    "Toolzmint is an independent project built and maintained by Dhanunjaya Lakshmi G., a full-stack JavaScript developer from Hyderabad, India. 34 free tools that run entirely in your browser.",
  path: "/about",
});

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://toolzmint.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Toolzmint",
    url: "https://toolzmint.com",
    foundingDate: "2026-03",
    founder: {
      "@type": "Person",
      name: "Dhanunjaya Lakshmi G.",
      jobTitle: "Full-Stack JavaScript Developer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressCountry: "IN",
      },
      sameAs: [GITHUB_URL],
    },
  },
};

const linkClass =
  "font-medium text-primary underline-offset-4 hover:underline";

const AboutPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">About Toolzmint</h1>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint is a free collection of browser-based utility tools for
          developers, writers, and anyone who needs to get a small task done
          quickly, without installing software or creating an account.
        </p>
      </div>

      <section className="space-y-4 rounded-3xl bg-muted/55 p-6 shadow-sm shadow-black/5">
        <h2 className="text-xl font-semibold tracking-tight">Who builds Toolzmint</h2>
        <div className="flex items-start gap-4">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-base font-semibold text-primary">
            DL
          </span>
          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed">
              Toolzmint is an independent project built and maintained by{" "}
              <strong className="text-foreground">Dhanunjaya Lakshmi G.</strong>,
              a full-stack JavaScript developer (React, Next.js, Node.js) based
              in Hyderabad, India. I started it in March 2026 and write the
              code, the tool guides, and the blog posts myself.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The site is not run by a company or a content team. When you send
              a message through the{" "}
              <Link href="/contact" className={linkClass}>
                contact page
              </Link>
              , it comes straight to me.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You can find me on{" "}
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                GitHub
              </a>
              , and the{" "}
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                source code for Toolzmint
              </a>{" "}
              is public, so you can see exactly how every tool works.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Why I built it</h2>
        <p className="text-muted-foreground leading-relaxed">
          Many small tasks, like formatting JSON, decoding a JWT, removing line
          breaks from copied text, or generating a UUID, send you to websites
          full of pop-ups, sign-up walls, or tools that upload your input to a
          server. I wanted one clean place where these tasks take a few
          seconds and your data stays on your device.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">What you will find here</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint currently has 34 tools covering text editing, developer
          utilities, generators, encoders, converters, and calculators. They
          include a{" "}
          <Link href="/tools/word-counter" className={linkClass}>word counter</Link>,{" "}
          <Link href="/tools/line-break-remover" className={linkClass}>line break remover</Link>,{" "}
          <Link href="/tools/json-formatter" className={linkClass}>JSON formatter</Link>,{" "}
          <Link href="/tools/uuid-generator" className={linkClass}>UUID generator</Link>,{" "}
          <Link href="/tools/regex-tester" className={linkClass}>regex tester</Link>,{" "}
          <Link href="/tools/password-generator" className={linkClass}>password generator</Link>, and{" "}
          <Link href="/tools/image-resizer" className={linkClass}>image resizer</Link>.
          You can browse all of them on the{" "}
          <Link href="/tools" className={linkClass}>tools page</Link>.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          The{" "}
          <Link href="/blog" className={linkClass}>blog</Link>{" "}
          explains the ideas behind the tools, such as what a UUID is, how
          Base64 and URL encoding work, and how to write regular expressions.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Privacy by design</h2>
        <p className="text-muted-foreground leading-relaxed">
          Every tool runs entirely in your browser. The text, files, and images
          you enter are processed on your device and are never sent to a
          Toolzmint server. That matters for things like JWT tokens, hashes,
          and passwords, which should never be pasted into a site that uploads
          them. Read the{" "}
          <Link href="/privacy-policy" className={linkClass}>privacy policy</Link>{" "}
          for details.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">How the site is built</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint is built with Next.js, React, and Tailwind CSS. Every page
          is generated ahead of time so it loads fast, and each tool works
          without a server. It supports light and dark themes and works on
          phones as well as desktops.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">How Toolzmint stays free</h2>
        <p className="text-muted-foreground leading-relaxed">
          All tools are free to use, with no account and no usage limits. To
          cover hosting and development, Toolzmint may show a small number of
          ads, placed so they never get in the way of using a tool.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Suggest a tool</h2>
        <p className="text-muted-foreground leading-relaxed">
          New tools are added and existing ones improved regularly. If there is
          a tool you need, or something does not work the way you expect,{" "}
          <Link href="/contact" className={linkClass}>let me know</Link>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
