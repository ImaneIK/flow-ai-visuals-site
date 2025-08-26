import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import ProjetsSection from "@/components/Projects";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ComparisonSection from "@/components/Comparaison";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground relative ">
      <WhatsAppFloatingButton
        phone="212752515421"
        message="Salam! Je veux plus d'infos 🙂"
        label="WhatsApp us"
      />
      {/* Particles background */}
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <Introduction /> 
        <ProcessSection />
        <ServicesSection />
        <ComparisonSection />
        <ProjetsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
