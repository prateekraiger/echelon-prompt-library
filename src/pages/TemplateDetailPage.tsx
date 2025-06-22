import React from "react";
import { useParams, Link } from "react-router-dom";
import { templates } from "../constants/templates";
import Layout from "../layouts/Layout";
import { ArrowLeft, Copy, Check } from "lucide-react";
import { toast } from "sonner";

const TemplateDetailPage = () => {
  const { id } = useParams();
  const template = templates.find((t) => t.id === id);
  const [hasCopied, setHasCopied] = React.useState(false);

  if (!template) {
    return (
      <Layout>
        <div className="text-center py-20 text-white">Template not found.</div>
      </Layout>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(template.prompt);
    setHasCopied(true);
    toast.success("Prompt copied to clipboard!");
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/library"
          className="flex items-center gap-2 text-slate-300 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Library
        </Link>

        <div className="backdrop-blur-sm border border-slate-700 rounded-xl p-6 lg:p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="border border-blue-500/50 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {template.category}
            </span>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2.5 h-2.5 rounded-full border border-green-500"></div>
              <span>{template.performance}% Performance</span>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {template.title}
          </h1>
          <p className="text-slate-300 text-lg mb-6">{template.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {template.tags.map((tag) => (
              <span
                key={tag}
                className="border border-slate-600 text-slate-300 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="border-t border-slate-700 pt-6">
            <h2 className="font-semibold text-2xl text-white mb-4">
              Full Prompt
            </h2>
            <div className="relative">
              <pre className="text-slate-300 text-base whitespace-pre-wrap bg-slate-800/50 p-4 rounded-lg font-mono">
                {template.prompt}
              </pre>
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center justify-center gap-2 border border-slate-600 text-slate-300 px-3 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all"
              >
                {hasCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
                {hasCopied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TemplateDetailPage;
