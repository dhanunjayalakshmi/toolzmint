export const metadata = {
  title: "Privacy Policy - Toolzmint",
  description: "Privacy policy for Toolzmint.",
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        At Toolzmint, we respect your privacy. We do not collect personal data
        unless you voluntarily provide it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        We may use cookies to improve user experience and analyze website
        traffic.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Third-party Services</h2>
      <p className="mb-4">
        We may use third-party services like Google AdSense which may use
        cookies to show relevant ads.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Consent</h2>
      <p>By using our website, you consent to our privacy policy.</p>
    </div>
  );
};

export default PrivacyPolicy;
