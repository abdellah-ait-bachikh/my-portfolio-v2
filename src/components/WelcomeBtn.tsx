"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowBigDown, ArrowDown } from "lucide-react";
const WelcomeBtn = () => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <Button
        variant="secondary"
        size="lg"
        className=" text-gray-700  transition-colors duration-300 cursor-pointer rounded-2xl bg-white hover:bg-white/50 flex items-center gap-2"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
       <span>Get Started</span>  <ArrowDown/>
      </Button>
    </motion.div>
  );
};

export default WelcomeBtn;
