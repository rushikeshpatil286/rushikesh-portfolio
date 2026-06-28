import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Rushikesh Patil",
      href: "mailto:patilrushikesh1983@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9518792607",
      href: "tel:+919518792607",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Rushikesh Patil",
      href:  "https://www.linkedin.com/in/rushikesh-patil-1178b6270/",
      color: "accent"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@RushikeshPatil",
      href:  "https://github.com/rushikeshPatil286",
      color: "primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        action: <CheckCircle className="h-5 w-5 text-primary" />
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "text-primary bg-primary/10 border-primary/20 hover:bg-primary/20",
      secondary: "text-secondary bg-secondary/10 border-secondary/20 hover:bg-secondary/20",
      accent: "text-accent bg-accent/10 border-accent/20 hover:bg-accent/20"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                <span className="text-gradient-secondary">Let's Connect</span>
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply have a conversation about technology. Feel free to reach out through any of 
                the channels below.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Card 
                    key={index}
                    className="card-tech hover-lift transition-smooth border-0 shadow-card"
                  >
                    <CardContent className="p-6">
                      <a 
                        href={contact.href}
                        className="flex items-center group"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 border transition-smooth ${getColorClasses(contact.color)}`}>
                          <Icon size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          <div className="font-medium text-foreground group-hover:text-primary transition-smooth">
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="card-tech border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-medium text-foreground">
                      Pune, Maharashtra, India
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="card-tech border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">
                  <span className="text-gradient-secondary">Send a Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border focus:border-primary transition-smooth"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border focus:border-primary transition-smooth"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-muted/50 border-border focus:border-primary transition-smooth resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 glow-primary transition-smooth"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-tech rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              <span className="text-gradient">Ready to Build Something Amazing?</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm here to help turn your ideas into reality. Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open('mailto:patilrushikesh1983@gmail.com', '_blank')}
                className="bg-gradient-secondary hover:opacity-90 text-secondary-foreground font-semibold px-8 py-3 transition-smooth"
              >
                <Mail size={18} className="mr-2" />
                Email Directly
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://www.linkedin.com/in/rushikesh-patil-1178b6270/', '_blank')}
                className="border-border hover:bg-muted/50 transition-smooth px-8 py-3"
              >
                <Linkedin size={18} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;