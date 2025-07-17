
export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Hi! I'm Giancarlo Brandalise, an Information Systems student based in Porto Alegre, Brazil. 
            I'm passionate about turning data into meaningful insights and using technology to solve real-world problems. 
            With hands-on experience in both data analytics and software development, I bring a versatile skill set 
            that bridges the gap between business needs and technical solutions.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Currently, I work as a Data Analytics Intern at White Cube, where I handle data validation, 
            process automation, and the creation of interactive dashboards using Power BI. My daily work involves 
            leveraging Python and PySpark, working with relational databases (SQL Server, MySQL), and contributing 
            to data-driven decision-making.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            Previously, I had the opportunity to work at Martinelli Advogados as an R&D Consultant Intern, 
            where I focused on managing tax incentive projects related to technology. That experience deepened 
            my understanding of APIs, frameworks, and the inner workings of IT-oriented businesses.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-justify">
            I'm comfortable with technologies like Java, Python, and JavaScript, and have built projects using 
            frameworks such as Spring Boot and React. I also have experience with the full MERN stack, 
            cloud platforms like Microsoft Azure, and various database systems.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Whether it's building a backend API, cleaning and analyzing complex datasets, or designing 
            user-friendly dashboards, I enjoy every step of the process. I'm always looking to grow, 
            learn, and collaborate on impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};
