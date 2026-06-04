import DesignCards from "@/components/custom/designCards";

export default function Design() {
  return (
    <div className="flex flex-col px-4 mx-auto gap-[48px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 ">
          <h4 className="font-medium text-xs text-secondary2">DIZAJN</h4>
          <h1 className="font-semibold text-3xl text-secondary">
            POSEBNE TORTE ZA{" "}
            <span className="text-accent underline">POSEBNE PRILIKE</span>
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
          ligula eu ipsum suscipit, eget efficitur augue vehicula. Donec
          vestibulum congue pellentesque. Nullam euismod ante porta, blandit
          odio a, tincidunt lectus. Maecenas ultricies justo non faucibus
          ultricies. Sed fringilla sollicitudin purus at mollis. Vivamus vitae
          fringilla tortor. Suspendisse et erat sapien.{" "}
        </p>
      </div>
      <DesignCards />
    </div>
  );
}
