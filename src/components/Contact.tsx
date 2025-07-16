
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gian6155@gmail.com",
      href: "mailto:gian6155@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+55 (51) 99956-2418",
      href: "tel:+5551999562418"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Porto Alegre - RS - Brazil",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Giancarlo-BR"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/giancarlo-brandalise"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Let's connect and discuss opportunities in data analytics and software development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="text-primary" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href !== "#" ? (
                      <a 
                        href={item.href} 
                        className="text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-foreground">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="w-full justify-start"
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <link.icon className="mr-3" size={20} />
                    {link.label}
                  </a>
                </Button>
              ))}
              <Button asChild size="lg" className="w-full mt-6">
                <a href="mailto:gian6155@gmail.com">
                  <Mail className="mr-2" size={20} />
                  Send Email
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-muted-foreground">
            © 2025 Giancarlo Brandalise. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
