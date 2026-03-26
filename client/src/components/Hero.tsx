/**
 * Hero Section - Industrial Precision Design
 * Features: Background image with text overlay, main headline, subheadline, CTA
 * Layout: Text centered with background image
 * Image: Professional robotic parking system as background
 */
export default function Hero() {
  return (
    <section 
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663402872178/b5TRz8zpT4CPr8qftg8LMt/ElvzQPugOoJZ_098ffa8c.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text - Left side */}
          <div className="order-1 flex flex-col gap-6 md:gap-8">
            {/* Accent line */}
            <div className="accent-line"></div>

            {/* Main headline */}
            <h1 className="text-foreground">
              שיפוץ מתקני חנייה רובוטיים
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground font-mono font-medium">
              בניינים שלמים תלויים במתקן חניה אחד
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              כשהוא עובד חלק - כולם מרוצים. כשהוא מתקלקל או עובד לאט - כולם סובלים. חברת סוהו פארק מתמחה בשיפוץ ושדרוג של מתקני חניה רובוטיים מכל הסוגים.
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
