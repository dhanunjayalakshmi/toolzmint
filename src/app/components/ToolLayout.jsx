import ToolDiscoveryCard from "@/app/components/discovery/ToolDiscoveryCard";
import AdUnit from "@/app/components/AdUnit";
import { getRelatedTools } from "@/lib/toolDiscovery";
import { tools } from "@/lib/toolsConfig";
import { Card, CardContent } from "@/components/ui/card";

const BASE_URL = "https://toolzmint.com";

const DEFAULT_STEPS = [
  "Enter your input.",
  "View the result instantly.",
  "Copy the output if needed.",
];

const ToolLayout = ({
  slug,
  title,
  type,
  description,
  examples = [],
  children,
  aboutText,
  howToSteps = DEFAULT_STEPS,
  seoSections = [],
  faqItems = [],
  relatedToolSlugs = [],
}) => {
  const relatedTools = getRelatedTools({
    tools,
    currentTitle: title,
    currentType: type,
    relatedToolSlugs,
    limit: 6,
  });

  const toolUrl = slug ? `${BASE_URL}/tools/${slug}` : null;

  const breadcrumbSchema = toolUrl
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Tools", item: `${BASE_URL}/tools` },
          { "@type": "ListItem", position: 2, name: title, item: toolUrl },
        ],
      }
    : null;

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    ...(toolUrl ? { url: toolUrl } : {}),
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12 space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>

        <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>

      <Card className="w-full rounded-[2rem] border-0 bg-linear-to-br from-card via-card to-muted/55 shadow-xl shadow-black/8 focus:outline-none">
        <CardContent className="p-5 sm:p-6">{children}</CardContent>
      </Card>

      <AdUnit
        slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_TOOL}
        className="w-full"
      />

      {examples?.length > 0 && (
        <section className="max-w-3xl space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">Examples</h2>

          <div className="space-y-4">
            {examples?.map((example, index) => (
              <div
                key={index}
                className="space-y-2 rounded-3xl bg-card p-5 shadow-sm shadow-black/5"
              >
                <p className="text-sm font-medium">Input</p>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {example?.input}
                </pre>

                <p className="text-sm font-medium mt-2">Output</p>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {example?.output}
                </pre>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="tool-info-shell space-y-5 rounded-[2rem] bg-muted/55 p-6 shadow-sm shadow-black/5">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight">About this tool</h2>

          <p className="max-w-3xl text-muted-foreground">
            {aboutText ||
              `${description}. This tool helps you process input instantly in your browser without installing any software.`}
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight">How to use</h2>

          <ul className="space-y-3 text-muted-foreground">
            {howToSteps.map((step) => (
              <li key={step} className="flex items-start gap-3">
                <span className="mt-2 inline-block size-2.5 shrink-0 rounded-full bg-primary/70" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {seoSections.length > 0 && (
        <section className="space-y-6">
          {seoSections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </section>
      )}

      {faqItems.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl bg-card p-5 shadow-sm shadow-black/5"
              >
                <h3 className="text-base font-semibold tracking-tight">
                  {item.question}
                </h3>
                <p className="mt-2 max-w-3xl text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <AdUnit
        slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT_BELOW_FAQ}
        className="w-full"
      />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Related Tools</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {relatedTools.map((tool) => (
            <ToolDiscoveryCard key={tool?.slug} tool={tool} compact />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ToolLayout;
