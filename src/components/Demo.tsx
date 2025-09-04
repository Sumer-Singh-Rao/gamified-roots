import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import demoImage from "@/assets/demo-interface.jpg";
import { Play, Monitor, Smartphone } from "lucide-react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            See How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform is designed to work seamlessly on low-cost devices with limited internet connectivity,
            bringing quality STEM education to every rural classroom.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Demo Image/Video Area */}
          <Card className="mb-12 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <CardContent className="p-0 relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={demoImage} 
                  alt="Interactive STEM Learning Platform Demo"
                  className="w-full h-96 md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-300">
                  <Button 
                    size="lg"
                    className="bg-white/90 hover:bg-white text-primary hover:text-secondary font-bold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Watch Interactive Demo
                  </Button>
                </div>
                
                {/* Feature Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <div className="bg-aqua/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Live Demo
                  </div>
                  <div className="bg-magenta/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Interactive
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Compatibility */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">Web Platform</h3>
                <p className="text-muted-foreground text-sm">
                  Access from any device with a web browser
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">Mobile App</h3>
                <p className="text-muted-foreground text-sm">
                  Native mobile experience for Android devices
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto bg-aqua/10 rounded-full flex items-center justify-center mb-4">
                  <div className="w-8 h-8 text-aqua font-bold flex items-center justify-center text-lg">
                    ⚡
                  </div>
                </div>
                <h3 className="text-lg font-bold text-aqua mb-2">Offline Ready</h3>
                <p className="text-muted-foreground text-sm">
                  Download content for offline learning sessions
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-primary p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Rural Education?
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Join thousands of students already learning with HackNRun
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-magenta hover:bg-aqua text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Try Demo Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
                >
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;