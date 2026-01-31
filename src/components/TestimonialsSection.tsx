import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    initials: "AD",
    name: "Akshay Durugkar",
    title: "EMEA Lead Marketing Analyst at Adobe",
    quote: "I had the pleasure of working with Prabhakaran during his time as a Data Analyst on my team. He quickly proved himself to be a highly dedicated and reliable professional. His strong work ethic was evident in the way he approached every task with focus and commitment. One of his standout qualities was his ability to identify bottlenecks independently. Rather than waiting for direction, he would proactively explore solutions and return with clear recommendations.",
  },
  {
    initials: "AK",
    name: "Akshaya Kannan",
    title: "Assistant Manager at LatentView Analytics Ltd.",
    quote: "I had the privilege of working with Prabhakaran, and he stands out as a highly skilled professional with strong expertise in SQL, Power BI and Python. With close to 3 years of experience, he has consistently delivered impactful solutions that have directly contributed to client business growth. His balance of hard work and smart work, along with his willingness to share knowledge makes him exceptional.",
  },
  {
    initials: "PV",
    name: "Praveen Kumar Vadicharla",
    title: "Assistant Manager at LatentView Analytics Ltd.",
    quote: "I had the pleasure of managing Prabakaran at LatentView Analytics, and he consistently demonstrated exceptional dedication and commitment to his work. He is highly dependable, always willing to go the extra mile, and readily supports team members whenever needed. His strong ownership mindset and attention to detail earned him high appreciation from clients.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Testimonials</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          What People <span className="text-gradient">Say</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Recommendations from colleagues and managers I've worked with
        </p>
        <div className="text-center mb-12">
          <a
            href="https://www.linkedin.com/in/prabhakaran-p-7b38ab164/details/recommendations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
          >
            View All on LinkedIn <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col"
            >
              <blockquote className="text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary text-sm font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
