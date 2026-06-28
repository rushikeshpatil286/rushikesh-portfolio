import { Code, Database, Globe, Server, Wrench, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "HTML", "CSS", "JavaScript"],
      color: "primary"
    },
    {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: ["Spring", "Spring Boot", "Hibernate", "Git", "React"],
      color: "secondary"
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MySQL", "SQL", "NoSQL", "PostgreSQL"],
      color: "accent"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["React", "HTML5", "CSS3", "JavaScript", "RESTful APIs"],
      color: "primary"
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Spring Boot", "API Development", "Microservices", "Authentication"],
      color: "secondary"
    },
    {
      title: "Other Skills",
      icon: Zap,
      skills: ["Problem Solving", "Algorithms", "Data Structures", "System Design"],
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 hover:border-primary text-primary bg-primary/5",
      secondary: "border-secondary/30 hover:border-secondary text-secondary bg-secondary/5",
      accent: "border-accent/30 hover:border-accent text-accent bg-accent/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="card-tech hover-lift transition-smooth border-0 shadow-card group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(category.color)}`}>
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-smooth hover:scale-105 ${getColorClasses(category.color)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skill Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-primary-foreground">5+</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Programming Languages</h4>
            <p className="text-muted-foreground">Proficient in multiple languages</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-secondary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-secondary-foreground">3+</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Years Learning</h4>
            <p className="text-muted-foreground">Continuous skill development</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-2xl font-bold text-accent-foreground">10+</span>
            </div>
            <h4 className="text-xl font-semibold text-foreground mb-2">Projects Built</h4>
            <p className="text-muted-foreground">Hands-on practical experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;