import { LayoutDashboard, TrendingUp, Database, Zap } from "lucide-react";

export const ExperienceSection = () => {
  const achievements = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Development",
      description: "Built comprehensive Power BI and Tableau dashboards to track marketing campaign performance across channels",
      metric: "10% weekly optimization",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Performed A/B and Hypothesis testing to compare campaigns through Z-test and T-test statistical analysis",
      metric: "20% YoY growth",
    },
    {
      icon: Database,
      title: "Data Pipeline Development",
      description: "Developed SQL pipelines in Databricks using PySpark and Spark SQL for ETL transformations",
      metric: "Full Funnel insights",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Automated Excel report delivery and Business-as-Usual reports through ODBC integration",
      metric: "2 hrs/day saved",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Professional Experience</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Where I've Made <span className="text-gradient">Impact</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Timeline item */}
          <div className="relative pl-8 md:pl-12 border-l-2 border-border">
            <div className="absolute left-0 top-0 -translate-x-1/2">
              <div className="timeline-dot" />
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-1">LatentView Analytics Ltd.</h3>
              <p className="text-primary font-medium mb-2">Data Analyst</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                <span>Sep 2022 – Jul 2025</span>
                <span>•</span>
                <span>Chennai, India</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.title}
                      className="bg-card rounded-xl border border-border p-5 card-hover"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-semibold mb-2">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                          <span className="tag tag-accent">{achievement.metric}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Award */}
              <div className="mt-6 inline-flex items-center gap-3 bg-primary/10 rounded-lg px-4 py-3 border border-primary/20">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-primary">Encore Award Recipient</p>
                  <p className="text-sm text-muted-foreground">Outstanding performance recognition (Apr-Jul 2024)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
