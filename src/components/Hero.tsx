import { Button } from "./ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const socialIcons = [
    { icon: Github, href: "https://github.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Mail, href: "mailto:jardel@example.com" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a1628] to-[#0a0a0a]" />
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59,130,246,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating Gradient Orbs with Animation */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-6">
          {/* Animated Glass Badge */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-blue-500/[0.2] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              whileHover={{ scale: 1.05, borderColor: 'rgba(59,130,246,0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span className="text-sm text-white/60">Selamat datang di ruang digital saya</span>
            </motion.div>
          </motion.div>
          
          {/* Animated Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-white">
              Pengembang Kreatif &
              <br />
              <span className="relative inline-block">
                <motion.span 
                  className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  Visi Desain
                </motion.span>
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30 blur-2xl -z-10"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Menciptakan pengalaman digital yang imersif dengan teknologi terkini.
            Spesialisasi dalam desain kaca, antarmuka 3D, dan seni interaktif.
          </motion.p>
        </div>

        {/* Animated Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 backdrop-blur-xl border border-blue-400/20 text-white shadow-[0_8px_32px_0_rgba(59,130,246,0.3)]"
              onClick={() => scrollToSection("projects")}
            >
              Lihat Karya Saya
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent hover:bg-white/5 backdrop-blur-xl border-blue-500/30 hover:border-blue-400/50 text-white/80 hover:text-white"
              onClick={() => scrollToSection("contact")}
            >
              Hubungi Saya
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Social Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-4 justify-center pt-8"
        >
          {socialIcons.map((social, index) => (
            <motion.a 
              key={index}
              href={social.href} 
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="p-3 rounded-full bg-white/[0.03] backdrop-blur-xl border border-blue-500/[0.15] hover:border-blue-400/[0.3] transition-all shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              whileHover={{ 
                scale: 1.1, 
                y: -5,
                boxShadow: '0 12px 40px 0 rgba(59,130,246,0.25)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5 text-blue-400" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Animated Bottom Fade */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </section>
  );
}
