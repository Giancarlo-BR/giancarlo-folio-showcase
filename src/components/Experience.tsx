
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "White Cube",
      period: "April 2025 – Present",
      description: [
        "Data validation and quality assurance",
        "Process automation and optimization",
        "Database management with SQL Server and MySQL",
        "Machine Learning implementation using PySpark",
        "Development of interactive dashboards in Power BI"
      ]
    },
    {
      title: "R&D Consultant Intern",
      company: "Martinelli Advogados",
      period: "April 2024 – December 2024",
      description: [
        "Management of tax incentives (Lei do Bem, MOVER, Lei de Informática)",
        "Advanced Excel usage for data analysis and reporting",
        "Knowledge in APIs, software management, and frameworks",
        "Research on IT trends and emerging technologies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{exp.title}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  <p className="text-gray-600">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
