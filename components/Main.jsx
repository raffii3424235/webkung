import Link from "next/link";
import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center select-none">
      <div className="max-w-7xl w-full h-full mx-auto p-2 justify-center items-center flex ">
        <div className="space-y-2">
          <p className="uppercase text-sm tracking-widest font-semibold text-slate-300">
            Let&#39;s build something together
          </p>
          <h1>
            Hi, I&#39;m <span className="rgb-text">Kungs</span>
          </h1>
          <h1>A Front-End Web Developer</h1>
          <p className="font-semibold py-4 text-slate-300 m-auto sm:max-w-[70%]">
            I&#39;m foucused on building responsive front-end web application
            while learning back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-xs m-auto p-4">
            <Link href="/">
              <FaLinkedinIn
                className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                size={25}
              />
            </Link>
            <Link href="/">
              <FaGithub
                className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                size={25}
              />
            </Link>
            <Link href="/">
              <FaTiktok
                className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                size={25}
              />
            </Link>
            <Link href="/">
              <FaTwitter
                className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                size={25}
              />
            </Link>
            <Link href="/">
              <FaInstagram
                className="cursor-pointer hover:text-[#5651e5] ease-in-out duration-300"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
