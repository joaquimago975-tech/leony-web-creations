import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Vamos <span className="text-primary">Trabalhar Juntos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato para desenvolver seu site ou e-Commerce profissional com chatbot integrado, 
            personalizado para seu negócio.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] bg-card border-border">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">Resposta rápida</p>
                </div>
              </div>
              <a
                href="https://wa.me/244975330677"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Abrir WhatsApp
                </Button>
              </a>
              <p className="text-center text-sm text-muted-foreground">
                +244 975 330 677
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] bg-card border-border">
            <CardContent className="p-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-muted-foreground text-sm">Contato profissional</p>
                </div>
              </div>
              <a
                href="mailto:joaquimago975@gmail.com"
                className="block"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Enviar E-mail
                </Button>
              </a>
              <p className="text-center text-sm text-muted-foreground">
                joaquimago975@gmail.com
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-xl font-semibold">Pronto para começar seu projeto?</h3>
            <p className="text-muted-foreground">
              Transformo ideias em sites profissionais que convertem visitantes em clientes. 
              Vamos criar algo incrível juntos!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;