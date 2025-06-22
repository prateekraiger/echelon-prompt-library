import React from "react";
import { Database, Settings, Users, Book, Code, Search } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Enterprise Analytics",
      description:
        "Track performance metrics, A/B test prompts, and optimize outputs with comprehensive analytics dashboard.",
      stats: "99.9% Uptime",
    },
    {
      icon: Settings,
      title: "Dynamic Engineering",
      description:
        "Variable injection, conditional logic, and context-aware adaptations for sophisticated prompt workflows.",
      stats: "200+ Variables",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Role-based access control, shared template libraries, and collaborative prompt development tools.",
      stats: "10K+ Teams",
    },
    {
      icon: Book,
      title: "Template Versioning",
      description:
        "Complete version control with rollback capabilities, change tracking, and deployment pipelines.",
      stats: "50+ Versions",
    },
    {
      icon: Code,
      title: "API Integration",
      description:
        "RESTful API with SDKs for seamless integration into your existing development workflow and CI/CD.",
      stats: "1M+ API Calls",
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description:
        "AI-powered template recommendations based on your use case, team patterns, and success metrics.",
      stats: "90% Match Rate",
    },
  ];

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Powerful Features for Superior Prompt Engineering
          </h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            EchelonPrompts provides a comprehensive suite of tools to streamline
            your AI development workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="backdrop-blur-sm border border-slate-700 rounded-xl p-6 lg:p-8 hover:border-slate-600 transition-all group"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-lg border border-blue-500/50 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  Ready to elevate your AI?
                </h3>
                <p className="text-slate-300 text-lg">
                  Join thousands of developers and businesses who trust
                  EchelonPrompts to deliver exceptional AI performance.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="border border-purple-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-purple-600/20 transition-all transform hover:scale-105">
                  Start Building
                </button>
                <button className="border border-slate-700 text-slate-300 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-slate-800 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
