/**
 * Footer Component - Industrial Precision Design
 * Features: Company info, links, copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t-4 border-primary">
      <div className="container py-12 md:py-16">
        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402872178/b5TRz8zpT4CPr8qftg8LMt/pasted_file_FQKfy7_image_02674a17.png"
                alt="SohoPark Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              שדרוג ותחזוקה מקצועיים של מכפילי חנייה רובוטיים. SohoPark - מומחים בתחום מכפילי החנייה.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono font-bold text-lg mb-4">קישורים</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  למה אנחנו
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-mono font-bold text-lg mb-4">יצירת קשר</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">
                <a href="tel:0732820510" className="hover:text-primary transition-colors">
                  073-2820510
                </a>
              </li>
              <li className="text-muted-foreground">
                <a href="mailto:info@sohopark.co.il" className="hover:text-primary transition-colors">
                  info@sohopark.co.il
                </a>
              </li>
              <li className="text-muted-foreground">
                ההחזקה ל.ת.ח, צפון לוד
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-1 bg-primary my-8 md:my-12"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} SohoPark. כל הזכויות שמורות.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              תנאי שימוש
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              מדיניות פרטיות
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
