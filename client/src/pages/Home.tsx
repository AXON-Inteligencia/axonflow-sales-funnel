import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap, BarChart3, MessageSquare, Settings, Users } from "lucide-react";

/**
 * Design Philosophy: Futurismo Corporativo Minimalista
 * - Verde neon (#1FD45F) como acento primário
 * - Fundo preto profundo (#0A0A0A)
 * - Layout assimétrico e dinâmico
 * - Animações suaves com scroll triggers
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-poppins font-bold text-lg">AxonFlow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">
              Preços
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Começar Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663666661688/dZhZNKGJcSF93tjVGMHenT/hero-background-YH8L9HENJRB2ib86BnjweR.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent z-1" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl leading-tight mb-6">
              Automação Inteligente para Vendas
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Crie bots de vendas, automações e campanhas inteligentes. Aumente suas conversões com
              inteligência artificial e automação sem código.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                Começar Teste Gratuito
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Ver Demo
              </Button>
            </div>
            <div className="mt-12 flex items-center gap-8 text-sm">
              <div>
                <div className="font-bold text-primary text-2xl">10K+</div>
                <div className="text-muted-foreground">Usuários Ativos</div>
              </div>
              <div>
                <div className="font-bold text-primary text-2xl">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="font-bold text-primary text-2xl">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden md:flex justify-center animate-slide-in-right">
            <div className="relative w-full max-w-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663666661688/dZhZNKGJcSF93tjVGMHenT/automation-visual-DycsLVCRcvpSbPJxbkzj36.webp"
                alt="Automação"
                className="w-full glow-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">Recursos Poderosos</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo que você precisa para criar automações inteligentes e vender mais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Bots Inteligentes",
                description: "Crie bots de vendas que funcionam 24/7 sem intervenção manual",
              },
              {
                icon: BarChart3,
                title: "Analytics em Tempo Real",
                description: "Acompanhe métricas, conversões e desempenho em tempo real",
              },
              {
                icon: MessageSquare,
                title: "Automação de Mensagens",
                description: "Envie mensagens personalizadas em escala para seus contatos",
              },
              {
                icon: Users,
                title: "Gestão de Contatos",
                description: "Organize e segmente seus contatos de forma inteligente",
              },
              {
                icon: Settings,
                title: "Sem Código",
                description: "Interface intuitiva, nenhuma programação necessária",
              },
              {
                icon: Check,
                title: "Integração Fácil",
                description: "Conecte com suas ferramentas favoritas em minutos",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:glow-primary p-6"
              >
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-poppins font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl mb-4">Dashboard Intuitivo</h2>
            <p className="text-muted-foreground text-lg">Controle tudo em um único lugar</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border glow-primary">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663666661688/dZhZNKGJcSF93tjVGMHenT/dashboard-preview-4vshNkm3GoSRyhdfCgsQNZ.webp"
              alt="Dashboard Preview"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-4xl mb-4">Resultados Comprovados</h2>
            <p className="text-muted-foreground text-lg">Veja como nossos clientes crescem</p>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663666661688/dZhZNKGJcSF93tjVGMHenT/success-metrics-5soJtNzxg4oWaV7MQmFg6n.webp"
              alt="Success Metrics"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl mb-4">Planos Flexíveis</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Escolha o plano perfeito para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "R$ 99",
                period: "/mês",
                description: "Perfeito para começar",
                features: [
                  "Até 5 bots",
                  "1.000 contatos",
                  "Analytics básico",
                  "Suporte por email",
                  "Automações simples",
                ],
                cta: "Começar Agora",
                highlighted: false,
              },
              {
                name: "Professional",
                price: "R$ 299",
                period: "/mês",
                description: "Para equipes em crescimento",
                features: [
                  "Até 50 bots",
                  "10.000 contatos",
                  "Analytics avançado",
                  "Suporte prioritário",
                  "Automações ilimitadas",
                  "Integrações customizadas",
                ],
                cta: "Começar Agora",
                highlighted: true,
              },
              {
                name: "Enterprise",
                price: "Customizado",
                period: "",
                description: "Para grandes operações",
                features: [
                  "Bots ilimitados",
                  "Contatos ilimitados",
                  "Analytics em tempo real",
                  "Suporte 24/7 dedicado",
                  "API completa",
                  "Consultoria estratégica",
                ],
                cta: "Falar com Vendas",
                highlighted: false,
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`border transition-all duration-300 p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-primary bg-card glow-primary-strong scale-105"
                    : "border-border hover:border-primary"
                }`}
              >
                {plan.highlighted && (
                  <div className="mb-4 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold w-fit">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="font-poppins font-bold text-2xl mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="font-poppins font-bold text-3xl text-primary">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                </div>
                <Button
                  className={`mb-8 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-primary text-primary hover:bg-primary/10"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl mb-6">Pronto para Crescer?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de empresas que já estão automatizando suas vendas com AxonFlow
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            Começar Teste Gratuito - 14 Dias
          </Button>
          <p className="text-muted-foreground text-sm mt-4">Sem cartão de crédito necessário</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-poppins font-bold">AxonFlow</span>
              </div>
              <p className="text-muted-foreground text-sm">Automação inteligente para vendas</p>
            </div>
            <div>
              <h4 className="font-poppins font-bold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Segurança
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-poppins font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2026 AxonFlow. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
