import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/project-images/book_bug/img_1.jpg";
import img2 from "../../assets/project-images/book_bug/img_2.jpg";
import img3 from "../../assets/project-images/book_bug/img_3.jpg";
import img4 from "../../assets/project-images/book_bug/img_4.jpg";

const BookBug = () => {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden min-h-screen py-4">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold text-gradient">BookBug</h1>
            <div className="mb-6">
              <p className="py-6 leading-tight">
                This is library management site where you can find a vast
                collection of books of your taste and category. You can also
                borrow books, review books and return books whenever you want.
              </p>
              <div className="flex flex-col md:flex-row justify-around items-start gap-6 md:gap-12">
                <ul className="list-none text-left">
                  <p className="text-gradient">Key Features: </p>
                  <li className="leading-tight text-base">
                    * User authentication, fully responsive site.
                  </li>
                  <li className="leading-tight text-base">
                    * you can borrow books, review books and return books.
                  </li>
                  <li className="leading-tight text-base">
                    * You can also add new book and also add new category too.
                  </li>
                </ul>

                <ul className="list-none text-left">
                  <p className="text-gradient">Technology Used: </p>
                  <li className="leading-tight text-base">
                    * Backend: Python, Django
                  </li>
                  <li className="leading-tight text-base">
                    * Frontend: Django MVT, TailwindCSS
                  </li>
                  <li className="leading-tight text-base">
                    * Database: sqlite3, onRender
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-around items-center gap-8">
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://github.com/sayed8901/library_management_project/tree/main/core"
                  className="cursor-pointer leading-tight"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gradient">Front-end</span> code link
                </a>
                <a
                  href="https://library-management-project-ofav.onrender.com"
                  className="button btn-sm xl:btn-lg flex items-center justify-center w-32"
                  rel="noreferrer"
                  target="_blank"
                >
                  Go Live
                </a>
                <a
                  href="https://github.com/sayed8901/library_management_project"
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

export default BookBug;
