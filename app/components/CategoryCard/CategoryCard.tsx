"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";


interface CategoryProps {
  name: string;
  icon: string;
  description: string;
  link: string;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const CategoryCard: React.FC<CategoryProps> = ({
  name,
  icon,
  description,
  link,
  className = "",
}) => {
  const controls = useAnimation();

  return (
    <Link href={link}>
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={`group relative flex flex-col items-center gap-4 
          rounded-lg border-4 border-black bg-white p-16 text-center shadow 
          transition-transform duration-200 hover:border-blue-500 
          hover:bg-blue-50${className}`}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={controls}
          transition={{ duration: 0.2 }}
          variants={{ initial: { scale: 1 }, hover: { scale: 1.1 } }}
          className="h-16 w-16 flex items-center justify-center text-gray-400 
            group-hover:text-blue-500"
        >
          <Image
            src={icon}
            alt={`${name} icon`}
            width={48}
            height={48}
            className="object-contain"
          />
        </motion.div>

        <motion.h2
          className="text-2xl font-main font-semibold group-hover:text-blue-500"
          initial={{ scale: 1 }}
          animate={controls}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.2 }}
        >
          {name}
        </motion.h2>

        <p
          className="text-sm text-gray-700 font-secondary transition-colors duration-200 
            group-hover:text-gray-800 line-clamp-3"
        >
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
