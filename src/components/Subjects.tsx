import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Atom, TestTube, Dna } from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      icon: Calculator,
      title: "Mathematics",
      description: "Explore algebra, geometry, calculus and more through interactive puzzles and challenges that make numbers come alive.",
      bgColor: "bg-primary/10",
      iconColor: "text-primary"
    },
    {
      icon: Atom,
      title: "Physics",
      description: "Discover the laws of motion, energy, and electricity with fun simulations and real-world experiments.",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary"
    },
    {
      icon: TestTube,
      title: "Chemistry",
      description: "Experiment with elements and reactions in our safe virtual lab environment with stunning 3D visuals.",
      bgColor: "bg-aqua/10",
      iconColor: "text-aqua"
    },
    {
      icon: Dna,
      title: "Biology",
      description: "Journey through cells, genetics, and ecosystems with immersive interactive exploration tools.",
      bgColor: "bg-magenta/10",
      iconColor: "text-magenta"
    }
  ];

  return (
    <section id="subjects" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-aqua rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-magenta rounded-full blur-2xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            STEM Subjects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive curriculum covering all essential science and mathematics topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card 
              key={index}
              className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-float overflow-hidden"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <CardContent className="p-8 text-center relative">
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto ${subject.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <subject.icon className={`w-10 h-10 ${subject.iconColor} group-hover:animate-bounce-gentle`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {subject.title}
                </h3>
                
                <p className="text-white/80 leading-relaxed text-sm">
                  {subject.description}
                </p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-white/70">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="font-semibold">Interactive Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-aqua rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span className="font-semibold">Real-time Feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-magenta rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="font-semibold">Progress Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;