import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Target, TrendingUp, Briefcase, Brain, HelpCircle, Quote, Rocket, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import financasImage from "@/assets/financas-em-foco.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FinancasEmFoco = () => {
  const [animatedStats, setAnimatedStats] = useState({ teens: 0, hours: 0, projects: 0 });

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
        teens: Math.floor(350 * progress),
        hours: Math.floor(64 * progress),
        projects: Math.floor(120 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "Preciso ter conhecimento prévio sobre finanças?",
      answer: "Não! O programa foi desenvolvido para começar do básico. Você vai aprender tudo do zero, de forma progressiva e prática."
    },
    {
      question: "Como funciona o simulador de investimentos?",
      answer: "Você terá acesso a um simulador onde pode praticar investimentos com dinheiro virtual, aprendendo na prática como funciona o mercado financeiro sem riscos."
    },
    {
      question: "Posso fazer o curso mesmo sendo menor de idade?",
      answer: "Sim! O programa é direcionado para adolescentes de 15 a 18 anos. Menores de 18 anos precisam da autorização dos pais para participar."
    },
    {
      question: "Há suporte após o término do curso?",
      answer: "Sim! Você terá acesso à comunidade de alunos por 6 meses após a conclusão, além de materiais complementares e atualizações."
    },
  ];

  const journey = [
    { icon: Lightbulb, title: "Despertar", desc: "Entenda seu relacionamento com o dinheiro" },
    { icon: Target, title: "Planejar", desc: "Defina metas e crie seu orçamento" },
    { icon: TrendingUp, title: "Investir", desc: "Aprenda a fazer seu dinheiro trabalhar" },
    { icon: Rocket, title: "Decolar", desc: "Conquiste sua independência financeira" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Cinza e Dourado para Adolescentes */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 overflow-hidden">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(45deg, transparent 45%, rgba(212, 175, 55, 0.3) 45%, rgba(212, 175, 55, 0.3) 55%, transparent 55%)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          {/* Gold accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-slate-300 hover:text-amber-400 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-amber-400/30">
                  <Target className="w-4 h-4" />
                  Para Adolescentes de 15 a 18 anos
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  Finanças em <span className="text-amber-400">Foco</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                  Preparando jovens para o futuro com inteligência financeira. Turmas <strong className="text-amber-400">Online e Presenciais</strong> disponíveis!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    asChild
                    className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 font-bold shadow-lg"
                  >
                    <a href="https://forms.clickup.com/9013166793/f/8ckm0p9-493/CY67TPPLS59JI586TO" target="_blank" rel="noopener noreferrer">
                      Quero participar
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-amber-400/50 text-amber-400 hover:bg-amber-400/10 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 to-slate-500/20 rounded-3xl blur-xl"></div>
                <img
                  src={financasImage}
                  alt="Finanças em Foco"
                  className="relative rounded-3xl shadow-2xl w-full border-2 border-amber-400/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 bg-gradient-to-b from-slate-100 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-slate-800">
              Sua Jornada de <span className="text-amber-500">Transformação</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-4xl mx-auto">
              {journey.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-3">
                        <Icon className="w-8 h-8 text-amber-400" />
                      </div>
                      <h3 className="font-heading font-bold text-slate-800">{step.title}</h3>
                      <p className="text-sm text-slate-600 max-w-[120px]">{step.desc}</p>
                    </div>
                    {index < journey.length - 1 && (
                      <div className="hidden md:block w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-2"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">+{animatedStats.teens}</div>
                <p className="text-slate-300">Adolescentes Impactados</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">18h</div>
                <p className="text-slate-300">de Conteúdo Prático</p>
              </div>
            </div>
            <p className="text-center text-slate-400 mt-6 text-sm">
              Já impactamos centenas de jovens. Faça parte da próxima turma!
            </p>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Idade", value: "15 a 18 anos", color: "text-slate-700" },
                { icon: Clock, label: "Duração", value: "16 semanas", color: "text-amber-600" },
                { icon: Award, label: "Certificado", value: "Incluído", color: "text-slate-700" },
                { icon: Check, label: "Formato", value: "Online/Presencial", color: "text-amber-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-slate-200 hover:border-amber-400/50 transition-all hover:-translate-y-1">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-slate-800 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4 text-slate-800">
              O que você vai <span className="text-amber-500">aprender</span>
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Conteúdo completo para transformar sua relação com o dinheiro e preparar você para o futuro financeiro.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">Comportamento Financeiro</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Mentalidade e hábitos financeiros",
                    "Consumo consciente",
                    "Diferença entre desejos e necessidades",
                    "Autoconhecimento financeiro",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-slate-900" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">Economia e Mercado</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Inflação e juros",
                    "Crédito e financiamentos",
                    "Como o mercado funciona",
                    "Cenário econômico atual",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-amber-400" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">Organização Financeira</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Orçamento pessoal",
                    "Controle de gastos",
                    "Metas financeiras",
                    "Reserva de emergência",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-slate-900" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">Investimentos</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Renda fixa e ações",
                    "Fundos imobiliários",
                    "Diversificação de carteira",
                    "Análise de risco",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-amber-400" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-lg border border-amber-200 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-800">Aposentadoria e Futuro Financeiro</h3>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Previdência privada e pública",
                    "Construção de patrimônio",
                    "Liberdade financeira",
                    "Independência desde jovem",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-700">
          <div className="container mx-auto px-4 max-w-5xl">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10 text-white">
              O que nossos alunos <span className="text-amber-400">dizem</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/20">
                <Quote className="w-10 h-10 text-amber-400/50 mb-4" />
                <p className="text-lg text-white font-medium mb-6 leading-relaxed">
                  "Foi muito bom aprender sobre o valor das coisas e como poder me organizar, a aprender a fazer planilhas e a guardar o meu dinheiro corretamente, e não só sobre economizar mas sobre todos os tipos de juros e taxas que nos impõem. Foi um curso muito importante e que vou levar comigo!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-slate-900">A</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">Aluna do Finanças em Foco</p>
                    <p className="text-slate-300 text-sm">Adolescente, Pato Branco</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/20">
                <Quote className="w-10 h-10 text-amber-400/50 mb-4" />
                <p className="text-lg text-white font-medium mb-6 leading-relaxed">
                  "Curso incrível demais! Tudo superou minhas expectativas. Agora, toda vez que penso no dinheiro, lembro das aulas e das dicas fantásticas. Espero que o SAFE alcance ainda mais adolescentes que vão ter suas cabeças abertas a uma nova visão do mundo das finanças."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center">
                    <span className="font-bold text-slate-900">A</span>
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-white">Aluno do Finanças em Foco</p>
                    <p className="text-slate-300 text-sm">Adolescente, Pato Branco</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl p-6 text-center border border-amber-400/30">
              <p className="text-amber-200 text-lg">
                <strong className="text-amber-400">Curso incrível!</strong> Me ajudou a abrir os olhos para o mercado financeiro e saber como e onde investir. Os professores são incríveis e bem generosos, sanaram todas as minhas dúvidas. <strong className="text-amber-400">Recomendo muito!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">
                Tire suas dúvidas
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-bold text-slate-800 hover:no-underline hover:text-amber-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-slate-600">
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800 mb-4">
              Comece a construir seu futuro financeiro agora!
            </h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Quanto antes você começar, mais cedo conquistará sua independência financeira.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-amber-400 font-bold text-lg px-8 py-6 shadow-lg border border-amber-400/30"
            >
              <a href="https://forms.clickup.com/9013166793/f/8ckm0p9-493/CY67TPPLS59JI586TO" target="_blank" rel="noopener noreferrer">
                Quero participar do Finanças em Foco
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancasEmFoco;