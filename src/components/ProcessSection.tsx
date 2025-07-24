import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import FeatureCard from "./ui/FeatureCard";


import slack from '/images/slack.svg';
import stripe from '/images/stripe.svg';
import notion from '/images/notion.svg';
import github from '/images/github.svg';
import figma from '/images/figma.svg';
import MaskedCanvasContainer from "./ui/maskedContainer";




export default function Features() {
  const [bgScope, bgAnimate] = useAnimate();
  const [isOn, setIsOn] = useState(true);
  const [selectedOption, setSelectedOption] = useState("Pro");

  const icons = [slack, stripe, notion, github, figma];
  const [iconIndex, setIconIndex] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % icons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [icons.length]);

  function draw(ctx, canvas) {
  // Example: Draw a simple glowing circle
  const centerX = canvas.width / 4; // because width is doubled
  const centerY = canvas.height / 4; // same for height
  const radius = 100;

  const gradient = ctx.createRadialGradient(centerX, centerY, radius * 0.3, centerX, centerY, radius);
  gradient.addColorStop(0, 'rgba(0, 255, 195, 0.7)');
  gradient.addColorStop(1, 'rgba(0, 255, 195, 0)');

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fill();
}
  
  

  return (
    <section  id="process" className="relative py-24 lg:px-20 overflow-hidden ">
      <motion.div
        
        className="absolute w-[1000px] h-[1000px]  blur-[120px] rounded-full"
        initial={{ opacity: 0.8, scale: 1 }}
        animate={{ opacity: 1 }}
      />

      <div className="relative container z-10">
        

        <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-left mt-6 max-w-2xl">
          Notre <span className="text-lime-200"> procédé </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* Feature 01 */}
          <FeatureCard
            title="01. Contact"
            description="Entrez en contact avec notre équipe pour partager vos besoins et objectifs. Nous prenons le temps de comprendre vos priorités afin de définir ensemble les premières étapes clés de votre projet en intelligence artificielle."
            className="col-span-2 lg:col-span-1 group "
          >
            <div className="aspect-video w-full flex flex-col items-center justify-center gap-4">
              <div className="bg-neutral-900 p-4 rounded-xl border border-neutral-800 w-full max-w-xs space-y-4">
                {/* Toggle interactif */}
                <div className="flex items-center gap-4 justify-center">
                  <button
                    onClick={() => setIsOn(!isOn)}
                    className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                      isOn ? "bg-lime-400/20" : "bg-neutral-700"
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 ${
                        isOn
                          ? "bg-lime-400 translate-x-8"
                          : "bg-neutral-500 translate-x-0"
                      }`}
                    />
                  </button>
                  <span
                    className={`text-sm font-semibold ${
                      isOn ? "text-lime-400" : "text-neutral-400"
                    }`}
                  >
                    {isOn ? "On" : "Off"}
                  </span>
                  <span className="text-white font-medium">Abonnement</span>
                </div>

                {/* Sélecteurs Basique / Pro / Devis */}
                <div className="flex justify-center gap-2">
                  {["Basique", "Pro", "Devis"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setSelectedOption(option)}
                      className={`text-sm px-4 py-1.5 rounded-full transition font-medium ${
                        selectedOption === option
                          ? "bg-green-800/40 text-white"
                          : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Feature 02 */}
          <FeatureCard
            title="02. Consulting"
            description="Nous identifions vos enjeux stratégiques et opérationnels pour déterminer comment l’intelligence artificielle peut répondre à vos besoins. Cette étape permet de poser les bases d’une transformation réussie."
            className="col-span-2 lg:col-span-1 group"
          >
              <div className="aspect-video flex flex-col justify-center relative overflow-hidden rounded-xl border border-neutral-800 p-4 bg-neutral-900 gap-4">
                <motion.div
                  className="flex gap-3 w-max"
                  animate={{
                    x: ["0%", "-100%", "0%"], // défile de gauche vers droite
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...icons, ...icons].map((icon, i) => ( // on double pour un défilement fluide
                    <div
                      key={`line1-${i}`}
                      className="w-16 h-16 flex items-center justify-center rounded-lg bg-neutral-700 shrink-0"
                    >
                      <img src={icon} alt={`icon-${i}`} width={40} height={40} />
                    </div>
                  ))}
                </motion.div>

   
                <motion.div
                  className="flex gap-3 w-max"
                  animate={{
                    x: ["0%", "50%", "0%"], // défile de droite vers gauche
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                {[...icons, ...icons].map((icon, i) => ( // on double pour un défilement fluide
                  <div
                    key={`line2-${i}`}
                    className="w-16 h-16 flex items-center justify-center rounded-lg bg-neutral-700 shrink-0"
                  >
                      <img src={icon} alt={`icon-${i}`} width={40} height={40} />
                  </div>
                ))}
                </motion.div>
              </div>
          </FeatureCard>

          <FeatureCard
            title="03. Formation"
            description="Nous formons les décideurs clés de votre organisation pour leur donner les outils et les connaissances nécessaires afin d’intégrer efficacement l’IA dans leur stratégie."
            className="col-span-2 lg:col-span-1  group custom-cursor"
          >
              <div className="aspect-video relative rounded-xl border border-neutral-800 p-4 bg-neutral-900 overflow-hidden">
                <div className="text-sm font-mono text-neutral-400 leading-relaxed h-full animate-slide-up">
                  <code>
                    import React from 'react';<br />
                    import {'{ Header, Footer, FeatureSection }'} from 'nebula-template';<br />
                    const App = () =&gt; {'{'} <br />
                    &nbsp;&nbsp;return ( <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;FeatureSection /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Footer /&gt;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
                    &nbsp;&nbsp;); <br />
                    {'}'}<br />
                    export default App;
                  </code>
                  
                </div>
              </div>
   
          </FeatureCard>
        


          <FeatureCard
            title="04. Intégration & Développement"
            description="Nous développons et intégrons des solutions IA sur mesure pour automatiser vos processus et maximiser votre performance."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video w-full rounded-xl border border-neutral-800 bg-neutral-900 p-6 flex flex-col justify-center gap-4">
              {/* Barre: Rapidité */}
              <div>
                <p className="text-sm text-neutral-400 mb-1">Rapidité</p>
                <div className="w-full h-3 rounded-full bg-neutral-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-lime-200 to-transparent"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Barre: Sécurité */}
              <div>
                <p className="text-sm text-neutral-400 mb-1">Sécurité</p>
                <div className="w-full h-3 rounded-full bg-neutral-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-lime-200 to-transparent"
                    initial={{ width: "0%" }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Barre: Précision */}
              <div>
                <p className="text-sm text-neutral-400 mb-1">Précision</p>
                <div className="relative w-full h-3 rounded-full bg-neutral-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-lime-200 to-transparent"
                    initial={{ width: "0%" }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                  <motion.span
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-lime-300 shadow-lg"
                  initial={{ left: "0%" }}
                  animate={{ left: "95%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </FeatureCard>
          
          <FeatureCard
            title="05. Devenez Leader en IA"
            description="Avec des équipes formées, des outils IA intégrés et des solutions développés sur-mesure vous êtes prêt à devenir un leader dans votre industrie."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video relative rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden flex items-center justify-center">
              <div style={{ width: 'full', height: '100vh' }}>
                <MaskedCanvasContainer src="/images/orb.mp4" />
              </div>
            </div>
          </FeatureCard>

        </div>

        {/* Feature tags */}
        
      </div>
    </section>
  );
}
