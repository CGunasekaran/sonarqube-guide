import { Feature } from "@/types";
import {
  Bug,
  Shield,
  Target,
  Copy,
  TrendingDown,
  GitBranch,
  Code,
  LayoutDashboard,
  Workflow,
} from "lucide-react";
import CodeBlock from "./CodeBlock";

const iconMap: Record<string, any> = {
  bug: Bug,
  shield: Shield,
  target: Target,
  copy: Copy,
  "trending-down": TrendingDown,
  "git-branch": GitBranch,
  code: Code,
  "layout-dashboard": LayoutDashboard,
  workflow: Workflow,
};

interface FeatureCardProps {
  feature: Feature;
  expanded?: boolean;
  onToggle?: () => void;
}

export default function FeatureCard({
  feature,
  expanded = false,
  onToggle,
}: FeatureCardProps) {
  const Icon = iconMap[feature.icon] || Code;

  // Gradient colors based on feature category
  const getCategoryGradient = (category: string) => {
    switch (category) {
      case "Analysis":
        return "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200";
      case "Security":
        return "bg-gradient-to-br from-red-50 to-red-100 border-red-200";
      case "Governance":
        return "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200";
      case "Testing":
        return "bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200";
      case "Maintainability":
        return "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200";
      case "Workflow":
        return "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200";
      case "Coverage":
        return "bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200";
      case "Reporting":
        return "bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200";
      case "DevOps":
        return "bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200";
      default:
        return "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200";
    }
  };

  const getIconGradient = (category: string) => {
    switch (category) {
      case "Analysis":
        return "from-blue-500 to-blue-600";
      case "Security":
        return "from-red-500 to-red-600";
      case "Governance":
        return "from-emerald-500 to-emerald-600";
      case "Testing":
        return "from-cyan-500 to-cyan-600";
      case "Maintainability":
        return "from-orange-500 to-orange-600";
      case "Workflow":
        return "from-purple-500 to-purple-600";
      case "Coverage":
        return "from-indigo-500 to-indigo-600";
      case "Reporting":
        return "from-pink-500 to-pink-600";
      case "DevOps":
        return "from-teal-500 to-teal-600";
      default:
        return "from-blue-500 to-cyan-500";
    }
  };

  return (
    <div
      className={`backdrop-blur-sm rounded-xl border shadow-lg hover:shadow-xl transition-all ${getCategoryGradient(
        feature.category
      )}`}
    >
      <div className="p-6 cursor-pointer" onClick={onToggle}>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${getIconGradient(
                feature.category
              )} rounded-xl flex items-center justify-center shadow-md`}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-slate-900">
                {feature.name}
              </h3>
              <span className="px-3 py-1 bg-white/80 text-slate-700 text-xs font-semibold rounded-full border border-slate-300 shadow-sm">
                {feature.category}
              </span>
            </div>
            <p className="text-slate-700 mb-4">{feature.description}</p>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 text-sm">
                Key Benefits:
              </h4>
              <ul className="space-y-1">
                {feature.benefits
                  .slice(0, expanded ? undefined : 3)
                  .map((benefit, index) => (
                    <li
                      key={index}
                      className="text-sm text-slate-700 flex items-start gap-2"
                    >
                      <span className="text-green-500 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
              </ul>
            </div>

            {feature.benefits.length > 3 && !expanded && (
              <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium">
                Show more →
              </button>
            )}
          </div>
        </div>
      </div>

      {expanded && feature.examples && (
        <div className="px-6 pb-6 border-t border-slate-300 pt-6">
          <h4 className="font-semibold text-slate-900 mb-3">Example:</h4>
          {feature.examples.map((example, index) => (
            <CodeBlock
              key={index}
              code={example.code}
              language={example.language}
            />
          ))}
        </div>
      )}
    </div>
  );
}
