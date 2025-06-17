
import React from 'react';
import { Database, Settings, Users, Book, Code, Search } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: "Enterprise Analytics",
      description: "Track performance metrics, A/B test prompts, and optimize outputs with comprehensive analytics dashboard.",
      stats: "99.9% Uptime"
    },
    {
      icon: Settings,
      title: "Dynamic Engineering",
      description: "Variable injection, conditional logic, and context-aware adaptations for sophisticated prompt workflows.",
      stats: "200+ Variables"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Role-based access control, shared template libraries, and collaborative prompt development tools.",
      stats: "10K+ Teams"
    },
    {
      icon: Book,
      title: "Template Versioning",
      description: "Complete version control with rollback capabilities, change tracking, and deployment pipelines.",
      stats: "50+ Versions"
    },
    {
      icon: Code,
      title: "API Integration",
      description: "RESTful API with SDKs for seamless integration into your existing development workflow and CI/CD.",
      stats: "1M+ API Calls"
    },
    {
      icon: Search,
      title: "Smart Discovery",
      description: "AI-powered template recommendations based on your use case, team patterns, and success metrics.",
      stats: "90% Match Rate"
    }
  ];

  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Built for Production</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            EchelonPrompts provides enterprise-grade infrastructure and tools to scale your AI operations with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-blue-400 text-sm font-semibold">{feature.stats}</span>
              </div>
              
              <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your AI Workflow?</h3>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of teams already using EchelonPrompts to deliver consistent, high-quality AI outputs at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-800 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
