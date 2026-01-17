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
    emailLabel: string;
    copyLabel: string;
    copiedLabel: string;
    email: string;
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
    emailLabel: Localized<string>;
    copyLabel: Localized<string>;
    copiedLabel: Localized<string>;
    email: Localized<string>;
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
      fr: "Imaginer, planifier et livrer des projets IT complexes.",
      en: "Imagine, plan, and deliver complex IT projects.",
    },
    subtitle: {
      fr: "Gestion de projet, ingénierie logicielle, et accompagnement complet du cadrage à la mise en production.",
      en: "Project management, software engineering, and end-to-end guidance from scoping to production.",
    },
    primaryCta: {
      fr: "Voir les projets",
      en: "See projects",
    },
    secondaryCta: {
      fr: "Contact",
      en: "Contact",
    },
  },
  cv: {
    title: {
      fr: "Compétences clés",
      en: "Core capabilities",
    },
    summary: {
      fr: "J’aide à cadrer, prioriser et piloter des projets IT tout en gardant un œil sur l’ingénierie et la qualité.",
      en: "I help shape, prioritize, and run IT projects while keeping engineering quality in view.",
    },
    highlights: {
      fr: [
        "Pilotage de projets complexes avec parties prenantes multiples.",
        "Architecture fonctionnelle & technique pragmatique (web, données).",
        "Delivery fiable : roadmap, risques, qualité, run.",
        "Collaboration claire : ateliers, documents concis, décisions tracées.",
      ],
      en: [
        "Steering complex projects with multiple stakeholders.",
        "Pragmatic functional & technical architecture (web, data).",
        "Reliable delivery: roadmap, risks, quality, operations.",
        "Clear collaboration: workshops, concise docs, traced decisions.",
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
          title: "Platforme data & reporting",
          description: "Cadrage et livraison d’une plateforme de reporting temps réel pour les opérations internes.",
          tags: ["pilotage", "data", "industrialisation"],
        },
        {
          title: "Refonte d’app métier",
          description: "Revue d’architecture, ateliers produit et mise en place d’un backlog exécutable.",
          tags: ["architecture", "produit", "delivery"],
        },
        {
          title: "Automatisation interne",
          description: "Automatisation de processus manuels avec intégration légère (API/NoCode).",
          tags: ["automation", "nocode", "ops"],
        },
      ],
      en: [
        {
          title: "Data & reporting platform",
          description: "Scoped and delivered a real-time reporting platform for internal operations.",
          tags: ["delivery", "data", "industrialization"],
        },
        {
          title: "Business app redesign",
          description: "Architecture review, product workshops, and creation of an executable backlog.",
          tags: ["architecture", "product", "delivery"],
        },
        {
          title: "Internal automation",
          description: "Automated manual processes with light integrations (API/NoCode).",
          tags: ["automation", "nocode", "ops"],
        },
      ],
    },
  },
  contact: {
    title: {
      fr: "Contact",
      en: "Contact",
    },
    emailLabel: {
      fr: "Écrire un email",
      en: "Send an email",
    },
    copyLabel: {
      fr: "Copier l’adresse",
      en: "Copy address",
    },
    copiedLabel: {
      fr: "Copié",
      en: "Copied",
    },
    email: {
      en: "maxime@example.test",
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
      emailLabel: resolve(localizedContent.contact.emailLabel, locale),
      copyLabel: resolve(localizedContent.contact.copyLabel, locale),
      copiedLabel: resolve(localizedContent.contact.copiedLabel, locale),
      email: resolve(localizedContent.contact.email, locale),
    },
  };
}
