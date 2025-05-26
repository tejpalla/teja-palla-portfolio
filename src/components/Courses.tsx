
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Courses Taken</h2>
          <p className="text-lg text-gray-600">Academic coursework and specializations</p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border hover:shadow-md hover:bg-white transition-all duration-300"
            >
              <Book className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
