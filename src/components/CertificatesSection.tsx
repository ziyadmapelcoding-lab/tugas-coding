import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'UTBK Try Out Certificate',
    issuer: 'Nurul Fikri University',
    date: ' 8 November 2025',
    image: '🏆',
    color: 'from-orange-500/20 to-yellow-500/20',
    link: 'https://drive.google.com/file/d/1aqDzGDtuFO34rVZv6M3-86aEJcGW447K/view?usp=drive_link',
  },
  // {
  //   title: 'Google Professional Cloud Developer',
  //   issuer: 'Google Cloud',
  //   date: '2023',
  //   credentialId: 'GCP-PCD-789012',
  //   image: '☁️',
  //   color: 'from-blue-500/20 to-cyan-500/20',
  //   link: '#',
  // },
  // {
  //   title: 'Meta Front-End Developer',
  //   issuer: 'Meta (Coursera)',
  //   date: '2023',
  //   credentialId: 'META-FE-345678',
  //   image: '⚛️',
  //   color: 'from-blue-600/20 to-indigo-500/20',
  //   link: '#',
  // },
  // {
  //   title: 'MongoDB Certified Developer',
  //   issuer: 'MongoDB University',
  //   date: '2023',
  //   credentialId: 'MDB-DEV-901234',
  //   image: '🍃',
  //   color: 'from-green-500/20 to-emerald-500/20',
  //   link: '#',
  // },
  // {
  //   title: 'Certified Kubernetes Administrator',
  //   issuer: 'CNCF',
  //   date: '2022',
  //   credentialId: 'CKA-567890',
  //   image: '⚙️',
  //   color: 'from-indigo-500/20 to-purple-500/20',
  //   link: '#',
  // },
  // {
  //   title: 'Professional Scrum Master I',
  //   issuer: 'Scrum.org',
  //   date: '2022',
  //   credentialId: 'PSM-I-234567',
  //   image: '📋',
  //   color: 'from-teal-500/20 to-cyan-500/20',
  //   link: '#',
  // },
];

export default function CertificatesSection() {
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
          <span className="text-primary font-medium mb-2 block">Kredensial</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Sertifikat &amp; Lisensi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
             <div className="h-full p-8 glass rounded-2xl shadow-card flex flex-col items-center text-center"> 
  {/* Tambahkan flex flex-col items-center text-center di atas ^ */}

  <div className={`w-20 h-20 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${cert.color}`}>
    <span className="text-4xl">{cert.image}</span>
  </div>
  
  <div className="flex flex-col items-center space-y-4">
    <div className="flex flex-col items-center gap-3">
      {/* Jika ingin Award icon di atas judul: */}
      <Award className="h-6 w-6 text-primary shrink-0" /> 
      <h3 className="font-display text-2xl font-bold group-hover:text-primary transition-colors">
        {cert.title}
      </h3>
    </div>
    
    <p className="text-base text-muted-foreground">
      {cert.issuer}
    </p>

    {/* Detail ID dan Tanggal juga ke tengah */}
    <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
       <div className="flex items-center gap-2">
         <Calendar className="h-4 w-4" />
         <span>{cert.date}</span>
       </div>
    </div>

    <Button variant="outline" size="lg" className="rounded-full mt-4" asChild>
      <a href={cert.link} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-5 w-5 mr-2" />
        Verifikasi Sertifikat
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
