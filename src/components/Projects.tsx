import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import escArchi from "@/assets/esc_architecture.png";
import escFlow from "@/assets/esc_stepfunctions_graph.png";

interface ProjectImage {
  src: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  highlights?: string[];
  tech: string[];
  cloudResources?: string[];
  cicd?: string[];
  images: ProjectImage[];
  github: string;
  external: string;
  imageOnLeft: boolean;
}

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const projects: Project[] = [
    {
      title: "Esc | Escape Tutorial Hell with Active Learning",
      description:
        "Event-driven serverless platform that automatically transforms passive video tutorials into interactive learning materials—guides, Q&A sets, and coding challenges— using AI orchestration.",
      tech: ["FastAPI", "MongoDB", "React", "TypeScript", "TanStack Router", "AWS", "Google Gemini", "AssemblyAI"],
      cloudResources: ["AWS Lambda", "AWS Step Functions", "AWS S3", "AWS EventBridge", "CloudFront"],
      highlights: [
        "Durable workflow orchestration with parallel AI content generation (75% faster processing)",
        "Intelligent retry system with job-level granularity—only re-executes failed tasks",
        "Type-safe AI outputs using Pydantic schemas with Google Gemini structured generation",
        "Reusable Lambda pattern handling 5 content types, reducing codebase duplication by 60%",
      ],
      cicd: ["Terraform IaC", "Docker", "ECR"],
      images: [
        { src: escArchi, label: "System Architecture" },
        { src: escFlow, label: "Step Functions Workflow" },
      ],
      github: "#",
      external: "#",
      imageOnLeft: true,
    },

  ];
  return (
    <section id="projects" className="py-24 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">03.</span>
          Some Things I've Built
        </h2>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 gap-4 items-start ${
                project.imageOnLeft ? "" : "direction-rtl"
              }`}
            >
              {/* Images Section */}
              <div
                className={`hidden lg:block lg:col-span-7 relative ${
                  project.imageOnLeft ? "" : "lg:col-start-6"
                }`}
              >
                <div className="flex gap-3 w-full">
                  {project.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative overflow-hidden rounded cursor-pointer group flex-1"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={`${project.title} - ${image.label}`}
                        className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="bg-background/90 text-foreground px-3 py-1 rounded text-sm font-mono">
                          Click to expand
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-6 ${
                  project.imageOnLeft
                    ? "lg:col-start-7 lg:-ml-20 lg:text-right"
                    : "lg:col-start-1 lg:row-start-1 lg:-mr-20 lg:text-left"
                } relative z-10`}
              >
                <p className="font-mono text-primary text-sm mb-2">Project</p>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg mb-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.highlights && (
                  <div className="mb-4">
                    <p className="font-mono text-xs text-primary mb-2">Key Highlights</p>
                    <ul className={`space-y-1.5 ${project.imageOnLeft ? "lg:text-right" : "lg:text-left"}`}>
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-foreground/70 text-sm">
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <p className="font-mono text-xs text-primary mb-2">Tech Stack</p>
                  <p className={`font-mono text-xs text-foreground/70 ${project.imageOnLeft ? "lg:text-right" : "lg:text-left"}`}>
                    {project.tech.join(" · ")}
                  </p>
                </div>

                {project.cloudResources && (
                  <div className="mb-4">
                    <p className="font-mono text-xs text-primary mb-2">Cloud Resources</p>
                    <div className={`flex flex-wrap gap-2 ${project.imageOnLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                      {project.cloudResources.map((resource, i) => (
                        < span key={i} className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-foreground">
                          {resource}
                        </ span>
                      ))}
                    </div>
                  </div>
                )}

                {project.cicd && (
                  <div className="mb-4">
                    <p className="font-mono text-xs text-primary mb-2">CI/CD Pipeline</p>
                    <div className={`flex flex-wrap gap-2 ${project.imageOnLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                      {project.cicd.map((tool, i) => (
                        < span key={i} className="inline-flex items-center rounded-full border border-primary/50 px-2.5 py-0.5 font-mono text-xs text-primary">
                          {tool}
                        </ span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Images */}
                <div className="lg:hidden flex flex-col gap-3 my-6">
                  {project.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative overflow-hidden rounded cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={`${project.title} - ${image.label}`}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/20"></div>
                    </div>
                  ))}
                </div>

                <div className={`flex gap-4 ${project.imageOnLeft ? "lg:justify-end" : "lg:justify-start"}`}>
                  <a href={project.github} className="text-foreground hover:text-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-foreground hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.label}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
