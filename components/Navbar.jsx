import { Link } from "react-scroll";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 70) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed bg-[#181818] shadow-lg w-full h-16 z-[100] ease-in-out duration-300"
          : "fixed bg-[#181818] w-full h-16 z-[100] ease-in-out duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-8">
        <Link smooth={true} to="home">
          <span className="text-xl font-bold tracking-widest">Kungs.</span>
        </Link>
        <div>
          <ul className="hidden md:flex space-x-10 text-xs font-semibold tracking-wider">
            <li className="hover:text-[#5651e5] ease-in-out duration-300">
              <Link smooth={true} to="home">
                Home
              </Link>
            </li>
            <li className="hover:text-[#5651e5] ease-in-out duration-300">
              <Link smooth={true} to="about">
                About
              </Link>
            </li>
            <li className="hover:text-[#5651e5] ease-in-out duration-300">
              <Link smooth={true} to="skills">
                Skills
              </Link>
            </li>
            <li className="hover:text-[#5651e5] ease-in-out duration-300">
              <Link smooth={true} to="/">
                Projects
              </Link>
            </li>
            <li className="hover:text-[#5651e5] ease-in-out duration-300">
              <Link smooth={true} to="/">
                Contact
              </Link>
            </li>
          </ul>
          <div className={nav ? "hidden" : "md:hidden cursor-pointer"}>
            <AiOutlineMenu onClick={handleNav} size={20} />
          </div>
        </div>
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen ease-linear duration-500 bg-black/70"
            : "ease-linear duration-500 md:hidden fixed h-screen"
        }
      >
        <div
          className={
            nav
              ? "fixed top-0 left-0 w-[70%] sm:w-[55%] md:w-[40%] h-screen bg-[#181818] p-10 ease-linear duration-500"
              : "fixed top-0 left-[-100%] w-[70%] sm:w-[55%] md:w-[40%] h-screen bg-[#181818] ease-linear duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <span className="text-xl font-bold tracking-widest">Kungs.</span>
            <div className="cursor-pointer">
              <AiOutlineClose onClick={handleNav} size={20} />
            </div>
          </div>
          <div className="pt-10 flex flex-col">
            <ul className="space-y-8 text-sm text-center font-semibold tracking-wider">
              <li className="hover:text-[#5651e5] ease-in-out duration-300">
                <Link onClick={() => setNav(false)} smooth={true} to="home">
                  Home
                </Link>
              </li>
              <li className="hover:text-[#5651e5] ease-in-out duration-300">
                <Link onClick={() => setNav(false)} smooth={true} to="about">
                  About
                </Link>
              </li>
              <li className="hover:text-[#5651e5] ease-in-out duration-300">
                <Link onClick={() => setNav(false)} smooth={true} to="skills">
                  Skills
                </Link>
              </li>
              <li className="hover:text-[#5651e5] ease-in-out duration-300">
                <Link smooth={true} to="/">
                  Projects
                </Link>
              </li>
              <li className="hover:text-[#5651e5] ease-in-out duration-300">
                <Link smooth={true} to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
