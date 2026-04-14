import { Logo } from "./Logo";

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Product", links: ["Services", "Work", "Process", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "Security"] },
];

export function Footer() {
  return (
    <footer className="bg-black text-white/70 px-6 py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm font-light max-w-xs">
              AI-powered web design for brands with high standards.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="text-white text-sm font-medium mb-4">
                {col.title}
              </div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Studio. All rights reserved.</div>
          <div className="font-heading italic text-sm text-white/60">
            Built by AI. Refined by experts.
          </div>
        </div>
      </div>
    </footer>
  );
}
