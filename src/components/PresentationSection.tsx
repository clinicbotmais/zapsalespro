import { MessageSquare, Zap, BarChart3, Link2, Users, Brain } from "lucide-react";

const PresentationSection = () => {
  const features = [
    { icon: MessageSquare, label: "Canais" },
    { icon: Zap, label: "Automação" },
    { icon: BarChart3, label: "Relatórios" },
    { icon: Link2, label: "Integração" },
    { icon: Users, label: "Multiatendimento" },
    { icon: Brain, label: "IA Avançada" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container-custom">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Muito mais que um{" "}
            <span className="neon-text">Bot de Conversa</span>{" "}
            no Whatsapp
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            A ZapSalesPro oferece <strong>Automação Completa</strong> para o seu negócio. 
            Centralize todos os seus canais de atendimento em uma única plataforma inteligente.
          </p>
          
          {/* Demo Video Placeholder */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-primary/20 flex items-center justify-center card-shadow">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Demonstração em Vídeo</h3>
                <p className="text-muted-foreground">Veja como funciona em menos de 2 minutos</p>
              </div>
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-primary rounded-full flex items-center justify-center glow-effect hover:scale-110 transition-transform group">
                <div className="w-0 h-0 border-l-[12px] border-l-dark border-y-[8px] border-y-transparent ml-1 group-hover:border-l-[14px] group-hover:border-y-[10px] transition-all"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Features Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:glow-effect transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;