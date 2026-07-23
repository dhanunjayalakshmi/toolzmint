import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blogPosts";
import { getMetadata } from "@/lib/metadata";

export const generateStaticParams = () =>
  blogPosts.map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return getMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const renderContent = (content) =>
  content.map((block, i) => {
    switch (block.type) {
      case "p":
        return (
          <p key={i} className="text-muted-foreground leading-relaxed">
            {block.text}
          </p>
        );
      case "h2":
        return (
          <h2 key={i} className="text-xl font-semibold tracking-tight pt-2">
            {block.text}
          </h2>
        );
      case "ul":
        return (
          <ul key={i} className="space-y-2 pl-1">
            {block.items.map((item, j) => (
              <li
                key={j}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-primary/60" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      case "code":
        return (
          <pre
            key={i}
            className="rounded-2xl bg-muted px-5 py-4 text-sm font-mono text-foreground overflow-x-auto"
          >
            <code>{block.text}</code>
          </pre>
        );
      default:
        return null;
    }
  });

const BlogPostPage = async ({ params }) => {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "Toolzmint",
      url: "https://toolzmint.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://toolzmint.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-3xl mx-auto py-12 px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Back to Blog
        </Link>

        <article className="space-y-6">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.readingTime} min read
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight leading-snug">
              {post.title}
            </h1>

            <p className="text-sm text-muted-foreground">
              {formatDate(post.publishedAt)}
            </p>
          </header>

          <div className="space-y-5">{renderContent(post.content)}</div>
        </article>

        <div className="mt-12 rounded-3xl bg-primary/8 border border-primary/15 p-7 space-y-3">
          <p className="text-xs font-medium text-primary uppercase tracking-wider">
            Try it yourself
          </p>
          <h2 className="text-lg font-semibold">
            Free online {post.relatedToolName}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Use Toolzmint&apos;s {post.relatedToolName} right in your browser —
            no install, no sign-up required.
          </p>
          <Link
            href={`/tools/${post.relatedToolSlug}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Open {post.relatedToolName} →
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-border/60">
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
