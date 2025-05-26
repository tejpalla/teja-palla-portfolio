
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/saitejapalla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/sai-teja-palla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:pallatej7@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
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
