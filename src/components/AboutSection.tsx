import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenText, Medal, PencilLine, Rocket, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext'; // Step 4: Import context

// Objek translasi khusus AboutSection
const aboutTranslations = {
  id: {
    badge: "Tentang Saya",
    title: "Mengenal Lebih Dekat",
    expTitle: "Pengalaman Belajar",
    accordionTitle: "Deskripsi",
    para1: "Perkenalkan nama saya Ziyad Al Azhar, saya lahir di Lhoksukon pada tanggal 17 Mei 2010, saya sedang menempuh jenjang pendidikan kelas 10 di Man 1 Banda Aceh, sekarang ini saya tinggal di daerah Lampulo lebih tepatnya di Kota Banda Aceh.",
    para2: "Saya adalah salah satu dari seorang pelajar yang memiliki ambisi besar terhadap cita citanya di masa depan nanti. Di saat teman-teman sebayaku sedang asik bermain, saya lebih memilih untuk menyelesaikan tugas sekolah yang diberikan oleh guru.",
    stats: [
      { label: 'Tugas Selesai', value: '100+' },
      { label: 'Juara Kelas', value: '5+' },
      { label: 'Tinta Pulpen', value: '50+' },
      { label: 'Pengalaman Belajar', value: '9+' },
    ]
  },
  en: {
    badge: "About Me",
    title: "Getting to Know Me",
    expTitle: "Learning Experience",
    accordionTitle: "Description",
    para1: "Hello, my name is Ziyad Al Azhar. I was born in Lhoksukon on May 17, 2010. I am currently a 10th-grade student at MAN 1 Banda Aceh, and I live in the Lampulo area, specifically in Banda Aceh City.",
    para2: "I am a student with great ambition for my future dreams. While my peers are busy playing, I prefer to focus on completing the school assignments given by my teachers.",
    stats: [
      { label: 'Tasks Completed', value: '100+' },
      { label: 'Class Ranker', value: '5+' },
      { label: 'Ink Refills', value: '50+' },
      { label: 'Learning Years', value: '9+' },
    ]
  }
};

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();
  const t = aboutTranslations[lang];

  // Map icon ke data statistik yang sudah diterjemahkan
  const icons = [BookOpenText, Medal, PencilLine, Rocket];
  const stats = t.stats.map((stat, index) => ({
    ...stat,
    icon: icons[index]
  }));

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Header Section */}
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

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image/Emoji Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/5] md:min-h-[550px] rounded-2xl overflow-hidden glass shadow-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-[150px] md:text-[200px]">👨‍🏫</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 glass rounded-xl shadow-card">
                <p className="font-display font-bold text-2xl text-gradient">9+ {lang === 'id' ? 'Tahun' : 'Years'}</p>
                <p className="text-sm text-muted-foreground">{t.expTitle}</p>
              </div>
            </div>
          </motion.div>

          {/* Content Section with Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="border border-primary/20 rounded-2xl overflow-hidden glass">
              {/* Trigger Accordion */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <h3 className="font-display text-2xl md:text-3xl font-bold">
                  {t.accordionTitle}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6 text-primary" />
                </motion.div>
              </button>

              {/* Content Accordion */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {t.para1}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {t.para2}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="p-6 glass rounded-2xl text-center cursor-pointer shadow-sm hover:shadow-xl hover:border-primary/50 border border-transparent transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  </motion.div>
                  
                  <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}