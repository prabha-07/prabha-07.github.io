const education = [
  {
    school: "Indiana University Bloomington",
    degree: "Master of Science in Data Science",
    location: "Bloomington, Indiana",
    period: "Aug 2025 - May 2027",
    gpa: "4.0 / 4.0",
    current: true,
    courses: ["Intro to Statistics", "Applied ML", "Applied Database Technologies", "GenAI 101", "Fund & App of LLMs", "Usable AI"],
  },
  {
    school: "Anna University (SSN College of Engineering)",
    degree: "Bachelor of Engineering in Civil Engineering",
    location: "Chennai, India",
    period: "2018 - 2022",
    gpa: "8.2 / 10",
    current: false,
    courses: [],
  },
];

export const EducationSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Education</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Academic <span className="text-gradient">Background</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 relative overflow-hidden"
            >
              {edu.current && (
                <span className="absolute top-4 right-4 tag tag-accent">Current</span>
              )}
              <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
              <p className="text-primary font-medium mb-3">{edu.degree}</p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <span>{edu.location}</span>
                <span>•</span>
                <span>{edu.period}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-secondary/50 rounded-lg px-3 py-2 mb-4">
                <span className="text-sm text-muted-foreground">GPA:</span>
                <span className="font-semibold text-primary">{edu.gpa}</span>
              </div>
              {edu.courses.length > 0 && (
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span key={course} className="tag">{course}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
