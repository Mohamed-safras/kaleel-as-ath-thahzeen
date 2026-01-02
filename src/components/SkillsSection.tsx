const skills = [
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "💚" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "Spring Boot", icon: "🍃" },
  { name: "Next.js", icon: "▲" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "Kafka", icon: "📨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "TensorFlow", icon: "🧠" },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl text-foreground mb-2">
            I'm currently looking to join a{" "}
            <span className="text-gradient font-semibold">cross-functional team</span>
          </p>
          <p className="text-muted-foreground">
            that values improving people's lives through accessible technology
          </p>
        </div>

        {/* Skills orbit visualization */}
        <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-[2/1]">
          {/* Center logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-primary flex items-center justify-center glow-effect animate-glow-pulse">
              <span className="font-handwriting text-3xl md:text-4xl text-primary-foreground">S</span>
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
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {skills.slice(6).map((skill, index) => (
              <div
                key={skill.name}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center hover:scale-110 hover:bg-primary/20 transition-all cursor-pointer group"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <span className="text-xl md:text-2xl group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills text list */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {["Microservices", "Spring Boot", "Nest.js", "FastAPI", "Keycloak", "Kafka", "React", "Next.js", "Redux", "Tailwind CSS", "MySQL", "MongoDB", "Docker", "Kubernetes", "AWS", "Langchain", "RAG", "GenAI"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 text-sm rounded-full border border-border/50 text-muted-foreground hover:border-primary hover:text-primary transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
