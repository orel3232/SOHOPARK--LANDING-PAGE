import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component - Industrial Precision Design
 * Features: Logo, navigation, mobile menu toggle
 * Color: Dark background with electric blue accents
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'שירותים', href: '#services' },
    { label: 'למה אנחנו', href: '#why-us' },
    { label: 'צור קשר', href: '#contact' },
  ];

  return (
    <header className="bg-foreground text-background sticky top-0 z-50 shadow-lg">
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center">
            <span className="text-background font-mono font-bold text-lg md:text-xl">P</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-background font-mono font-bold text-lg md:text-xl leading-tight">
              PARKING<br />SYSTEMS
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-background hover:text-primary transition-colors duration-300 font-mono font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <button className="hidden md:block cta-button">
          בקשת הצעה
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-background hover:text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-foreground border-t-2 border-primary">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-background hover:text-primary transition-colors font-mono font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="cta-button w-full mt-2">
              בקשת הצעה
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
