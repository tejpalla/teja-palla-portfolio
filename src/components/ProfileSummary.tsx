
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Profile Summary</h2>
            <p className="text-lg text-gray-600">Professional journey and key achievements</p>
          </div>

          <div className="space-y-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
