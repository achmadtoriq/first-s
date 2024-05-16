import ContactMe from "@/components/ContactMe";
import HomeComponent from "@/components/Home";
import PriceList from "@/components/PriceList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      {/* <HomeComponent /> */}
      <PriceList/>
      <ContactMe />
    </main>
  );
}
