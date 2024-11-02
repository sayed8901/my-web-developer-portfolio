import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/project-images/bd_job_portal/img_1.jpg";
import img2 from "../../assets/project-images/bd_job_portal/img_2.jpg";
import img3 from "../../assets/project-images/bd_job_portal/img_3.jpg";
import img4 from "../../assets/project-images/bd_job_portal/img_4.jpg";

const BDJobPortal = () => {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden min-h-screen py-4">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold text-gradient">BD Job Portal</h1>
            <div className="mb-6">
              <p className="py-6 leading-tight">
                This is a django DRF based fully responsive job portal site,
                where employers can publish job posts and job seekers can apply
                to these posts.
              </p>
              <div className="flex flex-col md:flex-row justify-around items-start gap-6 md:gap-12">
                <ul className="list-none text-left">
                  <p className="text-gradient">Key Features: </p>
                  <li className="leading-tight text-base">
                    * Multiple user authentication, fully responsive.
                  </li>
                  <li className="leading-tight text-base">
                    * Employer can publish job advertisement post, Also can make
                    Payment.
                  </li>
                  <li className="leading-tight text-base">
                    * And, job-seekers can apply to those job posts
                  </li>
                </ul>

                <ul className="list-none text-left">
                  <p className="text-gradient">Technology Used: </p>
                  <li className="leading-tight text-base">
                    * Backend: Python, Django, DRF
                  </li>
                  <li className="leading-tight text-base">
                    * Frontend: JavaScript, ReactJS, TailwindCSS
                  </li>
                  <li className="leading-tight text-base">
                    * Database: PostgreSQL, Supabase
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-around items-center gap-8">
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://github.com/sayed8901/job_portal_react_project_frontend"
                  className="cursor-pointer leading-tight"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gradient">Front-end</span> code link
                </a>
                <a
                  href="https://bd-job-portal.netlify.app"
                  className="button btn-sm xl:btn-lg flex items-center justify-center w-32"
                  rel="noreferrer"
                  target="_blank"
                >
                  Go Live
                </a>
                <a
                  href="https://github.com/sayed8901/job_portal_system_backend"
                  className="cursor-pointer leading-tight"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gradient">Back-end</span> code link
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

export default BDJobPortal;
