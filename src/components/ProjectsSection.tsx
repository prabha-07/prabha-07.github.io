import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fourier Sine Wave Visualizer",
    description: "Browser-based visualizer that performs Fourier Transform on audio files using Python (Flask + librosa + scipy), then animates individual sine wave components in sync with playback.",
    tags: ["Python", "Flask", "JavaScript", "Signal Processing"],
    link: "https://github.com/prabha-07/Fourier-Sine-Wave-Visualizer",
  },
  {
    title: "Powerlifting Performance Prediction",
    description: "Predictive modeling to forecast powerlifting performance using Wilks Score. Achieved 2.7% average prediction error using regression ML techniques including Linear Regression, Ridge, Lasso, and Gradient Boosting.",
    tags: ["Machine Learning", "Regression", "Python", "Scikit-learn"],
    link: "https://github.com/prabha-07/Predictive-Modeling-for-Powerlifting-Performance-Using-Regression-ML-techniques",
  },
  {
    title: "Multi-class Classification Comparison",
    description: "In-depth comparison of classification algorithms (Softmax, SVM, Random Forest, Ensemble) with hyperparameter tuning on the Dry Bean Dataset, achieving 93% average F-1 score.",
    tags: ["SVM", "Random Forest", "Ensemble", "Classification"],
    link: "https://github.com/prabha-07/Multi-class-classification-using-SVM-RF-Ensemble-and-their-evaluation",
  },
  {
    title: "Dimensionality Reduction & Clustering",
    description: "Comprehensive analysis of image data through dimensionality reduction (PCA, t-SNE, LLE, UMAP), clustering (K-Means, GMM) and generative modeling techniques.",
    tags: ["PCA", "t-SNE", "UMAP", "K-Means", "GMM"],
    link: "https://github.com/prabha-07/Dimensionality-reduction-clustering-and-generative-modeling-of-image-data",
  },
  {
    title: "Canal Discharge Prediction",
    description: "ML techniques to predict water discharge in Thevara-Perandoor canal using historical rainfall data. Leveraged SARIMA, LSTM, SANN and FNN neural network models.",
    tags: ["Time Series", "LSTM", "SARIMA", "Neural Networks"],
    link: "https://github.com/prabha-07/Canal-Discharge-Prediction-using-SARIMA-LSTM-FNN-SANN",
  },
  {
    title: "LLMs Local Ecosystem Research",
    description: "Ongoing research project exploring fine-tuning of LLMs as a local ecosystem, associated with faculty from Indiana University's Kelley School of Business.",
    tags: ["LLMs", "Fine-tuning", "Generative AI", "Research"],
    link: "#",
    ongoing: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Featured Projects</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Things I've <span className="text-gradient">Built</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of projects showcasing my expertise in machine learning and data analysis
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-card rounded-2xl border border-border p-6 card-hover relative overflow-hidden"
            >
              {project.ongoing && (
                <span className="absolute top-4 right-4 tag tag-accent text-xs">Ongoing</span>
              )}
              <h3 className="font-semibold text-lg mb-3 pr-16">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">{tag}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
