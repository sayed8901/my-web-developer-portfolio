
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const AnimatedSocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <BsLinkedin size={30} /> LinkedIn
        </>
      ),
      href: "https://www.linkedin.com/in/md-sayed-hossain-24297315a",
      style: "rounded-tl-xl",
    },
    {
      id: 2,
      child: (
        <>
          <BsGithub size={30} /> GitHub
        </>
      ),
      href: "http://github.com/sayed8901",
    },
    {
      id: 4,
      child: (
        <>
          <BsFacebook size={30} /> Facebook
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100010385951866"
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} /> Mail
        </>
      ),
      href: "mailto: sayed91515@gmail.com",
      style: "rounded-bl-xl",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col absolute top-[12%] xl:top-[20%] -left-[76px] z-0">
      <ul>
        {links.map(({id, child, href, style}) => (
          <li
            key={id}
            className={"flex justify-between items-center w-44 h-14 px-4 glass hover:ml-[-70px] hover:rounded-xl duration-300" + " " + style}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full mr-4 text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimatedSocialLinks;
