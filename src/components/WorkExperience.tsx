
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
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">Professional journey and contributions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="p-6 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-1">{exp.company}</p>
                    <p className="text-gray-600 mb-2">{exp.location}</p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="h-6 w-6 text-gray-600" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-600" />
                    )}
                  </div>
                </div>
              </div>

              {expandedItems.includes(index) && (
                <div className="p-6 bg-white border-t border-gray-200">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-1">Key Achievement:</h4>
                      <p className="text-green-700">{exp.achievement}</p>
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
