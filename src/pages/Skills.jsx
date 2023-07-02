import html from "../assets/logo-icons/html.png";
import css from "../assets/logo-icons/css.png";
import javaScript from "../assets/logo-icons/javascript.png";
import reactImage from "../assets/logo-icons/react.png";
import tailwind from "../assets/logo-icons/tailwind.png";
import node from "../assets/logo-icons/node.png";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";


const Skills = () => {
  const skillSet = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-300",
    },
  ];

  return (
    <div
      name="skills"
      className="min-h-screen flex items-center mt-4 lg:mt-8 -mb-8"
    >
      <div className="mx-auto flex flex-col justify-center items-center">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center"
        >
          <h2 className="h2 text-accent">
            My <span className="text-gradient">Skill-set</span>
          </h2>
          <h3 className="h3 mb-12">
            These are some of the technologies I have worked with so far..
          </h3>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full grid grid-cols-2 md:grid-cols-6 lg:grid-cols-3 gap-8 text-center px-12 sm:px-0"
        >
          {skillSet.map((skill) => (
            <div
              key={skill.id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-xl ${skill.style}`}
            >
              <img src={skill.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{skill.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
