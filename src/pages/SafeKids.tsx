import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Star, Heart, Sparkles, HelpCircle, ChevronDown, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { useState, useEffect } from "react";
import safeKidsImage from "@/assets/safe-kids-program.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SafeKids = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ kids: 0, schools: 0, satisfaction: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Animate stats
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        kids: Math.floor(500 * progress),
        schools: Math.floor(25 * progress),
        satisfaction: Math.floor(98 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "Qual a idade ideal para começar?",
      answer: "O programa SAFE Kids é ideal para crianças de 7 a 14 anos. Nessa faixa etária, as crianças já conseguem compreender conceitos básicos de matemática e valores, tornando o aprendizado mais efetivo."
    },
    {
      question: "As aulas são presenciais ou online?",
      answer: "Oferecemos ambas as modalidades! Você pode escolher entre aulas presenciais em nossa sede em Pato Branco ou aulas online ao vivo, com a mesma qualidade e interatividade."
    },
    {
      question: "Como funciona a metodologia?",
      answer: "Utilizamos uma metodologia lúdica com jogos, dinâmicas e atividades práticas que tornam o aprendizado divertido. As crianças aprendem brincando sobre poupança, consumo consciente e planejamento."
    },
    {
      question: "Os pais participam do programa?",
      answer: "Sim! Oferecemos reuniões periódicas com os pais e material de apoio para que o aprendizado continue em casa. O envolvimento familiar é fundamental para o sucesso do programa."
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Colorido e Infantil */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 overflow-hidden">
          {/* Fun decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-20 w-12 h-12 bg-white/15 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-10 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Star className="w-4 h-4" />
                  Educação Financeira para Crianças
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  SAFE Kids
                </h1>
                
                <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
                  O Começo de Tudo: Dê ao seu filho a inteligência financeira que a escola não ensina! 🚀
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-orange-600 hover:bg-white/90 font-bold shadow-lg"
                  >
                    Inscrever meu filho
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-white text-white hover:bg-white/20 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-white/20 rounded-3xl blur-xl"></div>
                <img
                  src={safeKidsImage}
                  alt="SAFE Kids"
                  className="relative rounded-3xl shadow-2xl w-full border-4 border-white/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats Section */}
        <section className="py-16 bg-gradient-to-b from-orange-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZiOTIzYyIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">+{animatedStats.kids}</span>
                </div>
                <p className="font-heading font-bold text-xl text-gray-800">Crianças Impactadas</p>
                <p className="text-gray-600 text-sm">e contando!</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">+{animatedStats.schools}</span>
                </div>
                <p className="font-heading font-bold text-xl text-gray-800">Escolas Parceiras</p>
                <p className="text-gray-600 text-sm">em todo o Brasil</p>
              </div>
              <div className="text-center group">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">{animatedStats.satisfaction}%</span>
                </div>
                <p className="font-heading font-bold text-xl text-gray-800">Satisfação dos Pais</p>
                <p className="text-gray-600 text-sm">avaliação positiva</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Idade", value: "7 a 14 anos", color: "text-orange-500" },
                { icon: Clock, label: "Duração", value: "12 semanas", color: "text-amber-500" },
                { icon: Award, label: "Certificado", value: "Incluído", color: "text-yellow-500" },
                { icon: Check, label: "Formato", value: "Online/Presencial", color: "text-orange-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-all hover:-translate-y-1">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-gray-800 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-gray-800">
              O que seu filho vai <span className="text-orange-500">aprender</span> ✨
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">1</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Fundamentos</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "O que é dinheiro e sua importância",
                    "Diferença entre necessidade e desejo",
                    "Valor do trabalho e remuneração",
                    "Conceito de poupança",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">2</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Gestão Prática</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Como administrar mesada",
                    "Estabelecimento de metas financeiras",
                    "Introdução ao empreendedorismo infantil",
                    "Jogos educativos sobre finanças",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg border border-yellow-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Valores</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Generosidade e doação",
                    "Consumo consciente",
                    "Responsabilidade financeira",
                    "Planejamento para o futuro",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8 shadow-lg border border-orange-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-800">Diferenciais</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Metodologia lúdica e interativa",
                    "Acompanhamento para os pais",
                    "Material didático exclusivo",
                    "Certificado de conclusão",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-br from-orange-500 to-amber-500">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-white/50 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                "Meu filho aprendeu a economizar a mesada e até começou a ensinar os amiguinhos! O SAFE Kids transformou a forma como ele vê o dinheiro."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="font-bold text-orange-500">AM</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">Ana Maria</p>
                  <p className="text-white/80 text-sm">Mãe do Pedro, 9 anos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
                Tire suas dúvidas
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border-2 border-orange-100 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-bold text-gray-800 hover:no-underline hover:text-orange-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4">
              Pronto para transformar o futuro do seu filho?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Invista na educação financeira do seu filho hoje e colha os frutos de uma vida financeira saudável para sempre.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg px-8 py-6 shadow-lg"
            >
              Quero inscrever meu filho no SAFE Kids 🌟
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="SAFE Kids"
      />
    </div>
  );
};

export default SafeKids;