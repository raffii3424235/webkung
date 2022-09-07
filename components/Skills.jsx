import Image from "next/image";
import React from "react";
import data from "../components/SkillsData";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
        <p className="font-semibold tracking-widest">Skills</p>
        <h2 className="py-4 mb-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {data.map((e, index) => (
            <div
              key={index}
              className="bg-[#5651e5] select-none p-6 shadow-lg rounded-lg hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="mx-auto">
                  <Image src={e.img} width="64" height="64" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{e.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
