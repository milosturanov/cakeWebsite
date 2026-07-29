"use client";

import Link from "next/link";
import Question from "./question";
import data from "@/questions.json";

export default function Faq() {
  return (
    <div className="flex flex-col gap-20 mx-auto px-4">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">ČESTA PITANJA</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>
        <Link
          href="#"
          className="font-semibold text-primary bg-accent p-4 w-fit rounded-xs text-sm leading-none"
        >
          POŠALJI UPIT
        </Link>
      </div>
      <div className="flex flex-col">
        {data.map((item, index) => Question(item.question, item.answer, index))}
      </div>
    </div>
  );
}
