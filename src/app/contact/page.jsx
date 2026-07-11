import { getMetadata } from "@/lib/metadata";
import ContactForm from "./ContactForm";

export const metadata = getMetadata({
  title: "Contact Toolzmint – Support & Suggestions",
  description:
    "Contact Toolzmint for support, feedback, or tool suggestions. We aim to respond within 24–48 hours.",
  path: "/contact",
});

const ContactPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-3">Contact Us</h1>
        <p className="text-muted-foreground leading-relaxed">
          Have a question, found a bug, or want to suggest a new tool? Fill in
          the form below and we'll get back to you within 24–48 hours.
        </p>
      </div>

      <ContactForm />

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">What to include</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block size-2 shrink-0 rounded-full bg-primary/70" />
            <span>
              <strong className="text-foreground">Bug reports</strong> — describe
              what you did, what you expected, and what happened. Include the tool
              name.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block size-2 shrink-0 rounded-full bg-primary/70" />
            <span>
              <strong className="text-foreground">Tool suggestions</strong> —
              describe the tool you need and what it should do.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 inline-block size-2 shrink-0 rounded-full bg-primary/70" />
            <span>
              <strong className="text-foreground">General feedback</strong> —
              anything that would make Toolzmint more useful to you.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
