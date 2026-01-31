import { Button } from "@/components/ui/button";
import { MapPin, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-grid-pattern pt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/40 border border-border/50 mb-10 animate-fade-in-up">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Bloomington, Indiana</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-0 animate-fade-in-up tracking-tight" style={{ animationDelay: "0.1s" }}>
          Prabhakaran
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient mb-8 animate-fade-in-up tracking-tight" style={{ animationDelay: "0.2s" }}>
          Palanimuthu
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-5 animate-fade-in-up font-medium" style={{ animationDelay: "0.3s" }}>
          Data Scientist & Analytics Engineer
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground/80 mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.4s" }}>
          Enabling realized impact across enterprise-scale projects through data analytics, machine learning, and AI-driven solutions
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://github.com/prabha-07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/prabhakaran-p-7b38ab164/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:prpalan@iu.edu"
            className="w-12 h-12 rounded-full bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll indicator arrow */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
          <ChevronDown className="w-6 h-6 text-muted-foreground/50 mx-auto" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-full shadow-lg shadow-primary/20" asChild>
            <a href="#projects">
              Explore My Work
            </a>
          </Button>
          <Button variant="outline" className="px-8 py-6 text-base rounded-full border-border/50 hover:border-primary/50 hover:text-primary" asChild>
            <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697d319931e71df554b3a07d/d055c155f_Resume-PrabhakaranPalanimuthu.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
