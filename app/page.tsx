import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import CakeShowcase from "@/components/custom/cakeShowcase";
import Design from "@/components/custom/design";
import Taste from "@/components/custom/taste";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Hero />
      <CakeShowcase />
      <Design />
      <Taste />
    </div>
  );
}
