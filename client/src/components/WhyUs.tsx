/**
 * Why Us Section - Industrial Precision Design
 * Features: Asymmetric layout with image and value propositions
 * Layout: Image on right, text on left
 * Image: Parking system installation
 */
export default function WhyUs() {
  const advantages = [
    {
      number: '01',
      title: 'מומחיות מוכחת',
      description: 'שנים רבות של ניסיון בתחום מכפילי החנייה הרובוטיים מכל הסוגים.',
    },
    {
      number: '02',
      title: 'שדרוג קפדני',
      description: 'כל שדרוג עובר תהליך בדיקה קפדני ותכנתת מלאה לביצועים אופטימליים.',
    },
    {
      number: '03',
      title: 'ערך ארוך טווח',
      description: 'אנחנו מבטיחים שמערכת החנייה שלך תעבוד בצורה אופטימלית לשנים רבות.',
    },
    {
      number: '04',
      title: 'שירות אישי',
      description: 'צוות מקצועי זמין 24/7 עם תגובה מהירה ותשומת לב אישית לכל פרויקט.',
    },
  ];

  return (
    <section id="why-us" className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text - Left side */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Accent line */}
            <div className="accent-line"></div>

            {/* Section header */}
            <h2 className="text-foreground">
              למה לבחור בנו?
            </h2>

            <p className="text-lg text-muted-foreground">
              מכפילי חנייה רובוטיים הם הלב של פרויקטים רבים - הם חוסכים מקום ומעלים את הערך של הנכס. אנחנו מומחים בשדרוג ותחזוקה של מערכות אלו.
            </p>

            {/* Advantages list */}
            <div className="space-y-6 md:space-y-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="service-item">
                  <div className="flex gap-4">
                    <span className="text-2xl md:text-3xl font-mono font-bold text-primary flex-shrink-0">
                      {advantage.number}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-mono font-bold text-foreground mb-2">
                        {advantage.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Right side */}
          <div>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663402872178/b5TRz8zpT4CPr8qftg8LMt/parking-hero_084a3197.jpg"
              alt="מכפיל חנייה רובוטי מודרני"
              className="w-full h-auto object-cover shadow-lg border-4 border-primary"
            />
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider"></div>
    </section>
  );
}
