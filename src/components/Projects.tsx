
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "MERN Stack E-commerce Platform",
      description: "Full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/Giancarlo-BR",
      liveUrl: "#"
    },
    {
      title: "Spring Boot REST API",
      description: "Robust RESTful API built with Java Spring Boot, featuring comprehensive CRUD operations, JWT authentication, and PostgreSQL integration for a task management system.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Maven"],
      githubUrl: "https://github.com/Giancarlo-BR",
      liveUrl: "#"
    },
    {
      title: "Python Data Analysis Tool",
      description: "Data analysis application using Python with SQLAlchemy for database operations, featuring automated reporting and data visualization capabilities.",
      technologies: ["Python", "SQLAlchemy", "Pandas", "Matplotlib", "PostgreSQL"],
      githubUrl: "https://github.com/Giancarlo-BR",
      liveUrl: "#"
    },
    {
      title: "Responsive Portfolio Website",
      description: "Modern, responsive portfolio website built with pure HTML5, CSS3, and vanilla JavaScript. Features smooth animations and mobile-first design.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/Giancarlo-BR",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            Explore my latest work showcasing MERN stack, Java Spring Boot, Python, and pure HTML/CSS projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="https://github.com/Giancarlo-BR" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
