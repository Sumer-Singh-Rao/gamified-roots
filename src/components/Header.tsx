import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-gradient-primary/95 backdrop-blur-md shadow-lg" 
          : "bg-gradient-primary"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-black text-white">
              Hack<span className="text-accent">NRun</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {["Home", "Features", "Subjects", "Demo", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white font-semibold hover:text-accent transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <Button
            variant="default"
            className="bg-magenta hover:bg-aqua text-white font-bold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => scrollToSection("demo")}
          >
            Try Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;