import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const HeroSection = () => {
  const roles = ["Python Developer", "Backend Engineer", "Data Enthusiast"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col relative overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
          {/* Avatar Section */}
          <div className="relative animate-float flex-shrink-0">
            <div className="w-48 h-48 md:w-56 md:h-56 relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/40 via-primary/10 to-transparent rounded-full blur-2xl scale-125" />
              
              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <img 
                  src={profileImage} 
                  alt="Kaleel As-Ath Thahzeen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm rounded-full border border-border animate-float" style={{ animationDelay: '1s' }}>
              <span className="text-xs font-mono text-primary">PCEP Certified ✓</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-lg">
            <p className="text-sm md:text-base font-medium mb-2">
              Hello! I Am <span className="text-gradient">Kaleel As-Ath Thahzeen</span>
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              A Developer who
              <br />
              <span className="text-foreground">Builds </span>
              <span className="relative inline-block">
                <span className="text-gradient">solutions</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full opacity-50" />
              </span>
              <span className="text-foreground">...</span>
            </h1>
            
            <p className="text-muted-foreground text-sm md:text-base mb-6">
              Because if the code doesn't solve problems, what else can?
            </p>

            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold mb-2">
                I'm a{" "}
                <span className="text-gradient inline-block min-w-[200px] text-left">
                  {roles[currentRole]}
                </span>
              </h2>
              <p className="text-muted-foreground text-sm">
                Currently, a Junior Software Engineer at{" "}
                <span className="text-primary font-medium">Hashnate</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm max-w-md">
              PCEP Certified Python Developer with expertise in Flask, FastAPI & Django. 
              Building efficient backend systems and data-driven solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator at the end */}
      <div className="pb-8 flex justify-center animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
