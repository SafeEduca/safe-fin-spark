import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const SafeStories = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-foreground/80 hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="mr-2" />
            Voltar para Home
          </Link>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default SafeStories;
