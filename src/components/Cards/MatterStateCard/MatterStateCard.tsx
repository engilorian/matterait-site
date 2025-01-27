"use client";

import React from "react";
import Link from "next/link";
import { motion, useAnimation, Variants } from "framer-motion";


interface CategoryProps {
  name: string;
  icon: string;
  description: string;
  link: string;
  className?: string;
}

const stateStyles: Record<string, string> = {
  Solid: "hover:border-slate-500 hover:bg-slate-50",
  Liquid: "hover:border-blue-500 hover:bg-blue-50",
  Gas: "hover:border-yellow-500 hover:bg-yellow-50",
  Plasma: "hover:border-red-500 hover:bg-red-50",
  default: "hover:border-emerald-500 hover:bg-emerald-50",
};

const stateGradients: Record<string, string> = {
  Solid: "linear-gradient(270deg, #bfbfbf, #f2f2f2, #bfbfbf)",
  Liquid: "linear-gradient(270deg, #88BFFF, #C0E2FF, #88BFFF)",
  Gas: "linear-gradient(270deg, rgba(255, 211, 100, 0.7), rgba(255, 234, 182, 0.7), rgba(255, 211, 100, 0.7))",
  Plasma: "linear-gradient(270deg, #FF6C6C, #FFC9C9, #FF6C6C)",
  default: "linear-gradient(270deg, #78DAB6, #C2F2E9, #78DAB6)",
};

const gradientVariants: Variants = {
  idle: {
    backgroundPosition: "0% 50%",
    transition: { duration: 0.3 },
  },
  hover: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const shapeVariants: Variants = {
  SolidIdle: {
    borderRadius: "8px",
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  SolidHover: {
    borderRadius: "8px",
    scale: 1,
    transition: { duration: 0.3 },
  },

  LiquidIdle: {
    borderRadius: "50%",
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  LiquidHover: {
    borderRadius: [
      "40% 60% 60% 40% / 40% 40% 60% 60%",
      "60% 40% 40% 60% / 60% 60% 40% 40%",
      "40% 60% 60% 40% / 40% 40% 60% 60%",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },

  GasIdle: {
    borderRadius: "50%",
    scale: 1,
    opacity: 0.7,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  GasHover: {
    borderRadius: [
      "40% 60% 60% 40% / 40% 40% 60% 60%",
      "60% 40% 40% 60% / 60% 60% 40% 40%",
      "40% 60% 60% 40% / 40% 40% 60% 60%",
    ],
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    x: [0, 10, -10, 0],
    y: [0, -10, 10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  GasHoverOut: {
    borderRadius: "50%",
    scale: 1,
    opacity: 0.7,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },

  PlasmaIdle: {
    borderRadius: "50%",
    scale: 1,
    opacity: 1,
    filter: "blur(3px)",
    transition: { duration: 0.3 },
  },
  PlasmaHover: {
    borderRadius: "50%",
    scale: 1,
    opacity: [0.5, 0.9, 0.5],
    filter: "blur(3px)",
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },

  defaultIdle: {
    borderRadius: "50%",
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  defaultHover: {
    borderRadius: "50%",
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

const floatingVariants: Variants = {
  idle: {
    y: 0,
    transition: { duration: 0.3 },
  },
  hover: {
    y: [0, -15, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const titleVariants: Variants = {
  idle: {
    scale: 1,
    transition: { duration: 0.3 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },
};

function getIdleVariant(name: string) {
  switch (name) {
    case "Solid":
      return "SolidIdle";
    case "Liquid":
      return "LiquidIdle";
    case "Gas":
      return "GasIdle";
    case "Plasma":
      return "PlasmaIdle";
    default:
      return "defaultIdle";
  }
}

function getHoverVariant(name: string) {
  switch (name) {
    case "Solid":
      return "SolidHover";
    case "Liquid":
      return "LiquidHover";
    case "Gas":
      return "GasHover";
    case "Plasma":
      return "PlasmaHover";
    default:
      return "defaultHover";
  }
}

const MatterStateCard: React.FC<CategoryProps> = ({
  name,
  description,
  link,
  className = "",
}) => {
  const shapeControls = useAnimation();
  const gradientControls = useAnimation();
  const floatingControls = useAnimation();
  const titleControls = useAnimation();

  const accentClasses = stateStyles[name] || stateStyles.default;
  const activeGradient = stateGradients[name] || stateGradients.default;

  React.useEffect(() => {
    shapeControls.set(getIdleVariant(name));
    gradientControls.set("idle");
    floatingControls.set("idle");
    titleControls.set("idle");
  }, [name, shapeControls, gradientControls, floatingControls, titleControls]);

  return (
    <Link href={link}>
      <motion.div
        className={`
          group relative flex flex-col justify-center items-center
          bg-white border-2 text-center
          ${accentClasses}
          ${className}
        `}
        onHoverStart={() => {
          shapeControls.start(getHoverVariant(name));
          gradientControls.start("hover");
          floatingControls.start("hover");
          titleControls.start("hover");
        }}
        onHoverEnd={() => {
          if (name === "Gas") {
            shapeControls.start("GasHoverOut").then(() => {
              shapeControls.start("GasIdle");
            });
          } else {
            shapeControls.start(getIdleVariant(name));
          }
          gradientControls.start("idle");
          floatingControls.start("idle");
          titleControls.start("idle");
        }}
      >
        <motion.div
          variants={floatingVariants}
          animate={floatingControls}
          className="w-16 h-16 mb-4"
        >
          <motion.div
            className="w-full h-full"
            style={{
              background: activeGradient,
              backgroundSize: "600% 600%",
            }}
            variants={shapeVariants}
            animate={shapeControls}
          >
            <motion.div
              className="w-full h-full rounded-full"
              variants={gradientVariants}
              animate={gradientControls}
              style={{
                opacity: name === "Gas" ? 0.5 : 1,
              }}
            />
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-2xl font-main font-semibold group-hover:text-current"
          variants={titleVariants}
          animate={titleControls}
        >
          {name}
        </motion.h2>

        <p className="text-sm text-gray-700 font-secondary transition-colors duration-200 group-hover:text-gray-800 line-clamp-3">
          {description}
        </p>
      </motion.div>
    </Link>
  );
};

export default MatterStateCard;
