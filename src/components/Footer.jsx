import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

// motion
import { motion } from "framer-motion";

// variants    // used for scroll animation
import { fadeIn } from "../variants";

const Footer = () => {
  return (
    <footer
      className={`grid grid-cols-3 items-center justify-between gap-4 sm:gap-12 text-center sticky top-[100vh] mb-4 mt-8`}
    >
      <div className="items-center">
        <div className="flex items-center justify-center mx-auto">
          <Link
            to="intro"
            smooth
            duration={500}
            className="mx-auto normal-case text-base md:text-2xl xl:text-3xl font-bold text-gradient mb-4 cursor-pointer"
          >
            Portfolio_Intro
          </Link>
        </div>
        <p className="mx-auto text-sm">
          <b>Copyright © Sayed.</b>
          <br /> All right reserved.
        </p>
      </div>

      <div className="items-center">
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

      <div className="items-center">
        <p className="footer-title mx-auto mb-2">Contact</p>
        <div className="text-center text-sm lg:text-base">
          <p>sayed91515@gmail.com</p>
          <p>01915158901</p>
          <p>Narayanganj_Dhaka.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
