
import { Code, Star, Users, Briefcase } from "lucide-react";

export const CoreCompetencies = () => {
  const competencies = [
    { title: "Software Development Lifecycle", icon: Code, description: "End-to-end development process management" },
    { title: "Cloud Computing & DevOps", icon: Star, description: "Scalable cloud solutions and automation" },
    { title: "Requirement Gathering & Analysis", icon: Users, description: "Translating business needs into technical specs" },
    { title: "Code Review & Development", icon: Code, description: "Quality assurance and best practices" },
    { title: "Data Analysis & Visualization", icon: Star, description: "Insights through data-driven approaches" },
    { title: "Machine Learning Applications", icon: Briefcase, description: "AI solutions for real-world problems" },
    { title: "Data Structures & Algorithms", icon: Code, description: "Efficient problem-solving techniques" },
    { title: "System Architecture Design", icon: Star, description: "Scalable and maintainable system design" },
    { title: "User Experience Optimization", icon: Users, description: "Creating intuitive user interfaces" },
    { title: "Database Management", icon: Briefcase, description: "Efficient data storage and retrieval" },
    { title: "API Integration & Version Control", icon: Code, description: "Seamless system integration" },
  ];

  return (
    <section id="competencies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Competencies</h2>
          <p className="text-lg text-gray-600">Key skills and expertise areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-lg border hover:shadow-lg hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <competency.icon className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-800">
                    {competency.title}
                  </h3>
                  <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {competency.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
