
import React from 'react';
import { Users, Calendar, ExternalLink } from 'lucide-react';

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
  usageCount: number;
  lastUpdated: string;
  performance: number;
  tags: string[];
}

const TemplateCard: React.FC<TemplateCardProps> = ({
  title,
  description,
  category,
  usageCount,
  lastUpdated,
  performance,
  tags
}) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 lg:p-6 hover:border-slate-600 transition-all hover:transform hover:scale-[1.02] cursor-pointer group">
      <div className="flex items-start justify-between mb-3 lg:mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-xs font-medium inline-block w-fit">
              {category}
            </span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-xs">{performance}% success rate</span>
            </div>
          </div>
          <h3 className="text-white font-semibold text-base lg:text-lg mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-400 text-sm mb-3 lg:mb-4 line-clamp-3 leading-relaxed">{description}</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3 lg:mb-4">
        {tags.slice(0, 3).map((tag, index) => (
          <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-slate-400 text-xs px-2 py-1">
            +{tags.length - 3} more
          </span>
        )}
      </div>
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400">
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            <span>{usageCount.toLocaleString()} uses</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Updated {lastUpdated}</span>
          </div>
        </div>
        <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 self-start sm:self-center">
          View Details
          <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default TemplateCard;
