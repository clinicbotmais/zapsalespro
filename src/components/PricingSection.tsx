import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "R$ 97",
      period: "/mês",
      description: "Perfeito para começar a automatizar",
      features: [
        "1 usuário",
        "1.000 mensagens/mês",
        "WhatsApp Business API",
        "Chatbot básico",
        "Relatórios simples",
        "Suporte por email"
      ],
      popular: false,
      cta: "Começar Teste Grátis"
    },
    {
      name: "Professional",
      icon: Crown,
      price: "R$ 297",
      period: "/mês",
      description: "Para equipes que querem escalar",
      features: [
        "5 usuários",
        "10.000 mensagens/mês",
        "WhatsApp + Instagram + Facebook",
        "IA avançada",
        "CRM integrado",
        "Kanban de vendas",
        "Relatórios avançados",
        "Integrações via API",
        "Suporte prioritário"
      ],
      popular: true,
      cta: "Mais Popular"
    },
    {
      name: "Enterprise",
      icon: Rocket,
      price: "R$ 697",
      period: "/mês",
      description: "Para empresas que precisam do máximo",
      features: [
        "Usuários ilimitados",
        "Mensagens ilimitadas",
        "Todos os canais",
        "IA personalizada",
        "CRM completo",
        "Automações avançadas",
        "White label",
        "Integrações customizadas",
        "Gerente de sucesso dedicado",
        "Suporte 24/7"
      ],
      popular: false,
      cta: "Falar com Especialista"
    }
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planos que <span className="neon-text">se adaptam</span> ao seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para escalar seu atendimento e aumentar suas vendas. 
            Comece com 14 dias grátis, sem compromisso.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 card-shadow hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary glow-effect scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold glow-effect">
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  plan.popular 
                    ? 'bg-primary text-primary-foreground glow-effect' 
                    : 'bg-primary/10 text-primary'
                }`}>
                  <plan.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold neon-text">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-muted-foreground">
            Todos os planos incluem 14 dias de teste grátis • Cancele quando quiser • Sem taxas de setup
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>SSL e segurança garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Uptime 99.9%</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>LGPD compliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;