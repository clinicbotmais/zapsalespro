import { Button } from "@/components/ui/button";
import { Zap, MessageSquare, Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Recursos", href: "#recursos" },
    { label: "Preços", href: "#precos" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Blog", href: "#blog" },
    { label: "Central de Ajuda", href: "#ajuda" },
    { label: "API", href: "#api" }
  ];

  const legalLinks = [
    { label: "Termos de Uso", href: "#termos" },
    { label: "Política de Privacidade", href: "#privacidade" },
    { label: "LGPD", href: "#lgpd" },
    { label: "Status", href: "#status" }
  ];

  const socialLinks = [
    { icon: MessageSquare, href: "#whatsapp", label: "WhatsApp" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Youtube, href: "#youtube", label: "YouTube" }
  ];

  return (
    <footer className="footer-gradient text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 py-12 bg-white/10 rounded-2xl backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4">
            Precisa de um Plano Customizado?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está pronta para criar uma solução 
            sob medida para o seu negócio. Fale conosco agora mesmo!
          </p>
          <Button variant="outline-white" size="lg" className="group">
            <MessageSquare className="w-5 h-5 mr-2" />
            Chame no WhatsApp
          </Button>
        </div>

        {/* Footer Links */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">zapsalespro</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              A plataforma mais completa para automatizar seu atendimento no WhatsApp 
              e aumentar suas vendas em até 300%.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span className="text-white/70">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-white/70">contato@zapsalespro.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-white/70">Suporte 24/7</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-white/80 mb-2">📧 Newsletter</p>
              <p className="text-xs text-white/60">
                Receba dicas semanais sobre automação e vendas
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 ZapSalesPro. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/60">
              <span>🇧🇷 Feito no Brasil</span>
              <span>•</span>
              <span>💚 Com muito amor pela automação</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;