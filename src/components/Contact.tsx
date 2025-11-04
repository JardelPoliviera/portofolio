import { Button } from "./ui/button";
import GlassCard from "./GlassCard";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Terima kasih atas pesan Anda! Saya akan segera menghubungi Anda kembali.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jardel@example.com",
      link: "mailto:jardel@example.com"
    },
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Padang, Indonesia",
      link: null
    }
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-2 rounded-full bg-white/[0.03] backdrop-blur-xl border border-blue-500/[0.15]"
            whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.3)' }}
          >
            <span className="text-sm text-white/60">Hubungi Saya</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Mari Bekerja Sama
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Punya proyek atau ingin ngobrol? Saya akan senang mendengar dari Anda!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label htmlFor="name" className="text-white/80">Nama</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/[0.03] border-blue-500/[0.15] text-white placeholder:text-white/30 focus:border-blue-400/50 transition-colors"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label htmlFor="email" className="text-white/80">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email.anda@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/[0.03] border-blue-500/[0.15] text-white placeholder:text-white/30 focus:border-blue-400/50 transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Label htmlFor="subject" className="text-white/80">Subjek</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Tentang apa ini?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.03] border-blue-500/[0.15] text-white placeholder:text-white/30 focus:border-blue-400/50 transition-colors"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Label htmlFor="message" className="text-white/80">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan tentang proyek Anda..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/[0.03] border-blue-500/[0.15] text-white placeholder:text-white/30 focus:border-blue-400/50 transition-colors resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-[0_8px_32px_0_rgba(59,130,246,0.3)]"
                  >
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </Button>
                </motion.div>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {contactInfo.map((item, index) => (
              <GlassCard key={index} delay={index * 0.1} className="p-6">
                <div className="flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/[0.2]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <div>
                    <h4 className="mb-1 text-white">{item.title}</h4>
                    {item.link ? (
                      <motion.a 
                        href={item.link} 
                        className="text-white/60 hover:text-blue-400 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        {item.value}
                      </motion.a>
                    ) : (
                      <p className="text-white/60">{item.value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}

            <GlassCard delay={0.3} className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-400/[0.2]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="mb-2 text-white">Tersedia untuk Freelance</h4>
                <p className="text-sm text-white/70">
                  Saya saat ini menerima proyek dan kolaborasi baru. Mari ciptakan sesuatu yang luar biasa bersama-sama!
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
