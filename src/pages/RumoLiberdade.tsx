import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Crown, Gem, TrendingUp, Building, HelpCircle, Quote, Shield, Wallet, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { useState, useEffect } from "react";
import rumoImage from "@/assets/rumo-liberdade.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RumoLiberdade = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ adults: 0, saved: 0, freedom: 0 });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAnimatedStats({
        adults: Math.floor(800 * progress),
        saved: Math.floor(2.5 * progress * 10) / 10,
        freedom: Math.floor(45 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "O programa serve para quem está endividado?",
      answer: "Sim! A primeira fase do programa foca exatamente em reorganização financeira e eliminação de dívidas. Muitos alunos chegam endividados e saem com um plano claro de quitação."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os primeiros resultados aparecem já nas primeiras semanas com a reorganização do orçamento. Resultados mais significativos em investimentos são visíveis em 3-6 meses de aplicação consistente."
    },
    {
      question: "A imersão é individual ou em grupo?",
      answer: "A imersão acontece em grupo, proporcionando networking e troca de experiências entre participantes, além de dinâmicas práticas e vivenciais."
    },
    {
      question: "Preciso ter muito dinheiro para começar a investir?",
      answer: "Não! Você pode começar com qualquer valor. O importante é criar o hábito. Ensinamos estratégias para começar com pouco e aumentar gradualmente seus aportes."
    },
  ];

  const benefits = [
    { icon: Shield, title: "Segurança Financeira", desc: "Fundo de emergência e proteção patrimonial" },
    { icon: TrendingUp, title: "Crescimento", desc: "Investimentos inteligentes e rentáveis" },
    { icon: Wallet, title: "Renda Passiva", desc: "Dinheiro trabalhando para você" },
    { icon: Crown, title: "Liberdade", desc: "Escolhas sem preocupação financeira" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Azul Premium para Adultos */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 overflow-hidden">
          {/* Premium pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(129,140,248,0.2) 0%, transparent 50%)`,
            }}></div>
          </div>
          {/* Blue shimmer effect */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-blue-200 hover:text-indigo-300 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-indigo-400/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-indigo-400/30">
                  <Crown className="w-4 h-4" />
                  Imersão Presencial para Adultos
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Imersão <span className="text-indigo-300">Rumo à Liberdade</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Uma imersão transformadora de 20 horas para conquistar sua Independência Financeira e construir o futuro dos seus sonhos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-indigo-400 to-blue-400 hover:from-indigo-500 hover:to-blue-500 text-white font-bold shadow-lg"
                  >
                    Quero conquistar minha liberdade
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-indigo-400/50 text-indigo-300 hover:bg-indigo-400/10 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-400/30 to-blue-600/30 rounded-3xl blur-xl"></div>
                <img
                  src={rumoImage}
                  alt="Rumo à Liberdade"
                  className="relative rounded-3xl shadow-2xl w-full border-2 border-indigo-400/40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-gradient-to-b from-indigo-100 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-indigo-900">{benefit.title}</h3>
                    <p className="text-sm text-indigo-700">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-indigo-800 to-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Transformando <span className="text-indigo-300">Vidas Financeiras</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-2">📚</div>
                  <p className="text-blue-100 font-medium">Adultos aprendendo sobre investimentos</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-2">💰</div>
                  <p className="text-blue-100 font-medium">Economizando dinheiro de forma inteligente</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-3xl mb-2">📈</div>
                  <p className="text-blue-100 font-medium">Aprendendo a investir para o futuro</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gradient-to-b from-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Público", value: "Adultos 18+", color: "text-indigo-700" },
                { icon: Clock, label: "Duração", value: "20 horas", color: "text-blue-600" },
                { icon: Award, label: "Período", value: "Sexta a Domingo", color: "text-indigo-700" },
                { icon: MapPin, label: "Formato", value: "Presencial", color: "text-blue-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-indigo-200 hover:border-blue-400 transition-all hover:-translate-y-1">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-indigo-600 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-indigo-900 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-indigo-900">
              Sua jornada rumo à <span className="text-blue-600">liberdade financeira</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-indigo-900">Comportamento Financeiro</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Mentalidade e hábitos financeiros",
                    "Consumo consciente e decisões inteligentes",
                    "Desejos vs. necessidades",
                    "Transformação da relação com dinheiro",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-indigo-200" />
                      </div>
                      <span className="text-indigo-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-indigo-900">Economia e Mercado</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Inflação, juros e crédito",
                    "Funcionamento do mercado financeiro",
                    "Análise de cenários econômicos",
                    "Oportunidades e riscos",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-indigo-900" />
                      </div>
                      <span className="text-indigo-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-indigo-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-indigo-900">Organização Financeira</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Orçamento pessoal e familiar",
                    "Controle de despesas eficiente",
                    "Metas financeiras de curto e longo prazo",
                    "Construção de reserva de emergência",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-indigo-200" />
                      </div>
                      <span className="text-indigo-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg border border-blue-300 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-indigo-900">Investimentos e Futuro</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Renda fixa, ações e fundos imobiliários",
                    "Diversificação e gestão de risco",
                    "Aposentadoria e patrimônio",
                    "Liberdade e independência financeira",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-indigo-900" />
                      </div>
                      <span className="text-indigo-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 via-blue-100 to-indigo-100 rounded-2xl p-8 mb-12 border border-blue-300">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center text-indigo-900">Diferenciais Exclusivos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Imersão intensiva de 20 horas",
                  "Networking com outros participantes",
                  "Material didático completo",
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Check className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-medium text-indigo-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por que participar */}
        <section className="py-16 bg-gradient-to-br from-indigo-800 to-blue-700">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-indigo-400/20">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6">
                Por que participar da <span className="text-indigo-300">Imersão</span>?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <p className="text-blue-100">Aprenda a <strong className="text-white">investir com segurança</strong></p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <p className="text-blue-100">Descubra como <strong className="text-white">economizar de verdade</strong></p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-indigo-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-blue-100">Construa seu caminho para a <strong className="text-white">liberdade financeira</strong></p>
                </div>
              </div>
              <p className="text-lg text-blue-100">
                Já ensinamos adultos sobre investimentos, ajudamos a economizar dinheiro e aprender a investir para o futuro!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-200 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-indigo-900">
                Tire suas dúvidas
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border border-indigo-200 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-bold text-indigo-900 hover:no-underline hover:text-blue-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-indigo-700">
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-indigo-900 mb-4">
              Pronto para conquistar sua liberdade financeira?
            </h2>
            <p className="text-indigo-700 mb-8 max-w-2xl mx-auto">
              O melhor momento para começar foi ontem. O segundo melhor momento é agora.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white font-bold text-lg px-8 py-6 shadow-xl"
            >
              Quero iniciar minha jornada rumo à liberdade
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="Rumo à Liberdade"
      />
    </div>
  );
};

export default RumoLiberdade;