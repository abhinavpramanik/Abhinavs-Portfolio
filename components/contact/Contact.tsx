"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send, MapPin, Clock } from "lucide-react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { contactSchema, type ContactFormData } from "@/lib/schemas";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abhinavpramanik", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhinav-pramanik/", icon: FaLinkedinIn },
  { label: "Twitter", href: "https://twitter.com/AbhinavPramanik", icon: FaXTwitter },
  { label: "Email", href: "mailto:abhinavpramanik@gmail.com", icon: Mail },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        if (response.status === 429) {
          toast.error("Rate limit exceeded. 2 mails per day only allowed!");
          return;
        }
        throw new Error("Failed to send message");
      }

      toast.success("Message sent! I'll get back to you soon. 🚀");
      reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="section-title gradient-text mb-4">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind, want to collaborate, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  {...register("name")}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all duration-200"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all duration-200"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block mb-2 text-sm font-medium text-[var(--color-text-secondary)]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  {...register("message")}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/25 text-sm outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all duration-200 resize-y min-h-[120px]"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-[var(--color-error)]">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm hover:shadow-lg hover:shadow-[var(--color-primary)]/25 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-[var(--color-text-secondary)]">
                  * 2 mails per day only allowed!
                </p>
              </div>
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl glass-subtle">
                <Mail size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Email</p>
                  <p className="text-sm font-medium text-white">abhinavpramanik@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass-subtle">
                <MapPin size={18} className="text-[var(--color-primary)] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Location</p>
                  <p className="text-sm font-medium text-white">India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl glass-subtle">
                <Clock size={18} className="text-[var(--color-success)] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[var(--color-text-secondary)]">Availability</p>
                  <p className="text-sm font-medium text-[var(--color-success)]">
                    🟢 Open to Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-subtle text-[var(--color-text-secondary)] hover:text-white hover:bg-white/[0.06] transition-all duration-200 text-sm"
                  >
                    <social.icon size={16} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
