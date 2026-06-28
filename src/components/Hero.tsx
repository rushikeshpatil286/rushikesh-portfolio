import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile.png';
import profileImage from "../assets/profile.png";

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  
  const skills = [
    "Java Developer",
    "React Front-End Specialist", 
    "AI Integrator",
    "Backend Engineer",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Rushikesh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6">
                <span className="text-gradient-secondary">Aspiring Software Engineer</span>
              </h2>
              
              {/* Dynamic Typing Effect */}
              <div className="h-12 flex items-center justify-center lg:justify-start">
                <span className="text-xl text-muted-foreground mr-2">I'm a </span>
                <span className="text-xl font-semibold text-primary min-w-0">
                  {skills[currentSkill]}
                </span>
                <span className="animate-pulse text-primary ml-1">|</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Innovative Thinker | Eager Learner | Dedicated to creating impactful digital solutions 
              with cutting-edge technologies and clean, efficient code.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-4 mb-8">
              <Button variant="outline" size="sm" className="hover-glow transition-smooth" asChild>
                <a href="https://github.com/rushikeshpatil286" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover-glow transition-smooth" asChild>
                <a href="https://www.linkedin.com/in/rushikesh-patil-1178b6270/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="hover-glow transition-smooth" asChild>
                <a href="mailto:patilrushikesh1983@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-3 glow-primary transition-smooth"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToAbout}
                className="border-border hover:bg-muted/50 transition-smooth px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
                
                {/* Profile image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-floating">
                  <img
                     src={profileImage}
                     alt="Rushikesh Kiran Patil"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-primary rounded-full animate-float shadow-glow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-secondary rounded-full animate-float shadow-glow" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-accent rounded-full animate-float shadow-glow" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;