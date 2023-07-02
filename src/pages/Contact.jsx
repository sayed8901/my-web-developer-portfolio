// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div
      name="contact"
      className="min-h-screen flex items-center mt-4 lg:mt-8 pt-16"
    >
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-6 md:gap-x-10 items-center">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-16 sm:mb-0"
        >
          <h2 className="h2 text-accent">
            <span className="text-gradient">Contact</span> Me
          </h2>
          <h3 className="h3">Submit the form below to get in touch with me.</h3>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex justify-center items-center"
        >
          <form
            action="https://getform.io/f/0a752fea-d8cb-41e8-a843-de8d9ff61844"
            method="POST"
            className="flex flex-col w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Enter Your Message"
              className="px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
            ></textarea>

            <div className="flex mx-auto my-4">
            <button className="button btn-sm xl:btn-lg">Lets talk</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
