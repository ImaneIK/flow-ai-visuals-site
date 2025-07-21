import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    company: "",
    website: "",
    companySize: "",
    revenue: "",
    budget: "",
    services: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nous <span className="text-neon-green">Contacter</span>
          </h2>
          <p className="text-lg text-muted-foreground">Parlons-en.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Quel est votre Nom/Prénom ? *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-neon-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Quelle est votre adresse e-mail ? *
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-neon-green"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Quel est votre rôle dans l'entreprise ? *
              </label>
              <Input
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-neon-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nom Entreprise *
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-neon-green"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Site web Entreprise *
            </label>
            <Input
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              required
              className="bg-background/50 border-border focus:border-neon-green"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Taille de l'entreprise *
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-neon-green focus:outline-none text-foreground"
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1-10 employés</option>
                <option value="11-50">11-50 employés</option>
                <option value="51-200">51-200 employés</option>
                <option value="200+">200+ employés</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Chiffre d'affaires annuel *
              </label>
              <select
                name="revenue"
                value={formData.revenue}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-neon-green focus:outline-none text-foreground"
              >
                <option value="">Sélectionnez</option>
                <option value="<1M">Moins de 1M€</option>
                <option value="1M-5M">1M€ - 5M€</option>
                <option value="5M-20M">5M€ - 20M€</option>
                <option value="20M+">Plus de 20M€</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Budget du projet *
            </label>
            <Input
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              required
              className="bg-background/50 border-border focus:border-neon-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Quels services vous intéressent ?
            </label>
            <select
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-neon-green focus:outline-none text-foreground"
            >
              <option value="">Sélectionnez</option>
              <option value="audit">Audit & Conseil</option>
              <option value="formation">Formation</option>
              <option value="solutions">Solutions IA</option>
              <option value="all">Tous les services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="bg-background/50 border-border focus:border-neon-green"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-neon-green hover:bg-neon-green/80 text-background font-semibold"
          >
            <Mail className="mr-2" size={20} />
            Envoyer la demande
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground">
            Ou contactez-nous directement : <br />
            <a href="mailto:automation@ahdigital.tech" className="text-neon-green hover:text-neon-cyan transition-colors">
              automation@ahdigital.tech
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}