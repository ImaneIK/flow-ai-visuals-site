'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projets = [
  {
    annee: '2024',
    titre: 'RAG - Agent IA',
    description:
      "Nous avons accompagné un hôtel 4 étoiles dans sa transformation numérique avec une solution intelligente basée sur l’IA. Résultats : 87 % des demandes clients traitées automatiquement, une nette amélioration du taux d’occupation (+16 points), et une équipe recentrée sur l’essentiel — l’expérience client.",
    image: '/images/agent.mp4',
  },
  {
    annee: '2024',
    titre: 'NBS - Système de saisie',
    description:
      "Application permet aux utilisateurs de téléverser des documents comptables (factures, relevés), qui sont ensuite analysés automatiquement via n8n. Les données extraites sont enregistrées dans la base de données et peuvent être consultées ou exportées en Excel.",
    image: '/images/typing.mp4',
  },
  {
    annee: '2025',
    titre: 'Avatacar - Consulting & Formation',
    description:
      "Avec des équipes formées, des outils IA intégrés et des solutions développées sur-mesure vous êtes prêt à devenir un leader dans votre industrie.",
    image: '/images/consulting.mov',
  },
];

export default function ProjetsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section  id="projects" className="py-24 bg-black text-white px-4">
      <h2 className="pl-6 mx-auto md:mx-0 md:pl-24  py-12 text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-left max-w-2xl">
            <span>Nos</span>{" "}
            <span className="text-lime-200"> Projets </span>
          </h2>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Colonne gauche : textes & projets */}
        <div className="space-y-12">
          {projets.map((projet, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`cursor-pointer group  pl-6 relative transition-all `}
            >
              {/* Année */}
              <span className="absolute -left-6 top-0 text-sm text-lime-200">
                {projet.annee}
              </span>
              <br/>

              {/* Titre + Flèche */}
              <div className="flex items-center justify-between">
                <h3
                  className={`text-2xl font-medium transition-colors ${
                    index === selectedIndex
                      ? 'text-white'
                      : 'text-neutral-300 group-hover:text-white'
                  }`}
                >
                  {projet.titre}
                </h3>
                <span className="text-lime-200 text-2xl">↗</span>
              </div>

              {/* Description si actif */}
              {index === selectedIndex && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-400 max-w-lg"
                >
                  {projet.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>

        {/* Colonne droite : image du projet */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={projets[selectedIndex].image}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <video
                src={projets[selectedIndex].image}
                // alt={projets[selectedIndex].titre}
                className="object-cover"
                autoPlay
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
