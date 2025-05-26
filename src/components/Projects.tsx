
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
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-lg text-gray-600">Featured work and technical contributions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <Code className="h-6 w-6 text-gray-600" />
                </div>
                
                <p className="text-gray-700 mb-4">{project.overview}</p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-1">Impact:</h4>
                  <p className="text-green-700">{project.impact}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full"
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
