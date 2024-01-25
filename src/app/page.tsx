import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Testimonals from "@/components/Testimonals";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="py-5">
      <Header />
      <Hero />
      <Integrations />
      {/* <Features /> */}
      <Testimonals />
      <Metrics />
      <Subscribe />
      <Footer />
    </main>
  );
}
