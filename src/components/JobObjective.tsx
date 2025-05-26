
import { Briefcase } from "lucide-react";

export const JobObjective = () => {
  return (
    <section id="objective" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Job Objective</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Highly skilled & versatile software developer with strong expertise in back-end 
                technologies like Java and Python, Spring Boot, complemented by front-end integration 
                skills. Focused on building scalable, impactful applications that address real-world 
                tech challenges and drive innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
