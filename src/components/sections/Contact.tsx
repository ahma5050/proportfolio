import React, { useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { soundFx } from "@/lib/sound";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", subject: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    soundFx.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      soundFx.playSuccess();
      // Form mailto trigger fallback
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || `Message from ${formData.name}`
      )}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    soundFx.playSuccess();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t hairline bg-secondary/30 py-20 sm:py-24"
    >
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left Column: Contact Value Prop & Direct Channels */}
          <div className="px-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="eyebrow">Direct Contact</p>
            </div>
            <h2 id="contact-title" className="editorial-heading font-semibold">
              Ready to create <span className="gradient-text">extraordinary software?</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-xl">
              I am actively evaluating full-time software engineering roles, technical leadership opportunities, and enterprise consulting contracts. Whether you represent a high-growth tech firm, a global team, or an innovative startup, let’s connect.
            </p>

            {/* Direct Cards */}
            <div className="mt-8 space-y-3 max-w-lg">
              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Direct Email</p>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 text-xs font-mono rounded-md border border-border bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone & WhatsApp</p>
                    <a
                      href={`tel:${personalInfo.phone.replaceAll(" ", "")}`}
                      className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-semibold rounded-md border border-border bg-secondary hover:bg-emerald-600 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-sm">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location & Availability</p>
                  <p className="text-sm font-semibold text-foreground">
                    {personalInfo.location} · Global Remote & Relocation Ready
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub Profile
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-xs font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn Network
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="rounded-2xl border border-border bg-card/90 p-6 sm:p-8 shadow-xl backdrop-blur-md">

            <div className="flex items-center gap-2 mb-2">
              <Send className="w-4 h-4 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Send a Direct Inquiry</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Fill out this form to connect instantly. All inquiries receive responses within 24 hours.
            </p>

            {isSent ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base text-foreground">Message Dispatched!</h4>
                <p className="text-xs text-muted-foreground">
                  Your email client has been prepared. Thank you for reaching out to Ahmed Omer.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="mt-3 text-xs font-semibold text-primary underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">Your Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Engineering Role / Project Collaboration"
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, tech stack, or problem statement..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-border bg-background focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-xs font-semibold text-primary-foreground shadow-md hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
