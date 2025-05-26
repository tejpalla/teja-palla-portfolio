
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
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Recommendations
          </h2>
          <p className="text-xl text-gray-400">What colleagues and collaborators say</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-[0_0_50px_rgba(6,182,212,0.1)] transition-all duration-500">
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-300 text-center mb-8 leading-relaxed">
                "{recommendations[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-cyan-400 text-lg">{recommendations[currentIndex].name}</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                onClick={prevRecommendation}
                className="flex items-center gap-2 bg-white/5 border-white/20 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-300"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-3">
                {recommendations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? "bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                onClick={nextRecommendation}
                className="flex items-center gap-2 bg-white/5 border-white/20 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 hover:border-transparent transition-all duration-300"
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
