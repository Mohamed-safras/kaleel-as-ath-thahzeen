import { GraduationCap, Briefcase, Code, Brain } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "3+ Years Experience",
      description: "Building high-volume microservices processing millions of transactions",
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "TypeScript, Java, Python with modern frameworks",
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Integrating cutting-edge AI into scalable systems",
    },
    {
      icon: GraduationCap,
      title: "BSc in ICT",
      description: "University of Sri Jayewardenepura, Sri Lanka",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-gradient card-glow hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            A Software Engineer with 3 years of hands-on experience building and maintaining 
            high-volume microservices for platforms processing millions of transactions. 
            Focused on integrating cutting-edge AI technologies into scalable, high-performing systems. 
            Skilled in developing intelligent applications, automating workflows, and collaborating 
            across cross-functional teams to deliver data-driven solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
