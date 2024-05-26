import { motion } from "framer-motion";
import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

var isTouchDevice = "ontouchstart" in document.documentElement;

const ServiceCard = ({ isTouchDevice, index, title, icon }) => {
  function motionDiv() {
    return (
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=" cursor-pointer w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-full"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 flex gap-y-0 justify-evenly items-center flex-col h-full"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="uppercase text-white text-[18px] sm:text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    );
  }
  return (
    <>
      {!isTouchDevice ? (
        <Tilt className="sm:w-1/3 min-[1090px]:flex-1 min-[1075px]:flex-2 flex-grow box-border min-[1090px]:h-[280px] h-[180px]">
          {motionDiv()}
        </Tilt>
      ) : (
        motionDiv()
      )}
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="m-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my portfolio! I am a Web Developer with experience in both
        frontend and backend technologies. I build user-friendly websites and
        applications using HTML, CSS, SCSS, JavaScript, jQuery, React.js,
        AJAX.js, Bootstrap, Tailwind CSS, and Chart.js for the frontend. On the
        backend, I work with PHP, MySQL, MongoDB, and Node.js. I enjoy creating
        functional and visually appealing web experiences. Explore my work and
        feel free to get in touch!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-3 sm:gap-10">
        {services.map((service, index) => (
          <ServiceCard
            isTouchDevice={isTouchDevice}
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
