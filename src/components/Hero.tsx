
import { Phone, Email, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Sai Teja Palla
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Software Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              "Building scalable, impactful applications that address real-world tech challenges."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button
              className="flex items-center gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open("tel:+917842951975")}
            >
              <Phone className="h-4 w-4" />
              +91 7842951975
            </Button>
            
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open("mailto:pallatej7@gmail.com")}
            >
              <Email className="h-4 w-4" />
              pallatej7@gmail.com
            </Button>
            
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:scale-105 transition-transform"
              onClick={() => window.open("https://linkedin.com/in/sai-teja-palla", "_blank")}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
