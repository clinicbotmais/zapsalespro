import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import whatsappCrm from "@/assets/whatsapp-crm.jpg";
import successMoney from "@/assets/success-money.jpg";
import socialIntegration from "@/assets/social-integration.jpg";

const FeaturesSection = () => {
  const features = [
    {
      title: "A Única Solução de Multiatendimento que você vai Precisar na Vida",
      description: "Centralize todos os seus canais de atendimento em uma única plataforma. WhatsApp, Instagram, Facebook e muito mais, tudo integrado com sua equipe.",
      image: teamCollaboration,
      alt: "Equipe colaborando com múltiplos canais de atendimento"
    },
    {
      title: "CRM e Kanban Integrado ao Chat",
      description: "Gerencie seus leads e vendas diretamente no chat. Acompanhe o funil de vendas, histórico de conversas e métricas em tempo real.",
      image: whatsappCrm,
      alt: "Interface WhatsApp integrada com CRM e Kanban"
    },
    {
      title: "Trabalhe Menos, Fature Mais",
      description: "Automatize respostas, qualifique leads e converta mais vendas enquanto sua equipe foca no que realmente importa: fechar negócios.",
      image: successMoney,
      alt: "Empresário bem-sucedido com resultados financeiros"
    },
    {
      title: "Todo o seu time em um só lugar humano ou IA",
      description: "Combine atendimento humano com inteligência artificial. Distribua conversas automaticamente e mantenha sua equipe sempre conectada.",
      image: teamCollaboration,
      alt: "Equipe unificada com IA para atendimento"
    },
    {
      title: "WhatsApp, Instagram e Face Unificados",
      description: "Uma única inbox para todos os seus canais sociais. Responda mensagens de qualquer plataforma sem perder o contexto das conversas.",
      image: socialIntegration,
      alt: "Integração unificada de redes sociais"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Recursos que fazem a <span className="neon-text">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossa plataforma pode revolucionar seu atendimento e aumentar suas vendas
          </p>
        </div>

        <div className="space-y-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-3xl font-bold leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="default" size="lg" className="group">
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl transform rotate-3"></div>
                <img 
                  src={feature.image} 
                  alt={feature.alt}
                  className="relative z-10 w-full rounded-2xl card-shadow hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;