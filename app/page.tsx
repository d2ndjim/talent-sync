import Advantage from "@/components/advantages/clearlink-advantage";
import Companies from "@/components/companies/companies";
import TopComponent from "@/components/top/top-component";

export default function Home() {
  return (
    <main className="">
      <div>
        <TopComponent />
        <Companies />
        <Advantage />
      </div>
    </main>
  );
}
