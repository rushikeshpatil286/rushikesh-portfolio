import { GraduationCap, Award, Target, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "MCA (2026)",
      description: "Trinity Academy of Engineering",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "BCA (2023)",
      description: "Sinhgad Institute",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Tech Stack",
      description: "Java, Python, React, Spring Boot, and more",
      color: "text-accent"
    },
    {
      icon: Target,
      title: "Focus",
      description: "Innovative digital solutions & problem-solving",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with a drive for innovation and excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="card-tech rounded-2xl p-8 hover-lift transition-smooth">
              <h3 className="text-2xl font-semibold mb-6 text-gradient-secondary">My Journey</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm <span className="text-primary font-semibold">Rushikesh Patil</span>, 
                  a passionate and dedicated software engineer with a strong foundation in coding, 
                  problem-solving, and web development. 🎯
                </p>
                <p>
                  My journey in technology began with a keen interest in creating impactful digital 
                  solutions, and I have since honed my skills through hands-on projects and 
                  certifications.
                </p>
                <div className="bg-gradient-primary/10 rounded-lg p-4 border-l-4 border-primary">
                  <p className="text-foreground font-medium italic">
                    "I'm excited to collaborate, learn, and grow in the tech community. 
                    Let's build something amazing together!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index} 
                  className="card-tech hover-lift transition-smooth border-0 shadow-card"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-card border border-border flex items-center justify-center ${highlight.color}`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Education & Goals</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
              
              <div className="space-y-12">
                {/* Education Timeline Items */}
                <div className="flex items-center justify-between">
                  <div className="w-5/12 text-right">
                    <div className="card-tech rounded-xl p-6 hover-lift transition-smooth">
                      <h4 className="text-xl font-semibold text-primary mb-2">BCA Completed</h4>
                      <p className="text-muted-foreground">Sinhgad Institute - 2023</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Strong foundation in computer applications and programming
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center relative z-10 shadow-glow">
                    <div className="w-4 h-4 bg-primary-foreground rounded-full"></div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-5/12"></div>
                  
                  <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center relative z-10 shadow-glow">
                    <div className="w-4 h-4 bg-secondary-foreground rounded-full"></div>
                  </div>
                  
                  <div className="w-5/12">
                    <div className="card-tech rounded-xl p-6 hover-lift transition-smooth">
                      <h4 className="text-xl font-semibold text-secondary mb-2">MCA Completed</h4>
                      <p className="text-muted-foreground">Trinity Academy - Expected 2026</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Advanced computer applications with focus on emerging technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;