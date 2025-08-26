import { Code, Lightbulb, Target, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Expert in MERN stack with modern development practices and clean, maintainable code."
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative approach to complex challenges with innovative solutions and optimized performance."
  },
  {
    icon: Target,
    title: "User-Focused Design",
    description: "Building intuitive interfaces that provide exceptional user experiences across all devices."
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Delivering high-performance applications with modern tools and best practices."
  }
];

const About = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Passionate Developer with a Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Prem Prakash Kushwaha, a dedicated MERN stack developer with a passion for 
                creating innovative web solutions. My journey in web development spans across 
                modern technologies including React, Node.js, Express, and MongoDB.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in writing clean, efficient code and staying updated with the latest 
                industry trends. My goal is to build applications that not only meet technical 
                requirements but also provide exceptional user experiences.
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="glass-card p-6 rounded-xl element-3d group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;