import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "Terms & Conditions - Toolzmint",
  description: "Terms and conditions for Toolzmint.",
  path: "/terms",
});

const TermsPage = () => {
  return (
    <div className="w-full max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>

      <p className="mb-4">
        By using Toolzmint, you agree to use the website for lawful purposes
        only.
      </p>

      <p className="mb-4">
        All tools are provided {"as is"} without warranties of any kind.
      </p>

      <p className="mb-4">
        We are not responsible for any data loss or misuse.
      </p>

      <p>We reserve the right to update these terms at any time.</p>
    </div>
  );
};

export default TermsPage;
