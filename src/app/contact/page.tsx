import Section from "@/components/ui/Section";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

// Page Contact — structure conforme à CLAUDE.md section 10.
export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1fr_2fr] sm:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
