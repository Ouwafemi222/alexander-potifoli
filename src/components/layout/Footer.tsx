import { Logo } from "@/components/ui/Logo";
import { BehanceIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { BRAND, FOOTER_LINKS } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo size="lg" href="/" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">{BRAND.tagline}</p>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary transition-colors hover:text-accent">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-text-primary">Connect</h3>
            <div className="mt-4 flex gap-4">
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent" aria-label="Instagram"><InstagramIcon className="h-5 w-5" /></a>
              <a href={BRAND.behance} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent" aria-label="Behance"><BehanceIcon className="h-5 w-5" /></a>
            </div>
            <p className="mt-4 text-sm text-text-secondary"><a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-accent">{BRAND.email}</a></p>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-text-muted">© {year} {BRAND.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
