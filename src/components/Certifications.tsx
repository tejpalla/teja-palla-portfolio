
import { Award } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    "Oracle – Cloud Infrastructure Foundation Associate",
    "HackerRank – SQL (Intermediate) Certificate",
    "NPTEL Swayam – Computer Networks",
    "DeepLearning.Ai – Neural Networks and Deep Learning",
    "Udemy – Linux Fundamentals",
    "SSC – Merit Certificate",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
          <p className="text-lg text-gray-600">Professional achievements and learning milestones</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg border hover:shadow-md hover:bg-white transition-all duration-300"
            >
              <Award className="h-8 w-8 text-yellow-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
