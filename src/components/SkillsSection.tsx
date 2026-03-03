import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext'; // Import context

// Data translasi untuk Skills
const skillsTranslations = {
  id: {
    badge: "Keahlian",
    title: "Kemampuan Akademis",
    categories: {
      language: "Bahasa",
      social: "IPS",
      science: "IPA"
    },
    items: {
      indonesian: "Bahasa Indonesia",
      english: "Bahasa Inggris",
      arabic: "Bahasa Arab",
      japanese: "Bahasa Jepang",
      sociology: "Sosiologi",
      economy: "Ekonomi",
      geography: "Geografi",
      history: "Sejarah",
      biology: "Biologi",
      chemistry: "Kimia",
      physics: "Fisika",
      math: "Matematika"
    }
  },
  en: {
    badge: "Skills",
    title: "Academic Proficiency",
    categories: {
      language: "Languages",
      social: "Social Science",
      science: "Natural Science"
    },
    items: {
      indonesian: "Indonesian",
      english: "English",
      arabic: "Arabic",
      japanese: "Japanese",
      sociology: "Sociology",
      economy: "Economics",
      geography: "Geography",
      history: "History",
      biology: "Biology",
      chemistry: "Chemistry",
      physics: "Physics",
      math: "Mathematics"
    }
  }
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center ">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = skillsTranslations[lang];

  // Susun ulang data skills berdasarkan bahasa yang dipilih
  const skillsData = {
    Bahasa: [
      { name: t.items.indonesian, level: 97 },
      { name: t.items.english, level: 90 },
      { name: t.items.arabic, level: 85 },
      { name: t.items.japanese, level: 70 },
    ],
    IPS: [
      { name: t.items.sociology, level: 90 },
      { name: t.items.economy, level: 85 },
      { name: t.items.geography, level: 88 },
      { name: t.items.history, level: 82 },
    ],
    IPA: [
      { name: t.items.biology, level: 95 },
      { name: t.items.chemistry, level: 80 },
      { name: t.items.physics, level: 75 },
      { name: t.items.math, level: 85 },
    ],
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">{t.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Bahasa / Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🗣️</span>
              </div>
              <h3 className="font-display text-xl font-bold">{t.categories.language}</h3>
            </div>
            <div className="space-y-4">
              {skillsData.Bahasa.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPS / Social Studies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🌏</span>
              </div>
              <h3 className="font-display text-xl font-bold">{t.categories.social}</h3>
            </div>
            <div className="space-y-4">
              {skillsData.IPS.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* IPA / Science */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 glass rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-display text-xl font-bold">{t.categories.science}</h3>
            </div>
            <div className="space-y-4">
              {skillsData.IPA.map((skill, index) => (
                <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}