"use client";
import Image from "next/image";
import { useState } from "react";
import data from "@/taste.json";

export default function TasteShowCase() {
  const [currentIndex, setCurrentIndex] = useState(2);

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center">
          <Image
            alt=""
            src="/Taste1.svg"
            width={120}
            height={120}
            className={
              currentIndex == 1
                ? "tasteSelected"
                : currentIndex - 1 == 1
                  ? "subTasteSelectedLeft"
                  : currentIndex == 5
                    ? "subTasteSelectedRight order-[99]"
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
                : currentIndex - 2 == 1
                  ? "subTasteSelectedLeft"
                  : currentIndex - 2 == -1
                    ? "subTasteSelectedRight"
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
                : currentIndex - 3 == 1
                  ? "subTasteSelectedLeft"
                  : currentIndex - 3 == -1
                    ? "subTasteSelectedRight"
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
                : currentIndex - 4 == 1
                  ? "subTasteSelectedLeft"
                  : currentIndex - 4 == -1
                    ? "subTasteSelectedRight"
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
                : currentIndex - 5 == -1
                  ? "subTasteSelectedRight"
                  : currentIndex == 1
                    ? "subTasteSelectedLeft order-[-1]"
                    : "hidden"
            }
          />
        </div>
        <div className="flex flex-col w-full items-center gap-2">
          <h1 className="text-3xl">{data[currentIndex - 1].h1}</h1>
          <p className="text-sm text-center max-w-[300px]">
            {data[currentIndex - 1].p}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-start gap-2">
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
        <div className="flex gap-2">
          <div
            className={
              currentIndex == 1
                ? "w-[8px] h-[8px] bg-secondary rounded"
                : "w-[8px] h-[8px] bg-[#C2BFBB] rounded"
            }
          ></div>
          <div
            className={
              currentIndex == 2
                ? "w-[8px] h-[8px] bg-secondary rounded"
                : "w-[8px] h-[8px] bg-[#C2BFBB] rounded"
            }
          ></div>
          <div
            className={
              currentIndex == 3
                ? "w-[8px] h-[8px] bg-secondary rounded"
                : "w-[8px] h-[8px] bg-[#C2BFBB] rounded"
            }
          ></div>
          <div
            className={
              currentIndex == 4
                ? "w-[8px] h-[8px] bg-secondary rounded"
                : "w-[8px] h-[8px] bg-[#C2BFBB] rounded"
            }
          ></div>
          <div
            className={
              currentIndex == 5
                ? "w-[8px] h-[8px] bg-secondary rounded"
                : "w-[8px] h-[8px] bg-[#C2BFBB] rounded"
            }
          ></div>
        </div>
      </div>
    </div>
  );
}
