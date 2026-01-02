const skills = [
  { name: "Python", icon: "🐍" },
  { name: "Flask", icon: "🌶️" },
  { name: "FastAPI", icon: "⚡" },
  { name: "Django", icon: "🎸" },
  { name: "React", icon: "⚛️" },
  { name: "MySQL", icon: "🗃️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "BigQuery", icon: "📊" },
  { name: "GCP", icon: "☁️" },
  { name: "Git", icon: "📦" },
  { name: "JavaScript", icon: "📘" },
  { name: "Java", icon: "☕" },
];

const certifications = [
  "PCEP - Certified Entry-Level Python Programmer",
  "Google IT Automation With Python",
  "Google Data Analytics Professional",
  "Oracle Cloud Infrastructure 2025 AI Foundations",
];

const SkillsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground mb-2">
            I'm currently looking to join a{" "}
            <span className="text-gradient font-semibold">cross-functional team</span>
          </p>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            that values improving people's lives through accessible technology
          </p>
        </div>

        {/* Skills orbit visualization - hidden on mobile, shown on tablet+ */}
        <div className="hidden sm:block relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1]">
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center glow-effect animate-glow-pulse">
              <span className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-primary-foreground">T</span>
            </div>
          </div>

          {/* Orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70%] h-[50%] border border-border/30 rounded-full animate-orbit" style={{ animationDuration: '40s' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[90%] h-[70%] border border-border/20 rounded-full animate-orbit" style={{ animationDuration: '60s', animationDirection: 'reverse' }} />
          </div>

          {/* Skills positioned in a grid-like pattern */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pt-8">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
            {skills.slice(6).map((skill, index) => (
              <div
                key={skill.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all cursor-pointer group"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <span className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile skills grid */}
        <div className="sm:hidden grid grid-cols-4 gap-3 max-w-xs mx-auto mb-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="w-14 h-14 mx-auto rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center"
            >
              <span className="text-xl">{skill.icon}</span>
            </div>
          ))}
        </div>

        {/* Skills text list */}
        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-3xl mx-auto px-2">
          {["Python", "Flask", "FastAPI", "Django", "React", "MySQL", "BigQuery", "MongoDB", "JavaScript", "Java", "R", "NumPy", "Pandas", "Git", "GCP", "Power BI", "Tableau", "Linux"].map((skill) => (
            <span
              key={skill}
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-10 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
            <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border hover:border-primary/50 transition-all text-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <span className="text-primary text-sm sm:text-lg">✓</span>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
