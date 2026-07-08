import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CONTACT, HOURS, NAV_LINKS } from '@/constants/site';
import { footer } from '@/data/footer';
import { services } from '@/data/services';
import logoUrl from '@/assets/images/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column (Req #7 — paragraph below logo) */}
          <div className="lg:col-span-1">
            <img
              src={logoUrl}
              alt="Krishna Associates"
              className="h-14 w-auto brightness-0 invert opacity-95"
            />
            <p className="mt-5 text-sm text-ink-300 leading-relaxed">
              {footer.brandParagraph}
            </p>
          </div>

          {/* Explore Krishna Associates (Req #7 — was "Company") */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-5">
              {footer.navHeading}
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-ink-300 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Business Hours (Req #8) */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-white mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-ink-300">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-white transition-colors">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-400" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            {/* Business Hours (Req #8) */}
            <div className="mt-8">
              <h4 className="text-base font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <Clock size={14} />
                {footer.hoursHeading}
              </h4>
              <div className="space-y-2 text-sm text-ink-300">
                <div>
                  <p className="text-white font-medium">{HOURS.weekdays.label}</p>
                  <p>{HOURS.weekdays.time}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar (Req #8) */}
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>{footer.copyright}</p>
          <p className="opacity-70">
            Built with care for accurate, transparent tax services.
          </p>
        </div>
      </div>
    </footer>
  );
};
