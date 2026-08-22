import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

// Page Contact — structure conforme à CLAUDE.md section 10.
export default function ContactPage() {
  return (
    <Section>
      <SectionHeading title="Contact" />

      <div className="mt-12 grid grid-cols-1 gap-16 sm:grid-cols-[1fr_2fr]">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}
