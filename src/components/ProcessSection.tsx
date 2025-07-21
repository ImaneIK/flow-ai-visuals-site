import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, GraduationCap, Code, Trophy } from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Contact",
    description: "Entrez en contact avec notre équipe pour partager vos besoins et objectifs. Nous prenons le temps de comprendre vos priorités afin de définir ensemble les premières étapes clés de votre projet en intelligence artificielle.",
    icon: MessageCircle,
    color: "neon-green"
  },
  {
    id: "02", 
    title: "Consulting",
    description: "Nous identifions vos enjeux stratégiques et opérationnels pour déterminer comment l'intelligence artificielle peut répondre à vos besoins. Cette étape permet de poser les bases d'une transformation réussie.",
    icon: Lightbulb,
    color: "neon-cyan"
  },
  {
    id: "03",
    title: "Formation", 
    description: "Nous formons les décideurs clés de votre organisation pour leur donner les outils et les connaissances nécessaires afin d'intégrer efficacement l'IA dans leur stratégie.",
    icon: GraduationCap,
    color: "neon-purple"
  },
  {
    id: "04",
    title: "Intégration & Développement",
    description: "Nous développons et intégrons des solutions IA sur mesure pour automatiser vos processus et maximiser votre performance.",
    icon: Code,
    color: "neon-pink"
  },
  {
    id: "05",
    title: "Devenez Leader en IA",
    description: "Avec des équipes formées, des outils IA intégrés et des solutions développés sur-mesure vous êtes prêt à devenir un leader dans votre industrie.",
    icon: Trophy,
    color: "neon-green"
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Notre <span className="text-neon-green">procédé</span>
          </h2>
          <p className="text-lg text-muted-foreground">On Abonnement</p>
        </motion.div>

        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="flex-1 bg-card border border-border rounded-2xl p-8 hover:border-neon-green/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-neon-green mr-4">{step.id}.</span>
                  <step.icon className="text-neon-green" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              
              <div className="flex-shrink-0">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${step.color} to-${step.color}/50 flex items-center justify-center`}>
                  <step.icon className="text-background" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}