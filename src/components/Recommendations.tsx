
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: "StefanLM Eriksson",
      text: "Sai Teja is a very talented system developer, fast learner, good team player, very nice person. I can warmly recommend Sai Teja.",
    },
    {
      name: "Angéla Varga-Szatmári",
      text: "Teja impressed me with his technical knowledge and expertise during the Hecatlon event. His ability to share understanding with team members was invaluable.",
    },
    {
      name: "Karina Rimkuse",
      text: "Sai Teja showed solid technical knowledge, analytical thinking, and problem-solving skills. Extremely flexible, reliable, and genial team member.",
    },
    {
      name: "Evelina Eriksson",
      text: "Tej is a professional with impressive depth of knowledge and problem-solving skills. Quickly worked with new concepts and collaborated effectively.",
    },
    {
      name: "Elias Bakhshi",
      text: "Sai Teja's technical expertise and problem-solving skills significantly contributed to winning the hackathon. Highly recommend for strong work ethic and dedication.",
    },
  ];

  const nextRecommendation = () => {
    setCurrentIndex((prev) => (prev + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommendations</h2>
          <p className="text-lg text-gray-600">What colleagues and collaborators say</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-gray-50 rounded-lg p-8 border">
              <div className="flex items-center justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
                "{recommendations[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-gray-900">{recommendations[currentIndex].name}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                onClick={prevRecommendation}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                {recommendations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextRecommendation}
                className="flex items-center gap-2"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
