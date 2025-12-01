import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Techweb Solutions",
    link: "https://techweb-solutions-site-9def7bdb.vercel.app/",
    description: "Site institucional desenvolvido com design responsivo e otimizado para mobile.",
    technologies: ["HTML", "CSS", "JavaScript", "Formulário de contato"],
    highlights: [
      "Layout moderno e intuitivo",
      "Formulário de contato funcional",
      "Velocidade otimizada para SEO"
    ],
    category: "Site Institucional"
  },
  {
    name: "Restaurante",
    link: "https://bot-table-host.vercel.app/",
    description: "Site corporativo com foco em apresentação de serviços, fácil navegação e integração com redes sociais.",
    technologies: ["HTML", "CSS", "JavaScript", "WhatsApp"],
    highlights: [
      "Design responsivo",
      "Navegação amigável",
      "Integração com chatbot para FAQ e dúvidas"
    ],
    category: "Site Corporativo"
  },
  {
    name: "Sorriso Lindo",
    link: "https://perfect-smile-hq.vercel.app/",
    description: "Site desenvolvido para apresentar serviços e marcar agendas.",
    technologies: ["HTML", "CSS", "JavaScript", "Sistema de Pagamento"],
    highlights: [
      "Agendamento rápido e intuitivo",
      "Responsivo para mobile e desktop",
      "Gestão de produtos fácil"
    ],
    category: "Site Empresarial"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold">
            Projetos em <span className="text-primary">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi para clientes satisfeitos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow)] overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-[var(--gradient-accent)] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    {project.category}
                  </Badge>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Visitar ${project.name}`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Tecnologias</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Destaques</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm pt-2"
                >
                  Visitar Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;