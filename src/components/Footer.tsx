import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com" },
    { icon: Linkedin, href: "https://linkedin.com" },
    { icon: Mail, href: "mailto:jardel@example.com" }
  ];

  return (
    <footer className="relative border-t border-blue-500/[0.15] bg-[#0a0a0a]">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="mb-4 text-white">Tentang</h4>
            <p className="text-sm text-white/60">
              Pengembang kreatif yang berspesialisasi dalam membangun pengalaman digital luar biasa dengan glassmorphism dan teknologi web modern.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="mb-4 text-white">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              {["Tentang", "Proyek", "Keahlian", "Kontak"].map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <motion.a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white/60 hover:text-blue-400 transition-colors inline-block"
                    whileHover={{ x: 4 }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="mb-4 text-white">Terhubung</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "GitHub", href: "https://github.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "Email", href: "mailto:jardel@example.com" }
              ].map((item, index) => (
                <motion.li 
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <motion.a 
                    href={item.href} 
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="text-white/60 hover:text-blue-400 transition-colors inline-block"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="mb-4 text-white">Info</h4>
            <div className="text-sm text-white/60 space-y-2">
              <p>Jardel Poliviera</p>
              <p>NIM: 2411533012</p>
              <p>Universitas Andalas</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="pt-8 border-t border-blue-500/[0.15] flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm text-white/60 flex items-center gap-1">
            © {currentYear} Dibuat dengan 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 fill-current text-blue-500" />
            </motion.span>
            oleh Jardel Poliviera
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a 
                key={index}
                href={social.href} 
                target={social.href.startsWith('http') ? "_blank" : undefined}
                rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg bg-white/[0.03] backdrop-blur-xl border border-blue-500/[0.15] hover:border-blue-400/[0.3] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -4,
                  backgroundColor: 'rgba(59,130,246,0.1)',
                  boxShadow: '0 8px 24px 0 rgba(59,130,246,0.2)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4 text-blue-400" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
