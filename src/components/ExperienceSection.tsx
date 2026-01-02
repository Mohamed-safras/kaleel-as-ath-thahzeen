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
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-gradient">Work Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-gradient card-glow hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-2xl sm:text-3xl">{exp.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base md:text-lg text-foreground truncate">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-primary">{exp.company}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{exp.period}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors group/link">
                  LEARN MORE
                  <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 group-hover/link:translate-x-1 transition-transform" />
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
