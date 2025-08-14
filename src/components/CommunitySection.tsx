import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube, Users, MessageCircle } from "lucide-react";

const CommunitySection = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", members: "5k+" },
    { icon: Instagram, label: "Instagram", members: "8k+" },
    { icon: Youtube, label: "YouTube", members: "12k+" },
    { icon: MessageCircle, label: "WhatsApp", members: "3k+" }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center glow-effect">
              <Users className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Junte-se aos <span className="neon-text">10.000 empresários</span>{" "}
            em nossa comunidade
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Faça parte da maior comunidade de empreendedores que usam automação para 
            escalar seus negócios. Compartilhe experiências, aprenda estratégias e 
            cresça junto com outros empresários de sucesso.
          </p>

          {/* Social Networks Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 card-shadow hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                    <social.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{social.label}</div>
                    <div className="text-sm text-muted-foreground">{social.members} membros</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Networking Exclusivo</h3>
              <p className="text-muted-foreground text-sm">
                Conecte-se com empresários de diversos segmentos
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Conteúdo Exclusivo</h3>
              <p className="text-muted-foreground text-sm">
                Acesso a estratégias e cases de sucesso
              </p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Youtube className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Lives e Workshops</h3>
              <p className="text-muted-foreground text-sm">
                Participe de eventos exclusivos da comunidade
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Entrar na Comunidade
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Ver Conteúdos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;