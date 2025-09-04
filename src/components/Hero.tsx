import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";
import { Gamepad2, Sparkles, Target } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Gamepad2 className="w-16 h-16 text-accent opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-12 h-12 text-aqua opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Target className="w-14 h-14 text-magenta opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Learning Made{" "}
            <span className="text-gradient-accent">Fun & Exciting!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-semibold leading-relaxed">
            Gamified <span className="text-accent font-bold">STEM education</span> for rural students in grades 6-12.
            <br />
            Learn anytime, anywhere - even offline!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-magenta hover:bg-aqua text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-110 hover-glow shadow-lg"
            >
              Start Learning Now
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 border-white text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-accent mb-2">15%+</div>
              <div className="text-white/80 font-semibold">Engagement Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-accent mb-2">5+</div>
              <div className="text-white/80 font-semibold">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-accent mb-2">100%</div>
              <div className="text-white/80 font-semibold">Offline Compatible</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;