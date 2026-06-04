"use client";
import Image from "next/image";
import { useState } from "react";

export default function TasteShowCase() {
  const [currentIndex, setCurrentIndex] = useState(2);
  return (
    <div className="flex flex-col">
      <div className="flex gap-[-30px] items-center">
        <Image alt="" src="/Taste1.svg" width={100} height={100} />
        <Image alt="" src="/Taste2.svg" width={100} height={100} />
        <Image alt="" src="/Taste3.svg" width={100} height={100} />
        <Image alt="" src="/Taste4.svg" width={100} height={100} />
        <Image alt="" src="/Taste5.svg" width={100} height={100} />
      </div>
      <div className="flex">
        <Image
          alt=""
          src="/ArrowLeft.svg"
          width={50}
          height={50}
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        />
        <Image
          alt=""
          src="/ArrowRight.svg"
          width={50}
          height={50}
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        />
      </div>
    </div>
  );
}
