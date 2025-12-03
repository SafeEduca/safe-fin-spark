import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Users, Award, Building2, Target, BarChart3, Users2, HelpCircle, Quote, TrendingUp, Heart, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import safeCompanyImage from "@/assets/safe-company.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SafeCompany = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({ companies: 0, employees: 0, roi: 0 });

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
        companies: Math.floor(50 * progress),
        employees: Math.floor(3000 * progress),
        roi: Math.floor(300 * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  const faqs = [
    {
      question: "Como funciona a implementação na empresa?",
      answer: "Realizamos um diagnóstico inicial para entender as necessidades da sua equipe. O programa pode ser implementado de forma presencial, online ou híbrida, adaptando-se à rotina da empresa."
    },
    {
      question: "Qual o investimento necessário?",
      answer: "O investimento varia conforme o número de colaboradores e formato escolhido. Entre em contato para uma proposta personalizada sem compromisso."
    },
    {
      question: "Como medir os resultados do programa?",
      answer: "Fornecemos relatórios completos com métricas de engajamento, evolução do conhecimento financeiro e pesquisas de satisfação. Muitas empresas relatam redução de pedidos de adiantamento e empréstimos consignados."
    },
    {
      question: "O programa serve para todos os níveis hierárquicos?",
      answer: "Sim! Adaptamos o conteúdo para diferentes públicos: operacional, administrativo, gestores e diretoria. Cada grupo recebe conteúdo relevante para sua realidade."
    },
  ];

  const results = [
    { icon: TrendingUp, value: "40%", label: "Aumento na produtividade" },
    { icon: Heart, value: "65%", label: "Redução do estresse" },
    { icon: Users, value: "35%", label: "Menos turnover" },
    { icon: Briefcase, value: "50%", label: "Menos pedidos de adiantamento" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section - Corporativo e Profissional */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-emerald-900 via-teal-800 to-emerald-800 overflow-hidden">
          {/* Professional pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)`,
            }}></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-emerald-200 hover:text-teal-300 mb-8 transition-colors">
              <ArrowLeft className="mr-2" />
              Voltar para Home
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 bg-teal-400/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-teal-400/30">
                  <Building2 className="w-4 h-4" />
                  Para Empresas
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                  SAFE <span className="text-teal-300">Company</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-emerald-100 mb-8 leading-relaxed">
                  Transforme a cultura financeira da sua empresa. Colaboradores mais conscientes, resultados mais sólidos.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-500 hover:to-emerald-500 text-emerald-900 font-bold shadow-lg"
                  >
                    Solicitar proposta
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    asChild
                    className="border-2 border-teal-400/50 text-teal-300 hover:bg-teal-400/10 font-bold"
                  >
                    <a href="#programa">Ver detalhes do programa</a>
                  </Button>
                </div>
              </div>
              
              <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-emerald-500/20 rounded-3xl blur-xl"></div>
                <img
                  src={safeCompanyImage}
                  alt="SAFE Company"
                  className="relative rounded-3xl shadow-2xl w-full border-2 border-teal-400/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 bg-gradient-to-b from-emerald-100 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-12 text-emerald-900">
              Resultados Comprovados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-emerald-700">{result.value}</div>
                    <p className="text-sm text-emerald-600">{result.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gradient-to-r from-emerald-800 to-teal-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">+{animatedStats.companies}</div>
                <p className="text-emerald-100">Empresas Atendidas</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">+{animatedStats.employees.toLocaleString()}</div>
                <p className="text-emerald-100">Colaboradores Impactados</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">{animatedStats.roi}%</div>
                <p className="text-emerald-100">ROI Médio do Programa</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="py-12 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Users, label: "Público", value: "Colaboradores", color: "text-emerald-600" },
                { icon: Clock, label: "Formato", value: "Flexível", color: "text-teal-600" },
                { icon: Award, label: "Certificação", value: "Incluída", color: "text-emerald-600" },
                { icon: Check, label: "Modalidade", value: "In-company/Online", color: "text-teal-600" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-emerald-200 hover:border-teal-400 transition-all hover:-translate-y-1">
                    <Icon className={`w-10 h-10 ${item.color} mx-auto mb-3`} />
                    <div className="text-sm text-emerald-600 mb-1">{item.label}</div>
                    <div className="font-heading font-bold text-emerald-900 text-lg">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Program Details */}
        <section id="programa" className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-emerald-900">
              Benefícios para sua <span className="text-teal-600">empresa</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-emerald-900">Para Colaboradores</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Redução do estresse financeiro",
                    "Melhoria na qualidade de vida",
                    "Planejamento para aposentadoria",
                    "Controle de dívidas e orçamento",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-emerald-900">Para a Empresa</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Aumento da produtividade",
                    "Redução do turnover",
                    "Melhoria no clima organizacional",
                    "Fortalecimento do employer branding",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-emerald-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-emerald-900">Metodologia</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Workshops presenciais ou online",
                    "Material didático personalizado",
                    "Acompanhamento pós-treinamento",
                    "Métricas de resultado mensuráveis",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-8 shadow-lg border border-teal-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-emerald-900">Diferenciais</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Programa adaptado à sua realidade",
                    "Instrutores especializados",
                    "Certificação para participantes",
                    "Relatórios de engajamento",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-emerald-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gradient-to-br from-emerald-800 to-teal-700">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center border border-teal-400/20">
              <Quote className="w-12 h-12 text-teal-400/50 mx-auto mb-6" />
              <p className="text-xl md:text-2xl text-white font-medium mb-6 leading-relaxed">
                "Após implementar o programa SAFE Company, vimos uma redução de 60% nos pedidos de adiantamento salarial e um aumento significativo no engajamento da equipe."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center">
                  <span className="font-bold text-emerald-900">MC</span>
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">Mariana C.</p>
                  <p className="text-emerald-200 text-sm">Diretora de RH, Empresa de Tecnologia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-emerald-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" />
                Perguntas Frequentes
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-emerald-900">
                Tire suas dúvidas
              </h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-md border border-emerald-200 overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-5 text-left font-heading font-bold text-emerald-900 hover:no-underline hover:text-teal-600">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-emerald-700">
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
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-emerald-900 mb-4">
              Invista no bem-estar financeiro da sua equipe
            </h2>
            <p className="text-emerald-700 mb-8 max-w-2xl mx-auto">
              Colaboradores financeiramente saudáveis são mais produtivos, engajados e comprometidos.
            </p>
            <Button 
              size="lg" 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white font-bold text-lg px-8 py-6 shadow-xl"
            >
              Solicitar proposta para minha empresa
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programName="SAFE Company"
      />
    </div>
  );
};

export default SafeCompany;