
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
    <section id="education" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-400">Academic foundation in computer science</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Futuristic timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-12">
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Glowing timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
                  
                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 hover:scale-105">
                      <div className="text-sm font-bold text-cyan-400 mb-3 tracking-wider">{edu.year}</div>
                      <h3 className="text-2xl font-bold text-white mb-3">{edu.degree}</h3>
                      <p className="text-gray-300 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
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
