import { useState } from 'react';
import { ChevronDown, Search, Code, Server, Database, Plug, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services = [
    {
      title: "Consultation & Requirement Analysis",
      icon: Search,
      description: "Strategic planning and technical consultation for your projects",
      details: [
        "Technical feasibility analysis",
        "Architecture planning and design",
        "Technology stack recommendations",
        "Project timeline and milestone planning",
        "Risk assessment and mitigation strategies"
      ],
      color: "primary"
    },
    {
      title: "Front-End Development",
      icon: Code,
      description: "Modern, responsive web applications with cutting-edge technologies",
      details: [
        "React.js application development",
        "Responsive UI/UX implementation",
        "Component-based architecture",
        "State management with Redux/Context",
        "Performance optimization and SEO"
      ],
      color: "secondary"
    },
    {
      title: "Back-End Development",
      icon: Server,
      description: "Robust server-side solutions and API development",
      details: [
        "RESTful API development with Spring Boot",
        "Microservices architecture",
        "Authentication and authorization",
        "Server optimization and scaling",
        "Cloud deployment and DevOps"
      ],
      color: "accent"
    },
    {
      title: "Database Design & Management",
      icon: Database,
      description: "Efficient data storage and management solutions",
      details: [
        "Database schema design and optimization",
        "MySQL and PostgreSQL development",
        "Data migration and backup strategies",
        "Performance tuning and indexing",
        "NoSQL database integration"
      ],
      color: "primary"
    },
    {
      title: "API Integration & Third-Party Services",
      icon: Plug,
      description: "Seamless integration with external services and APIs",
      details: [
        "Third-party API integration",
        "Payment gateway implementation",
        "Social media platform integration",
        "Cloud service integration (AWS, Azure)",
        "Webhook and real-time data processing"
      ],
      color: "secondary"
    },
    {
      title: "Technical Consultation",
      icon: Users,
      description: "Expert guidance for your technical decisions and challenges",
      details: [
        "Code review and optimization",
        "Technology migration planning",
        "Performance bottleneck analysis",
        "Security audit and recommendations",
        "Team mentoring and training"
      ],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10 border-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20",
      accent: "text-accent bg-accent/10 border-accent/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === index;
            
            return (
              <Card 
                key={index}
                className="card-tech hover-lift transition-smooth border-0 shadow-card overflow-hidden"
              >
                <CardContent className="p-0">
                  <Button
                    variant="ghost"
                    onClick={() => toggleService(index)}
                    className="w-full p-6 h-auto justify-between hover:bg-muted/20 transition-smooth rounded-none"
                  >
                    <div className="flex items-center text-left flex-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 border ${getColorClasses(service.color)}`}>
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </Button>
                  
                  {/* Expandable Content */}
                  <div className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <div className="border-t border-border pt-4">
                        <ul className="space-y-3">
                          {service.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex}
                              className="flex items-start"
                            >
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                service.color === 'primary' ? 'bg-primary' :
                                service.color === 'secondary' ? 'bg-secondary' : 'bg-accent'
                              }`}></div>
                              <span className="text-muted-foreground text-sm">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-tech rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-gradient-secondary">Ready to Start Your Project?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you achieve your goals with modern, scalable solutions
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 glow-primary transition-smooth"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;