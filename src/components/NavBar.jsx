import { useState } from "react";
import { Link } from "react-scroll";

// importing resume from public folder
import resume from "/resume.pdf";

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
    <div className="my-container navbar fixed top-0 z-50 rounded-md glass h-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* Nav manus for mobile device */}
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow site-bg-color bg-no-repeat bg-cover overflow-hidden rounded-box w-36"
          >
            {navItems.map((navItem) => (
              <li
                key={navItem.id}
                className="px-4 cursor-pointer capitalize py-3 text-4xl hover:text-gradient"
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
        </div>

        <Link
          to="home"
          smooth
          duration={500}
          className="btn btn-ghost normal-case text-xl ml-[-12px] lg:ml-[-48px]"
        >
          <h1 className="text-[30px] font-bold leading-[0.8]">
            <span className="text-gradient">Sayed</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="hidden md:flex">
          {navItems.map((navItem) => (
            <li
              key={navItem.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-gradient duration-200"
            >
              {/* for react smooth scroll */}
              <Link to={navItem.link} smooth duration={500}>
                {navItem.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="button btn-sm xl:btn-lg flex items-center justify-center mr-16"
          href={resume}
          download={true}
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default NavBar;
