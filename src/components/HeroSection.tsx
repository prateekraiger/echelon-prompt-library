
import React from 'react';
import { Book, Code, Database } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6 lg:mb-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 lg:px-6 lg:py-2">
              <span className="text-blue-300 text-xs sm:text-sm font-medium">Elite-tier prompting for next-gen results</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            Enterprise-Grade
            <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              AI Prompting
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-300 mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Transform your AI interactions with scientifically-crafted, battle-tested prompt templates. 
            Deliver consistent, high-quality outputs across all your AI applications with EchelonPrompts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center mb-12 lg:mb-16 px-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Explore Templates
            </button>
            <button className="border border-slate-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-slate-800 transition-all">
              View Documentation
            </button>
          </div>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
            <div className="flex flex-col items-center p-4 lg:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <Book className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base lg:text-lg">200+ Templates</h3>
              <p className="text-slate-400 text-sm text-center">Professionally crafted templates across 15+ categories</p>
            </div>
            
            <div className="flex flex-col items-center p-4 lg:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <Code className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base lg:text-lg">Universal Compatibility</h3>
              <p className="text-slate-400 text-sm text-center">Optimized for GPT-4, Claude, Gemini, and more</p>
            </div>
            
            <div className="flex flex-col items-center p-4 lg:p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
                <Database className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-base lg:text-lg">Enterprise Ready</h3>
              <p className="text-slate-400 text-sm text-center">Built for production with 99.9% uptime SLA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
