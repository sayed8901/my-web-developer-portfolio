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
    <section className="min-h-screen flex items-center mt-4 lg:mt-8" name="about" ref={ref}>
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
            <h2 className="h2 text-accent">
              <span className="text-gradient">About</span> me
            </h2>
            <h3 className="h3 mb-4">I have completed more than 20 projects.</h3>
            <p className="mb-6 lg:mb-12 leading-normal">
              Among them, I have made some e-commerce sites, a job portal, a
              newspaper site, some portfolio sites, and many more.
            </p>

            {/* stats */}
            <div className="flex gap-x-6 md:gap-x-10">
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={50} duration={4} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Tasks <br /> Done
                </div>
              </div>
              <div>
                <div className="text-[40px] font-secondary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={5} /> : null}+
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
