import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import SocialGrid from "./socials";
import emailjs from "@emailjs/browser";

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
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    const serviceId = "service_9xgswel";
    const templateId = "template_dsjxzoh";
    const userId = "Zc5nFZIhZDTRMpzIq";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      company: formData.company,
      website: formData.website,
      companySize: formData.companySize,
      revenue: formData.revenue,
      budget: formData.budget,
      services: formData.services,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, userId);
      setSuccess("Votre demande a été envoyée avec succès !");
      setFormData({
        name: "",
        email: "",
        role: "",
        company: "",
        website: "",
        companySize: "",
        revenue: "",
        budget: "",
        services: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(
        "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mx-auto py-8 text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center max-w-2xl">
            <span>Nous</span>{" "}
            <span className="text-lime-200"> Contacter </span>
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
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="name"
              >
                Quel est votre Nom/Prénom ? *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-green-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="email"
              >
                Quelle est votre adresse e-mail ? *
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-green-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="role"
              >
                Quel est votre rôle dans l'entreprise ? *
              </label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-green-500"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="company"
              >
                Nom Entreprise *
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="bg-background/50 border-border focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-foreground mb-2"
              htmlFor="website"
            >
              Site web Entreprise *
            </label>
            <Input
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              required
              className="bg-background/50 border-border focus:border-green-500"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="companySize"
              >
                Taille de l'entreprise *
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-green-500 focus:outline-none text-foreground"
              >
                <option value="">Sélectionnez</option>
                <option value="1-10">1-10 employés</option>
                <option value="11-50">11-50 employés</option>
                <option value="51-200">51-200 employés</option>
                <option value="200+">200+ employés</option>
              </select>
            </div>
            <div>
              <label
                className="block text-sm font-medium text-foreground mb-2"
                htmlFor="revenue"
              >
                Chiffre d'affaires annuel *
              </label>
              <select
                id="revenue"
                name="revenue"
                value={formData.revenue}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-green-500 focus:outline-none text-foreground"
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
            <label
              className="block text-sm font-medium text-foreground mb-2"
              htmlFor="budget"
            >
              Budget du projet *
            </label>
            <Input
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              required
              className="bg-background/50 border-border focus:border-green-500"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-foreground mb-2"
              htmlFor="services"
            >
              Quels services vous intéressent ?
            </label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-background/50 border border-border rounded-md focus:border-green-500 focus:outline-none text-foreground"
            >
              <option value="">Sélectionnez</option>
              <option value="audit">Audit & Conseil</option>
              <option value="formation">Formation</option>
              <option value="solutions">Solutions IA</option>
              <option value="all">Tous les services</option>
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-medium text-foreground mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="bg-background/50 border-border focus:border-green-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-center font-medium">{error}</p>
          )}
          {success && (
            <p className="text-green-500 text-center font-medium">{success}</p>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-500/80 text-background font-semibold"
          >
            <Mail className="mr-2" size={20} />
            {loading ? "Envoi en cours..." : "Envoyer la demande"}
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
            Ou contactez-nous directement sur : <br />
            {/* <a
              href="mailto:automation@ahdigital.tech"
              className="text-green-500 hover:text-cyan-500 transition-colors"
            >
              automation@ahdigital.tech
            </a> */}
          </p>

          <SocialGrid />
        </motion.div>
      </div>
    </section>
  );
}
