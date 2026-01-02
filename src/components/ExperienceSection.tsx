import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "Hashnate",
    period: "Sep 2024 – Present",
    description: "Designed and developed LMS using Python and Django. Built ERP and CRM modules with Flask and MySQL. Implemented RESTful APIs with OAuth 2.0 and payment gateway integrations. Optimized MySQL queries reducing data retrieval time by 30%.",
    tech: ["Python", "Django", "Flask", "MySQL", "OAuth 2.0", "REST APIs"],
    icon: "💻",
  },
  {
    title: "IT Lecturer",
    company: "International European Campus",
    period: "Feb 2022 – Feb 2024",
    description: "Delivered lectures on Python, Java, and SQL, mentoring students on programming concepts and real-world applications. Designed and supervised web development projects using HTML, CSS, and JavaScript.",
    tech: ["Python", "Java", "SQL", "HTML", "CSS", "JavaScript"],
    icon: "📚",
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
