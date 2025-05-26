
import { Phone, Mail, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="animate-fade-in">
            {/* Name with better font rendering */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-scale-in leading-relaxed tracking-normal">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Sai Teja Palla
              </span>
            </h1>
            
            {/* Subtitle with neon effect */}
            <h2 className="text-2xl md:text-4xl text-cyan-400 mb-8 font-light tracking-wider">
              <span className="relative">
                Software Developer
                <div className="absolute inset-0 blur-sm bg-cyan-400/30"></div>
              </span>
            </h2>
            
            {/* Futuristic quote box */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
                  "Building scalable, impactful applications that address real-world tech challenges."
                </p>
              </div>
            </div>
          </div>
          
          {/* Futuristic contact buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              onClick={() => window.open("tel:+917842951975")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Phone className="h-5 w-5 mr-2" />
              +91 7842951975
            </Button>
            
            <Button
              variant="outline"
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              onClick={() => window.open("mailto:pallatej7@gmail.com")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Mail className="h-5 w-5 mr-2" />
              pallatej7@gmail.com
            </Button>
            
            <Button
              variant="outline"
              className="group relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              onClick={() => window.open("https://linkedin.com/in/sai-teja-palla", "_blank")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
