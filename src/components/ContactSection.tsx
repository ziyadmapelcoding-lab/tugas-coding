import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useLanguage } from "..//LanguageContext"; // Step 4: Import context

// 1. Data Translasi
const contactTranslations = {
  id: {
    badge: "Kontak",
    title: "Hubungi Saya",
    subTitle: "Mari Berkonsultasi!",
    description: "Ingin meningkatkan keterampilan belajar Anda? Saya siap membantu Anda mencapai tujuan tersebut. Jangan ragu untuk menghubungi saya.",
    form: {
      name: "Nama",
      namePlaceholder: "Nama Anda",
      email: "Email",
      emailPlaceholder: "email@contoh.com",
      subject: "Subjek",
      subjectPlaceholder: "Subjek pesan",
      message: "Pesan",
      messagePlaceholder: "Tuliskan pesan Anda...",
      send: "Kirim Pesan",
      sending: "Mengirim...",
    },
    toast: {
      successTitle: "Pesan Terkirim! ✨",
      successDesc: "Terima kasih. Pesan Anda sudah diteruskan ke email saya.",
      errorTitle: "Gagal Mengirim",
      errorDesc: "Terjadi kesalahan koneksi. Silakan hubungi via WhatsApp atau Email langsung.",
    },
    validation: {
      name: "Nama harus diisi",
      email: "Email tidak valid",
      subject: "Subjek harus diisi",
      message: "Pesan harus diisi",
    }
  },
  en: {
    badge: "Contact",
    title: "Get In Touch",
    subTitle: "Let's Consult!",
    description: "Want to improve your learning skills? I am ready to help you achieve those goals. Feel free to contact me.",
    form: {
      name: "Name",
      namePlaceholder: "Your Name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      subject: "Subject",
      subjectPlaceholder: "Message subject",
      message: "Message",
      messagePlaceholder: "Write your message...",
      send: "Send Message",
      sending: "Sending...",
    },
    toast: {
      successTitle: "Message Sent! ✨",
      successDesc: "Thank you. Your message has been forwarded to my email.",
      errorTitle: "Failed to Send",
      errorDesc: "Connection error. Please contact me via WhatsApp or Email directly.",
    },
    validation: {
      name: "Name is required",
      email: "Invalid email",
      subject: "Subject is required",
      message: "Message is required",
    }
  }
};

export default function ContactSection() {
  const { lang } = useLanguage();
  const t = contactTranslations[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Validasi Form menggunakan pesan dari translasi
  const contactSchema = z.object({
    name: z.string().trim().min(1, t.validation.name),
    email: z.string().trim().email(t.validation.email),
    subject: z.string().trim().min(1, t.validation.subject),
    message: z.string().trim().min(1, t.validation.message),
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kindi.ziyad@gmail.com",
      href: "https://mail.google.com/mail/u/0/?fs=1&to=kindi.ziyad@gmail.com&su=Contact%20from%20Portfolio&body=Hello%2C%20I%20would%20like%20to%20contact%20you.",
      target: "_blank",
    },
    {
      icon: Phone,
      label: lang === 'id' ? "Telepon" : "Phone",
      value: "+62 823-6173-9885",
      href: "https://wa.me/6282361739885",
      target: "_blank",
    },
    {
      icon: MapPin,
      label: lang === 'id' ? "Lokasi" : "Location",
      value: "Banda Aceh, Indonesia",
      href: "https://share.google/NLN3qsYcj6gz8Nr6v",
      target: "_blank",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xnjbyvjk", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      toast({
        title: t.toast.successTitle,
        description: t.toast.successDesc,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: t.toast.errorTitle,
        description: t.toast.errorDesc,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">{t.badge}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold mb-4">{t.subTitle}</h3>
              <p className="text-muted-foreground leading-relaxed">{t.description}</p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.target}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-xl hover:shadow-card-hover transition-all group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-6 glass rounded-2xl shadow-card">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.form.name}</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.form.namePlaceholder}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t.form.email}</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.form.emailPlaceholder}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.form.subject}</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.form.subjectPlaceholder}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t.form.message}</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.form.messagePlaceholder}
                  rows={5}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> {t.form.sending}</>
                ) : (
                  <><Send className="h-4 w-4 mr-2" /> {t.form.send}</>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}