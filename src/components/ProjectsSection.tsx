import { Globe } from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    description: "A comprehensive LMS built with Python and Django to deliver online courses and manage student data efficiently. Features include course management, student tracking, and progress analytics.",
    tech: ["Python", "Django", "MySQL", "REST API"],
    featured: true,
  },
  {
    title: "ERP & CRM Modules",
    description: "Enterprise resource planning and customer relationship management modules using Python, Flask, and MySQL. Streamlined financial and operational workflows with OAuth 2.0 authentication and payment gateway integrations.",
    tech: ["Python", "Flask", "MySQL", "OAuth 2.0"],
    featured: true,
  },
  {
    title: "Database Performance Optimization",
    description: "Improved database performance by optimizing MySQL queries, achieving a 30% reduction in data retrieval time for enterprise applications. Implemented efficient indexing and query optimization strategies.",
    tech: ["MySQL", "Query Optimization", "Performance Tuning"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-24 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="space-y-8 sm:space-y-12 md:space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-4 sm:gap-6 md:gap-8 items-center`}
            >
              {/* Project image placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden border-gradient relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl opacity-50">
                      {index === 0 ? "📚" : index === 1 ? "💼" : "⚡"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="w-full lg:w-1/2 space-y-2 sm:space-y-3 md:space-y-4">
                {project.featured && (
                  <span className="text-primary text-xs sm:text-sm font-medium">
                    Featured Project
                  </span>
                )}
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <div className="p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl card-glow border border-border/30">
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="p-1.5 sm:p-2 rounded-full hover:bg-secondary transition-colors">
                  <Globe size={16} className="sm:w-5 sm:h-5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
