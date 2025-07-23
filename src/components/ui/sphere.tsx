// components/OrbitingShadowSphere.tsx
import { motion } from "framer-motion";

const OrbitingShadowSphere = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 flex items-center justify-center ">
      {/* Rotating multicolor glowing orb */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        className="relative w-56 h-56 rounded-full blur-[6px]"
      >
        {/* Magenta Glow */}
        <div className="absolute inset-0 rounded-full bg-green-800 opacity-70 blur-3xl mix-blend-screen" />

        {/* green Glow */}
        <div
          className="absolute inset-0 rounded-full bg-green-500 opacity-70 blur-3xl mix-blend-screen"
          style={{ transform: "translate(15%, -15%)" }}
        />

        {/* Cyan Glow */}
        <div
          className="absolute inset-0 rounded-full bg-blue-400 opacity-70 blur-3xl mix-blend-screen"
          style={{ transform: "translate(-15%, 15%)" }}
        />

        {/* Core black for contrast */}
        {/* <div className="absolute inset-0 rounded-full bg-black opacity-40 mix-blend-multiply" /> */}

        {/* 🛰️ Bigger, blurrier orbiting shadow */}
        <motion.div
          className="absolute w-14 h-14 bg-black opacity-50 rounded-full blur-2xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{
            transformOrigin: "50% 160%", // adjust orbit distance
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </motion.div>
    </div>
  );
};

export default OrbitingShadowSphere;
