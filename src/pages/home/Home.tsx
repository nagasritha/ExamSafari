import HeroSection from "../../components/herosection/HeroSection";
import Stats from "@/components/stats/Stats";
import Services from "@/components/services/Services";
import ExamCity from "@/components/examcity/ExamCity";
import AcoFeature from "@/components/feature/AcoFeature";
import TravelFeature from "@/components/feature/TravelFeature";
import Faq from "@/components/Faqs/Faq";
import Bannar1 from "@/components/bannar/Bannar1";
import Navbar from "@/components/navbar/Navbar";
import Layout from "@/components/layout/Layout";
import "./index.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLMarqueeElement>, HTMLMarqueeElement>;
    }
  }
}

function Home() {
  return (
    <Layout>
      <marquee className="animated-color">
        15% discount for 1st time users!!
      </marquee>
      <Navbar />
      <HeroSection />
      <Stats />
      <Services />
      <ExamCity />
      <AcoFeature />
      <Bannar1 />
      <TravelFeature />
      <Faq />
    </Layout>
  );
}

export default Home;
