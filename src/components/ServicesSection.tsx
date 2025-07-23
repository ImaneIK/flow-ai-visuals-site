import FramerIcon from "/images/logoAH.png";
import OpenAIcon from "/images/figma.svg";
import AirtableIcon from "/images/figma.svg";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import FeatureCard from "./ui/FeatureCard";
import { ChartBarIcon, MessageCircleMore, UserCircleIcon } from "lucide-react";

const services = [
  "Audit",
  "Conseil",
  "Formations",
  "Solutions",
  "AI solutions",
  "Fast Search",
];

function MovingDotOverlay() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById("chart-container")?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      className="w-full h-full flex items-center justify-center pointer-events-none overflow-hidden rounded-lg"
      style={{
        flex: "none",
        flexShrink: 0,
        imageRendering: "pixelated",
        backgroundSize: "100% 150%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 355 235'>
            <g transform='translate(0 82.859)' id='ss9336997798_1'>
              <g opacity='0.5'>
                <defs>
                  <linearGradient id='idss9336997798_2g1335928327' x1='0.5011' x2='0.4928' y1='0.5776' y2='0'>
                    <stop offset='0' stop-color='rgb(11,11,11)' stop-opacity='1'/>
                    <stop offset='1' stop-color='rgb(0,133,99)' stop-opacity='1'/>
                  </linearGradient>
                </defs>
                <path d='M 0 58.396 C 0 58.396 43.318 17.306 57.901 14.294 C 72.485 11.281 94.815 54.856 118.65 53.985 C 142.485 53.115 161.455 37.323 177.5 34.278 C 193.545 31.233 210.354 57.808 237.3 64.068 C 264.245 70.327 282.772 6.192 295.2 0.935 C 307.629 -4.321 355 14.294 355 14.294 L 355 152.141 L 0 152.141 Z' fill='url(#idss9336997798_2g1335928327)'/>
              </g>
              <path d='M 0 58.253 C 0 58.253 43.318 17.263 57.901 14.259 C 72.485 11.253 94.815 54.722 118.65 53.854 C 142.485 52.984 161.455 37.231 177.5 34.193 C 193.545 31.156 210.354 57.666 237.3 63.91 C 264.245 70.155 282.772 6.176 295.2 0.933 C 307.629 -4.31 355 14.259 355 14.259' fill='transparent' stroke-width='2.06' stroke='rgb(0,133,99)' stroke-linecap='round' stroke-miterlimit='10'/>
              <g opacity='0.5'>
                <defs>
                  <linearGradient id='idss9336997798_4g92413387' x1='0.499' x2='0.5025' y1='0.6835' y2='0'>
                    <stop offset='0' stop-color='rgb(11,11,11)' stop-opacity='1'/>
                    <stop offset='1' stop-color='rgb(211,255,202)' stop-opacity='1'/>
                  </linearGradient>
                </defs>
                <path d='M 0 103.236 C 0 103.236 13.604 97.494 57.901 69.332 C 102.199 41.169 104.263 13.982 118.65 13.982 C 133.037 13.982 156.075 60.043 177.5 60.043 C 198.925 60.043 202.846 31.096 237.3 35.026 C 271.753 38.956 278.441 65.999 295.2 73.467 C 311.96 80.935 355 44.324 355 44.324 L 355 152.141 L 0 152.141 Z' fill='url(#idss9336997798_4g92413387)'/>
              </g>
              <path d='M 0 103.076 C 0 103.076 13.604 97.344 57.901 69.232 C 102.199 41.12 104.263 13.981 118.65 13.981 C 133.037 13.981 156.075 59.96 177.5 59.96 C 198.925 59.96 202.846 31.065 237.3 34.988 C 271.753 38.91 278.441 65.905 295.2 73.36 C 311.96 80.815 355 44.271 355 44.271' fill='transparent' stroke-width='2.06' stroke='rgb(211,255,202)' stroke-linecap='round' stroke-miterlimit='10'/>
            </g>
            <path d='M 236.236 125.333 C 240.514 125.333 243.982 121.826 243.982 117.5 C 243.982 113.174 240.514 109.667 236.236 109.667 C 231.959 109.667 228.491 113.174 228.491 117.5 C 228.491 121.826 231.959 125.333 236.236 125.333 Z' fill='rgba(255,255,255,0.3)'/>
            <path d='M 236.236 122.722 C 239.088 122.722 241.4 120.384 241.4 117.5 C 241.4 114.616 239.088 112.278 236.236 112.278 C 233.385 112.278 231.073 114.616 231.073 117.5 C 231.073 120.384 233.385 122.722 236.236 122.722 Z' fill='rgb(211,255,202)'/>
          </svg>
        `)}")`,
      }}
    >
      {/* <motion.div
        className="absolute w-4 h-4 bg-green-400 rounded-full mix-blend-screen"
        style={{
          translateX: x,
          translateY: y,
        }}
      /> */}
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 lg:px-20">
      <div className="container">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-left mt-6 max-w-2xl">
          Nos <span className="text-lime-200">services </span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <FeatureCard
            title="Audit & conseil "
            description="Notre offre d’audit et de conseil est soigneusement adaptée aux spécificités de votre organisation. Nous réalisons un audit détaillé de vos processus, identifions les opportunités d’amélioration, et livrons des recommandations personnalisées pour intégrer l’IA de manière optimale, durable et alignée avec vos objectifs stratégiques."
            className="relative col-span-2 lg:col-span-1 group"
          >
            <MovingDotOverlay />
          </FeatureCard>

          {/* Feature Card 2 */}
          <FeatureCard
            title="Formations"
            description="Nos formations en IA générative sont conçues pour faciliter son intégration en entreprise. Elles rendent vos équipes opérationnelles rapidement, assurant une adoption efficace au sein de votre organisation."
            className="col-span-2 lg:col-span-1 group"
          >
            <div className="aspect-video flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black/20 border border-white/10 rounded-xl p-4 w-full max-w-md space-y-2"
              >
                {[{ icon: FramerIcon, name: "Framer", desc: "Nouveau formulaire de contact", dot: true },
                  { icon: AirtableIcon, name: "Airtable", desc: "Ajouter données à Airtable" },
                  { icon: OpenAIcon, name: "OpenAI", desc: "Écrire un message personnalisé" },
                ].map((tool, idx, array) => (
                  <div key={idx} className="space-y-2">
                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(58, 89, 63, 0.1)",
                        borderColor: "rgba(84, 135, 121, 0.2)",
                      }}
                      className="flex items-center gap-3 bg-black/30 hover:bg-white/10 p-2 rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-200"
                    >
                      <img src={tool.icon} alt={tool.name} width={24} height={24} className="rounded" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-white text-sm font-medium">{tool.name}</p>
                          {tool.dot && <span className="w-1 h-1 bg-white/50 rounded-full"></span>}
                        </div>
                        <p className="text-white/60 text-xs">{tool.desc}</p>
                      </div>
                    </motion.div>

                    {idx < array.length - 1 && (
                      <motion.div className="flex justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 * idx }}>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-white/50 text-xs"
                          style={{ backgroundColor: "rgba(58, 89, 63, 0.1)", border: "1px solid rgba(84, 135, 121, 0.2)" }}>
                          +
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </FeatureCard>

          {/* Feature Card 3 */}
          <FeatureCard
            title="Solutions IA"
            description="Nous concevons des solutions IA sur mesure : agents intelligents, automatisations, applications personnalisées et systèmes vocaux. Chaque projet est pensé pour s’intégrer naturellement à vos outils et répondre à des enjeux métiers concrets."
            className="col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-auto group relative overflow-hidden"
          >
            <motion.div className="aspect-video flex flex-col items-center justify-center p-6" initial={false} whileHover="hover">
              {/* Default state */}
              <motion.div className="absolute inset-0 p-6 flex flex-col items-center" variants={{ hover: { opacity: 0, y: -20 } }} transition={{ duration: 0.3 }}>
                <div className="w-full max-w-md space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-white/10 p-2 rounded-full"><UserCircleIcon className="w-4 h-4 text-white" /></div>
                    <div className="bg-white/5 rounded-lg p-3 flex-1">
                      <p className="text-white font-medium text-sm">Siena Sinner</p>
                      <p className="text-white/70 text-sm mt-1">Résume ce rapport</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-400/10 p-2 rounded-full"><MessageCircleMore className="w-4 h-4 text-green-400" /></div>
                    <div className="bg-white/5 rounded-lg p-3 flex-1">
                      <p className="text-white font-medium text-sm">AI assistant</p>
                      <p className="text-white/70 text-sm mt-1">Bien sûr, voici un résumé:</p>
                    </div>
                  </div>

                  <motion.div className="flex items-center gap-1 pl-11" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 1.5 }}>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Hover state */}
              <motion.div className="absolute inset-0 p-6 flex flex-col bg-gradient-to-br from-white/5 to-black/20" variants={{ hover: { opacity: 1, y: 0 } }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.3, delay: 0.1 }}>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                    <h3 className="text-white font-medium">AI assistant</h3>
                  </div>
                  <div className="text-white/80 text-sm space-y-3">
                    <p>Bien sûr, voici un résumé:</p>
                    <p className="italic bg-white/5 p-3 rounded-lg">Quokka BV experienced a 15% increase in revenue to €120 million from the previous year's...</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Posez votre question..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white/80 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 pr-10"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
