import { Star } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "CEO, TechVendas",
      image: testimonial1,
      rating: 5,
      content: "Desde que implementamos o ZapSalesPro, nosso atendimento melhorou 300%. A automação nos permitiu focar nas vendas e os resultados apareceram no primeiro mês."
    },
    {
      name: "Carlos Roberto",
      role: "Diretor Comercial, MegaStore",
      image: testimonial2,
      rating: 5,
      content: "Incrível como conseguimos integrar todos os nossos canais em uma única plataforma. Nossa equipe triplicou a produtividade e as vendas aumentaram 150%."
    },
    {
      name: "Ana Beatriz",
      role: "Fundadora, BeautyTime",
      image: testimonial1,
      rating: 5,
      content: "A IA do ZapSalesPro é impressionante! Ela qualifica os leads automaticamente e nossa taxa de conversão subiu de 12% para 35%. Recomendo para todos!"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Histórias de <span className="neon-text">Sucesso</span> de Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como empresários como você transformaram seus negócios com nossa plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow hover:scale-105 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}`}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Junte-se a milhares de empresários que já transformaram seus negócios
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Implementação em 30 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Suporte 24/7</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Garantia de resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;