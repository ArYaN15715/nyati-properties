import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useInquiry } from "@/hooks/useInquiry";
import type { InquiryFormData } from "@/types";
import { AlertCircle, CheckCircle, Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const PROPERTY_OPTIONS = [
  "Residential Apartment",
  "Villa / Bungalow",
  "Residential Plot",
  "Commercial Property",
  "Investment Advice",
  "Other",
];

const WA_LINK =
  "https://wa.me/7572905655?text=Hi%2C%20I%20have%20a%20property%20inquiry%20for%20Nyati%20Properties.";

interface FormErrors {
  name?: string;
  phone?: string;
  propertyInterest?: string;
}

export default function ContactSection() {
  const { submitInquiry, isSubmitting, isSuccess, isError, reset } =
    useInquiry();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [propertyInterest, setPropertyInterest] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone.trim()))
      e.phone = "Enter a valid 10-digit phone number";
    if (!propertyInterest)
      e.propertyInterest = "Please select a property interest";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const data: InquiryFormData = {
      name: name.trim(),
      phone: phone.trim(),
      propertyInterest,
      message,
      propertyId: null,
    };
    await submitInquiry(data);
  }

  function handleReset() {
    reset();
    setName("");
    setPhone("");
    setPropertyInterest("");
    setMessage("");
    setErrors({});
  }

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-body font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            Connect With Our Property Experts
          </h2>
          <p className="text-white/85 font-body max-w-xl mx-auto">
            Fill the form below or reach us directly on WhatsApp for fastest
            response
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* LEFT: Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary/60 backdrop-blur-sm rounded-2xl border border-white/8 p-6 sm:p-8"
          >
            {isSuccess ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center gap-5 py-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    Inquiry Sent!
                  </h3>
                  <p className="text-white/90 font-body text-sm">
                    Thank you! We'll reach out within 24 hours.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.success_whatsapp_button"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-lg font-body font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                  For Faster Response, Message on WhatsApp →
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  data-ocid="contact.submit_another_button"
                  className="text-xs text-white/65 hover:text-white/90 font-body transition-colors"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : isError ? (
              <div
                data-ocid="contact.error_state"
                className="flex flex-col items-center justify-center gap-5 py-10 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-destructive/20 border border-destructive/30 flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    Something Went Wrong
                  </h3>
                  <p className="text-white/90 font-body text-sm">
                    Something went wrong. Please try WhatsApp directly.
                  </p>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.error_whatsapp_button"
                  className="w-full flex items-center justify-center gap-2.5 py-3 rounded-lg font-body font-bold text-sm text-white transition-all duration-200 hover:opacity-90"
                  style={{ background: "#25D366" }}
                >
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  data-ocid="contact.retry_button"
                  className="text-xs text-white/65 hover:text-white/90 font-body transition-colors"
                >
                  Try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-white/85 text-sm font-body"
                  >
                    Full Name <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => {
                      if (!name.trim())
                        setErrors((p) => ({
                          ...p,
                          name: "Full name is required",
                        }));
                      else
                        setErrors((p) => {
                          const { name: _, ...rest } = p;
                          return rest;
                        });
                    }}
                    placeholder="Your full name"
                    data-ocid="contact.name_input"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-accent/60 focus:ring-accent/20"
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.name.field_error"
                      className="text-destructive text-xs font-body"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="text-white/85 text-sm font-body"
                  >
                    Phone Number <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={() => {
                      if (!phone.trim())
                        setErrors((p) => ({
                          ...p,
                          phone: "Phone number is required",
                        }));
                      else if (!/^\d{10}$/.test(phone.trim()))
                        setErrors((p) => ({
                          ...p,
                          phone: "Enter a valid 10-digit phone number",
                        }));
                      else
                        setErrors((p) => {
                          const { phone: _, ...rest } = p;
                          return rest;
                        });
                    }}
                    placeholder="10-digit mobile number"
                    data-ocid="contact.phone_input"
                    maxLength={10}
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-accent/60 focus:ring-accent/20"
                  />
                  {errors.phone && (
                    <p
                      data-ocid="contact.phone.field_error"
                      className="text-destructive text-xs font-body"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-interest"
                    className="text-white/85 text-sm font-body"
                  >
                    Property Interest <span className="text-accent">*</span>
                  </Label>
                  <Select
                    value={propertyInterest}
                    onValueChange={(v) => {
                      setPropertyInterest(v);
                      setErrors((p) => {
                        const { propertyInterest: _, ...rest } = p;
                        return rest;
                      });
                    }}
                  >
                    <SelectTrigger
                      id="contact-interest"
                      data-ocid="contact.property_interest_select"
                      className="bg-white/5 border-white/15 text-white focus:border-accent/60 focus:ring-accent/20"
                    >
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      {PROPERTY_OPTIONS.map((opt) => (
                        <SelectItem
                          key={opt}
                          value={opt}
                          className="text-foreground hover:bg-muted"
                        >
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.propertyInterest && (
                    <p
                      data-ocid="contact.interest.field_error"
                      className="text-destructive text-xs font-body"
                    >
                      {errors.propertyInterest}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-white/85 text-sm font-body"
                  >
                    Message{" "}
                    <span className="text-white/65 text-xs">(optional)</span>
                  </Label>
                  <Textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your requirement..."
                    rows={3}
                    data-ocid="contact.message_textarea"
                    className="bg-white/5 border-white/15 text-white placeholder:text-white/40 focus:border-accent/60 focus:ring-accent/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  data-ocid="contact.submit_button"
                  className="w-full bg-accent text-secondary hover:bg-accent/90 font-body font-bold text-sm py-3 rounded-lg shadow-lg hover:shadow-accent/25 transition-all duration-200 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-secondary/40 border-t-secondary rounded-full animate-spin" />
                      Sending Inquiry...
                    </span>
                  ) : (
                    "Send Inquiry"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contact Us Directly
              </h3>

              {/* WhatsApp number */}
              <a
                href="https://wa.me/7572905655"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_number_link"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-secondary/50 hover:border-accent/30 hover:bg-secondary/70 transition-all duration-200 group mb-3"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "#25D366" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-xs font-body">WhatsApp</p>
                  <p className="font-display text-xl font-bold text-white group-hover:text-accent transition-colors">
                    7572905655
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-white/8 bg-secondary/50 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-xs font-body">Address</p>
                  <p className="font-body text-sm text-primary-foreground/90 leading-snug">
                    Nyati Property's and Builder,
                    <br />
                    Talwandi, Kota, Rajasthan 324005
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-secondary/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white/70 text-xs font-body">
                    Working Hours
                  </p>
                  <p className="font-body text-sm text-primary-foreground/90">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp_chat_button"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-lg font-body font-bold text-sm text-white transition-all duration-200 hover:opacity-90 shadow-lg"
                style={{ background: "#25D366" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
              <a
                href="tel:7572905655"
                data-ocid="contact.call_now_button"
                className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-lg font-body font-bold text-sm text-white border border-white/25 hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                {
                  label: "✔ Verified Agency",
                  color:
                    "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
                },
                {
                  label: "4.9★ Google Rated",
                  color: "text-accent border-accent/30 bg-accent/10",
                },
                {
                  label: "🏗️ Builder-Backed",
                  color: "text-white/80 border-white/15 bg-white/5",
                },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-body font-semibold border ${badge.color}`}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
