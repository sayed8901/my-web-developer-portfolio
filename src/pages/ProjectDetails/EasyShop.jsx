import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

import img1 from "../../assets/project-images/easy_shop/img_1.jpg";
import img2 from "../../assets/project-images/easy_shop/img_2.jpg";
import img3 from "../../assets/project-images/easy_shop/img_3.jpg";
import img4 from "../../assets/project-images/easy_shop/img_4.jpg";

const EasyShop = () => {
  return (
    <div className="site-bg-color bg-no-repeat bg-cover overflow-hidden min-h-screen py-4">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold text-gradient">Easy Shop</h1>
            <div className="mb-6">
              <p className="py-6 leading-tight">
                This is a stylish looking e-commerce site for easy shopping
                where you can find your desired products from our vast and
                exclusive collections.
              </p>
              <div className="flex flex-col md:flex-row justify-around items-start gap-6 md:gap-12">
                <ul className="list-none text-left">
                  <p className="text-gradient">Key Features: </p>
                  <li className="leading-tight text-base">
                    * Can checkout our latest & trending categorized products.
                  </li>
                  <li className="leading-tight text-base">
                    * Add to cart system implemented along with storing data in
                    cookies
                  </li>
                  <li className="leading-tight text-base">
                    * Firebase Authentication implemented for log-in purpose
                  </li>
                </ul>

                <ul className="list-none text-left">
                  <p className="text-gradient">Technology Used: </p>
                  <li className="leading-tight text-base">
                    * Backend: NextJS, Firebase, Vercel
                  </li>
                  <li className="leading-tight text-base">
                    * Frontend: NextJS, TailwindCSS, swiperSlider
                  </li>
                  <li className="leading-tight text-base">
                    * Database: mongoDB
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-around items-center gap-8">
              <div className="flex justify-center items-center gap-8">
                <a
                  href="https://github.com/sayed8901/my-easy-nextjs-shop"
                  className="cursor-pointer leading-tight"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gradient">Front-end</span> code link
                </a>
                <a
                  href="https://next-easy-shop.vercel.app/"
                  className="button btn-sm xl:btn-lg flex items-center justify-center w-32"
                  rel="noreferrer"
                  target="_blank"
                >
                  Go Live
                </a>
                <a
                  href="https://github.com/sayed8901/my-easy-nextjs-shop/tree/main/src/backendServices"
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

export default EasyShop;
