import { motion } from "framer-motion";

export default function Footer() {
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
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">
              <span className="text-foreground">flow</span>
              <span className="text-neon-green">AI</span>
            </h3>
            <p className="text-sm text-muted-foreground font-semibold">AHDIGITAL</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">© 2025 AHDIGITAL</p>
              <p className="text-xs text-muted-foreground">
                Local time: {new Date().toLocaleTimeString()} (CET)
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}