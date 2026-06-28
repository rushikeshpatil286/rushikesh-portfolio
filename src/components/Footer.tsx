import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-card to-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold text-gradient mr-3">RP</span>
              <div>
                <h3 className="font-semibold text-foreground">Rushikesh Patil</h3>
                <p className="text-sm text-muted-foreground">Software Engineer</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building innovative digital solutions with passion, precision, and cutting-edge technology. 
              Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted-foreground hover:text-primary transition-smooth text-sm text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Let's Connect</h4>
            <div className="flex space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="hover-glow transition-smooth"
                asChild
              >
                <a href="https://github.com/rkPatil286" target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover-glow transition-smooth"
                asChild
              >
                <a href="www.linkedin.com/in/rushikesh-patil-1178b6270" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="hover-glow transition-smooth"
                asChild
              >
                <a href="mailto:patilrushikesh1983@gmail.com">
                  <Mail size={16} />
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Available for freelance projects and collaboration opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
            <span>© {currentYear} Rushikesh Patil. </span>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="hover-glow transition-smooth"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-primary opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;