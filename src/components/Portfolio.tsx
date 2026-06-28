import { ExternalLink, Github, Eye, Code, Database, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "Monitoring Tool",
      description: "A comprehensive web-based monitoring system that enables real-time tracking of projects, employee activities, task progress, and performance through a centralized dashboard with secure user management and reporting capabilities.",
      features: [
        "Real-Time Project Monitoring Dashboard: Features an interactive dashboard built with Spring Boot and JavaScript that provides live visibility into project progress, task completion status, employee assignments, and overall project health. Administrators can quickly identify delays, monitor ongoing activities, and make informed decisions through intuitive visual indicators.",
        "Role-Based Authentication & Access Control: Implements a secure authentication and authorization system using Spring Security to ensure that users access only the features and data relevant to their assigned roles.",
        "Task & Activity Tracking Engine: Enables comprehensive tracking of project tasks and employee activities by maintaining detailed logs of task assignments, status updates, completion timelines, and progress history.",
        "REST API-Driven Architecture: Built on a RESTful architecture using Spring Boot, allowing seamless communication between the frontend and backend.",
        "Comprehensive Reporting & Analytics: Generates detailed project reports and performance analytics by aggregating real-time monitoring data. Administrators can review project completion rates, employee productivity, pending tasks, and activity summaries to support better planning and strategic decision-making.",
        "Advanced Search & Status Management: Provides powerful search, filtering, and status management capabilities that allow users to quickly locate projects, employees, or specific tasks based on multiple criteria such as project name, status, assigned employee, or completion percentage."
      ],
      technologies: ["Java", "Firebase", "Spring Boot", "REST API", "HTML/CSS", "JavaScript"],
      category: "Enterprise Web Application",
      icon: Shield,
      highlights: [
        "Centralized monitoring dashboard",
        "Real-time project progress tracking",
        "Secure role-based authentication",
        "Admin dashboard with analytics",
        "Report generation and analytics",
        "RESTful API integration for seamless communication"
      ]
    },
    {
      title: "DeepGuard - A Deep Learning-Based Deepfake Detection System Using Mesonet Architeccure",
      description: "Comprehensive event planning and management platform with booking, scheduling, and user management features.",
      features: [
        "Computer Vision Pipeline: Utilizes OpenCV and Haar Cascade Classifiers to isolate, crop, and normalize human faces, filtering out background noise before AI inference.",
        "Neural Network Architecture: Powered by a custom-trained MesoNet-4 Convolutional Neural Network (CNN) to calculate the probability of media manipulation with high accuracy.",
        "Interactive Frame Integrity Graph: A dynamic React-based dashboard that visualizes the AI's confidence score across the video's timeline, complete with clickable nodes to identify exact corrupted timeframes.",
        "Client-Side PDF Report Generation: Allows users to export an official, formatted forensic analysis report in one click. The PDF generation is handled entirely by the browser (via CSS print directives), requiring zero additional server resources.",
        "Strict Input Validation: Features double-layered security (Frontend and Backend) that actively rejects unsupported or malicious files, strictly allowing only .mp4 and .avi formats.",
        "Stateless Privacy Protocol (Zero Data Retention): Built with a privacy-first backend. Videos are stored in a temporary RAM buffer just long enough for analysis, and are immediately and permanently deleted (os.remove()) once the verdict is calculated."
      ],
      technologies: ["Python", "Flask", "Rect", "Tailwind CSS", "JavaScript", "Bootstrap"],
      category: "Web Application",
      icon: Database,
      highlights: [
        "MesoNet-4 CNN architecture for deepfake detection",
        "Keras and TensorFlow for model training and inference",
        "Real-time video analysis with frame-by-frame scoring",
        "Interactive React dashboard for visualizing AI confidence scores",
        "Client-side PDF report generation for forensic analysis",
        "Strict input validation and stateless privacy protocol"
      ]
    }
  ];

  const getProjectIcon = (IconComponent: any, index: number) => {
    const colors = ["text-primary", "text-secondary", "text-accent"];
    return <IconComponent size={24} className={colors[index % colors.length]} />;
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing real-world applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-project hover-lift transition-smooth border-0 shadow-card"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-card border border-border flex items-center justify-center mr-4">
                        {getProjectIcon(project.icon, index)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {project.title}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-muted/50 text-muted-foreground border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Highlights */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Project Highlights</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div
                          key={highlightIndex}
                          className="flex items-center text-xs p-2 rounded-lg bg-muted/30 border border-border"
                        >
                          <Code size={12} className="mr-2 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Projects Completed", value: "10+", icon: Code, color: "primary" },
            { label: "Technologies Used", value: "15+", icon: Database, color: "secondary" },
            { label: "Lines of Code", value: "50K+", icon: ExternalLink, color: "accent" },
            { label: "Happy Clients", value: "5+", icon: Shield, color: "primary" }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  stat.color === 'primary' ? 'bg-gradient-primary' :
                  stat.color === 'secondary' ? 'bg-gradient-secondary' : 
                  'bg-gradient-to-r from-accent to-primary'
                } shadow-glow`}>
                  <Icon size={24} className="text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-tech rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-gradient-secondary">Interested in My Work?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss your next project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-6 py-2 glow-primary transition-smooth"
              >
                Start a Project
              </Button>
              <Button 
                variant="outline"
                className="border-border hover:bg-muted/50 transition-smooth px-6 py-2"
              >
                <ExternalLink size={16} className="mr-2" />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;