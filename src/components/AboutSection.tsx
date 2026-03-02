import { motion } from 'framer-motion';
import { BookOpenText, Medal, PencilLine, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: BookOpenText, value: '100+', label: 'Tugas Selesai' },
    { icon: Medal, value: '5+', label: 'Juara Kelas' },
    { icon: PencilLine, value: '50+', label: 'Tinta Pulpen' },
    { icon: Rocket, value: '9+', label: 'Pengalaman Belajar' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
      <p className="font-display font-bold text-2xl text-gradient">9+ Tahun</p>
      <p className="text-sm text-muted-foreground">Pengalaman Belajar</p>
    </div>
  </div>
</motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold">
              Deskripsi
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Perkenalkan nama saya Ziyad Al Azhar, saya lahir di Lhoksukon pada
              tanggal 17 Mei 2010, saya sedang menempuh jenjang pendidikan kelas
              10 di Man 1 Banda Aceh, sekarang ini saya tinggal di daerah
              Lampulo lebih tepatnya di Kota Banda Aceh.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             Saya adalah salah satu dari seorang pelajar yang memiliki ambisi
             besar terhadap cita citanya di masa depan nanti. Di saat teman-teman
             sebayaku sedang asik bermain, saya lebih memilih untuk menyelesaikan
             tugas sekolah yang diberikan oleh guru, saya tidak ingin
             melihat kedua orang tuaku kecewa di suatu hari nanti, Karena pedoman
             inilah yang membuat saya menjadi semangat untuk belajar. 
            </p>
           <div className="grid grid-cols-2 gap-6 pt-4">
  {stats.map((stat, index) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="p-6 glass rounded-2xl text-center hover:shadow-card-hover transition-all"
    >
      <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
      
      <p className="font-display text-2xl font-bold mb-1">{stat.value}</p>
      
      <p className="text-s text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  ))}
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
