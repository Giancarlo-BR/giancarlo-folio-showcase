
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Certifications = () => {
  const certifications = [
    {
      title: "Azure Fundamentals (AZ-900)",
      issuer: "Udemy",
      date: "April 2025",
      description: "Comprehensive understanding of cloud services and Azure fundamentals"
    },
    {
      title: "Discover English Program",
      issuer: "English course in Australia",
      date: "March to September 2023",
      description: "Intensive English language program completed in Australia"
    },
    {
      title: "HTML & CSS Certification",
      issuer: "Hashtag Programming",
      date: "May 2025",
      description: "Advanced web development skills in HTML5 and CSS3"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-gray-900">{cert.title}</CardTitle>
                <div className="space-y-1">
                  <p className="text-primary font-semibold">{cert.issuer}</p>
                  <p className="text-gray-600">{cert.date}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
