import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Lang = "en" | "ur" | "es" | "fr";

export const translations = {
  en: {
    nav: { home: "Home", about: "About", exp: "Experience", projects: "Projects", contact: "Contact", hire: "Hire Me" },
    hero: {
      badge: "Available for work",
      lookingFor: "Open to: Frontend Dev · Backend Dev · Full Stack · MERN Stack · React Dev",
      lookingLabel: "Open to →",
      title1: "Hey, I'm",
      subtitle: "Full-stack developer who loves building things — APIs, UIs, and everything in between.",
      cta1: "See My Work",
      cta2: "Contact Me",
      stats: [["3+", "Years Coding"], ["5+", "Projects Built"], ["3+", "Certs Earned"]],
      scroll: "scroll",
    },
    about: {
      label: "Who I Am",
      title: "About Me",
      p1: "I'm Hassan Rehan — a full-stack web developer with 3+ years of hands-on experience. I'm deeply passionate about technology and genuinely love learning every single day. Computers aren't just my job — they're my obsession.",
      p2: "I work daily with AI tools like Claude AI, GitHub Copilot, OpenAI Codex, and Cursor to accelerate development and ship better code faster. I'm also deeply interested in cybersecurity fundamentals, systems engineering, and systems-level programming.",
      p3: "Whether it's a slick React frontend, a scalable Node.js backend, or a well-designed database — I give 100% to everything I build.",
      dlResume: "Download Resume",
      viewGitHub: "GitHub Profile",
      graphTitle: "GitHub Contributions",
      interests: ["🛡️ Cybersecurity", "🧠 Systems Engineering", "🤖 AI / LLMs", "☁️ Cloud / DevOps"],
    },
    exp: { label: "Work History", title: "Experience" },
    projects: { label: "Portfolio", title: "My Personal Projects" },
    services: { label: "What I Do", title: "How Can I Help You" },
    certs: { label: "Credentials", title: "Certificates" },
    contact: {
      label: "Let's Talk",
      title: "Contact Me",
      heading: "Let's build something together",
      body: "Have a project in mind? Looking for a developer for your team? Or just want to say hi? Drop me a message and I'll get back to you as soon as possible.",
      send: "Send Message →",
      sending: "Sending...",
    },
    quote: {
      text: "Talk is cheap. Show me the code.",
      author: "Linus Torvalds",
    },
    footer: { role: "Full Stack Web Developer" },
    scrollTop: "Back to top",
  },
  ur: {
    nav: { home: "ہوم", about: "میرے بارے میں", exp: "تجربہ", projects: "پروجیکٹس", contact: "رابطہ", hire: "ہائر کریں" },
    hero: {
      badge: "کام کے لیے دستیاب",
      lookingFor: "تلاش میں: فرنٹ اینڈ · بیک اینڈ · فل اسٹیک · MERN اسٹیک",
      lookingLabel: "تلاش ←",
      title1: "ہیلو، میں ہوں",
      subtitle: "ٹیکنالوجی کا دلدادہ فل اسٹیک ڈویلپر — جدید ویب ایپس، AI ٹولز، اور جدید حل.",
      cta1: "میرا کام دیکھیں",
      cta2: "رابطہ کریں",
      stats: [["3+", "سال کوڈنگ"], ["5+", "پروجیکٹس"], ["3+", "سرٹیفکیٹس"]],
      scroll: "نیچے جائیں",
    },
    about: {
      label: "میں کون ہوں",
      title: "میرے بارے میں",
      p1: "میں حسن ریحان ہوں — 3 سال سے زیادہ تجربے کے ساتھ ایک فل اسٹیک ویب ڈویلپر۔ ٹیکنالوجی میرا جنون ہے۔",
      p2: "میں Claude AI، Codex، Cursor جیسے AI ٹولز روزانہ استعمال کرتا ہوں۔ میں سسٹمز انجینئرنگ اور سائبر سیکیورٹی میں بھی گہری دلچسپی رکھتا ہوں۔",
      p3: "چاہے React فرنٹ اینڈ ہو یا Node.js بیک اینڈ — میں 100% دیتا ہوں۔",
      dlResume: "ریزیومے ڈاؤن لوڈ کریں",
      viewGitHub: "گٹ ہب پروفائل",
      graphTitle: "گٹ ہب کنٹریبیوشنز",
      interests: ["🛡️ سائبر سیکیورٹی", "🧠 سسٹمز انجینئرنگ", "🤖 AI / LLMs", "☁️ کلاؤڈ / DevOps"],
    },
    exp: { label: "کام کی تاریخ", title: "تجربہ" },
    projects: { label: "پورٹ فولیو", title: "میرے حالیہ پروجیکٹس" },
    services: { label: "میں کیا کرتا ہوں", title: "میں آپ کی کیسے مدد کر سکتا ہوں" },
    certs: { label: "سند", title: "سرٹیفکیٹس" },
    contact: {
      label: "بات کریں",
      title: "مجھ سے رابطہ کریں",
      heading: "مل کر کچھ بنائیں",
      body: "کوئی پروجیکٹ ہے؟ ٹیم میں ڈویلپر چاہیے؟ یا بس ہیلو کہنا ہے؟ پیغام بھیجیں۔",
      send: "پیغام بھیجیں ←",
      sending: "بھیجا جا رہا ہے...",
    },
    quote: {
      text: "بات سستی ہے، کوڈ دکھاؤ۔",
      author: "لینس ٹوروالڈز",
    },
    footer: { role: "فل اسٹیک ویب ڈویلپر" },
    scrollTop: "اوپر جائیں",
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", exp: "Experiencia", projects: "Proyectos", contact: "Contacto", hire: "Contrátame" },
    hero: {
      badge: "Disponible para trabajar",
      lookingFor: "Buscando: Frontend · Backend · Full Stack · MERN Stack · React Dev",
      lookingLabel: "Buscando →",
      title1: "Hola, soy",
      subtitle: "Desarrollador full-stack apasionado por la tecnología — UIs modernas, APIs robustas, IA, y soluciones reales.",
      cta1: "Ver mi trabajo",
      cta2: "Contáctame",
      stats: [["3+", "Años de código"], ["5+", "Proyectos"], ["3+", "Certificados"]],
      scroll: "bajar",
    },
    about: {
      label: "Quién soy",
      title: "Sobre mí",
      p1: "Soy Hassan Rehan — desarrollador full-stack con más de 3 años de experiencia. La tecnología es mi pasión.",
      p2: "Uso Claude AI, Codex y Cursor a diario. También tengo un gran interés en ciberseguridad y sistemas ingenieriles.",
      p3: "Ya sea frontend en React o backend en Node.js — lo doy todo en cada proyecto.",
      dlResume: "Descargar CV",
      viewGitHub: "Perfil de GitHub",
      graphTitle: "Contribuciones en GitHub",
      interests: ["🛡️ Ciberseguridad", "🧠 Sistemas", "🤖 IA / LLMs", "☁️ Cloud / DevOps"],
    },
    exp: { label: "Historial laboral", title: "Experiencia" },
    projects: { label: "Portafolio", title: "Mis proyectos recientes" },
    services: { label: "Qué hago", title: "¿Cómo puedo ayudarte?" },
    certs: { label: "Credenciales", title: "Certificados" },
    contact: {
      label: "Hablemos",
      title: "Contáctame",
      heading: "Construyamos algo juntos",
      body: "¿Tienes un proyecto? ¿Buscas un desarrollador? ¡Envíame un mensaje!",
      send: "Enviar →",
      sending: "Enviando...",
    },
    quote: {
      text: "Hablar es barato. Muéstrame el código.",
      author: "Linus Torvalds",
    },
    footer: { role: "Desarrollador Full Stack" },
    scrollTop: "Volver arriba",
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", exp: "Expérience", projects: "Projets", contact: "Contact", hire: "Engagez-moi" },
    hero: {
      badge: "Disponible pour travailler",
      lookingFor: "Cherche: Frontend · Backend · Full Stack · MERN Stack · React Dev",
      lookingLabel: "Cherche →",
      title1: "Salut, je suis",
      subtitle: "Développeur full-stack passionné de technologie — UI modernes, APIs robustes, IA, et solutions efficaces.",
      cta1: "Voir mon travail",
      cta2: "Me contacter",
      stats: [["3+", "Ans de code"], ["5+", "Projets"], ["3+", "Certificats"]],
      scroll: "défiler",
    },
    about: {
      label: "Qui je suis",
      title: "À propos de moi",
      p1: "Je suis Hassan Rehan — développeur full-stack avec plus de 3 ans d'expérience. La technologie est ma passion.",
      p2: "J'utilise Claude AI, Codex et Cursor quotidiennement. Je m'intéresse aussi à la cybersécurité et à l'ingénierie des systèmes.",
      p3: "Frontend React ou backend Node.js — je donne 100% à chaque projet.",
      dlResume: "Télécharger CV",
      viewGitHub: "Profil GitHub",
      graphTitle: "Contributions GitHub",
      interests: ["🛡️ Cybersécurité", "🧠 Ingénierie des systèmes", "🤖 IA / LLMs", "☁️ Cloud / DevOps"],
    },
    exp: { label: "Historique de travail", title: "Expérience" },
    projects: { label: "Portfolio", title: "Mes projets récents" },
    services: { label: "Ce que je fais", title: "Comment puis-je vous aider?" },
    certs: { label: "Accréditations", title: "Certificats" },
    contact: {
      label: "Parlons",
      title: "Me contacter",
      heading: "Construisons quelque chose ensemble",
      body: "Un projet en tête? Besoin d'un développeur? Envoyez-moi un message!",
      send: "Envoyer →",
      sending: "Envoi...",
    },
    quote: {
      text: "Le discours est bon marché. Montrez-moi le code.",
      author: "Linus Torvalds",
    },
    footer: { role: "Développeur Full Stack" },
    scrollTop: "Haut de page",
  },
} as const;

type Translations = typeof translations.en;
interface LanguageCtx { lang: Lang; t: Translations; setLang: (l: Lang) => void; }

const LanguageContext = createContext<LanguageCtx>({
  lang: "en",
  t: translations.en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang") as Lang;
    return (saved && saved in translations) ? saved : "en";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ur" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
