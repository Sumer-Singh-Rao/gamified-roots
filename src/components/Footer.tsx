import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    "Home", "Features", "Subjects", "Demo", "Contact"
  ];

  const resources = [
    "Documentation", "API Reference", "Tutorials", "Support", "FAQ"
  ];

  return (
    <footer id="contact" className="bg-gradient-hero text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-black text-white mb-4">
                Hack<span className="text-accent">NRun</span>
              </h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Revolutionizing rural education through gamified STEM learning. 
                Making quality education accessible to every student, everywhere.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">
              Quick Links
            </h3>
            <div className="w-12 h-1 bg-aqua mb-6"></div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-accent transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-accent">
              Contact Us
            </h3>
            <div className="w-12 h-1 bg-aqua mb-6"></div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail className="w-5 h-5 text-aqua" />
                <span>contact@hacknrun.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone className="w-5 h-5 text-aqua" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin className="w-5 h-5 text-aqua" />
                <span>SIH 2024 - Team ID: 25048</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-center md:text-left mb-4 md:mb-0">
              &copy; 2024 HackNRun - Smart India Hackathon. All rights reserved.
            </p>
            
            {/* Achievement Badge */}
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-white/90 font-semibold text-sm">
                Built for Rural Education
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;