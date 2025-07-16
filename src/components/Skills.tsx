
export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "Golang"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "React", "Express.js", "SQLAlchemy"]
    },
    {
      category: "Databases",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Oracle", "MongoDB"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "Power BI", "Microsoft Azure"]
    },
    {
      category: "Front-End Technologies",
      skills: ["HTML5", "CSS3", "React", "Responsive Design"]
    },
    {
      category: "Data & Analytics",
      skills: ["PySpark", "Data Validation", "Process Automation", "Machine Learning"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
