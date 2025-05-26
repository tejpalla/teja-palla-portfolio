
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600">Technologies and tools I work with</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === key
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <category.icon className="h-5 w-5" />
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategories[activeTab as keyof typeof skillCategories].skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border text-center hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <span className="text-gray-900 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
