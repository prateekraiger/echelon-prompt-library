import React, { useState } from "react";
import TemplateCard from "./TemplateCard";
import { Search, Grid, List, Filter } from "lucide-react";
import { categories, templates } from "../constants/templates";

const INITIAL_LOAD = 9;
const LOAD_MORE_COUNT = 6;

const TemplateLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    const matchesSearch =
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + LOAD_MORE_COUNT);
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 border-b border-slate-800 pb-12">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            The Echelon
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Prompt Library
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
            Explore a curated collection of production-ready prompts. Each one
            is engineered for performance, tested for reliability, and designed
            to integrate seamlessly into your AI workflows.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 lg:mb-8">
          <div className="mb-4 lg:mb-6">
            <div className="flex overflow-x-auto pb-2 lg:pb-0 lg:flex-wrap lg:justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 lg:px-4 lg:py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap border ${
                    selectedCategory === category
                      ? "border-blue-500 text-white"
                      : "border-slate-700 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch sm:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-slate-700 rounded-lg pl-10 pr-4 py-2 lg:py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 lg:p-3 rounded-lg transition-colors border ${
                  viewMode === "grid"
                    ? "border-blue-500 text-white"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 lg:p-3 rounded-lg transition-colors border ${
                  viewMode === "list"
                    ? "border-blue-500 text-white"
                    : "border-slate-700 text-slate-300 hover:border-slate-600"
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button className="border border-slate-700 p-2 lg:p-3 rounded-lg hover:border-slate-600 transition-colors">
                <Filter className="w-4 h-4 text-slate-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="mb-4 lg:mb-6">
          <p className="text-slate-400 text-sm">
            {filteredTemplates.length} template
            {filteredTemplates.length !== 1 ? "s" : ""} found
          </p>
        </div>

        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6"
              : "space-y-4"
          }`}
        >
          {filteredTemplates.slice(0, visibleCount).map((template) => (
            <TemplateCard key={template.id} {...template} />
          ))}
        </div>

        {visibleCount < filteredTemplates.length && (
          <div className="text-center mt-8 lg:mt-12">
            <button
              onClick={handleLoadMore}
              className="border border-purple-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold hover:bg-purple-600/20 transition-all transform hover:scale-105"
            >
              Load More Templates
            </button>
          </div>
        )}

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12 lg:py-16">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-semibold mb-2">No templates found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
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
