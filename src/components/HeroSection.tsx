import React from "react";
import { Award, BarChart2, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="relative z-10 text-center">
          <div className="inline-block backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 lg:px-6 lg:py-2 mb-6">
            <p className="text-sm lg:text-base text-blue-300">
              Echelon V2 is here!
              <span className="ml-2 font-semibold text-white">
                Read the announcement &rarr;
              </span>
            </p>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4 tracking-tighter">
            The Ultimate AI Prompt
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Engineering Suite
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg lg:text-xl text-slate-300 mb-8">
            Build, test, and deploy enterprise-grade AI prompts with
            unparalleled control, analytics, and collaboration features.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Link
              to="/library"
              className="border border-purple-500 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-purple-600/20 transition-all transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to="/models"
              className="border border-slate-700 text-slate-300 px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold text-base lg:text-lg hover:bg-slate-800 transition-all"
            >
              Explore Models
            </Link>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-16">
          <div className="flex flex-col items-center p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="w-10 h-10 lg:w-12 lg:h-12 border border-blue-500/50 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
              <Award className="w-5 h-5 lg:w-6 lg:h-6 text-blue-400" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              98%
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Prompt Success Rate
            </p>
          </div>
          <div className="flex flex-col items-center p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors">
            <div className="w-10 h-10 lg:w-12 lg:h-12 border border-purple-500/50 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
              <BarChart2 className="w-5 h-5 lg:w-6 lg:h-6 text-purple-400" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              4x
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Faster Development Cycles
            </p>
          </div>
          <div className="flex flex-col items-center p-4 lg:p-6 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-slate-600 transition-colors sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 lg:w-12 lg:h-12 border border-green-500/50 rounded-lg flex items-center justify-center mb-3 lg:mb-4">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-green-400" />
            </div>
            <h3 className="text-base lg:text-lg font-semibold text-white mb-2">
              Enterprise Ready
            </h3>
            <p className="text-sm text-slate-400 text-center">
              Scalable and Secure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
