import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

// const [decreaseFontSize, setDecreaseFontSize] = useState(false);

// useEffect(() => {
//   const mediaQuery = window.matchMedia("(max-width: 850px)");
//   setDecreaseFontSize(mediaQuery.matches);

//   const handleMediaQueryChange = (event) => {
//     setDecreaseFontSize(event.matches);
//   };

//   mediaQuery.addEventListener("change", handleMediaQueryChange);
// }, []);

const Hero = () => {
  return (
    <section className="relative w-full mx-auto pt-[120px]">
      <div
        className={` ${styles.paddingX} max-w-7xl relative mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex-1">
          <div className="min-[330px]:pr-4">
            <h1 className={`${styles.heroHeadText} min-[330px]:pr-2`}>
              Hi, I'm <span className="text-[#915eff]">Kanwal Kumar</span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-0 text-white-100 relative top-[-10px]`}
            >
              I develop 3D visuals, user interfaces and web applications.
            </p>
          </div>
          <div className="h-[250px]">
            <ComputersCanvas />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-0 z-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
