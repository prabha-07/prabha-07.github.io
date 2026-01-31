export const Footer = () => {
  const buildSha = typeof import.meta.env.VITE_GIT_SHA === "string"
    ? import.meta.env.VITE_GIT_SHA.slice(0, 7)
    : null;
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prabhakaran Palanimuthu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {buildSha && (
              <p className="text-xs text-muted-foreground/70" title={`Deploy: ${buildSha}`}>
                Build {buildSha}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
