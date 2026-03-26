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
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402872178/b5TRz8zpT4CPr8qftg8LMt/pasted_file_FQKfy7_image_02674a17.png"
            alt="SohoPark Logo"
            className="h-10 md:h-12 w-auto"
          />
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

        {/* CTA Button - Desktop - לעוד פרטים → https://www.sohopark.co.il/ */}
        <a 
          href="https://www.sohopark.co.il/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
          style={{ textDecoration: 'none' }}
        >
          <button className="cta-button">
            לעוד פרטים
          </button>
        </a>

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
            <a 
              href="https://www.sohopark.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button className="cta-button w-full mt-2">
                לעוד פרטים
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
