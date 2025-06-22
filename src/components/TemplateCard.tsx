import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Calendar } from "lucide-react";

interface TemplateCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  usageCount: number;
  lastUpdated: string;
  performance: number;
  tags: string[];
  prompt: string;
}

const TemplateCard = ({
  id,
  title,
  description,
  category,
  usageCount,
  lastUpdated,
  performance,
  tags,
}: TemplateCardProps) => {
  return (
    <Link to={`/library/${id}`}>
      <motion.div
        layout
        className="h-full backdrop-blur-sm border border-slate-700 rounded-xl p-4 lg:p-6 hover:border-slate-600 transition-all group cursor-pointer"
      >
        <div className="flex flex-col h-full">
          {/* Card Header */}
          <div className="flex items-start justify-between mb-3">
            <span className="border border-blue-500/50 text-blue-300 px-2 py-1 rounded-md text-xs font-medium inline-block w-fit">
              {category}
            </span>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 rounded-full border border-green-500"></div>
              <span>{performance}% Perf.</span>
            </div>
          </div>

          {/* Title and Description */}
          <div>
            <h3 className="text-md lg:text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm mb-3 line-clamp-2 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="border border-slate-600 text-slate-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="text-slate-500 text-xs">
                  +{tags.length - 3} more
                </span>
              )}
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3" />
                <span>{usageCount.toLocaleString()} uses</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                <span>{lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default TemplateCard;
