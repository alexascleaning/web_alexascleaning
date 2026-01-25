import { EMAIL_ADDRESS } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy | Alexas Cleaning Services",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-16 md:py-24 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: January 2026</p>
        <p>
          At Alexas Cleaning Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
        </p>
        
        <h3>1. Information We Collect</h3>
        <p>
          We may collect personal information such as your name, email address, phone number, and home address when you request a quote, schedule a service, or contact us.
        </p>
        
        <h3>2. How We Use Your Information</h3>
        <p>
          We use your information to provide cleaning services, communicate with you about appointments, send invoices, and improve our customer service. We do not sell your personal data to third parties.
        </p>

        <h3>3. Cookies and Advertising</h3>
        <p>
          Our website uses cookies to enhance your browsing experience, analyze website traffic, and serve personalized content.
        </p>
        <p>
          <strong>Google AdSense:</strong> We use Google AdSense to serve advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on your visit to our site and other sites on the Internet.
        </p>
        <p>
          <strong>DoubleClick Cookie:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
        </p>
        
        <h3>4. Your Choices and Opt-Out</h3>
        <p>
          You can choose to disable cookies through your individual browser settings. However, this may affect your ability to interact with our site.
        </p>
        <p>
          Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ad Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutads.info</a>.
        </p>
        
        <h3>5. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at {EMAIL_ADDRESS}.
        </p>
      </div>
    </div>
  );
}
