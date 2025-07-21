import { motion } from "framer-motion";
import { Search, Users, Cpu } from "lucide-react";

const services = [
  {
    title: "Audit & conseil",
    description: "Notre offre d'audit et de conseil est adaptée aux spécificités de votre organisation. Nous réalisons un audit détaillé de vos process et livrons des recommandations personnalisées pour intégrer l'IA de manière optimale.",
    icon: Search,
    features: ["Rapidité", "Sécurité", "Précision"]
  },
  {
    title: "Formations",
    description: "Nos formations en IA générative sont conçues pour faciliter son intégration en entreprise. Elles rendent vos équipes opérationnelles rapidement, assurant une adoption efficace au sein de votre organisation.",
    icon: Users,
    features: ["Formation personnalisée", "Équipes opérationnelles", "Adoption efficace"]
  },
  {
    title: "Solutions IA",
    description: "Nous concevons des solutions IA sur mesure : agents intelligents, automatisations, applications personnalisées et systèmes vocaux. Chaque projet est pensé pour s'intégrer naturellement à vos outils et répondre à des enjeux métiers concrets.",
    icon: Cpu,
    features: ["Agents intelligents", "Automatisations", "Applications personnalisées"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nos <span className="text-neon-green">services</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-neon-green/50 transition-all duration-300 group"
            >
              <div className="bg-neon-green/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-neon-green/20 transition-colors">
                <service.icon className="text-neon-green" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-neon-green rounded-full mr-3"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}