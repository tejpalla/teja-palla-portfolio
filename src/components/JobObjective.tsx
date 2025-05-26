
import { Briefcase } from "lucide-react";

export const JobObjective = () => {
  return (
    <section id="objective" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-500">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                  Job Objective
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Highly skilled & versatile software developer with strong expertise in back-end 
                  technologies like Java and Python, Spring Boot, complemented by front-end integration 
                  skills. Focused on building scalable, impactful applications that address real-world 
                  tech challenges and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
