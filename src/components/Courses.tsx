
import { Book } from "lucide-react";

export const Courses = () => {
  const courses = [
    "Mathematical Statistics",
    "Database Management Systems",
    "Artificial Intelligence",
    "Machine Learning",
    "Software Architecture & Design Patterns",
    "Data Structures & Algorithms",
    "Operating Systems",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Courses Taken
          </h2>
          <p className="text-xl text-gray-400">Academic coursework and specializations</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl group-hover:from-blue-400/30 group-hover:to-indigo-400/30 transition-all duration-300">
                  <Book className="h-5 w-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
              </div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
