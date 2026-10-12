export const AboutSection = () => {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Projects Delivered" },
    { number: "2", label: "Certifications" },
    { number: "3.9", label: "GPA (MS)" },
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
              I'm an analytics engineer with 3+ years of experience enabling realized impact across projects at enterprise scale. I'm currently pursuing my Master's in Data Science at Indiana University Bloomington (CGPA 3.9/4.0) and working as a Student Worker in IT Analytics at Viatris.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Viatris I built an AI agentic Proof of Concept in Azure Synapse to replicate a SAP extractor and am integrating it into the existing Synapse pipeline for data migration. Previously at LatentView Analytics, I specialized in marketing analytics—Power BI and Tableau dashboards, root-cause analyses, and ML models that supported 20% YoY revenue growth and 2+ hours of daily time savings through automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans Machine Learning, Generative AI, LLMs, Agentic AI, and data engineering with Databricks, Azure Synapse, and SQL. I'm passionate about turning data into real-world impact through robust analytics and automation. Outside of project work, I've been active in Toastmasters and CSR initiatives at LatentView.
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
