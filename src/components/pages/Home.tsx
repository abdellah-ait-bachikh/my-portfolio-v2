import React from "react";
import { Button } from "../ui/button";
import WelcomeBtn from "../WelcomeBtn";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center text-center  px-6"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
        Welcome to My Portfolio
      </h1>
      <p className="max-w-2xl text-lg md:text-xl mb-6 opacity-90 ">
        I'm a passionate developer creating modern and interactive web
        experiences. Let's build something amazing together!
      </p>
      <WelcomeBtn/>
    </section>
  );
};

export default Home;
