export const metadata = {
  title: "Terms of Service | Alexas Cleaning Services",
};

export default function TermsPage() {
  return (
    <div className="container px-4 py-16 md:py-24 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
      <div className="prose prose-slate max-w-none">
        <p>Last updated: January 2026</p>
        <p>
          Please read these Terms of Service carefully before using the Alexas Cleaning Services website or booking our services.
        </p>
        
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing our website or booking a service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
        </p>
        
        <h3>2. Service Booking and Cancellation</h3>
        <p>
          We require at least 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be subject to a cancellation fee.
        </p>
        
        <h3>3. Payment</h3>
        <p>
          Payment is due at the time of service unless otherwise agreed upon. We accept cash, credit cards, and electronic transfers.
        </p>
        
        <h3>4. Satisfaction Guarantee</h3>
        <p>
          If you are not satisfied with our service, please contact us within 24 hours, and we will return to re-clean the specific area at no extra charge.
        </p>
        
        <h3>5. Liability</h3>
        <p>
          Alexas Cleaning Services is licensed and insured. However, we are not liable for damage due to wear and tear or improper installation of items.
        </p>
      </div>
    </div>
  );
}
