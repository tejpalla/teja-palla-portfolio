
import { useState } from "react";
import { Code, Star, Briefcase } from "lucide-react";

export const TechnicalSkills = () => {
  const [activeTab, setActiveTab] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming Languages & Frameworks",
      icon: Code,
      skills: [
        "Java", "Spring Boot", ".NET", ".NET MAUI", "C#", "Python", 
        "TensorFlow", "Keras", "Flask", "C++", "JavaScript", 
        "HTML", "CSS", "React", "TypeScript"
      ],
    },
    tools: {
      title: "Tools & Platforms",
      icon: Star,
      skills: [
        "Docker", "Kubernetes", "Jenkins", "Git", "Azure DevOps", 
        "Visual Studio", "Jupyter"
      ],
    },
    data: {
      title: "Data Analysis & Machine Learning",
      icon: Briefcase,
      skills: [
        "Model Training and Evaluation", "Feature Engineering", 
        "Data Preprocessing", "scikit-learn", "OpenCV", "NLP", 
        "Random Forest", "SVM"
      ],
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                    : "bg-white/5 backdrop-blur-xl border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:scale-105"
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl text-center hover:bg-white/10 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
              >
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
