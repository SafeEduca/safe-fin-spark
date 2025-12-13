import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Star, Heart, Sparkles, HelpCircle, ChevronDown, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import safeKidsImage from "@/assets/safe-kids-program.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SafeKids = () => {
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
        {/* Hero Section - Verde e Infantil */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-400 overflow-hidden">
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
                    asChild
                    className="bg-white text-emerald-600 hover:bg-white/90 font-bold shadow-lg"
                  >
                    <a href="https://forms.clickup.com/9013166793/f/8ckm0p9-733/LKETIYOASY407ACE1T" target="_blank" rel="noopener noreferrer">
                      Inscrever meu filho
                    </a>
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
        <section className="py-16 bg-gradient-to-b from-emerald-100 to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-4xl font-bold text-white">+{animatedStats.kids}</span>
              </div>
              <p className="font-heading font-bold text-2xl text-gray-800 mb-2">Crianças Impactadas</p>
              <p className="text-gray-600">Já transformamos a vida financeira de mais de 500 crianças em todo o Brasil!</p>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Idade", value: "7 a 14 anos", color: "text-emerald-500" },
                { icon: Clock, label: "Cada Trilha", value: "4 meses (12 semanas)", color: "text-green-500" },
                { icon: Award, label: "Certificado", value: "Incluso", color: "text-teal-500" },
                { icon: Check, label: "Formato", value: "Online/Presencial", color: "text-emerald-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-emerald-100 hover:border-emerald-300 transition-all hover:-translate-y-1">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-gray-800 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trilhas de Aprendizagem */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-gray-800">
              Trilhas de <span className="text-emerald-500">Aprendizagem</span> ✨
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Cada trilha tem duração de 4 meses (12 semanas) e oferece uma experiência completa de educação financeira de forma lúdica e prática.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Trilha 1: Jornada do Dinheiro */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg border-2 border-emerald-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">💰</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">TRILHA 1</span>
                    <h3 className="text-2xl font-heading font-bold text-gray-800">Jornada do Dinheiro</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Explora a <strong>origem, evolução e o valor do dinheiro</strong>, mostrando como ele influencia escolhas e hábitos.
                </p>
                <ul className="space-y-3">
                  {[
                    "História e evolução do dinheiro",
                    "Meios de pagamento modernos",
                    "Armadilhas financeiras do dia a dia",
                    "Atividades práticas e lúdicas",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-emerald-100 rounded-xl">
                  <p className="text-sm text-emerald-800 font-medium text-center">
                    🏛️ Finaliza com um <strong>Museu do Dinheiro</strong>!
                  </p>
                </div>
              </div>

              {/* Trilha 2: Mini Empresa */}
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🏪</span>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">TRILHA 2</span>
                    <h3 className="text-2xl font-heading font-bold text-gray-800">Mini Empresa</h3>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Apresenta o <strong>funcionamento de uma empresa</strong>, da ideia ao caixa, incentivando a mentalidade empreendedora.
                </p>
                <ul className="space-y-3">
                  {[
                    "Como criar uma empresa do zero",
                    "Negociação e custos básicos",
                    "Sociedade e responsabilidade",
                    "Gestão financeira simplificada",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-green-100 rounded-xl">
                  <p className="text-sm text-green-800 font-medium text-center">
                    🎪 Finaliza com uma <strong>Feira de Negócios</strong>!
                  </p>
                </div>
              </div>
            </div>

            {/* Diferenciais */}
            <div className="bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-heading font-bold text-center mb-6 text-gray-800">Diferenciais do Programa</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: "🎮", title: "Metodologia Lúdica", desc: "Aprendizado através de jogos" },
                  { icon: "👨‍👩‍👧", title: "Apoio aos Pais", desc: "Material e reuniões periódicas" },
                  { icon: "📚", title: "Material Exclusivo", desc: "Didático e interativo" },
                  { icon: "🎓", title: "Certificado", desc: "Ao final de cada trilha" },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h4 className="font-heading font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gradient-to-br from-emerald-500 to-green-500">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-white/50 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                "Meu filho aprendeu a economizar a mesada e até começou a ensinar os amiguinhos! O SAFE Kids transformou a forma como ele vê o dinheiro."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="font-bold text-emerald-500">AM</span>
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
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
                  className="bg-white rounded-2xl shadow-md border-2 border-emerald-100 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-bold text-gray-800 hover:no-underline hover:text-emerald-600">
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
              asChild
              className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-bold text-lg px-8 py-6 shadow-lg"
            >
              <a href="https://forms.clickup.com/9013166793/f/8ckm0p9-733/LKETIYOASY407ACE1T" target="_blank" rel="noopener noreferrer">
                Quero inscrever meu filho no SAFE Kids 🌟
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SafeKids;