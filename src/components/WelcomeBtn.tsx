"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
const WelcomeBtn = () => {
  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.1 }}>
      <Button
        variant="secondary"
        size="lg"
        className=" text-gray-700  transition-colors duration-300 cursor-pointer rounded-2xl bg-white hover:bg-white/50"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default WelcomeBtn;
