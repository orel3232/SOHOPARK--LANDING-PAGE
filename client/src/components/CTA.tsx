import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

/**
 * CTA Section - Industrial Precision Design
 * Features: Contact form, contact info, call to action
 * Layout: Two-column - form on left, info on right
 */
export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'טלפון',
      value: '03-1234567',
      href: 'tel:0312345678',
    },
    {
      icon: Mail,
      label: 'דוא"ל',
      value: 'info@parking-systems.co.il',
      href: 'mailto:info@parking-systems.co.il',
    },
    {
      icon: MapPin,
      label: 'כתובת',
      value: 'תל אביב, ישראל',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="bg-foreground text-background py-16 md:py-24 lg:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-1 w-12 bg-primary"></div>
          </div>
          <h2 className="text-background mb-4">
            צור קשר עכשיו
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            קבל בדיקה חינם והצעה מקצועית לשדרוג מערכת החנייה שלך
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name input */}
            <div>
              <label htmlFor="name" className="block text-sm font-mono font-bold mb-2 text-background">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background text-foreground border-2 border-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="הכנס את שמך"
              />
            </div>

            {/* Email input */}
            <div>
              <label htmlFor="email" className="block text-sm font-mono font-bold mb-2 text-background">
                דוא&quot;ל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background text-foreground border-2 border-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="הכנס את כתובת הדוא&quot;ל"
              />
            </div>

            {/* Phone input */}
            <div>
              <label htmlFor="phone" className="block text-sm font-mono font-bold mb-2 text-background">
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background text-foreground border-2 border-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="הכנס את מספר הטלפון"
              />
            </div>

            {/* Message textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-mono font-bold mb-2 text-background">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-background text-foreground border-2 border-primary font-mono focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="תאר את הצרכים שלך..."
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="cta-button bg-primary text-primary-foreground w-full mt-4"
            >
              {submitted ? '✓ נשלח בהצלחה!' : 'שלח בקשה'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Info cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="industrial-card bg-foreground border-2 border-primary text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-mono font-bold text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <p className="text-lg md:text-xl font-mono font-bold">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}

            {/* Additional info */}
            <div className="bg-primary text-primary-foreground p-6 md:p-8 border-2 border-primary">
              <h3 className="text-xl md:text-2xl font-mono font-bold mb-3">
                זמינות 24/7
              </h3>
              <p className="text-base leading-relaxed">
                כי כל שעה היא קריטית, אנחנו כאן בכל עת. צוות הטכנאים שלנו זמין 24 שעות ביום, 7 ימים בשבוע לטיפול בכל בעיה דחופה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
