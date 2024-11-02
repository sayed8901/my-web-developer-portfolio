import html from "../assets/logo-icons/html.png";
import css from "../assets/logo-icons/css.png";
import javaScript from "../assets/logo-icons/javascript.png";
import react from "../assets/logo-icons/react.png";
import tailwind from "../assets/logo-icons/tailwind.png";
import node from "../assets/logo-icons/node.png";
import c from "../assets/logo-icons/c.png";
import cpp from "../assets/logo-icons/cpp.png";
import python from "../assets/logo-icons/python.png";
import django from "../assets/logo-icons/django.png";
import postgreSQL from "../assets/logo-icons/postgreSQL.png";
import mongoDB from "../assets/logo-icons/mongoDB.png";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const Skills = () => {
  const skillSet = [
    {
      id: 1,
      src: c,
      title: "C",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: django,
      title: "Django",
      style: "shadow-green-600",
    },
    {
      id: 5,
      src: postgreSQL,
      title: "PostgreSQL",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: node,
      title: "Node",
      style: "shadow-green-400",
    },
    {
      id: 7,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 8,
      src: html,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 9,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: javaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 12,
      src: react,
      title: "React",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div name="skills" className="min-h-screen flex items-center py-20">
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
          <p className="font-primary text-sm mb-4 md:mb-8 lg:mb-12">
            These are some of the technologies I have worked with so far..
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full grid grid-cols-3 sm:grid-cols-6 gap-8 text-center px-4 sm:px-12"
        >
          {skillSet.map((skill) => (
            <div
              key={skill.id}
              className={`shadow-md hover:scale-110 duration-500 py-1 lg:py-2 rounded-xl ${skill.style}`}
            >
              <img src={skill.src} alt="" className="w-10 lg:w-20 mx-auto" />
              <p className="mt-2 lg:mt-4">{skill.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
