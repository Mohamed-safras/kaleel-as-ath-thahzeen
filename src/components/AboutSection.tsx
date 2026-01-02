import { GraduationCap, Briefcase, Code, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "1+ Year Experience",
      description: "Building backend systems and web applications",
    },
    {
      icon: Code,
      title: "Python Developer",
      description: "Flask, FastAPI, Django specialist",
    },
    {
      icon: Award,
      title: "PCEP Certified",
      description: "Python Institute Certified Entry-Level Programmer",
    },
    {
      icon: GraduationCap,
      title: "BSc. Engineering",
      description: "Electrical & Electronic Engineering from SEUSL",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl border-gradient card-glow hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mx-auto mb-2 sm:mb-3 md:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xs sm:text-sm md:text-base text-foreground mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 max-w-3xl mx-auto text-center px-2">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
            Passionate and results-driven Python Developer with over one year of hands-on 
            experience designing, developing, and optimizing backend systems and web applications. 
            Skilled in Python frameworks like Flask, FastAPI, and Django, with strong database 
            expertise in MySQL & BigQuery. Adept at problem-solving and delivering efficient, 
            maintainable solutions aligned with business objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
