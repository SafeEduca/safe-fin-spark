import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import SafinhoAI from "@/components/SafinhoAI";
// import Testimonials from "@/components/Testimonials"; // Temporariamente desabilitado
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Programs />
        <Gallery />
        <SafinhoAI />
        {/* Depoimentos temporariamente desabilitados */}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
