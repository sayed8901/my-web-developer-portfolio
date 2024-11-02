// motion
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../variants";

const Education = () => {
   const educationData = [
     {
       id: 1,
       title: "Bachelor of Business Administration (BBA) in Management",
       institution: "National University",
       year: "2009 - 2013",
       result: "3.13 out of 4.00",
       style: "shadow-blue-400",
     },
     {
       id: 2,
       title: "Master of Business Administration (MBA) in Management",
       institution: "National University",
       year: "2013 - 2014",
       result: "3.11 out of 4.00",
       style: "shadow-green-600",
     },
   ];

   const coursesData = [
     {
       id: 1,
       title: "CS fundamentals with Phitron",
       institution: "Phitron",
       year: "2023 - 2024",
       result: "Successfully Completed",
       topics: "C, C++, Python, Django, DRF, Data Structure & Algorithms",
       style: "shadow-orange-500",
     },
     {
       id: 2,
       title: "Complete Web Development Course",
       institution: "Programming Hero",
       year: "2022 - 2023",
       result: "Successfully Completed",
       topics: "HTML, CSS, bootstrap, Tailwind, JavaScript, React, NextJS",
       style: "shadow-yellow-500",
     },
   ];

  return (
    <div name="education" className="min-h-screen hero pt-16 flex items-center">
      <div className="w-full xl:w-5/6 mx-auto flex flex-col justify-center items-center">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center"
        >
          <h2 className="h2 text-accent mb-8">
            My <span className="text-gradient">Education</span> &{" "}
            <span className="text-gradient">Courses</span>
          </h2>
          <p className="font-primary text-sm mb-2 sm:mb-4 leading-normal">
            I have completed BBA & MBA in Management. <br /> Furthermore, as I
            have deep quest for software engineering sector, I have also
            completed CS fundamentals & complete web development course.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 justify-center items-center text-center my-4"
        >
          {educationData.map((education) => (
            <div
              key={education.id}
              className={`shadow-md hover:scale-105 duration-500 px-4 sm:px-8 py-2 sm:py-4 rounded-xl ${education.style}`}
            >
              <h3 className="text-md leading-tight mb-4">{education.title}</h3>
              <p className="text-sm">
                {education.institution} ({education.year})
              </p>
              <p className="text-sm">{education.result}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 justify-center items-center text-center mt-4"
        >
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`shadow-md hover:scale-105 duration-500 px-4 sm:px-8 py-2 sm:py-4 rounded-xl ${course.style}`}
            >
              <h3 className="text-base text-gradient">{course.title}</h3>
              <p className="text-sm mb-4">
                {course.institution} ({course.year})
              </p>
              <p className="text-sm">{course.result}</p>
              <p className="text-sm">{course.topics}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
