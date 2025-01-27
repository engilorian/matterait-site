"use client";

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";

import { motion, useAnimation } from "framer-motion";


interface CarouselProps {
  children: React.ReactNode;
  duration?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, duration = 15 }) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [blockWidth, setBlockWidth] = useState<number>(0);
  const controls = useAnimation();

  const measureWidth = () => {
    if (!outerRef.current) return;
    const firstBlock = outerRef.current.querySelector('.carousel-block') as HTMLDivElement;
    if (!firstBlock) return;
    setBlockWidth(firstBlock.offsetWidth);
  };

  useLayoutEffect(() => {
    measureWidth();
  }, [children]);

  useEffect(() => {
    window.addEventListener("resize", measureWidth);
    return () => {
      window.removeEventListener("resize", measureWidth);
    };
  }, [children]);

  useEffect(() => {
    if (blockWidth === 0) return;

    controls.start({
      x: -blockWidth,
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [controls, blockWidth, duration]);

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={outerRef}
        className="flex flex-nowrap"
        animate={controls}
        initial={{ x: 0 }}
      >
        
        <div className="flex flex-nowrap gap-6 carousel-block flex-shrink-0 pr-6">
          {children}
        </div>

        <div className="flex flex-nowrap gap-6 carousel-block flex-shrink-0">
          {children}
        </div>

      </motion.div>
    </div>
  );
};

export default Carousel;
