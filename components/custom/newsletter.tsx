import { Button } from "@base-ui/react";

export default function NewsLetter() {
  return (
    <div className="px-4 mx-auto ">
      <div className="flex flex-col text-center gap-8 px-4 py-12 border rounded-[6px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-3xl ">
            Prati novosti i{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#8D2E46] to-[#EB4C74] ">
              ostvari popuste!
            </span>
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
        </div>

        <form action="#" className="flex flex-col items-center w-full gap-4">
          <input
            type="text"
            placeholder="Unesi email adresu"
            className="border text-sm p-3 w-full rounded-[2px]"
          />
          <Button className="w-full bg-accent text-primary py-3">
            Sign Up
          </Button>
          <p className="text-xs text-left">
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </form>
      </div>
    </div>
  );
}
