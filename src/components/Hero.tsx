import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-primary)]" />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(103, 232, 249, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(103, 232, 249, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 text-sm text-muted-foreground mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponível para novos projetos
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          Portfólio de
          <br />
          <span className="bg-clip-text text-transparent bg-[var(--gradient-accent)]">
            Desenvolvimento Web
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Sou desenvolvedor freelancer especializado em criação de sites e e-Commerce profissionais 
          integrados com chatbot, com foco em design moderno, funcionalidade e experiência do usuário. 
          Trabalho com <span className="text-primary font-semibold">HTML, CSS, JavaScript</span> e integração de pagamentos online.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Projetos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/20 hover:bg-primary/10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Entrar em Contato
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <a 
            href="mailto:joaquimago975@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a 
            href="https://github.com/leony" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="https://linkedin.com/in/leony" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;