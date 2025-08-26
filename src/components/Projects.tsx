import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN application with payment integration, user authentication, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "bg-gradient-to-br from-blue-400 to-purple-600",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    technologies: ["React", "Express", "Socket.io", "Chart.js"],
    image: "bg-gradient-to-br from-green-400 to-blue-600",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop functionality.",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    image: "bg-gradient-to-br from-pink-400 to-red-600",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const Projects = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden element-3d group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project image placeholder */}
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Button size="sm" className="btn-hero">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="btn-ghost">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button size="sm" className="btn-hero flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="btn-ghost">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;