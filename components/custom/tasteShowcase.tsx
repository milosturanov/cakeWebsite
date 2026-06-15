"use client";
import Image from "next/image";
import { useState } from "react";

export default function TasteShowCase() {
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Image
          alt=""
          src="/Taste1.svg"
          width={120}
          height={120}
          className={
            currentIndex == 1
              ? "tasteSelected"
              : Math.abs(currentIndex - 1) == 1
                ? "subTasteSelected"
                : currentIndex == 5
                  ? "subTasteSelected order-[99]"
                  : "hidden"
          }
        />
        <Image
          alt=""
          src="/Taste2.svg"
          width={120}
          height={120}
          className={
            currentIndex == 2
              ? "tasteSelected"
              : Math.abs(currentIndex - 2) == 1
                ? "subTasteSelected"
                : "hidden"
          }
        />
        <Image
          alt=""
          src="/Taste3.svg"
          width={120}
          height={120}
          className={
            currentIndex == 3
              ? "tasteSelected"
              : Math.abs(currentIndex - 3) == 1
                ? "subTasteSelected"
                : "hidden"
          }
        />
        <Image
          alt=""
          src="/Taste4.svg"
          width={120}
          height={120}
          className={
            currentIndex == 4
              ? "tasteSelected"
              : Math.abs(currentIndex - 4) == 1
                ? "subTasteSelected"
                : "hidden"
          }
        />
        <Image
          alt=""
          src="/Taste5.svg"
          width={120}
          height={120}
          className={
            currentIndex == 5
              ? "tasteSelected"
              : Math.abs(currentIndex - 5) == 1
                ? "subTasteSelected"
                : currentIndex == 1
                  ? "subTasteSelected order-[-1]"
                  : "hidden"
          }
        />
      </div>
      <div className="flex">
        <Image
          alt=""
          src="/ArrowLeft.svg"
          width={50}
          height={50}
          onClick={() => {
            if (currentIndex === 1) {
              setCurrentIndex(5);
            } else {
              setCurrentIndex(currentIndex - 1);
            }
          }}
        />
        <Image
          alt=""
          src="/ArrowRight.svg"
          width={50}
          height={50}
          onClick={() => {
            if (currentIndex === 5) {
              setCurrentIndex(1);
            } else {
              setCurrentIndex(currentIndex + 1);
            }
          }}
        />
      </div>
    </div>
  );
}
