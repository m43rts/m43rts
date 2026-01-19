import { pickLocalized, type Localized } from "@/i18n/localized";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export type SectionContent = {
  metadata: {
    title: string;
    description: string;
  };
  header: {
    subtitle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  cv: {
    title: string;
    summary: string;
    highlights: string[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  contact: {
    title: string;
    emailSubtitle: string;
    emailLabel: string;
    copyLabel: string;
    copiedLabel: string;
    email: string;
    linkedinSubtitle: string;
    linkedinLabel: string;
    linkedinUrl: string;
  };
};

type LocalizedSectionContent = {
  metadata: {
    title: Localized<string>;
    description: Localized<string>;
  };
  header: {
    subtitle: Localized<string>;
  };
  hero: {
    title: Localized<string>;
    subtitle: Localized<string>;
    primaryCta: Localized<string>;
    secondaryCta: Localized<string>;
  };
  cv: {
    title: Localized<string>;
    summary: Localized<string>;
    highlights: Localized<string[]>;
  };
  projects: {
    title: Localized<string>;
    items: Localized<Project[]>;
  };
  contact: {
    title: Localized<string>;
    emailSubtitle: Localized<string>;
    emailLabel: Localized<string>;
    copyLabel: Localized<string>;
    copiedLabel: Localized<string>;
    email: Localized<string>;
    linkedinSubtitle: Localized<string>;
    linkedinLabel: Localized<string>;
    linkedinUrl: Localized<string>;
  };
};

export const defaultLocale: Locale = "fr";

const localizedContent: LocalizedSectionContent = {
  metadata: {
    title: {
      en: "Maxime Aerts",
    },
    description: {
      fr: "Je vous aide à imaginer, planifier et délivrer des solutions IT complexes.",
      en: "I help you imagine, plan, and deliver complex IT solutions.",
    },
  },
  header: {
    subtitle: {
      fr: "Maxime Aerts",
      en: "Maxime Aerts",
    },
  },
  hero: {
    title: {
      fr: "Je vous aide à imaginer, planifier et délivrer des solutions IT complexes.",
      en: "I help you imagine, plan, and deliver complex IT solutions.",
    },
    subtitle: {
      fr: "Gestion de projet, ingénierie logicielle, déploiement d'infrastucutre. Pour toute problématique IT, je peux vous fournir un accompagnement complet; de la définition à la mise en production d'une solution adaptée.",
      en: "Project management, software engineering, infrastructure deployment. For any IT problem, I can provide a complete guidance; from scoping to production of a tailored solution.",
    },
    primaryCta: {
      fr: "Voir les projets",
      en: "See projects",
    },
    secondaryCta: {
      fr: "Me contacter",
      en: "Contact me",
    },
  },
  cv: {
    title: {
      fr: "Mes compétences",
      en: "My skills",
    },
    summary: {
      fr: "Mon profil LinkedIn est accessible si vous souhaitez un CV détaillé. Les points importants à retenir :",
      en: "My LinkedIn profile is accessible if you want a detailed CV. The important points to remember :",
    },
    highlights: {
      fr: [
        "Plus de 10 années d'expérience en ingénierie logicielle.",
        "Autant passionné par la technique que par l'humain et les relations interpersonnelles.",
        "Des solutions sur mesure qui répondent aux besoins réels du terrain.",
        "Une bonne gestion de projet pour un suivi transparent et efficace.",
      ],
      en: [
        "More than 10 years of experience in software engineering.",
        "Passionate about both technology and human relationships.",
        "Tailored solutions that meet the real needs of the field.",
        "A good project management for a transparent and efficient follow-up.",
      ],
    },
  },
  projects: {
    title: {
      fr: "Projets récents",
      en: "Recent work",
    },
    items: {
      fr: [
        {
          title: "Rabadon",
          description: "",
          tags: ["Startup", "DevOps"],
        },
        {
          title: "TwinSkin",
          description: "",
          tags: ["Startup", "Gestion de projet", "Gestion produit", "DevOps"],
        },
        {
          title: "Doctorat",
          description: "",
          tags: ["Recherche", "Sécurité", "DevOps", "Conférences"],
        },
        {
          title: "NRB SecOps",
          description: "",
          tags: ["Service", "Sécurité", "DevOps", "PenTest"],
        },
        {
          title: "UGo",
          description: "",
          tags: ["Startup", "Developpement"],
        },
      ],
      en: [
        {
          title: "Rabadon",
          description: "",
          tags: ["Startup", "DevOps"],
        },
        {
          title: "TwinSkin",
          description: "",
          tags: ["Startup", "Project management", "Product management", "DevOps"],
        },
        {
          title: "Doctorat",
          description: "",
          tags: ["Research", "Security", "DevOps", "Conferences"],
        },
        {
          title: "NRB SecOps",
          description: "",
          tags: ["Service", "Security", "DevOps", "PenTest"],
        },
        {
          title: "UGo",
          description: "",
          tags: ["Startup", "Development"],
        },

      ],
    },
  },
  contact: {
    title: {
      fr: "Contact",
      en: "Contact",
    },
    emailSubtitle: {
      fr: "Email",
      en: "Email",
    },
    emailLabel: {
      fr: "Écrire un email",
      en: "Send an email",
    },
    copyLabel: {
      fr: "Copier l'email",
      en: "Copy email",
    },
    copiedLabel: {
      fr: "Copié",
      en: "Copied",
    },
    email: {
      en: "contact+net@m43rts.com",
    },
    linkedinSubtitle: {
      en: "LinkedIn",
    },
    linkedinLabel: {
      fr: "Suivre le lien",
      en: "Follow link",
    },
    linkedinUrl: {
      en: "https://www.linkedin.com/in/m43r75/",
    },
  },
};

const resolve = <T>(value: Localized<T>, locale: Locale) =>
  pickLocalized(value, locale, { defaultLocale });

export function getSiteContent(locale: Locale): SectionContent {
  return {
    metadata: {
      title: resolve(localizedContent.metadata.title, locale),
      description: resolve(localizedContent.metadata.description, locale),
    },
    header: {
      subtitle: resolve(localizedContent.header.subtitle, locale),
    },
    hero: {
      title: resolve(localizedContent.hero.title, locale),
      subtitle: resolve(localizedContent.hero.subtitle, locale),
      primaryCta: resolve(localizedContent.hero.primaryCta, locale),
      secondaryCta: resolve(localizedContent.hero.secondaryCta, locale),
    },
    cv: {
      title: resolve(localizedContent.cv.title, locale),
      summary: resolve(localizedContent.cv.summary, locale),
      highlights: resolve(localizedContent.cv.highlights, locale),
    },
    projects: {
      title: resolve(localizedContent.projects.title, locale),
      items: resolve(localizedContent.projects.items, locale),
    },
    contact: {
      title: resolve(localizedContent.contact.title, locale),
      emailSubtitle: resolve(localizedContent.contact.emailSubtitle, locale),
      emailLabel: resolve(localizedContent.contact.emailLabel, locale),
      copyLabel: resolve(localizedContent.contact.copyLabel, locale),
      copiedLabel: resolve(localizedContent.contact.copiedLabel, locale),
      email: resolve(localizedContent.contact.email, locale),
      linkedinSubtitle: resolve(localizedContent.contact.linkedinSubtitle, locale),
      linkedinLabel: resolve(localizedContent.contact.linkedinLabel, locale),
      linkedinUrl: resolve(localizedContent.contact.linkedinUrl, locale),
    },
  };
}
