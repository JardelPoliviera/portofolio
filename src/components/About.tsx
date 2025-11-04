import GlassCard from "./GlassCard";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Mahasiswa Aktif",
      description: "Universitas Andalas"
    },
    {
      icon: Award,
      title: "Berprestasi",
      description: "Pengakuan atas keunggulan desain dan inovasi"
    },
    {
      icon: Briefcase,
      title: "Terus Belajar",
      description: "Selalu mengeksplorasi teknologi dan metodologi baru"
    },
    {
      icon: Heart,
      title: "Didorong Passion",
      description: "Menciptakan pengalaman bermakna yang disukai pengguna"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
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
            <span className="text-sm text-white/60">Tentang Saya</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Membangun masa depan, satu proyek dalam satu waktu
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Saya adalah pengembang dan desainer yang bersemangat menciptakan pengalaman digital yang luar biasa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="relative aspect-square overflow-hidden group">
              {/* Ganti path ini dengan foto Anda */}
              <img
                src="/profile.jpg"
                alt="Jardel Poliviera"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // Fallback jika foto tidak ditemukan
                  e.currentTarget.src = "https://images.unsplash.com/photo-1667984436026-99b165e3672b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </GlassCard>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h3 className="text-2xl text-white">
              Halo, saya Jardel Poliviera
            </h3>
            <div className="space-y-2">
              <p className="text-white/90">
                <span className="text-blue-400">NIM:</span> 2411533012
              </p>
              <p className="text-white/90">
                <span className="text-blue-400">Universitas:</span> Universitas Andalas
              </p>
            </div>
            <motion.p 
              className="text-white/70 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Saya adalah pengembang kreatif yang menjembatani kesenjangan antara desain dan kode. 
              Saya berspesialisasi dalam menciptakan produk digital yang indah, fungsional, dan berpusat 
              pada pengguna. Pendekatan saya menggabungkan keahlian teknis dengan mata yang tajam untuk 
              estetika, memastikan setiap proyek tidak hanya bekerja dengan sempurna tetapi juga menyenangkan pengguna.
            </motion.p>
            <motion.p 
              className="text-white/70 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Saya percaya pada kekuatan kolaborasi, pembelajaran berkelanjutan, dan mendorong batas-batas 
              dari apa yang mungkin di web. Ketika saya tidak coding, Anda akan menemukan saya mengeksplorasi 
              tren desain baru, berkontribusi pada proyek open-source, atau berbagi pengetahuan dengan komunitas.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <GlassCard key={index} hover delay={index * 0.1} className="p-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-10 h-10 mb-4 text-blue-400" />
              </motion.div>
              <h4 className="mb-2 text-white">{item.title}</h4>
              <p className="text-sm text-white/60">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
