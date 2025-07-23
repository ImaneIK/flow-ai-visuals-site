import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import GlowingOrbs from "./ui/sphere";
import GlowingSphere from "./ui/sphere";
import BlendedGlowingSphere from "./ui/sphere";
import OrbitingShadowSphere from "./ui/sphere";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
       
      {/* Gradient overlays */}
      <div className="absolute inset-0  pointer-events-none" />
<OrbitingShadowSphere></OrbitingShadowSphere>
      <div className="max-w-4xl mx-auto text-center z-10">
       

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl md:text-8xl font-bold mb-8  leading-tight"
        >
          L'IA{" "}
          <span className=""> à votre service.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white/50  mb-12 max-w-3xl mx-auto leading-relaxed"
        >
         Maîtrisez et intégrez L'IA générative pour augmenter la productivité de votre entreprise et améliorer la qualité de votre travail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#services">
            <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/60 text-white/60 hover:bg-white/60 hover:text-background px-4 py-1 text-md transition-all duration-300"
          >
            Nos Service
            <ArrowRight></ArrowRight>
          </Button>
          </a>
          
          <a href="https://api.whatsapp.com/send/?phone=212636308953&text&type=phone_number&app_absent=0">
            <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/60 text-white/60 hover:bg-white/60 hover:text-background px-4 py-1 text-md transition-all duration-300"
          >
            Nous contacter
          </Button>
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}