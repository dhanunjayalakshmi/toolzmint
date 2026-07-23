import Link from "next/link";
import { getMetadata } from "@/lib/metadata";
import { blogPosts } from "@/lib/blogPosts";

export const metadata = getMetadata({
  title: "Blog – Toolzmint",
  description:
    "Guides and explainers on developer tools, text processing, encoding, and more — from the team behind Toolzmint.",
  path: "/blog",
});

const formatDate = (dateStr) => {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const BlogPage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Blog</h1>
        <p className="text-muted-foreground leading-relaxed">
          Guides and explainers for developer tools, text utilities, encoding,
          and more.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block cursor-pointer rounded-3xl bg-card p-5 shadow-sm shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-black/8 space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {post.readingTime} min read
              </span>
            </div>

            <div className="space-y-1.5">
              <h2 className="text-base font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-muted-foreground">
                {formatDate(post.publishedAt)}
              </span>
              <span className="text-xs font-medium text-primary transition-transform group-hover:translate-x-0.5">
                Read article
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
