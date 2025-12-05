import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
// import Testimonials from "@/components/Testimonials"; // Temporariamente desabilitado
import Footer from "@/components/Footer";

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
        {/* Depoimentos temporariamente desabilitados */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
