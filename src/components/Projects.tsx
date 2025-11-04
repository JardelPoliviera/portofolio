import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import GlassCard from "./GlassCard";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      title: "Platform E-Commerce Modern",
      description: "Solusi e-commerce lengkap dengan inventaris real-time, integrasi pembayaran, dan dashboard analitik canggih.",
      image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MjA4ODcxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      featured: true
    },
    {
      title: "Dashboard Visualisasi Data",
      description: "Platform analitik interaktif dengan pemrosesan data real-time dan visualisasi grafik yang indah untuk wawasan bisnis.",
      image: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjIxMzMwMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["TypeScript", "D3.js", "PostgreSQL", "Express"],
      featured: true
    },
    {
      title: "Aplikasi SaaS Mobile-First",
      description: "Platform SaaS responsif dengan autentikasi pengguna, manajemen langganan, dan fitur kolaboratif.",
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMTA0MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "Supabase", "Tailwind", "PWA"],
      featured: false
    },
    {
      title: "Sistem Desain Kaca",
      description: "Sistem desain glassmorphism yang komprehensif dengan komponen yang dapat disesuaikan dan efek shader interaktif.",
      image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTMwMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "WebGL", "GLSL", "Motion"],
      featured: false
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -60, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 18,
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
            <span className="text-sm text-white/60">Portofolio</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Proyek Unggulan
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Pilihan proyek yang menampilkan keterampilan dan passion saya dalam menciptakan pengalaman digital yang luar biasa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard 
              key={index}
              hover
              delay={index * 0.1}
              className={`overflow-hidden group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`grid ${project.featured ? 'md:grid-cols-2' : ''} gap-0`}>
                <div className="relative aspect-video md:aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:to-transparent transition-all duration-500"
                  />
                  
                  {/* Animated corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/0 to-transparent"
                    whileHover={{ 
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 70%)'
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                
                <div className="p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <motion.div 
                      className="flex gap-2 flex-wrap"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/[0.1] border border-blue-500/[0.2] text-blue-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + tagIndex * 0.05 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: 'rgba(59,130,246,0.2)',
                            borderColor: 'rgba(59,130,246,0.4)'
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <h3 className="text-2xl text-white">{project.title}</h3>
                    <p className="text-white/60">{project.description}</p>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 bg-transparent hover:bg-blue-500/10 border-blue-500/20 hover:border-blue-400/40 text-blue-300"
                      >
                        <Github className="w-4 h-4" />
                        Kode
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        size="sm" 
                        className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 text-white shadow-[0_4px_16px_0_rgba(59,130,246,0.3)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo Langsung
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
