import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Globe, 
  Wifi, 
  TrendingUp, 
  Smartphone, 
  Trophy 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Gamepad2,
      title: "Interactive Games",
      description: "Engage with STEM subjects through fun, educational games that make learning enjoyable and memorable.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access content in multiple regional languages to support diverse rural communities across India.",
      color: "text-secondary"
    },
    {
      icon: Wifi,
      title: "Offline Access",
      description: "Download lessons and games to learn without internet connectivity, perfect for rural areas.",
      color: "text-aqua"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Advanced analytics for teachers to monitor student progress and identify improvement areas.",
      color: "text-magenta"
    },
    {
      icon: Smartphone,
      title: "Low-Device Optimized",
      description: "Runs smoothly on low-cost devices commonly available in rural schools and communities.",
      color: "text-accent"
    },
    {
      icon: Trophy,
      title: "Rewards System",
      description: "Earn badges, points, and unlock achievements as students progress through challenging lessons.",
      color: "text-primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Amazing Features
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology designed specifically for rural education challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-8 text-center relative">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent"></div>
                
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto bg-background rounded-full flex items-center justify-center shadow-lg group-hover:animate-bounce-gentle">
                    <feature.icon className={`w-10 h-10 ${feature.color} transition-all duration-300 group-hover:scale-110`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;