
import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import { Search, Grid, List, Filter } from 'lucide-react';

const TemplateLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  
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

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-slate-900 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Template Library</h2>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Discover professionally crafted prompts designed for maximum effectiveness across all AI models and use cases.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 lg:mb-8">
          {/* Category Filter - Mobile Scrollable */}
          <div className="mb-4 lg:mb-6">
            <div className="flex overflow-x-auto pb-2 lg:pb-0 lg:flex-wrap lg:justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Search and View Controls */}
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-2 lg:py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 lg:p-3 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 lg:p-3 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button className="bg-slate-800 border border-slate-700 p-2 lg:p-3 rounded-lg hover:bg-slate-700 transition-colors">
                <Filter className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 lg:mb-6">
          <p className="text-slate-400 text-sm">
            {filteredTemplates.length} template{filteredTemplates.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Template Grid/List */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6' 
            : 'space-y-4'
        }`}>
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={index} {...template} />
          ))}
        </div>

        {/* Load More */}
        {filteredTemplates.length > 0 && (
          <div className="text-center mt-8 lg:mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Load More Templates
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 lg:py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TemplateLibrary;
