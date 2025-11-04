import GlassCard from "./GlassCard";
import { Code2, Palette, Database, Workflow, Sparkles, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Pengembangan Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Motion/Framer"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Supabase", "REST APIs"],
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Palette,
      title: "Desain & UX",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Responsive Design", "Design Systems", "Prototyping"],
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: Workflow,
      title: "Tools & Workflow",
      skills: ["Git", "Docker", "CI/CD", "Webpack", "VS Code", "Agile/Scrum"],
      color: "from-indigo-600 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "Creative Coding",
      skills: ["WebGL", "Three.js", "Canvas API", "SVG Animation", "GLSL", "Generative Art"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Shield,
      title: "Best Practices",
      skills: ["Testing", "Security", "Performance", "Accessibility", "SEO", "Documentation"],
      color: "from-cyan-400 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-[#0a0a0a]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 70, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
            <span className="text-sm text-white/60">Keahlian</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Keterampilan & Teknologi
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Toolkit komprehensif untuk membangun aplikasi web yang modern, scalable, dan indah
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} hover delay={index * 0.1} className="p-6 group">
              <div className="flex items-start gap-4">
                <motion.div 
                  className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-20 border border-blue-400/[0.2] relative overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <category.icon className="w-6 h-6 text-blue-400 relative z-10" />
                </motion.div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded bg-blue-500/[0.05] border border-blue-500/[0.15] text-blue-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * skillIndex }}
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'rgba(59,130,246,0.15)',
                          borderColor: 'rgba(59,130,246,0.3)',
                          y: -2
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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
