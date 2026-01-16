"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    otherService: "",
    message: "",
    address: "",
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

    if (!formData.service) newErrors.service = "Please select a service";
    
    if (formData.service === 'other' && !formData.otherService.trim()) {
      newErrors.otherService = "Please specify the service";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
       newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear specific error when user types
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
    
    // 1. Run Custom Validation
    if (!validate()) {
      // Shake animation or focus could go here
      return;
    }

    setIsSubmitting(true);
    
    try {
      const API_URL = process.env.NEXT_PUBLIC_APPSCRIPT_URL || "";
      const API_KEY = process.env.NEXT_PUBLIC_APPSCRIPT_API_KEY || "";
      
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...formData,
          apiKey: API_KEY
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success === true || result.status === 'success') {
         setIsSuccess(true);
         setFormData({ name: "", email: "", phone: "", service: "", otherService: "", message: "", address: "" });
         setErrors({});
      } else {
         throw new Error(result.message || "Unknown error occurred");
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      setServerError("Sorry, we couldn't send your message right now. Please try again or call us directly.");
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
    const baseClass = "flex h-12 w-full rounded-xl border bg-slate-50/50 px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all duration-300";
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
        exit={{ opacity: 0 }}
        className="bg-white border border-green-100 rounded-2xl p-12 text-center shadow-xl"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </motion.div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Received!</h3>
        <p className="text-slate-600 mb-8 text-lg max-w-md mx-auto leading-relaxed">
          Thank you for contacting Alexas Cleaning Services. We have received your details and will get back to you with a quote shortly.
        </p>
        <Button 
          onClick={() => setIsSuccess(false)} 
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full px-8 shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        >
          Send Another Message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      noValidate 
      className="space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100"
    >
      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm font-medium border border-red-100"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{serverError}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 group">
          <label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Full Name *</label>
          <input
            id="name"
            name="name"
            className={getInputClass('name')}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.name} />
        </div>
        <div className="space-y-2 group">
          <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            className={getInputClass('email')}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          <ErrorMessage message={errors.email} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 group">
          <label htmlFor="service" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Service Needed *</label>
          <div className="relative">
            <select
              id="service"
              name="service"
              className={`${getInputClass('service')} appearance-none`}
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a service...</option>
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="deep-clean">Deep Cleaning</option>
              <option value="move-in-out">Move-In / Move-Out</option>
              <option value="recurring">Recurring Cleaning</option>
              <option value="other">Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
               <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <ErrorMessage message={errors.service} />
        </div>
        
        <AnimatePresence mode="popLayout">
          {formData.service === 'other' ? (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="space-y-2 group"
            >
              <label htmlFor="otherService" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Please Specify *</label>
              <input
                id="otherService"
                name="otherService"
                className={getInputClass('otherService')}
                placeholder="Ex: Window Cleaning"
                value={formData.otherService}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.otherService} />
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="space-y-2 group"
            >
              <label htmlFor="phone" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={getInputClass('phone')}
                placeholder="(555) 123-4567"
                value={formData.phone}
                onChange={handleChange}
              />
              <ErrorMessage message={errors.phone} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {formData.service === 'other' && (
          <motion.div 
            initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-2 group"
          >
            <label htmlFor="phone-secondary" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Phone Number *</label>
            <input
              id="phone-secondary"
              name="phone"
              type="tel"
              className={getInputClass('phone')}
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
            <ErrorMessage message={errors.phone} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-2 group">
        <label htmlFor="address" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Service Address *</label>
        <input
          id="address"
          name="address"
          className={getInputClass('address')}
          placeholder="123 Street Ave, City, ST 12345"
          value={formData.address}
          onChange={handleChange}
        />
        <ErrorMessage message={errors.address} />
      </div>

      <div className="space-y-2 group">
        <label htmlFor="message" className="text-sm font-semibold text-slate-700 ml-1 group-focus-within:text-primary transition-colors">Message / Special Instructions</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="flex w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
          placeholder="Tell us about your cleaning needs (e.g. square footage, number of bedrooms/bathrooms)..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-medium shadow-lg shadow-primary/25 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending Request...
          </>
        ) : (
          <>
            Send Quote Request
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      <p className="text-xs text-center text-slate-400">
        By submitting this form, you agree to our privacy policy. Your information is secure.
      </p>
    </motion.form>
  );
}
