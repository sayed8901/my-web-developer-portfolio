// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  const socialData = [
    {
      id: 1,
      title: "Gmail Address",
      data: "sayed91515@gmail.com",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      title: "Contact no (with whatsapp}",
      data: "+8801915158901",
      style: "shadow-green-500",
    },
    {
      id: 3,
      title: "Address",
      data: "Narayanganj, Dhaka, Bangladesh",
      style: "shadow-sky-500",
    },
  ];

  return (
    <div name="contact" className="min-h-screen hero pt-16 sm:w-11/12 mx-auto">
      <div className="mx-auto gap-x-6 md:gap-x-10 items-center">
        <div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center mb-16 sm:mb-0"
          >
            <h2 className="h2 text-accent mb-8">
              <span className="text-gradient">Contact</span> Me
            </h2>

            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 justify-center items-center text-center mb-4 mt-8"
            >
              {socialData.map((social) => (
                <div
                  key={social.id}
                  className={`shadow-md hover:scale-110 duration-500 p-2 sm:p-4 rounded-xl ${social.style}`}
                >
                  <h3 className="text-md leading-tight">
                    {social.title}:{" "}
                    <span className="font-bold">{social.data}</span>
                  </h3>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center my-8">
            {/* socials */}
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <SocialLinks></SocialLinks>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-auto text-center mt-4 md:mt-12 sm:w-5/6"
        >
          <p className="my-2 lg:my-6 text-sm md:text-lg xl:text-xl leading-none lg:leading-tight text-center">
            You can also send me a direct message via email or connect with me
            on social media. Submit the form below to get in touch with me.
          </p>
          <form
            action="https://getform.io/f/0a752fea-d8cb-41e8-a843-de8d9ff61844"
            method="POST"
            className="flex flex-col w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="flex-1 px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="flex-1 px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
              />
            </div>
            <textarea
              name="message"
              rows="2"
              required
              placeholder="Enter Your Message"
              className="mt-4 px-2 bg-transparent border-2 rounded-lg text-white focus:outline-none"
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
