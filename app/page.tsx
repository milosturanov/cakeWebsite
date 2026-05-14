import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import CakeShowcase from "@/components/custom/cakeShowcase";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Hero />
      <CakeShowcase />
    </div>
  );
}
