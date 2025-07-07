
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/74c6d353-1d50-47c1-987d-5553a51626a6.png" 
                alt="Giancarlo Brandalise"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Giancarlo Brandalise
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Information Systems Student & Data Analytics Specialist
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Porto Alegre - RS - Brazil</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+55 (51) 99956-2418</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>gian6155@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="https://github.com/Giancarlo-BR" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={20} />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/giancarlo-brandalise" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
