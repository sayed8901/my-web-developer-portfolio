// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

// images
import Img1 from "../assets/Project-1-Summer-Champ.jpg";
import Img2 from "../assets/Project-2-ToyDoll-FairyWorld.jpg";
import Img3 from "../assets/Project-3-BD-Chef_RecipeWorld.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      className="min-h-screen flex items-center mt-4 lg:mt-8"
      name="projects"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2 lg:mt-12">
        {/* Section info */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-8 text-center md:text-left"
        >
          <h2 className="h2 text-accent">
            Latest <span className="text-gradient">Works</span>
          </h2>
          <p className="my-4 lg:my-8 text-sm lg:text-xl leading-none lg:leading-normal">
            I am always enthusiastic about learning new tech and also try to
            implement them in my recent projects.{" "}
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=100010385951866"
            className="button btn-sm xl:btn-lg flex items-center justify-center w-44"
            rel="noreferrer"
            target="_blank"
          >
            View All Projects
          </a>
        </motion.div>

        {/* project 1 */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          {/* overlay */}
          <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
          {/* img */}
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img1}
            alt=""
          />

          <div>
            <div>
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                <span className="text-gradient">Summer Champ</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                <span className="text-base lg:text-xl text-white">
                  A summer time school sports camping site.
                </span>
              </div>
            </div>
            <Link
              to={"project1"}
              className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
            >
              View Details
            </Link>
          </div>
        </motion.div>

        {/* project 2 */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          {/* overlay */}
          <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
          {/* img */}
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img2}
            alt=""
          />

          <div>
            <div>
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                <span className="text-gradient">Toy Doll Fairy World</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                <span className="text-base lg:text-xl text-white">
                A website to find lovely toys for kids.
                </span>
              </div>
            </div>
            <Link
              to={"project2"}
              className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
            >
              View Details
            </Link>
          </div>
        </motion.div>

        {/* project 3 */}
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
        >
          {/* overlay */}
          <div className="group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>
          {/* img */}
          <img
            className="group-hover:scale-125 transition-all duration-500"
            src={Img3}
            alt=""
          />

          <div>
            <div>
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                <span className="text-gradient">BD Chef Recipe World</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                <span className="text-base lg:text-xl text-white">
                Promotes our culture & food heritage.
                </span>
              </div>
            </div>
            <Link
              to={"project3"}
              className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
            >
              View Details
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
