"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CakeShowcase() {
  const images = [
    { src: "/showCase1.png" },
    { src: "/showCase2.png" },
    { src: "/showCase3.png" },
  ];

  const imagesDuplicated = [...images, ...images];

  return (
    <div className="flex flex-col overflow-x-hidden gap-5">
      <div className="overflow-hidden w-full">
        <motion.div
          className="flex w-max"
          animate={{
            x: ["0%", "-50%"],
            transition: {
              ease: "linear",
              duration: 12,
              repeat: Infinity,
            },
          }}
        >
          {imagesDuplicated.map((slide, index) => {
            return (
              <div className="pr-6" key={index}>
                <Image
                  src={slide.src}
                  className="flex-shrink-0 rounded-md"
                  alt=""
                  height={240}
                  width={240}
                  style={{ height: 240, width: "auto" }}
                ></Image>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className="flex w-max"
        animate={{
          x: ["-50%", "0%"],
          transition: {
            ease: "linear",
            duration: 12,
            repeat: Infinity,
          },
        }}
      >
        {imagesDuplicated.map((slide, index) => {
          return (
            <div className="pr-6" key={index}>
              <Image
                src={slide.src}
                className="flex-shrink-0 rounded-md"
                alt=""
                height={240}
                width={240}
                style={{ height: 240, width: "auto" }}
              ></Image>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
