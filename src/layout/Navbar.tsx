import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/constants/site';
import { Button } from '@/components/Button';
import { cn } from '@/utils/cn';
import logoUrl from '@/assets/images/logo.png';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile drawer when the route changes.
  // Adjusted during render (React's recommended pattern for state that depends
  // on a prop/route change) rather than in a useEffect, which avoids an
  // extra synchronous render pass.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'sticky top-0 z-30 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-[var(--shadow-soft)]'
          : 'bg-white border-b border-transparent'
      )}
    >
      <div className="container-page relative flex h-16 md:h-20 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-2 shrink-0 max-lg:mx-auto max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:top-1/2 max-lg:-translate-y-1/2"
          aria-label="Krishna Associates | Home"
        >
          <img src={logoUrl} alt="Krishna Associates" className="h-12 md:h-12 w-auto" />
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'px-4 py-2 text-[15px] font-medium rounded-lg transition-colors',
                  isActive
                     ? 'text-brand-700 bg-brand-50'
                     : 'text-ink-700 hover:text-brand-700 hover:bg-brand-50/60'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-brand-700 transition-colors"
          >
            <Phone size={16} strokeWidth={2} />
            {CONTACT.phoneDisplay}
          </a>
          <Button to="/contact" size="sm">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="lg:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 hover:bg-ink-100 transition-colors"
          onClick={() => setOpen((s) => !s)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 top-16 bg-white z-20 overflow-y-auto"
          >
            <div className="container-page py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      cn(
                        'block px-4 py-3 text-lg font-medium rounded-lg',
                        isActive
                          ? 'text-brand-700 bg-brand-50'
                          : 'text-ink-800 hover:bg-ink-100'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}

              <div className="mt-6 pt-6 border-t border-ink-100 flex flex-col gap-3">
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-ink-700 hover:bg-ink-100"
                >
                  <Phone size={18} />
                  <span className="font-medium">{CONTACT.phoneDisplay}</span>
                </a>
                <Button to="/contact" size="lg" fullWidth>
                  Get Free Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
