
import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import { Search, List, Settings } from 'lucide-react';

const TemplateLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = [
    'All',
    'Business Analysis',
    'Technical Documentation',
    'Creative Content',
    'Data Analysis',
    'Code Generation',
    'Customer Support',
    'Research',
    'Marketing'
  ];

  const templates = [
    {
      title: "Strategic Business Analysis Framework",
      description: "Comprehensive prompt for analyzing business opportunities, market positioning, and competitive landscape with actionable insights.",
      category: "Business Analysis",
      usageCount: 12847,
      lastUpdated: "2 days ago",
      performance: 94,
      tags: ["strategy", "analysis", "framework", "business"]
    },
    {
      title: "Technical API Documentation Generator",
      description: "Generate clear, comprehensive API documentation with examples, error codes, and best practices for developer onboarding.",
      category: "Technical Documentation",
      usageCount: 8392,
      lastUpdated: "1 week ago",
      performance: 97,
      tags: ["api", "documentation", "technical", "developers"]
    },
    {
      title: "Creative Campaign Ideation Engine",
      description: "Brainstorm innovative marketing campaigns with target audience analysis, creative concepts, and execution strategies.",
      category: "Creative Content",
      usageCount: 15621,
      lastUpdated: "3 days ago",
      performance: 91,
      tags: ["creative", "marketing", "campaigns", "ideation"]
    },
    {
      title: "Data Insights and Visualization Prompt",
      description: "Transform raw data into meaningful insights with statistical analysis, trend identification, and visualization recommendations.",
      category: "Data Analysis",
      usageCount: 9734,
      lastUpdated: "5 days ago",
      performance: 96,
      tags: ["data", "analysis", "insights", "visualization"]
    },
    {
      title: "Code Review and Optimization Assistant",
      description: "Comprehensive code review focusing on performance, security, maintainability, and best practices implementation.",
      category: "Code Generation",
      usageCount: 21456,
      lastUpdated: "1 day ago",
      performance: 98,
      tags: ["code", "review", "optimization", "security"]
    },
    {
      title: "Customer Support Resolution Framework",
      description: "Handle complex customer inquiries with empathy, technical accuracy, and clear resolution pathways.",
      category: "Customer Support",
      usageCount: 7892,
      lastUpdated: "4 days ago",
      performance: 93,
      tags: ["support", "customer", "resolution", "communication"]
    }
  ];

  const filteredTemplates = selectedCategory === 'All' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Template Library</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Discover professionally crafted prompts designed for maximum effectiveness across all AI models and use cases.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
              <button className="bg-slate-800 border border-slate-700 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <List className="w-4 h-4 text-slate-300" />
              </button>
              <button className="bg-slate-800 border border-slate-700 p-2 rounded-lg hover:bg-slate-700 transition-colors">
                <Settings className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
            Load More Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default TemplateLibrary;
