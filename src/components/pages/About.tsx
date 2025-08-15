import { Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-16"
    >
      {/* Left - Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/1730114339838.png"
          alt="Profile"
          width={400}
          height={400}
          className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
        />
      </div>

      {/* Right - Text */}
      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed mb-4 ">
          I’m <span className="font-semibold text-blue-500">Abdellah</span>, 26
          years old, and working as a{" "}
          <span className="font-semibold">freelance developer</span>. I build
          modern, responsive, and user-friendly products for web, mobile, and
          desktop.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            "Front-End Development",
            "Back-End Development",
            "Full Stack",
            "Mobile Apps",
            "Desktop Apps",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 hover:bg-white/50 transition-colors duration-300 rounded-full text-sm font-medium text-gray-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
          <Link href="" className="rounded-full border-white border-2 p-2 hover:bg-white hover:scale-110  transition-all duration-300">
            {" "}
            <Github />
          </Link>
          <Link href="" className="rounded-full border-white border-2 p-2 hover:bg-white hover:scale-110  transition-all duration-300">
            <Linkedin />
          </Link>
        </div>
        <div className="mt-4">
          <Button variant={"ghost"}  size={'lg'} className="cursor-pointer rounded-4xl hover:bg-white/50"> <Download/><span>Download Resume</span></Button>
        </div>
      </div>
    </section>
  );
};

export default About;
