import { RescheduleForm } from "@/components/forms/reschedule-form";
import { Clock, Calendar, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Reschedule Service | Alexas Cleaning Services",
  description: "Easily update your scheduled cleaning service appointment.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ReschedulePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Clock className="w-4 h-4" />
                Existing Clients Only
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Need to change your <span className="text-primary">Appointment?</span>
              </h1>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-lg">
                Life happens! Fill out the form to request a change in your cleaning schedule. Our team will review your request and get back to you as soon as possible.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-slate-900">Flexible Dates</h3>
                <p className="text-sm text-slate-500 mt-2">Pick the date that works best for your new schedule.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-slate-900">Easy Update</h3>
                <p className="text-sm text-slate-500 mt-2">Your information is secure and directly matched with your account.</p>
              </div>
            </div>

            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
              <p className="text-sm text-slate-700 italic">
                "We understand that plans change. Our goal is to provide the best service while remaining flexible for our valued clients."
              </p>
              <p className="text-xs font-bold text-primary mt-3 uppercase tracking-wider">— Management Team</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-50 -z-10" />
            <RescheduleForm />
          </div>
        </div>
      </div>
    </main>
  );
}
