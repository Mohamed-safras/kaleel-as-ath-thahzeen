import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "LOLC iPay Re-Architecture",
    company: "Acentura Inc",
    period: "Jan 2024 – Present",
    description: "Built end-to-end payment cancelation logic, redesigned event-driven payment reference engine handling 1.8M+ monthly transactions from 45,000+ merchants.",
    tech: ["Java", "Spring Boot", "Kafka", "Docker", "MySQL"],
    icon: "💳",
  },
  {
    title: "AssureOne QC Automation",
    company: "Acentura Inc",
    period: "2024",
    description: "Implemented backend data validation pipelines ensuring data integrity between SAP exports and MongoDB, enhanced productivity with real-time data sync.",
    tech: ["TypeScript", "React", "Next.js", "MongoDB"],
    icon: "✅",
  },
  {
    title: "Cell-Ed Platform",
    company: "Acentura Inc",
    period: "Jun 2023 – Dec 2023",
    description: "Improved performance by 20% transitioning Forest Admin backend to RESTful API. Deployed AWS Lambda microservices achieving 40% cost reduction.",
    tech: ["Node.js", "Nest.js", "AWS Lambda", "Docker"],
    icon: "📱",
  },
  {
    title: "TheCareerly AI System",
    company: "Personal Project",
    period: "Sep 2025 – Present",
    description: "Architected Keycloak-integrated RBAC solution with custom API Gateway. Built RAG-based candidate screening processing 100 applications/hour.",
    tech: ["Nest.js", "Next.js", "Langchain", "Keycloak"],
    icon: "🤖",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Work Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl border-gradient card-glow hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{exp.icon}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary">{exp.company}</p>
                    <p className="text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                  LEARN MORE
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
