/**
 * Hero Section - Industrial Precision Design
 * Features: Large hero image, main headline, subheadline, CTA
 * Layout: Asymmetric - image on left, text on right
 * Image: High-key robotic parking system
 */
export default function Hero() {
  return (
    <section className="bg-background py-12 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image - Left side */}
          <div className="order-2 lg:order-1">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402872178/b5TRz8zpT4CPr8qftg8LMt/parking-hero_084a3197.jpg"
              alt="מכפיל חנייה רובוטי מודרני"
              className="w-full h-auto object-cover shadow-lg border-4 border-primary"
            />
          </div>

          {/* Text - Right side */}
          <div className="order-1 lg:order-2 flex flex-col gap-6 md:gap-8">

            {/* Accent line */}
            <div className="accent-line"></div>

            {/* Main headline */}
            <h1 className="text-foreground">
              שיפוץ מתקני חנייה רובוטיים
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground font-mono font-medium">
              טכנולוגיה מתקדמת, בטיחות מוחלטת, שירות 24/7
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              בניינים שלמים תלויים במתקן חניה אחד. כשהוא עובד חלק - כולם מרוצים. כשהוא מתקלקל או עובד לאט - כולם סובלים.
              <br /><br />
              חברת סוהו פארק מתמחה בשיפוץ ושדרוג של מתקני חניה רובוטיים מכל הסוגים.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="cta-button">
                תיאום פגישה בחינם
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex gap-6 md:gap-8 pt-4 border-t-2 border-primary mt-4">
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground font-mono">זמינות מלאה</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground font-mono">בטיחות מובטחת</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-mono font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground font-mono">שנות ניסיון</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider"></div>
    </section>
  );
}
