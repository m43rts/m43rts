export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

type SectionContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
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

type SiteContent = Record<Locale, SectionContent>;

export const defaultLocale: Locale = "fr";

export const siteContent: SiteContent = {
  fr: {
    metadata: {
      title: "m43rts | Maxime Aerts - Pilotage & ingénierie IT",
      description:
        "Imaginez, planifiez et livrez des projets IT complexes.",
    },
    hero: {
      eyebrow: "Maxime Aerts",
      title: "Imaginer, planifier et livrer des projets IT complexes.",
      subtitle:
        "Gestion de projet, ingénierie logicielle, et accompagnement complet du cadrage à la mise en production.",
      primaryCta: "Voir les projets",
      secondaryCta: "Contact",
    },
    cv: {
      title: "Compétences clés",
      summary:
        "J’aide à cadrer, prioriser et piloter des projets IT tout en gardant un œil sur l’ingénierie et la qualité.",
      highlights: [
        "Pilotage de projets complexes avec parties prenantes multiples.",
        "Architecture fonctionnelle & technique pragmatique (web, données).",
        "Delivery fiable : roadmap, risques, qualité, run.",
        "Collaboration claire : ateliers, documents concis, décisions tracées.",
      ],
    },
    projects: {
      title: "Projets récents",
      items: [
        {
          title: "Platforme data & reporting",
          description:
            "Cadrage et livraison d’une plateforme de reporting temps réel pour les opérations internes.",
          tags: ["pilotage", "data", "industrialisation"],
        },
        {
          title: "Refonte d’app métier",
          description:
            "Revue d’architecture, ateliers produit et mise en place d’un backlog exécutable.",
          tags: ["architecture", "produit", "delivery"],
        },
        {
          title: "Automatisation interne",
          description:
            "Automatisation de processus manuels avec intégration légère (API/NoCode).",
          tags: ["automation", "nocode", "ops"],
        },
      ],
    },
    contact: {
      title: "Contact",
      emailLabel: "Écrire un email",
      copyLabel: "Copier l’adresse",
      copiedLabel: "Copié",
      email: "maxime@example.com",
    },
  },
  en: {
    metadata: {
      title: "m43rts | Maxime Aerts - IT project strategy & engineering",
      description:
        "Imagine, plan, and deliver complex IT projects with Maxime Aerts (m43rts).",
    },
    hero: {
      eyebrow: "Maxime Aerts",
      title: "Imagine, plan, and deliver complex IT projects.",
      subtitle:
        "Project management, software engineering, and end-to-end guidance from scoping to production.",
      primaryCta: "See projects",
      secondaryCta: "Contact",
    },
    cv: {
      title: "Core capabilities",
      summary:
        "I help shape, prioritize, and run IT projects while keeping engineering quality in view.",
      highlights: [
        "Steering complex projects with multiple stakeholders.",
        "Pragmatic functional & technical architecture (web, data).",
        "Reliable delivery: roadmap, risks, quality, operations.",
        "Clear collaboration: workshops, concise docs, traced decisions.",
      ],
    },
    projects: {
      title: "Recent work",
      items: [
        {
          title: "Data & reporting platform",
          description:
            "Scoped and delivered a real-time reporting platform for internal operations.",
          tags: ["delivery", "data", "industrialization"],
        },
        {
          title: "Business app redesign",
          description:
            "Architecture review, product workshops, and creation of an executable backlog.",
          tags: ["architecture", "product", "delivery"],
        },
        {
          title: "Internal automation",
          description:
            "Automated manual processes with light integrations (API/NoCode).",
          tags: ["automation", "nocode", "ops"],
        },
      ],
    },
    contact: {
      title: "Contact",
      emailLabel: "Send an email",
      copyLabel: "Copy address",
      copiedLabel: "Copied",
      email: "maxime@example.com",
    },
  },
};
