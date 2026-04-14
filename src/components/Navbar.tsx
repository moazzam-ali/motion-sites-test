import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3"
    >
      <div className="flex items-center justify-between">
        <a href="#home" aria-label="Studio home">
          <Logo />
        </a>

        <nav className="hidden md:flex items-center">
          <div className="liquid-glass rounded-full px-2 py-1.5 flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="ml-1 flex items-center gap-1.5 bg-white text-black text-sm font-medium rounded-full px-4 py-2 hover:bg-white/90 transition-colors"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 liquid-glass-strong rounded-3xl p-4 flex flex-col"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 bg-white text-black text-sm font-medium rounded-full px-4 py-3"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
