
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            I'm an Information Systems student with experience in data analysis, software development 
            (Java, Python, MERN), and solid knowledge in tools like Power BI, SQL, and Azure. 
            I have strong communication, teamwork, and problem-solving skills.
          </p>
          <p className="text-lg text-gray-600 mt-6">
            Currently working as a Data Analytics Intern at White Cube, where I focus on data validation, 
            process automation, and creating interactive dashboards. I'm passionate about leveraging 
            technology to solve complex problems and drive data-driven decisions.
          </p>
        </div>
      </div>
    </section>
  );
};
