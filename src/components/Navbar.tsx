import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-foreground tracking-tight">
            PP<span className="text-primary">.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-5 py-2 text-sm font-medium rounded-full" asChild>
              <a href="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_697d319931e71df554b3a07d/d055c155f_Resume-PrabhakaranPalanimuthu.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
