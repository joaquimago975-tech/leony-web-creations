const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
          <p className="text-2xl font-bold bg-clip-text text-transparent bg-[var(--gradient-accent)]">
            Leony
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
        <p className="text-muted-foreground text-sm">
          Desenvolvedor Web Freelancer • Sites & e-Commerce Profissionais
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Leony. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;