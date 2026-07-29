"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Question(
  question: string,
  answer: string,
  index: number,
) {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    if (index == 0) {
      setisOpen(true);
    }
  }, []);

  return (
    <div className="flex flex-col border-t" key={index}>
      <div
        className="flex items-center justify-between py-5 cursor-pointer"
        onClick={() => setisOpen(!isOpen)}
      >
        <h1 className="text-lg font-bold">{question}</h1>
        <Image src="/faq-arrow.svg" alt="" width={32} height={32} />
      </div>
      <p className={`overflow-hidden ${isOpen ? "pb-6" : "h-0"}`}>{answer}</p>
    </div>
  );
}
