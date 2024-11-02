// image
import Image from "../assets/about-image.jpg";

// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

// countup
import CountUp from "react-countup";

// intersection observer
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section
      className="min-h-screen flex items-center my-20"
      name="about"
      ref={ref}
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-10 items-center">
        {/* img */}
        <motion.div
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img
            src={Image}
            className="h-64 lg:h-96 my-16 sm:my-0 rounded-3xl mx-auto"
            alt=""
          />
        </motion.div>

        {/* text */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:col-span-2"
        >
          <h2 className="h2 text-accent mt-4">
            <span className="text-gradient">About</span> me
          </h2>

          <p className="my-4 lg:my-8 leading-tight text-base sm:text-sm lg:text-xl">
            I have completed MBA in Management. I have a deep passion to start
            my career in the software engineering sector. I have adequate
            knowledge of C, C++, Data structure and Algorithm, Python, Django,
            DRF and some database tools like SQL, postgreSQL, superbase, etc. I
            also have enough knowledge on HTML, CSS, Bootstrap, Tailwind,
            Responsive design, JavaScript, React.js & many more.
            <br />I have completed more than 10 projects. Among them, I have
            created an HR ERP project, a job portal site, a summer school
            camping site, and some others.
          </p>

          {/* stats */}
          <div className="flex gap-x-6 md:gap-x-10">
            <div>
              <div className="text-[40px] font-secondary text-gradient mb-2">
                {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Projects <br /> Completed
              </div>
            </div>
            <div>
              <div className="text-[40px] font-secondary text-gradient mb-2">
                {inView ? <CountUp start={0} end={20} duration={4} /> : null}+
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Tasks <br /> Done
              </div>
            </div>
            <div>
              <div className="text-[40px] font-secondary text-gradient mb-2">
                {inView ? <CountUp start={0} end={15} duration={5} /> : null}+
              </div>
              <div className="font-primary text-sm tracking-[2px]">
                Assignments <br /> Submitted
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
