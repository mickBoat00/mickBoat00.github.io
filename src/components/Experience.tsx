import { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
        {
        company: "Maxim Nyansa",
        role: "Cloud developer",
        fullTitle: "Maxim Nyansa IT Solutions",
        period: "Sep 2021 — Aug 2025",
        responsibilities: [
            "Write, develop, evaluate and document new and modified software programs running on the Openfabric Testnet chain.",
            "Developing a 3D Human Rotation AI App using HumanNeRF based architecture.",
            "Research, design and implement algorithms in deep learning for computer vision ang cutting-edge research.",
        ],
        },
        {
        company: "Tech Innovation",
        role: "Backend Engineer",
        fullTitle: "Tech Innovation",
        period: "Aug 2025 — Feb 2026",
        responsibilities: [
            "Contributed to marine biodiversity observation network projects.",
            "Developed data visualization tools for ocean data analysis.",
            "Collaborated with researchers on data standardization efforts.",
        ],
        }
    ];

  return (
    <section id="experience" className="py-24 px-6 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-heading">
          <span className="section-number">02.</span>
          Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Tabs - horizontal scroll on mobile, vertical on desktop */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b-2 md:border-b-0 md:border-l-2 border-border scrollbar-hide">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-left font-mono text-sm transition-all relative whitespace-nowrap ${
                  activeTab === index
                    ? "text-primary bg-primary/5"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {activeTab === index && (
                  <>
                    {/* Bottom border for mobile */}
                    <span className="md:hidden absolute left-0 right-0 bottom-0 h-0.5 bg-primary"></span>
                    {/* Left border for desktop */}
                    <span className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-primary -ml-0.5"></span>
                  </>
                )}
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1 pt-4 md:pt-0">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              {experiences[activeTab].role}{" "}
              <a href="#" className="text-primary">
                @ {experiences[activeTab].fullTitle}
              </a>
            </h3>
            <p className="font-mono text-sm text-muted-foreground mt-1 mb-6">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-4">
              {experiences[activeTab].responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">▹</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
