import { motion } from "framer-motion";

export default function Footer() {


  const currentYear = new Date().getFullYear();
    const localTime = new Date().toLocaleTimeString('fr-FR', {
      timeZone: 'Europe/Paris',
      hour12: false,
    });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-secondary/50 border-t border-border py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex">
            <img src="/images/logoAH.png" className="h-12 w-full"/>
            <div>
              <h3 className="text-2xl font-bold ">
              <span className="text-foreground">AH</span>
              <span className="text-green-500">DIGITAL</span>
              </h3>
              <p className="text-sm text-muted-foreground font-semibold">Automation</p>
            </div>
           
            
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground"><span className="text-lime-200">© {currentYear}</span> AHDIGITAL</p>
              <p className="text-xs text-muted-foreground">
                <span>Local time: {localTime} (CET)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}