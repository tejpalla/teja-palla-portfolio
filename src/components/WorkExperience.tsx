
import { useState } from "react";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

export const WorkExperience = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const experiences = [
    {
      title: "Back-end Developer",
      company: "noQ",
      location: "Stockholm, Sweden (Remote from India)",
      period: "Jan 2025 – Present",
      responsibilities: [
        "Designed digital solutions addressing homelessness",
        "Architected scalable back-end services using Java and Spring Boot",
        "Collaborated with cross-functional teams to deliver inclusive software",
        "Conducted rigorous testing to ensure system reliability",
      ],
      achievement: "Boosted service performance by 20%",
    },
    {
      title: "Full Stack Developer",
      company: "NovaCast Systems",
      location: "Ronneby, Sweden",
      period: "Sep 2023 – Jul 2024",
      responsibilities: [
        "Created cross-platform metallurgical process control application",
        "Developed machine learning models to optimize process parameters",
        "Facilitated real-time monitoring, reducing manual errors",
        "Collaborated with teams to translate requirements into technical specifications",
      ],
      achievement: "Reduced manual errors through real-time monitoring system",
    },
    {
      title: "Summer Intern",
      company: "BSNL",
      location: "Hyderabad, India",
      period: "May 2019 – Jun 2019",
      responsibilities: [
        "Developed and evaluated machine learning models",
        "Conducted exploratory data analysis to uncover insights",
      ],
      achievement: "Successfully completed first industry exposure",
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400">Professional journey and contributions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500">
              <div
                className="p-8 cursor-pointer hover:bg-white/5 transition-all duration-300"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
                    <p className="text-xl font-semibold text-cyan-400 mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-3">{exp.location}</p>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 p-2 bg-white/5 rounded-xl">
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="h-6 w-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-cyan-400" />
                    )}
                  </div>
                </div>
              </div>

              {expandedItems.includes(index) && (
                <div className="px-8 pb-8 bg-white/5 border-t border-white/10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-4">Key Responsibilities:</h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-400 mb-2">Key Achievement:</h4>
                      <p className="text-green-300">{exp.achievement}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
