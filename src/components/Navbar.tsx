import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Procédé", href: "#process" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-4 mx-auto z-50 bg-background/50 backdrop-blur-md border border-border shadow-md w-full max-w-3xl px-6 py-3 lg:rounded-full"
    >
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logoAH.svg" className="w-auto h-12" />
          <h1 className="text-xl font-bold">
            <span className="text-white">AHDIGITAL</span>
          </h1>
          {/* <p className="text-xs text-muted-foreground font-semibold hidden sm:block">AHDIGITAL</p> */}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center ">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-green-500 transition-colors relative group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-green-500 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-3 md:hidden border-t border-border pt-3"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-foreground hover:text-green-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
