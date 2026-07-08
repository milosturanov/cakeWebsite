import Link from "next/link";
import Image from "next/image";

export default function SweetTables() {
  return (
    <div className="container flex flex-col mx-auto px-4 gap-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h2 className="text-xs text-secondary2 font-semibold">
              SLATKI STOLOVI
            </h2>
            <h1 className="text-3xl font-bold">
              Detalji koji{" "}
              <span className="text-accent">upotpunjuju slavlje...</span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="#"
            className="font-semibold text-primary bg-accent p-4 w-fit rounded-xs text-sm leading-none"
          >
            ZAKAŽI ONLAJN
          </Link>
          <Link
            href="#"
            className="font-semibold text-secondary bg-primary p-4 w-fit rounded-xs text-sm leading-none border
          "
          >
            CELA KOLEKCIJA
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        <Image src="/video-placeholder.png" alt="" width="343" height="343" />
      </div>
    </div>
  );
}
