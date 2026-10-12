import { LayoutDashboard, TrendingUp, Database, Zap, BrainCircuit, Workflow, Bot } from "lucide-react";

const jobs = [
  {
    company: "Viatris Inc.",
    title: "Student Worker, IT Analytics",
    location: "Canonsburg, PA",
    period: "August 2026 – Present",
    current: true,
    bullets: [
      "Integrating the demonstrated Proof of Concept (PoC) into the existing Synapse data pipeline framework to catalyze SAP-to-Azure data migration.",
    ],
  },
  {
    company: "Viatris Inc.",
    title: "Summer Intern, IT Analytics",
    location: "Canonsburg, PA",
    period: "May 2026 – August 2026",
    current: false,
    highlights: [
      {
        icon: Workflow,
        title: "Agentic SAP extractor PoC",
        description:
          "Developed and demonstrated a controlled AI agentic workflow in Azure Synapse Analytics to replicate a standard SAP extractor, enabling data migration from SAP Datasphere to Azure Synapse.",
        metric: "SAP → Synapse",
      },
      {
        icon: Bot,
        title: "Copilot Studio agent",
        description:
          "Built a Microsoft Copilot Studio agent integrating Outlook and SharePoint so users can regain context, recall information, and resync with work.",
        metric: "Outlook + SharePoint",
      },
    ],
  },
  {
    company: "LatentView Analytics Ltd.",
    title: "Data Analyst",
    location: "Chennai, India",
    period: "Sep 2022 – July 2025",
    current: false,
    highlights: [
      {
        icon: LayoutDashboard,
        title: "Dashboard Development",
        description:
          "Built Power BI and Tableau dashboards from SQL sources for marketing performance, paid media, and Search—using KPIs including CPA, ROAS, and CPM—to support weekly optimizations tied to roughly 10% of weekly revenue.",
        metric: "10% weekly optimization",
      },
      {
        icon: BrainCircuit,
        title: "ML & root-cause analytics",
        description:
          "Case study on ad click-through rate with EDA and classification models; root-cause analysis on revenue dips in Databricks SQL surfaced pricing inconsistencies that informed targeted adjustments.",
        metric: "CTR insights + revenue stability",
      },
      {
        icon: TrendingUp,
        title: "Revenue Growth",
        description:
          "Performed A/B and hypothesis testing (Z-test, T-test) on campaigns and tactics, including a seasonal offer window.",
        metric: "20% YoY growth",
      },
      {
        icon: Database,
        title: "Data Pipeline Development",
        description:
          "SQL pipelines in Databricks with PySpark and Spark SQL for ETL; weekly R reporting; migration from Hive to Databricks for Power BI and Tableau sources.",
        metric: "Full Funnel insights",
      },
      {
        icon: Zap,
        title: "Process Automation",
        description:
          "Automated Excel report delivery from Databricks SQL to stakeholders; weekly BAU reports via ODBC refresh.",
        metric: "2 hrs/day saved",
      },
    ],
    award: {
      title: "Encore Award Recipient",
      detail: "Outstanding performance recognition (Apr–Jul 2024)",
    },
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Professional Experience</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Where I've Made <span className="text-gradient">Impact</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {jobs.map((job) => (
            <div key={`${job.company}-${job.title}`} className="relative pl-8 md:pl-12 border-l-2 border-border">
              <div className="absolute left-0 top-0 -translate-x-1/2">
                <div className="timeline-dot" />
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold">{job.company}</h3>
                  {job.current && <span className="tag tag-accent">Current</span>}
                </div>
                <p className="text-primary font-medium mb-2">{job.title}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-6">
                  <span>{job.period}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                </div>

                {job.bullets && (
                  <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {job.highlights && (
                  <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3">
                    {job.highlights.map((highlight) => {
                      const Icon = highlight.icon;
                      return (
                        <div
                          key={highlight.title}
                          className="bg-card rounded-xl border border-border p-5 card-hover"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold mb-2">{highlight.title}</h4>
                              <p className="text-sm text-muted-foreground mb-3">{highlight.description}</p>
                              <span className="tag tag-accent">{highlight.metric}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {job.award && (
                  <div className="mt-6 inline-flex items-center gap-3 bg-primary/10 rounded-lg px-4 py-3 border border-primary/20">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="font-semibold text-primary">{job.award.title}</p>
                      <p className="text-sm text-muted-foreground">{job.award.detail}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
