'use client'
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const ScrollToCenterText: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // scrolls element to vertical center
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="text-3xl text-center my-40 text-blue-600 font-bold"
      initial={{ x: -200, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      Slide In From Left 😎
    </motion.div>
  );
};

export default ScrollToCenterText;
