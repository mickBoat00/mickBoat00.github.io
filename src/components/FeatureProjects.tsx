import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import escImage from "@/assets/project.png";


interface ProjectImage {
  src: string;
  label: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  cloudResources?: string[];
  cicd?: string[];
  images: ProjectImage[];
  github: string;
  external: string;
  imageOnLeft: boolean;
}

const FeaturedProjects = () => {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const projects: Project[] = [
    {
      title: "Esc | Helping coders escape tutorial hell.",
      description:
        "A full-stack application that helps developers navigate through complex tutorials and provides a structured learning path.",
      tech: ["Fastapi", "MongoDB", "React", "TypeScript", "TanStack Router", "AWS"],
      cloudResources: ["AWS lambda", "AWS Step functions", "AWS S3", "AWS ECS"],
      cicd: ["GitHub Actions",],
      images: [
        { src: escImage, label: "System Architecture" },
        { src: escImage, label: "Cloud Workflow" },
      ],
      github: "#",
      external: "#",
      imageOnLeft: true,
    },

  ];

  return (
    <section id="work" className="py-24 px-6 lg:px-24">
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
              {/* Images Section - hidden on mobile, shown on larger screens */}
              <div
                className={`hidden lg:block lg:col-span-7 relative ${
                  project.imageOnLeft ? "" : "lg:col-start-6"
                }`}
              >
              <div className="flex gap-0 w-full">
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
                
                {/* Description Card */}
                <div className="bg-card border border-border rounded-lg p-4 md:p-6 shadow-lg mb-4">
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="font-mono text-xs text-primary mb-2">Tech Stack</p>
                  <p
                    className={`font-mono text-xs text-foreground/70 ${
                      project.imageOnLeft ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {project.tech.join(" · ")}
                  </p>
                </div>

                {/* Cloud Resources */}
                {project.cloudResources && (
                  <div className="mb-4">
                    <p className="font-mono text-xs text-primary mb-2">Cloud Resources</p>
                    <p
                      className={`font-mono text-xs text-foreground/70 ${
                        project.imageOnLeft ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {project.cloudResources.join(" . ")}
                    </p>
                  </div>
                )}

                {/* CI/CD Pipeline */}
                {project.cicd && (
                  <div className="mb-4">
                    <p className="font-mono text-xs text-primary mb-2">CI/CD Pipeline</p>
                    <p
                      className={`font-mono text-xs text-foreground/70 ${
                        project.imageOnLeft ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {project.cicd.join(" . ")}
                    </p>
                  </div>
                )}

                {/* Mobile Images */}
                <div className="lg:hidden flex flex-col gap-0 my-6">
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

                {/* Links */}
                <div
                  className={`flex gap-4 ${
                    project.imageOnLeft ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
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

export default FeaturedProjects;
