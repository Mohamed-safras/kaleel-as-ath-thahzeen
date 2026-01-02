import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const roles = ["Software Engineer", "AI Enthusiast", "Full Stack Developer"];
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Avatar Section */}
          <div className="relative animate-float">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Glow behind avatar */}
              <div className="absolute inset-0 bg-gradient-radial from-primary/40 via-primary/10 to-transparent rounded-full blur-2xl scale-125" />
              
              {/* Avatar placeholder - styled laptop emoji */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="text-8xl md:text-9xl">👨‍💻</div>
              </div>
            </div>
            
            {/* Decorative arrow */}
            <div className="absolute -top-4 right-0 text-muted-foreground">
              <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="opacity-50">
                <path d="M5 35C15 25 35 15 55 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                <path d="M50 3L55 5L53 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-sm md:text-base font-medium mb-2">
              Hello! I Am <span className="text-gradient">Mohamed Safras</span>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              A Developer who
              <br />
              <span className="text-foreground">Builds </span>
              <span className="relative inline-block">
                <span className="text-gradient">solutions</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-primary rounded-full opacity-50" />
              </span>
              <span className="text-foreground">...</span>
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8">
              Because if the code doesn't solve problems, what else can?
            </p>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                I'm a{" "}
                <span className="text-gradient inline-block min-w-[240px] text-left">
                  {roles[currentRole]}
                </span>
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Currently, I'm a Software Engineer at{" "}
                <span className="text-primary font-medium">Acentura Inc</span>
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-xl">
              A Software Engineer with 3 years of hands-on experience building and maintaining 
              high-volume microservices for platforms processing millions of transactions. 
              Focused on integrating cutting-edge AI technologies into scalable, high-performing systems.
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs">Scroll</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
