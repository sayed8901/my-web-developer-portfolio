import { Link } from "react-router-dom";
import img1 from "../../assets/Project-1.1.jpg";
import img2 from "../../assets/Project-1.2.jpg";
import img3 from "../../assets/Project-1.3.jpg";
import img4 from "../../assets/Project-1.4.jpg";
import Marquee from "react-fast-marquee";

const Project1 = () => {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden min-h-screen">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold text-gradient">Summer Champ</h1>
            <div className="mb-8">
              <p className="py-6">
                This is a summer time school sports camping site. You can check out our special sports events to utilize this summer time at its best.
              </p>
              <p>
                Key Features:
                ** 3 different user options: Students, Admin & Instructor. ** Instructor can post new class. Admin can manage all
                classes & users. ** A student can enroll a class making payment with stripe
              </p>
            </div>

            <div className="flex flex-col justify-around items-center gap-8">
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://github.com/sayed8901/Summer-champ-fullstatck-react-project-client"
                  className="text-gradient cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Front-end code
                </a>
                <a
                  href="https://summer-champ-school-camping.web.app/"
                  className="button btn-sm xl:btn-lg flex items-center justify-center w-32"
                  rel="noreferrer"
                  target="_blank"
                >
                  Go Live
                </a>
                <a
                  href="https://github.com/sayed8901/Summer-champ-fullstatck-react-project-server"
                  className="text-gradient cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Back-end code
                </a>
              </div>
              <Link
                to={"/"}
                className="button btn-sm xl:btn-lg flex items-center justify-center"
              >
                Back to home page
              </Link>
            </div>

            <Marquee speed={150} pauseOnHover={true} className="mt-12">
              <img className="rounded-xl w-96 mr-8" src={img1} />
              <img className="rounded-xl w-96 mr-8" src={img2} />
              <img className="rounded-xl w-96 mr-8" src={img3} />
              <img className="rounded-xl w-96 mr-8" src={img4} />
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
