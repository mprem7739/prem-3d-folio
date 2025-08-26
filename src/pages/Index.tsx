import CursorEffect from "@/components/CursorEffect";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="cursor-none">
      <CursorEffect />
      
      <main className="min-h-screen">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-border/20">
        <p className="text-muted-foreground">
          © 2024 Prem Prakash Kushwaha. Crafted with ❤️ using React & TypeScript
        </p>
      </footer>
    </div>
  );
};

export default Index;
