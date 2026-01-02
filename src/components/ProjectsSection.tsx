import { Globe } from "lucide-react";

const projects = [
  {
    title: "TheCareerly – AI Agent-Driven Recruitment",
    description: "Architected a multi-layered Keycloak-integrated RBAC authentication solution with custom API Gateway. Built high-performance candidate screening using proprietary RAG architecture, achieving 100 applications/hour throughput with low latency. Automated job post creation and personalized communications using Generative AI.",
    tech: ["Nest.js", "Next.js", "Ollama", "RAG", "Langchain", "Keycloak", "Kafka"],
    featured: true,
  },
  {
    title: "Deepseek Local Chatbot",
    description: "Integrated deepseek-r1:7b parameter model using Ollama for local LLM execution. Developed robust prompt chaining method to serialize chat prompts, managing conversation context and cutting average response time by 800ms.",
    tech: ["Python", "Langchain", "Qdrant Vector DB"],
    featured: true,
  },
  {
    title: "Tea Leaf Disease Prediction",
    description: "Drove data enhancement by processing 25K raw tea leaf images with specialized augmentation techniques. Compared CNN architectures (VGG, ResNet) achieving 95% accuracy with minimal computational overhead for field deployment.",
    tech: ["Python", "FastAPI", "TensorFlow", "Pandas", "NumPy"],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-gradient">Featured Projects</span>
        </h2>

        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project image placeholder */}
              <div className="w-full lg:w-1/2">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary to-card overflow-hidden border-gradient relative group">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl opacity-50">
                      {index === 0 ? "🤖" : index === 1 ? "💬" : "🌿"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="w-full lg:w-1/2 space-y-4">
                {project.featured && (
                  <span className="text-primary text-sm font-medium">
                    Featured Project
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {project.title}
                </h3>
                
                <div className="p-6 rounded-xl card-glow border border-border/30">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                  <Globe size={20} className="text-muted-foreground hover:text-foreground" />
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
