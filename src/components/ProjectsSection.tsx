import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext'; // Import context

// 1. Data Proyek dengan translasi
const projectsData = {
  id: {
    badge: "Literasi",
    title: "Proyek & Karya",
    items: [
      {
        title: 'Motivation',
        description: 'Platform yang berisi kumpulan motivasi dan inspirasi untuk pelajar dengan berbagai kategori.',
        tags: ['Pengembangan Diri', 'Kesehatan Mental', 'Inspirasi'],
        images: ['😎', '🌟', '✨', '🔥'], 
        color: 'from-blue-500/20 to-cyan-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tips',
        description: 'Platform yang berisi kumpulan tips seputar dunia pendidikan, belajar, dan pengembangan diri.',
        tags: ['Trik Belajar', 'Produktivitas', 'Literasi Digital'],
        images: ['🤓', '📚', '💡', '✍️'],
        color: 'from-purple-500/20 to-pink-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tricks',
        description: 'Platform yang berisi kumpulan trik untuk mempermudah proses belajar dan meningkatkan produktivitas.',
        tags: ['Sains Data', 'Monitoring', 'Statistik'],
        images: ['🤔', '🧪', '📊', '⚙️'],
        color: 'from-orange-500/20 to-red-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Education',
        description: 'Platform yang berisi edukasi interaktif dengan berbagai kursus online dan materi pembelajaran.',
        tags: ['Kursus Online', 'AI Learning', 'Interaktif'],
        images: ['🧐', '🎓', '💻', '📖'],
        color: 'from-green-500/20 to-teal-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tips & Tricks Videos',
        description: 'Platfrom yang berisi kumpulan video tips dan trik mengenai cara belajar yang efektif dan efisien.',
        tags: ['Belajar Efektif', 'Produktivitas', 'Tutorial'],
        images: ['😮', '🎬', '📽️', '📺'],
        color: 'from-red-500/20 to-orange-500/20',
        isContent: true,
        youtube: '#',
      },
      {
        title: 'Literacy Videos',
        description: 'Platfrom yang berisi kumpulan video edukasi mengenai berbagai macam literasi penting untuk pelajar.',
        tags: ['Literasi Digital', 'Finansial', 'Media Sosial'],
        images: ['😃', '📱', '🌍', '📰'],
        color: 'from-cyan-500/20 to-blue-500/20',
        isContent: true,
        youtube: '#',
      },
    ]
  },
  en: {
    badge: "Literacy",
    title: "Projects & Works",
    items: [
      {
        title: 'Motivation',
        description: 'A platform containing a collection of motivation and inspiration for students across various categories.',
        tags: ['Self-Growth', 'Mental Health', 'Inspiration'],
        images: ['😎', '🌟', '✨', '🔥'], 
        color: 'from-blue-500/20 to-cyan-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tips',
        description: 'A platform featuring a collection of tips about education, learning, and self-development.',
        tags: ['Study Hacks', 'Productivity', 'Digital Literacy'],
        images: ['🤓', '📚', '💡', '✍️'],
        color: 'from-purple-500/20 to-pink-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tricks',
        description: 'A platform containing tricks to simplify the learning process and boost productivity.',
        tags: ['Data Science', 'Monitoring', 'Statistics'],
        images: ['🤔', '🧪', '📊', '⚙️'],
        color: 'from-orange-500/20 to-red-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Education',
        description: 'An interactive education platform with various online courses and learning materials.',
        tags: ['Online Courses', 'AI Learning', 'Interactive'],
        images: ['🧐', '🎓', '💻', '📖'],
        color: 'from-green-500/20 to-teal-500/20',
        github: '#', demo: '#', youtube: '#',
      },
      {
        title: 'Tips & Tricks Videos',
        description: 'A platform featuring a video collection of tips and tricks on effective and efficient learning methods.',
        tags: ['Effective Learning', 'Productivity', 'Tutorial'],
        images: ['😮', '🎬', '📽️', '📺'],
        color: 'from-red-500/20 to-orange-500/20',
        isContent: true,
        youtube: '#',
      },
      {
        title: 'Literacy Videos',
        description: 'A platform containing educational videos about various essential literacies for students.',
        tags: ['Digital Literacy', 'Financial', 'Social Media'],
        images: ['😃', '📱', '🌍', '📰'],
        color: 'from-cyan-500/20 to-blue-500/20',
        isContent: true,
        youtube: '#',
      },
    ]
  }
};

// 2. Sub-Komponen CardCarousel
function CardCarousel({ images, color }: { images: string[], color: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, images.length]);

  return (
    <div 
      className={`relative overflow-hidden aspect-video rounded-xl mb-4 bg-gradient-to-br ${color} group/carousel`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-full flex items-center justify-center text-6xl select-none">
            {img}
          </div>
        ))}
      </motion.div>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md transition-all opacity-0 group-hover/carousel:opacity-100 z-10"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </>
      )}
    </div>
  );
}

// 3. Komponen Utama
export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = projectsData[lang];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">{t.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {t.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white dark:bg-card rounded-2xl shadow-lg border border-border hover:-translate-y-2 transition-all duration-300">
                
                <CardCarousel images={project.images} color={project.color} />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button size="sm" className="rounded-full bg-[#14b8a6] hover:bg-[#0d9488] text-white" asChild>
                      <a href={project.youtube}>
                        <Play className="h-4 w-4 mr-1 fill-current" />
                        {lang === 'id' ? 'Tonton' : 'Watch'}
                      </a>
                    </Button>

                    {project.github && project.github !== '#' && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.github}><Github className="h-4 w-4 mr-1" /> Code</a>
                      </Button>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <Button variant="outline" size="sm" className="rounded-full" asChild>
                        <a href={project.demo}><ExternalLink className="h-4 w-4 mr-1" /> Demo</a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}