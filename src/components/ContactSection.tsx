import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Get In Touch</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a conversation about data science and AI
        </p>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:prpalan@iu.edu"
              className="flex items-center gap-4 bg-card rounded-xl border border-border p-5 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">prpalan@iu.edu</p>
              </div>
            </a>
            <a
              href="tel:+18123913906"
              className="flex items-center gap-4 bg-card rounded-xl border border-border p-5 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">(812) 391-3906</p>
              </div>
            </a>
          </div>

          <div className="flex items-center gap-4 bg-card rounded-xl border border-border p-5 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm text-muted-foreground">Bloomington, Indiana</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">Or find me on</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/prabha-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border text-sm hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/prabhakaran-p-7b38ab164/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border text-sm hover:border-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
