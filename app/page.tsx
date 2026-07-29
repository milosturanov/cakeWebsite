import Header from "@/components/custom/header";
import Hero from "@/components/custom/hero";
import CakeShowcase from "@/components/custom/cakeShowcase";
import Design from "@/components/custom/design";
import Taste from "@/components/custom/taste";
import NewsLetter from "@/components/custom/newsletter";
import SweetTables from "@/components/custom/sweetTables";
import Faq from "@/components/custom/faq";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <Header />
      <Hero />
      <CakeShowcase />
      <Design />
      <Taste />
      <NewsLetter />
      <SweetTables />
      <Faq />
    </div>
  );
}
