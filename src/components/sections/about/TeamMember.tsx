import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import Feather from "@/components/ui/Feather";
import SlideInOnScroll from "@/components/ui/SlideInOnScroll";
import type { TeamMember as TeamMemberType } from "@/content/a-propos";

type TeamMemberProps = TeamMemberType & {
  /** Sens d'arrivée au scroll — sans effet sur la mise en page (grille symétrique). */
  reversed?: boolean;
};

/** Carte associé : photo, rôle, parcours, coordonnées directes (si fournies). */
export default function TeamMember({
  firstName,
  role,
  bio,
  photo,
  phone,
  email,
  reversed = false,
}: TeamMemberProps) {
  return (
    <SlideInOnScroll from={reversed ? "right" : "left"} className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-paper ring-1 ring-stone-40 shadow-sm">
        {photo ? (
          <div className="relative aspect-[4/5] w-full">
            <Image src={photo} alt={firstName} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
          </div>
        ) : (
          // TODO: portrait à recevoir (cf. CLAUDE.md section 4)
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 bg-mist">
            <Feather className="h-9 w-9 opacity-70" />
            <span className="text-xs text-stone">Portrait à venir</span>
          </div>
        )}
        <div className="flex flex-1 flex-col gap-2 p-6">
          <div>
            <h3 className="text-xl">{firstName}</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-4">{role}</p>
          </div>
          <p className="text-ink-soft">{bio}</p>

          {(phone || email) && (
            <div className="mt-2 space-y-1 border-t border-stone-40 pt-3 text-sm">
              {phone && (
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 text-ink-soft hover:text-gold-4">
                  <Phone className="h-4 w-4 text-gold-4" strokeWidth={1.75} aria-hidden="true" />
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-ink-soft hover:text-gold-4">
                  <Mail className="h-4 w-4 text-gold-4" strokeWidth={1.75} aria-hidden="true" />
                  {email}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </SlideInOnScroll>
  );
}
