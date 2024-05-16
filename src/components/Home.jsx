"use client"
import React from "react";
import { motion } from "framer-motion";

const HomeComponent = () => {
  return (
    <motion.div
     variants={
        {
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
        }
     }
     initial="hidden"
     animate="visible"
     transition={{ duration: 0.5, delay: 0.25 }}
    >
      <h1 className="text-4xl font-bold">Hello World</h1>
    </motion.div>
  );
};

export default HomeComponent;
