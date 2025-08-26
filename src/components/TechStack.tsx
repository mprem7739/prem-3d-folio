import { 
  Code2, 
  Database, 
  Server, 
  Palette, 
  Globe, 
  Layers3,
  FileCode,
  Cpu
} from "lucide-react";

const techStack = [
  { name: "HTML5", icon: FileCode, color: "text-orange-400" },
  { name: "CSS3", icon: Palette, color: "text-blue-400" },
  { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
  { name: "Bootstrap", icon: Layers3, color: "text-purple-400" },
  { name: "React", icon: Cpu, color: "text-cyan-400" },
  { name: "Node.js", icon: Server, color: "text-green-400" },
  { name: "Express", icon: Globe, color: "text-gray-400" },
  { name: "MongoDB", icon: Database, color: "text-emerald-400" },
];

const TechStack = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Tech Stack</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="glass-card p-6 rounded-xl text-center group element-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <tech.icon className={`h-12 w-12 ${tech.color} tech-icon`} />
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Floating tech elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating absolute top-10 left-1/4 w-8 h-8 bg-yellow-400/20 rounded rotate-45" style={{ animationDelay: '0.5s' }} />
          <div className="floating absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-400/20 rounded-full" style={{ animationDelay: '1.5s' }} />
          <div className="floating absolute bottom-1/4 left-1/3 w-10 h-10 bg-purple-400/20 rounded" style={{ animationDelay: '2.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default TechStack;