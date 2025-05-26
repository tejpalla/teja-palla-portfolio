
export const Education = () => {
  const educationData = [
    {
      year: "2023",
      degree: "Masters in Computer Science",
      institution: "Blekinge Institute of Technology",
      location: "Sweden",
    },
    {
      year: "2021",
      degree: "Bachelors in Computer Science",
      institution: "Jawaharlal Nehru Technological University",
      location: "Hyderabad, India",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600">Academic foundation in computer science</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-300"></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 rounded-full border-4 border-white"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="text-sm font-semibold text-gray-900 mb-2">{edu.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <p className="text-gray-700 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-600">{edu.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
