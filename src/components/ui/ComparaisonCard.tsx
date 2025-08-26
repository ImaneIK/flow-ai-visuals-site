import { motion } from "framer-motion";

interface ComparisonCardProps {
  type: "avant" | "apres";
  icon: string;
  title: string;
  description: string;
  index: number;
}

export function ComparisonCard({ type, icon, title, description, index }: ComparisonCardProps) {
  const isAvant = type === "avant";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={`
        group relative p-6 rounded-xl border backdrop-blur-sm
        transition-all duration-300 cyber-scan
        ${
          isAvant
            ? "bg-destructive/5 border-destructive/20 hover:border-destructive/40 hover:bg-destructive/10"
            : "bg-primary/5 border-primary/20 hover:border-primary/40 hover:bg-primary/10 cyber-glow"
        }
      `}
    >
      {/* Cybernetic corner accents */}
      <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${
        isAvant ? "border-destructive/40" : "border-primary/40"
      }`} />
      <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${
        isAvant ? "border-destructive/40" : "border-primary/40"
      }`} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 cyber-grid opacity-5 rounded-xl" />
      
      <div className="relative z-10 flex items-start gap-4">
        {/* Icon container with cybernetic styling */}
        <div className={`
          flex-shrink-0 w-12 h-12 rounded-lg border-2 
          flex items-center justify-center text-xl
          cyber-hex transition-all duration-300
          ${
            isAvant
              ? "bg-destructive/10 border-destructive/30 group-hover:border-destructive/50"
              : "bg-primary/10 border-primary/30 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
          }
        `}>
          
            {icon}
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Title with glitch effect for "après" */}
          <h4 className={`
            text-lg font-semibold mb-2 transition-colors duration-300
            ${
              isAvant
                ? "text-destructive group-hover:text-destructive/80"
                : "text-primary group-hover:text-primary-glow"
            }
          `}>
            {!isAvant ? (
              <span className="cyber-glitch" data-text={title}>
                {title}
              </span>
            ) : (
              title
            )}
          </h4>
          
          {/* Description */}
          <p className={`
            text-sm leading-relaxed transition-colors duration-300
            ${
              isAvant
                ? "text-destructive/70 group-hover:text-destructive/60"
                : "text-primary/70 group-hover:text-primary/60"
            }
          `}>
            {description}
          </p>
        </div>
      </div>
      
      {/* Animated scan line for "après" cards */}
      {!isAvant && (
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
    </motion.div>
  );
}