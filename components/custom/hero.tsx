import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Hero() {
  return (
    <div>
      <div className="px-4 flex flex-col gap-6">
        <div>
          <div className="flex gap-1">
            <MapPin height="16" width="16" />
            <h1 className="text-xs text-secondary">Subotica</h1>
          </div>
          <h1 className="text-4xl font-normal text-secondary">
            <span className="text-accent font-bold">
              PORUČI TORTU <br />
            </span>{" "}
            OD KOJE ĆE GOSTI TRAŽITI JOŠ
          </h1>
        </div>
        <p className="text-sm text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
          ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec
          vestibulum congue pellentesque. Nullam euismod ante porta, blandit
          odio a, tincidunt lectus. Maecenas ultricies justo non faucibus.
        </p>
        <Link
          href="#"
          className="font-semibold text-primary bg-accent p-4 w-fit rounded-sm text-base leading-none"
        >
          ZAKAŽI ONLAJN
        </Link>
      </div>
    </div>
  );
}
