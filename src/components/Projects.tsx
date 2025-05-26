
import { Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "ToDo Management Platform",
      overview: "Full-stack task management application with role-based access control.",
      impact: "Enhanced productivity and reduced task tracking complexity.",
      techStack: ["Spring Boot", "Hibernate", "MySQL", "React", "Bootstrap", "Spring Security"],
      github: "#",
    },
    {
      title: "Heart Disease Prediction System",
      overview: "ML-based application predicting heart disease risks.",
      impact: "Achieved 85% prediction accuracy aiding early detection.",
      techStack: ["Python", "Flask", "Machine Learning"],
      github: "#",
    },
    {
      title: "Server Manager Platform",
      overview: "Server monitoring solution for IT administrators.",
      impact: "Improved operational efficiency with centralized control.",
      techStack: ["Java", "Spring Boot", "Angular", "MySQL", "Spring Data JPA"],
      github: "#",
    },
    {
      title: "Catering Decision Support System",
      overview: "Data-driven system optimizing catering expenditure.",
      impact: "Enabled cost savings and sustainability through improved forecasting.",
      techStack: ["Python", "Machine Learning", "Data Analysis"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Projects
          </h2>
          <p className="text-xl text-gray-400">Featured work and technical contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                  <div className="p-2 bg-white/5 rounded-xl group-hover:bg-cyan-500/20 transition-all duration-300">
                    <Code className="h-6 w-6 text-cyan-400" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{project.overview}</p>
                
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-4 rounded-xl mb-6">
                  <h4 className="font-semibold text-green-400 mb-2">Impact:</h4>
                  <p className="text-green-300">{project.impact}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-white mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full bg-white/5 border-white/20 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-300"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="h-4 w-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
