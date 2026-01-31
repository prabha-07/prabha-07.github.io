const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL", "R"],
  },
  {
    title: "Data & BI Tools",
    skills: ["Power BI", "Tableau", "Adobe Analytics", "MS Excel"],
  },
  {
    title: "Data Engineering",
    skills: ["Databricks", "PySpark", "Spark SQL", "Hive", "Snowflake", "Delta Lake"],
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "LLMs", "Generative AI", "Agentic AI", "Chatbots"],
  },
  {
    title: "Cloud & Storage",
    skills: ["Azure Blob Storage", "Delta Live Tables", "Lakehouse"],
  },
  {
    title: "Development Tools",
    skills: ["JupyterLab", "VS Code", "GitHub", "Google Colab", "LM Studio", "Ollama"],
  },
];

const certifications = [
  {
    initial: "D",
    title: "Databricks Certified Data Engineer Associate",
    issuer: "Azure Databricks · August 2024",
    link: "https://credentials.databricks.com/12345",
  },
  {
    initial: "N",
    title: "NVIDIA Certified Associate Generative AI LLMs",
    issuer: "NVIDIA · October 2024",
    link: "https://www.nvidia.com/certifications",
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Technical Skills</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My Tech <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Tools and technologies I work with to turn data into actionable insights
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-card rounded-xl border border-border p-5 card-hover"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{cert.initial}</span>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
