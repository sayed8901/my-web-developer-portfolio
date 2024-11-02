// images
// import Image from "../assets/avatar.svg";
import Image from "../assets/Hero-image 2.jpg";


// typing animation
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";

// variants    // used for scroll animation
import { fadeIn } from "../variants";
import AnimatedSocialLinks from "../components/AnimatedSocialLinks";


// importing resume from public folder
import resume from "/resume.pdf";

import { Link } from "react-scroll";
import SocialLinks from "../components/SocialLinks";



const Banner = () => {
  return (
    <section
      className="min-h-screen flex items-center mt-4 lg:mt-8"
      name="intro"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 md:gap-x-12 items-center">
        {/* text */}
        <div className="md:col-span-2 text-center font-secondary md:text-left">
          <motion.h1
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[40px] font-bold leading-[0.8] md:text-[55px] xl:text-[90px]"
          >
            <span className="text-gradient font-secondary">Md. Sayed</span>{" "}
            Hossain
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-2 lg:mb-6 text-[28px] md:text-[36px] xl:text-[56px] font-secondary font-semibold uppercase leading-[2]"
          >
            <span className="text-white mr-2">I am a </span>
            <TypeAnimation
              sequence={[
                "Developer ",
                2000,
                "Designer ",
                2000,
                "Programmer ",
                2000,
                "Software Engineer ",
                2000,
              ]}
              speed={50}
              wrapper="span"
              repeat={Infinity}
              className="text-accent"
            />
          </motion.div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="leading-tight mb-2 lg:mb-8 max-w-2xl mx-auto md:mx-0 lg:max-w-lg xl:max-w-xl text-base sm:text-sm lg:text-xl"
          >
            Hello! I am Sayed from Narayanganj. I have a deep passion for
            software engineering sector. It gives me much thrill & allows me to
            apply my creativity throughout my work.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mx-auto md:mx-0 my-4 xl:my-8"
          >
            <a
              className="button btn-sm xl:btn-lg flex items-center justify-center"
              href={resume}
              download={true}
            >
              Download Resume
            </a>
            <Link
              to="projects"
              smooth
              duration={500}
              className="text-gradient cursor-pointer"
            >
              My Portfolio
            </Link>
          </motion.div>

          {/* socials */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:hidden"
          >
            <SocialLinks></SocialLinks>
          </motion.div>
        </div>

        {/* image with socials */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="relative"
        >
          <div className="flex">
            <img
              src={Image}
              className="w-48 mt-16 sm:mt-0 sm:w-96 rounded-3xl mx-auto z-20"
              alt=""
            />
          </div>
          <AnimatedSocialLinks></AnimatedSocialLinks>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
