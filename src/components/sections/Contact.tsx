"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BRAND, CONTACT } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { BehanceIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const whatsappUrl = getWhatsAppUrl(
    BRAND.whatsapp,
    "Hi Alexander, I'd like to discuss a design project with you."
  );

  return (
    <section id="contact" className="bg-bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title={CONTACT.headline}
          description="Reach out via WhatsApp or email — I typically respond within 24 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <motion.div
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow duration-300 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 md:p-12"
          >
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.02] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${BRAND.email}?subject=Design%20Project%20Inquiry`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-8 py-4 font-semibold text-text-primary transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                {BRAND.email}
              </a>
            </div>

            <div className="mt-10 flex justify-center gap-4 border-t border-border pt-8">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={BRAND.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
                aria-label="Behance"
              >
                <BehanceIcon className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-8 text-center text-sm text-text-muted">
              Prefer a quick start? Use the packages above and mention your chosen
              plan in your message.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={whatsappUrl} variant="outline" className="text-sm">
                Start a Project
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
