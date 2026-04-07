import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Contact Toolzmint",
  description: "Get in touch with Toolzmint for support or suggestions.",
  path: "/contact",
});

const ContactPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        Have questions, suggestions, or feedback? We would love to hear from
        you.
      </p>

      <p className="mb-4">
        📧 Email:{" "}
        <a
          href="mailto:support@toolzmint.com"
          className="text-primary underline"
        >
          support@toolzmint.com
        </a>
      </p>

      <p>We aim to respond within 24–48 hours.</p>
    </div>
  );
};

export default ContactPage;
