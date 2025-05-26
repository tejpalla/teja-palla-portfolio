
import { Code, Star, Users, Briefcase, Database, Zap, Cpu, Shield, Globe, Settings, GitBranch } from "lucide-react";

export const CoreCompetencies = () => {
  const competencies = [
    { title: "Software Development Lifecycle", icon: Code, description: "End-to-end development process management" },
    { title: "Cloud Computing & DevOps", icon: Star, description: "Scalable cloud solutions and automation" },
    { title: "Requirement Gathering & Analysis", icon: Users, description: "Translating business needs into technical specs" },
    { title: "Code Review & Development", icon: GitBranch, description: "Quality assurance and best practices" },
    { title: "Data Analysis & Visualization", icon: Database, description: "Insights through data-driven approaches" },
    { title: "Machine Learning Applications", icon: Briefcase, description: "AI solutions for real-world problems" },
    { title: "Data Structures & Algorithms", icon: Cpu, description: "Efficient problem-solving techniques" },
    { title: "System Architecture Design", icon: Settings, description: "Scalable and maintainable system design" },
    { title: "User Experience Optimization", icon: Globe, description: "Creating intuitive user interfaces" },
    { title: "Database Management", icon: Database, description: "Efficient data storage and retrieval" },
    { title: "API Integration & Version Control", icon: Zap, description: "Seamless system integration" },
  ];

  return (
    <section id="competencies" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-400">Key skills and expertise areas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competencies.map((competency, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:from-cyan-400/30 group-hover:to-blue-400/30 transition-all duration-300">
                    <competency.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {competency.title}
                  </h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
