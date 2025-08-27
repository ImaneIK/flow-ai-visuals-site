import { motion } from "framer-motion";
import { ComparisonCard } from "./ui/ComparaisonCard";

const avantData = [
  {
    icon: "⏳",
    title: "Perte de temps",
    description: "Processus manuels chronophages et répétitifs"
  },
  {
    icon: "📉",
    title: "Opportunités manquées", 
    description: "Prospects non suivis et relances oubliées"
  },
  {
    icon: "📂",
    title: "Données dispersées",
    description: "Informations éparpillées dans différents outils"
  },
  {
    icon: "⚠️",
    title: "Pas de suivi",
    description: "Aucune visibilité sur les performances commerciales"
  },
  {
    icon: "😓",
    title: "Équipe sous pression",
    description: "Stress constant et charge de travail excessive"
  }
];

const apresData = [
  {
    icon: "🤖",
    title: "Agent IA multicanal",
    description: "Réponses automatisées 24h/24 sur tous les canaux"
  },
  {
    icon: "📊", 
    title: "CRM connecté",
    description: "Centralisation et synchronisation de toutes les données"
  },
  {
    icon: "📅",
    title: "Calendrier intelligent",
    description: "Planification automatique des rendez-vous et suivis"
  },
  {
    icon: "🔄",
    title: "Workflows automatisés", 
    description: "Processus optimisés et actions déclenchées automatiquement"
  },
  {
    icon: "📈",
    title: "Tableau de bord",
    description: "Analytics en temps réel et insights prédictifs"
  }
];

export default function ComparisonSection() {
  return (
    <section className="max-w-screen relative min-h-screen px-6 bg-transparent py-8 mb-12" >
      {/* Cybernetic Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--cyber-cyan))" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="hsl(var(--cyber-blue))" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="hsl(var(--cyber-pink))" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
          
          {/* Circuit paths */}
          <motion.path
            d="M0 200 Q300 100 600 200 T1200 200"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 600 Q300 700 600 600 T1200 600"
            fill="none"
            stroke="url(#circuit-gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          
          {/* Circuit nodes */}
          <motion.circle
            cx="600"
            cy="200"
            r="6"
            fill="hsl(var(--cyber-cyan))"
            className="cyber-glow"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="600"
            cy="600"
            r="6" 
            fill="hsl(var(--cyber-pink))"
            className="cyber-glow-pink"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1]
            }}
            transition={{ duration: 2, delay: 1, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 bg-card/40 backdrop-blur-sm mb-8 cyber-glow"
          >
            <motion.span 
              className="text-2xl"
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              🌐
            </motion.span>
            <span className="text-sm font-mono text-primary uppercase tracking-wider">
              Infrastructure de croissance AI
            </span>
          </motion.div>


          <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6 ">
          Cas <span className="text-lime-200">Client</span>
        </h2>

          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Avant / Après la mise en place d'une{" "}
            <span className="text-primary font-semibold cyber-glow">
              Infrastructure de Croissance IA (360°)
            </span>
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-16 relative">
          {/* Central Divider with Animation */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-20">
            {/* Vertical line */}
            <motion.div 
              className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />
            
            
            
            {/* Data flow indicators */}
            <motion.div
              className="absolute top-1/4 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rounded-full"
              animate={{ 
                y: [0, 50, 100, 150],
                opacity: [1, 0.5, 0.2, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="absolute top-3/4 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full"
              animate={{ 
                y: [0, -50, -100, -150],
                opacity: [1, 0.5, 0.2, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </div>

          {/* Avant Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Section Header */}
            <div className="flex items-center justify-center lg:justify-end gap-4">
              <motion.div 
                className="w-16 h-16 bg-destructive/10 border-2 border-destructive/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <span className="text-3xl">❌</span>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold text-destructive">AVANT</h3>
                <p className="text-destructive/70 font-mono">SYSTÈME OBSOLÈTE</p>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {avantData.map((item, index) => (
                <ComparisonCard
                  key={index}
                  type="avant"
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Après Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Section Header */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <motion.div 
                className="w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-xl flex items-center justify-center backdrop-blur-sm cyber-glow"
                whileHover={{ scale: 1.1, rotate: -5 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px hsl(var(--cyber-cyan) / 0.3)",
                    "0 0 40px hsl(var(--cyber-cyan) / 0.5)", 
                    "0 0 20px hsl(var(--cyber-cyan) / 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-3xl">✅</span>
              </motion.div>
              <div>
                <h3 className="text-4xl font-bold text-primary">APRÈS</h3>
                <p className="text-primary/70 font-mono">IA INTÉGRÉE 360°</p>
              </div>
            </div>

            {/* Cards */}
            <div className="space-y-6">
              {apresData.map((item, index) => (
                <ComparisonCard
                  key={index}
                  type="apres"
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </section>
  );
}