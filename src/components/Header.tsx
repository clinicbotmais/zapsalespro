import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroMockups from "@/assets/hero-mockups.jpg";

const Header = () => {
  return (
    <header className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-transparent opacity-50"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container-custom">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center glow-effect">
              <Zap className="w-6 h-6 text-dark" />
            </div>
            <span className="text-2xl font-bold text-white">zapsalespro</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#recursos" className="text-white/80 hover:text-white transition-colors">Recursos</a>
            <a href="#depoimentos" className="text-white/80 hover:text-white transition-colors">Depoimentos</a>
            <a href="#precos" className="text-white/80 hover:text-white transition-colors">Preços</a>
            <Button variant="outline-white" size="sm">Login</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Seu Primeiro Atendimento no Whatsapp Automatizado em até{" "}
              <span className="neon-text">30 minutos</span>
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Transforme seu atendimento com nossa plataforma de automação completa. 
              CRM integrado, IA avançada e resultados garantidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Começar Agora
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline-white" size="xl">
                Conhecer Planos
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">10k+</div>
                <div className="text-white/60 text-sm">Empresários</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">98%</div>
                <div className="text-white/60 text-sm">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold neon-text">24/7</div>
                <div className="text-white/60 text-sm">Suporte</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl transform rotate-6"></div>
            <img 
              src={heroMockups} 
              alt="Dashboard ZapSalesPro com estatísticas e automação WhatsApp"
              className="relative z-10 w-full rounded-3xl card-shadow transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;