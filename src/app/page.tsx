"use client";
import LisenToScroll from "@/components/LisenToScroll";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import Projects from "@/components/pages/Projects";
import Skills from "@/components/pages/Skills";

import React from "react";

const RootPage = () => {
  return (
    <div className="relative">
      <LisenToScroll />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default RootPage;
