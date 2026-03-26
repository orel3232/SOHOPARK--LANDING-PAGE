import { CheckCircle, Wrench, Shield, Zap, AlertCircle, Clock } from 'lucide-react';

/**
 * Services Section - Industrial Precision Design
 * Features: 6 service cards with icons and descriptions
 * Layout: 3-column grid with industrial styling
 * Icons: Lucide React - sharp, geometric style
 */
export default function Services() {
  const services = [
    {
      icon: CheckCircle,
      title: 'בדיקה קפיטלית',
      description: 'בדיקה מקיפה של מערכת החנייה כולה - בדיקה פרוגרמטית, בדיקה בקרה, ותכנתת מלאה.',
    },
    {
      icon: Wrench,
      title: 'שדרוג מערכות',
      description: 'שדרוג מערכות בקרה וחיישנים לטכנולוגיה המתקדמת ביותר בשוק.',
    },
    {
      icon: AlertCircle,
      title: 'טיפול בתקלות',
      description: 'טיפול מקצועי בתקלות שבר, מניעת תקלות עתידיות, וטיפול מונע.',
    },
    {
      icon: Shield,
      title: 'בטיחות מוחלטת',
      description: 'בדיקות בטיחות קפיטליות - הבטיחות היא העדיפות הראשונה שלנו.',
    },
    {
      icon: Zap,
      title: 'תאימות תקנים',
      description: 'עמידה בתקן הישראלי ת"י 5437 ובתקנים בינלאומיים הקפדניים ביותר.',
    },
    {
      icon: Clock,
      title: 'זמינות 24/7',
      description: 'צוות טכנאים מקצועי זמין בכל שעה - תגובה מהירה ושירות אישי.',
    },
  ];

  return (
    <section id="services" className="bg-card py-16 md:py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="accent-line mb-6"></div>
          <h2 className="text-foreground mb-4">
            שירותים מקצועיים
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            מגוון שירותים מקיפים לשיפוץ, תחזוקה ושדרוג של מכפילי חנייה רובוטיים
          </p>
        </div>

        {/* Services grid */}
        <div className="feature-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="industrial-card"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl text-foreground mb-3 font-mono font-bold">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider"></div>
    </section>
  );
}
