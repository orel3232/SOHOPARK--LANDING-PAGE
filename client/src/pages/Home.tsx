import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

/**
 * Home Page - Industrial Precision Design
 * 
 * Design Philosophy:
 * - Industrial Precision: Sharp lines, bold typography, electric blue accents
 * - Asymmetric layouts: Images and text positioned for visual interest
 * - Professional aesthetic: Conveys technology, reliability, and expertise
 * - Dark header/footer with light content areas for contrast
 * 
 * Color Scheme:
 * - Primary: #0066FF (Electric Blue) - Technology, precision
 * - Foreground: #0F0F0F (Near black) - Headers, footer
 * - Background: #FFFFFF (White) - Main content
 * - Accent: Primary blue for highlights and CTAs
 * 
 * Typography:
 * - Display: Roboto Mono (Bold, 700) - Technical, modern
 * - Body: Roboto (Regular, 400) - Readable, clean
 * 
 * Sections:
 * 1. Header - Navigation and branding
 * 2. Hero - Main value proposition with hero image
 * 3. Services - 6 service cards in 3-column grid
 * 4. Why Us - Asymmetric layout with advantages
 * 5. CTA - Contact form and contact information
 * 6. Footer - Company info and links
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
