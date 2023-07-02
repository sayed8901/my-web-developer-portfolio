import { FaBars, FaTimes } from "React-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="container mx-auto w-full flex flex-row justify-between items-center fixed top-4 z-50">
      {/* logo */}
      <div>
        <h1 className="text-[30px] font-bold leading-[0.8]">
          <span className="text-gradient">Sayed</span> Hossain
        </h1>
      </div>

      {/* Nav menu */}
      <div>
        <ul className="hidden md:flex">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200"
            >
              {/* for react smooth scroll */}
              <Link to={navItem.link} smooth duration={500}>
                {navItem.link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer z-10 text-gray-300 md:hidden mr-2"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Nav manus for mobile device */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-transparent backdrop-blur-3xl text-gray-300">
            {navItems.map((navItem) => (
              <li
                key={navItem.id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {/* for react smooth scroll */}
                <Link
                  onClick={() => setNav(!nav)}
                  to={navItem.link}
                  smooth
                  duration={500}
                >
                  {navItem.link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
