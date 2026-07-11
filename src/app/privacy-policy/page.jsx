import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Privacy Policy – Toolzmint",
  description: "Privacy policy for Toolzmint. Learn how we handle data, cookies, and third-party advertising.",
  path: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground">Last updated: July 10, 2026</p>
      </div>

      <p className="text-muted-foreground leading-relaxed">
        This Privacy Policy explains how Toolzmint ("we", "us", or "our") handles
        information when you visit toolzmint.com. We are committed to protecting
        your privacy and being transparent about how data is used.
      </p>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Information we collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint tools run entirely in your browser. Any text, files, or data
          you enter into our tools is processed locally on your device and is
          never transmitted to our servers.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We do not require you to create an account or provide any personal
          information to use Toolzmint.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Like most websites, our hosting provider may automatically collect
          standard server log data such as your IP address, browser type,
          referring URL, and pages visited. This data is used for security and
          performance monitoring only.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint itself does not set tracking cookies. However, third-party
          services we use — including Google AdSense — may set cookies on your
          browser to deliver and personalise advertisements based on your
          interests.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          These cookies are governed by the privacy policies of the respective
          third-party providers, not by Toolzmint.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Advertising</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint uses Google AdSense to display advertisements. Google AdSense
          uses cookies and web beacons to serve ads based on your prior visits to
          this website and other sites on the internet.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Google's use of advertising cookies enables it and its partners to serve
          ads to you based on your visit to Toolzmint and other sites. You may opt
          out of personalised advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Ads Settings
          </a>
          . You can also opt out via the{" "}
          <a
            href="https://optout.networkadvertising.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>
        <p className="text-muted-foreground leading-relaxed">
          For more information on how Google uses data from sites that use its
          advertising services, visit{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            How Google uses information from sites that use our services
          </a>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Third-party links</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our website may contain links to third-party websites. We have no
          control over the content or privacy practices of those sites and are
          not responsible for them. We encourage you to review the privacy policy
          of any site you visit.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Children's privacy</h2>
        <p className="text-muted-foreground leading-relaxed">
          Toolzmint is not directed at children under 13 years of age. We do not
          knowingly collect personal information from children. If you believe a
          child has provided personal information to us, please contact us and we
          will delete it.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Your rights</h2>
        <p className="text-muted-foreground leading-relaxed">
          Depending on your location, you may have rights regarding your personal
          data under applicable laws such as the GDPR (European Union) or similar
          regulations. Since we collect minimal personal data, most of these rights
          relate to data held by third-party services such as Google. You can
          exercise your rights regarding Google's data via{" "}
          <a
            href="https://myaccount.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            Google Account settings
          </a>
          .
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Changes to this policy</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated date. We encourage you to review
          this page periodically.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a href="mailto:support@toolzmint.com" className="text-primary underline">
            support@toolzmint.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
