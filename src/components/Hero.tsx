import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 opacity-50" />
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-lg element-3d" />
        <div className="floating absolute top-40 right-20 w-12 h-12 bg-secondary/20 rounded-full element-3d" style={{ animationDelay: '1s' }} />
        <div className="floating absolute bottom-40 left-20 w-20 h-20 bg-accent/20 rounded-lg element-3d" style={{ animationDelay: '2s' }} />
        <div className="floating absolute bottom-20 right-10 w-14 h-14 bg-primary/30 rounded-full element-3d" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile image placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-secondary element-3d pulse-glow flex items-center justify-center">
          <div className="w-36 h-36 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-6xl font-bold gradient-text">
            PP
          </div>
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Prem Prakash</span>
          <br />
          <span className="text-foreground">Kushwaha</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          MERN Stack Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting modern web experiences with React, Node.js, and cutting-edge technologies. 
          Passionate about clean code and innovative solutions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button className="btn-hero px-8 py-3 text-lg">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" className="btn-ghost px-8 py-3 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="p-3 glass-card rounded-full tech-icon">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 glass-card rounded-full tech-icon">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="p-3 glass-card rounded-full tech-icon">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full opacity-50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;