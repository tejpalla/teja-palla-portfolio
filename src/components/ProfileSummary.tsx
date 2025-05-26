
import { CheckCircle } from "lucide-react";

export const ProfileSummary = () => {
  const highlights = [
    "Over 1 year of experience in software development, focusing on back-end solutions",
    "Developed robust skill set through diverse roles in system development, machine learning, and cloud computing",
    "Strong problem-solving skills and adaptability, promoting teamwork and adherence to deadlines",
    "Winner of an international hackathon in Sweden; built a fully functional prototype in 2 days",
    "Proficient in Python, Java, and C#, enabling versatile application development",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
              Profile Summary
            </h2>
            <p className="text-xl text-gray-400">Professional journey and key achievements</p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-6 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl group-hover:from-green-400/30 group-hover:to-emerald-400/30 transition-all duration-300">
                    <CheckCircle className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
