/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import img1 from "../../assets/project-images/Project-2.1.jpg";
import img2 from "../../assets/project-images/Project-2.2.jpg";
import img3 from "../../assets/project-images/Project-2.3.jpg";
import img4 from "../../assets/project-images/Project-2.4.jpg";
import Marquee from "react-fast-marquee";

const Project2 = () => {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden min-h-screen">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold text-gradient">Toy Doll Fairy World</h1>
            <div className="mb-8">
              <p className="py-6">
                This is a A website to find lovely toys for kids. Here you can find most lovely toys of your dream. Hope you will get pleasure discovering our toys collection.
              </p>
              <p>
                Key Features:
                ** Checkout "Shop by Category" section to find toy dolls by categories. ** You can also “Add a toy” & “update a toy” by filling out a simple form. ** User authentication implemented along with Social logins
              </p>
            </div>

            <div className="flex flex-col justify-around items-center gap-8">
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://github.com/sayed8901/Toy-Doll-FairyWorld-Client"
                  className="text-gradient cursor-pointer"
                  rel="noreferrer"
                  target="_blank"
                >
                  Front-end code
                </a>
                <a
                  href="https://doll-fairy-world-react-crud.web.app"
                  className="button btn-sm xl:btn-lg flex items-center justify-center w-32"
                  rel="noreferrer"
                  target="_blank"
                >
                  Go Live
                </a>
                <a
                  href="https://github.com/sayed8901/Toy-Doll-FairyWorld-Server"
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

export default Project2;
