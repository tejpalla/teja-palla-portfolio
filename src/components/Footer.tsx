
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-black border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://github.com/saitejapalla"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/sai-teja-palla"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:pallatej7@gmail.com"
              className="group p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
          
          <p className="text-gray-400">
            © 2025 Sai Teja Palla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
