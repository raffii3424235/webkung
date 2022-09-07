import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
const img = "/../public/img1.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex justify-between items-center py-16"
    >
      <div className="max-w-7xl m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 pb-4">
          <p className="font-semibold tracking-widest">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-slate-100 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            fugiat adipisci velit illo consectetur, qui mollitia numquam quos
            veniam iste eos vitae nobis quibusdam. Dolores doloribus nostrum
            eius possimus optio? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis fugiat adipisci velit illo consectetur,
            qui mollitia numquam quos veniam iste eos vitae nobis quibusdam.
            Dolores doloribus nostrum eius possimus optio?
          </p>
          <p className="py-2 text-slate-100 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            fugiat adipisci velit illo consectetur, qui mollitia numquam quos
            veniam iste eos vitae nobis quibusdam. Dolores doloribus nostrum
            eius possimus optio? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis fugiat adipisci velit illo consectetur,
            qui mollitia numquam quos veniam iste eos vitae nobis quibusdam.
            Dolores doloribus nostrum eius possimus optio?
          </p>
          <Link smooth={true} to="projects">
            <p className="text-[#5651e5] py-2 underline cursor-pointer font-semibold">
              Check Out Some Projects
            </p>
          </Link>
        </div>
        {/* <div className="bg-[#0f0f0f] hover:shadow-xl rounded-lg shadow-lg hover:shadow-black/50 shadow-black/70 flex items-center justify-center px-4 pt-4 hover:scale-105 ease-in duration-300">
          <Image
            className="hover:scale-105 ease-in duration-200"
            src={img}
            width={300}
            height={450}
            alt="/"
          />
        </div> */}
      </div>
    </div>
  );
};

export default About;
