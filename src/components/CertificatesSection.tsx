import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext'; // Step 4: Import context

// Data translasi untuk Certificates
const certificateTranslations = {
  id: {
    badge: "Kredensial",
    title: "Sertifikat & Lisensi",
    verifyBtn: "Verifikasi Sertifikat",
    items: [
      {
        title: 'Sertifikat Try Out UTBK',
        issuer: 'Universitas Nurul Fikri',
        date: '8 November, 2025',
        image: '🏆',
        color: 'from-orange-500/20 to-yellow-500/20',
        link: 'https://drive.google.com/file/d/1aqDzGDtuFO34rVZv6M3-86aEJcGW447K/view?usp=drive_link',
      },
    ]
  },
  en: {
    badge: "Credentials",
    title: "Certificates & Licenses",
    verifyBtn: "Verify Certificate",
    items: [
      {
        title: 'UTBK Try Out Certificate',
        issuer: 'Nurul Fikri University',
        date: 'November 8, 2025',
        image: '🏆',
        color: 'from-orange-500/20 to-yellow-500/20',
        link: 'https://drive.google.com/file/d/1aqDzGDtuFO34rVZv6M3-86aEJcGW447K/view?usp=drive_link',
      },
    ]
  }
};

export default function CertificatesSection() {
  const { lang } = useLanguage();
  const t = certificateTranslations[lang];

  return (
    <section id="certificates" className="py-20 md:py-32 bg-gradient-hero">
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

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {t.items.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 glass rounded-2xl shadow-card flex flex-col items-center text-center"> 
                
                <div className={`w-20 h-20 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
                  <span className="text-4xl">{cert.image}</span>
                </div>
                
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex flex-col items-center gap-3">
                    <Award className="h-6 w-6 text-primary shrink-0" /> 
                    <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-base text-muted-foreground">
                    {cert.issuer}
                  </p>

                  <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
                     <div className="flex items-center gap-2">
                       <Calendar className="h-4 w-4" />
                       <span>{cert.date}</span>
                     </div>
                  </div>

                  <Button variant="outline" size="lg" className="rounded-full mt-4" asChild>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5 mr-2" />
                      {t.verifyBtn}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}