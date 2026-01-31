export const AboutSection = () => {
  const stats = [
    { number: "3", label: "Years Experience" },
    { number: "15+", label: "Projects Delivered" },
    { number: "2", label: "Certifications" },
    { number: "4.0", label: "GPA (MS)" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">About Me</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Turning Data Into <span className="text-gradient">Impact</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-12 mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm an analytics engineer with close to three years' experience in enabling realized impact across projects at enterprise scale. Currently pursuing my Master's in Data Science at Indiana University Bloomington with a perfect 4.0 GPA.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At LatentView Analytics, I specialized in marketing analytics, developing comprehensive dashboards in Power BI and Tableau, conducting root-cause analyses, and building ML models that drove significant business outcomes including 20% YoY revenue growth and 2+ hours daily time savings through automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans Machine Learning, Generative AI, LLMs, and data engineering with tools like Databricks and SQL. I'm passionate about turning data into real-world impact through robust analytics and automation.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card bg-card rounded-xl border border-border">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
