"use client";
import Image from "next/image";

export default function DesignCards() {
  const cardImages = [
    {
      url: "/designCard1.png",
      h1: "DEČIJE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "/designCard2.png",
      h1: "SVADBENE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      url: "/designCard3.png",
      h1: "KLASIČNE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="flex flex-col gap-[48px]">
      {cardImages.map((image, index) => {
        return (
          <div
            key={index}
            className="flex flex-col rounded-lg overflow-hidden p-4 bg-[#F7F4ED] shadow-md"
          >
            <Image
              src={image.url}
              alt="Image"
              width={240}
              height={240}
              className="w-auto h-auto rounded-lg"
            ></Image>

            <div className="flex flex-col py-4 px-4 gap-4">
              <h1 className="font-bold text-2xl text-secondary">{image.h1}</h1>
              <p className="font-regular text-base">{image.text}</p>
              <h1 className="w-full text-right">VIDI SVE TORTE &gt;</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
