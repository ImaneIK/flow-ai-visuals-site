import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-neon-cyan/10 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <Sparkles className="text-neon-green mr-3" size={32} />
          <span className="text-neon-green font-semibold text-lg">L'IA à votre service</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-neon-green to-neon-cyan bg-clip-text text-transparent leading-tight"
        >
          Maîtrisez et intégrez{" "}
          <span className="text-neon-green">l'IA générative</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          pour augmenter la productivité de votre entreprise et améliorer la qualité de votre travail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-neon-green hover:bg-neon-green/80 text-background font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/20"
          >
            Nos services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-neon-green text-neon-green hover:bg-neon-green hover:text-background px-8 py-4 text-lg transition-all duration-300"
          >
            Nous contacter
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse mr-2"></div>
              Nous sommes votre Partenaire IA 360° 👋
            </div>
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            Nous transformons les entreprises ✨ en Leader IA.
          </div>
        </motion.div>
      </div>
    </section>
  );
}