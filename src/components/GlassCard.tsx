import { ReactNode } from "react";
import { motion } from "motion/react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className = "", hover = false, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-blue-500/[0.15]
        shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
        ${hover ? 'transition-all duration-300 hover:border-blue-400/[0.3] hover:shadow-[0_12px_48px_0_rgba(59,130,246,0.15)]' : ''}
        ${className}
      `}
    >
      {children}
      {/* Top highlight */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/[0.12] via-transparent to-transparent pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%)'
        }}
      />
      {/* Animated border glow */}
      {hover && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, transparent 50%)',
          }}
        />
      )}
    </motion.div>
  );
}
