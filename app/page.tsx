import Advantage from "@/components/advantages/clearlink-advantage";
import Companies from "@/components/companies/companies";
import Footer from "@/components/footer";
import Communication from "@/components/frequently-asked/communication";
import FrequentlyAsked from "@/components/frequently-asked/frequently-asked";
import Reviews from "@/components/reviews/reviews";
import Socials from "@/components/socials";
import TopComponent from "@/components/top/top-component";

export default function Home() {
  return (
    <main className="">
      <div>
        <TopComponent />
        <Companies />
        <Advantage />
        <Reviews />
        <FrequentlyAsked /> 
        <Communication />
        <Footer />
        <Socials />
      </div>
    </main>
  );
}
