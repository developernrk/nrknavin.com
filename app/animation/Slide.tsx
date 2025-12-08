"use client";
import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Slide = ({ children, className, delay }: props) => {
  return (
    <motion.div
      variants={{
        start: { opacity: 0, translateY: 10 },
        stop: { opacity: 1, translateY: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
        delay: delay || 0,
      }}
      initial="start"
      animate="stop"
      className={className}
    >
      {children}
    </motion.div>
  );
};
