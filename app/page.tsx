import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gap from "@/components/Gap";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Finance from "@/components/Finance";
import Approach from "@/components/Approach";
import WhoWeServe from "@/components/WhoWeServe";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gap />
        <Services />
        <HowItWorks />
        <Finance />
        <Approach />
        <WhoWeServe />
        <Pricing />
        <About />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
