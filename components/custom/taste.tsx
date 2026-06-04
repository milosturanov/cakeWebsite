import Image from "next/image";
import TasteShowCase from "./tasteShowcase";

export default function Taste() {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex flex-col gap-1">
        <h4 className="text-xs text-secondary2">UKUSI</h4>
        <h1 className="font-semibold text-3xl text-secondary">
          Preko 20{" "}
          <span className="relative text-accent2">
            različitih{" "}
            <Image
              src="/TasteSparks.svg"
              alt=""
              width={100}
              height={100}
              className="absolute right-[-90px] top-[-50px]"
            ></Image>
          </span>{" "}
          <br />
          ukusa
        </h1>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
        ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec
        vestibulum congue pellentesque.
      </p>
      <TasteShowCase />
    </div>
  );
}
