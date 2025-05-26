
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
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_80%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-xl text-gray-400">Professional achievements and learning milestones</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-xl group-hover:from-yellow-400/30 group-hover:to-amber-400/30 transition-all duration-300">
                  <Award className="h-8 w-8 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                </div>
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
