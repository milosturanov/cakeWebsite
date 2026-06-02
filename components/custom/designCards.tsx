"use client";
import Image from "next/image";

export default function designCards() {
  const cardImages = [
    {
      url: "/designCard1.png",
      h1: "DEČIJE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec vestibulum congue pellentesque. ",
    },
    {
      url: "/designCard2.png",
      h1: "SVADBENE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec vestibulum congue pellentesque. ",
    },
    {
      url: "/designCard3.png",
      h1: "KLASIČNE TORTE",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec vestibulum congue pellentesque. ",
    },
  ];

  return (
    <div className="flex flex-col gap-[48px]">
      {cardImages.map((image, index) => {
        return (
          <div
            key={index}
            className="flex flex-col w-full bg-[#F7F4F0] rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={image.url}
              alt="Image"
              width="240"
              height="240"
              className="w-max"
              style={{ height: "auto", width: "auto" }}
            ></Image>

            <div className="flex flex-col py-6 px-4 gap-6">
              <h1 className="font-bold text-2xl text-secondary">{image.h1}</h1>
              <p className="font-regular text-base">{image.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
