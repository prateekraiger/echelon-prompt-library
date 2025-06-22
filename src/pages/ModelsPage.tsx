import React from "react";
import Layout from "../layouts/Layout";
import { aiModels } from "../constants/aiModels";
import { ArrowUpRight } from "lucide-react";

const ModelsPage = () => {
  return (
    <Layout>
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 border-b border-slate-800 pb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Explore Leading
              <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Models
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
              Discover and interact with the most powerful AI models from across
              the industry. From conversational AI to complex reasoning, find
              the right tool for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {aiModels.map((model) => (
              <a
                key={model.id}
                href={model.link}
                target="_blank"
                rel="noopener noreferrer"
                className="h-full block"
              >
                <div className="h-full backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500 transition-all group cursor-pointer flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {model.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-400 mb-4">
                      {model.developer}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-center justify-between text-blue-400 font-semibold">
                      <span>Chat Now</span>
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ModelsPage;
