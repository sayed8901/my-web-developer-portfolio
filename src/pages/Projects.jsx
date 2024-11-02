// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

// images
import summer_champ_cover from "../assets/project-images/summer_champ/cover_img.jpg";
import hr_corp_cover from "../assets/project-images/hr_corp/cover_img.jpg";
import bd_job_portal_cover from "../assets/project-images/bd_job_portal/cover_img.jpg";
import easy_shop_cover from "../assets/project-images/easy_shop/cover_img.jpg";
import book_bug_cover from "../assets/project-images/book_bug/cover_img.jpg";

import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section
      className="min-h-screen hero pt-16 flex items-center"
      name="projects"
    >
      <div>
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center"
        >
          <h2 className="h2 text-accent mb-8">
            Latest <span className="text-gradient">Works</span>
          </h2>
        </motion.div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-4 md:gap-y-6 lg:gap-y-8 lg:mt-12">
          {/* Section info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-center md:text-left"
          >
            <p className="mb-4 lg:mb-6 text-sm md:text-lg xl:text-xl leading-none lg:leading-tight">
              I am always enthusiastic about learning new tech and also try to
              implement them my recent projects. <br /> You can check out my
              latest works.
            </p>

            <a
              href="https://github.com/sayed8901?tab=repositories"
              className="button btn-sm xl:btn-lg flex items-center justify-center w-56 mx-auto md:mx-0"
              rel="noreferrer"
              target="_blank"
            >
              View All Projects
            </a>
          </motion.div>

          {/* project 1 : HRCorp */}
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
              src={hr_corp_cover}
              alt=""
            />

            <div>
              <div>
                {/* pre-title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                  <span className="text-gradient">HRCorp ERP</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                  <span className="text-sm xl:text-xl text-white">
                    A complete HR management solution.
                  </span>
                </div>
              </div>
              <Link
                to={"hr_corp"}
                className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* project 2 : BD Job Portal */}
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
              src={bd_job_portal_cover}
              alt=""
            />

            <div>
              <div>
                {/* pre-title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                  <span className="text-gradient">BD Job Portal</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                  <span className="text-sm xl:text-xl text-white">
                    A job portal site with many job posts.
                  </span>
                </div>
              </div>
              <Link
                to={"bd_job_portal"}
                className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* project 3 : summer champ */}
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
              src={summer_champ_cover}
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
                  <span className="text-sm xl:text-xl text-white">
                    A school sports summer camping site.
                  </span>
                </div>
              </div>
              <Link
                to={"summer_champ"}
                className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* project 4 : book bug library management site */}
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
              src={book_bug_cover}
              alt=""
            />

            <div>
              <div>
                {/* pre-title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                  <span className="text-gradient">BookBug</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                  <span className="text-sm xl:text-xl text-white">
                    A complete library management site.
                  </span>
                </div>
              </div>
              <Link
                to={"book_bug"}
                className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>

          {/* project 5 : easy shop */}
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
              src={easy_shop_cover}
              alt=""
            />

            <div>
              <div>
                {/* pre-title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-20">
                  <span className="text-gradient">Easy Shop</span>
                </div>
                {/* title */}
                <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-20">
                  <span className="text-sm xl:text-xl text-white">
                    An e-commerce shopping site.
                  </span>
                </div>
              </div>
              <Link
                to={"easy_shop"}
                className="absolute -bottom-full right-12 group-hover:bottom-4 transition-all duration-500 z-50 button btn-sm"
              >
                View Details
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
