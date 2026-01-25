"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Send, Loader2, AlertCircle, CheckCircle2, User, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import * as gtag from "@/lib/gtag";

const FORM_IDS = {
  name: "entry.1333544674",
  phone: "entry.115103318",
  email: "entry.664370666",
  currentDate: "entry.701681862",
  newDate: "entry.1276217903",
  reason: "entry.2042074800",
};

export function RescheduleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentDate: "",
    newDate: "",
    reason: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.currentDate) newErrors.currentDate = "Please select your current service date";
    if (!formData.newDate) newErrors.newDate = "Please select your preferred new date";
    if (!formData.reason.trim()) newErrors.reason = "Please provide a reason for rescheduling";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    
    if (!validate()) return;

    // Helper to format date from YYYY-MM-DD to M/D/YYYY
    const formatDate = (dateStr: string) => {
      if (!dateStr) return "";
      const [year, month, day] = dateStr.split('-');
      return `${parseInt(month)}/${parseInt(day)}/${year}`;
    };

    setIsSubmitting(true);
    
    try {
      // Direct Google Form submission
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd1bTuzY2uot6XL_T8sJKfI8DVur_r2DHn4WXlxpX6vPl9BIA/formResponse";
      
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append(FORM_IDS.name, formData.name);
      formDataToSubmit.append(FORM_IDS.phone, formData.phone);
      formDataToSubmit.append(FORM_IDS.email, formData.email);
      formDataToSubmit.append(FORM_IDS.currentDate, formatDate(formData.currentDate));
      formDataToSubmit.append(FORM_IDS.newDate, formatDate(formData.newDate));
      formDataToSubmit.append(FORM_IDS.reason, formData.reason);

      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formDataToSubmit.toString(),
      });

      // Show success UI
      setIsSuccess(true);
      
      // Track event
      gtag.event({
        action: "reschedule_request",
        category: "Contact",
      });

      setFormData({ name: "", email: "", phone: "", currentDate: "", newDate: "", reason: "" });
      setErrors({});

    } catch (error) {
      console.error("Error submitting form:", error);
      setServerError("Sorry, we couldn't send your request. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMessage = ({ message }: { message?: string }) => {
    if (!message) return null;
    return (
      <motion.p 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-xs mt-1 ml-1 font-medium flex items-center gap-1"
      >
        <AlertCircle className="w-3 h-3" />
        {message}
      </motion.p>
    );
  };

  const getInputClass = (fieldName: string) => {
    const baseClass = "flex h-12 w-full rounded-xl border bg-slate-50/50 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all duration-300 pl-10";
    if (errors[fieldName]) {
      return `${baseClass} border-red-300 focus:border-red-500 focus:ring-red-200`;
    }
    return `${baseClass} border-slate-200 focus:border-primary focus:ring-primary/20 focus:bg-white`;
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white border border-blue-100 rounded-2xl p-12 text-center shadow-xl"
      >
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent!</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          We've received your rescheduling request. Our team will contact you shortly to confirm the new time.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
        >
          Send Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Reschedule Service</h2>
        <p className="text-slate-500 text-sm mt-1">Easily update your appointment time</p>
      </div>

      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm border border-red-100"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-slate-700 ml-1">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              name="name"
              className={getInputClass('name')}
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <ErrorMessage message={errors.name} />
        </div>
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              name="phone"
              type="tel"
              className={getInputClass('phone')}
              placeholder="(555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <ErrorMessage message={errors.phone} />
        </div>
      </div>

      <div className="space-y-2 relative">
        <label className="text-sm font-semibold text-slate-700 ml-1">Email Address *</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            name="email"
            type="email"
            className={getInputClass('email')}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <ErrorMessage message={errors.email} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-slate-700 ml-1">Current Service Date *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              name="currentDate"
              type="date"
              className={getInputClass('currentDate')}
              value={formData.currentDate}
              onChange={handleChange}
            />
          </div>
          <ErrorMessage message={errors.currentDate} />
        </div>
        <div className="space-y-2 relative">
          <label className="text-sm font-semibold text-slate-700 ml-1">New Requested Date *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 text-primary" />
            <input
              name="newDate"
              type="date"
              className={getInputClass('newDate')}
              value={formData.newDate}
              onChange={handleChange}
            />
          </div>
          <ErrorMessage message={errors.newDate} />
        </div>
      </div>

      <div className="space-y-2 group">
        <label className="text-sm font-semibold text-slate-700 ml-1">Reason for Rescheduling *</label>
        <textarea
          name="reason"
          rows={3}
          className="flex w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
          placeholder="Why are you rescheduling? (Ex: Vacation, change in schedule...)"
          value={formData.reason}
          onChange={handleChange}
        />
        <ErrorMessage message={errors.reason} />
      </div>

      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-medium rounded-xl" 
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loader2 className="animate-spin" /> : "Request Reschedule"}
      </Button>
    </motion.form>
  );
}
