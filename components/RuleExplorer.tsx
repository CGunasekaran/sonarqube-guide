import { QualityRule } from "@/types";
import CodeBlock from "./CodeBlock";
import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

interface RuleExplorerProps {
  rule: QualityRule;
}

export default function RuleExplorer({ rule }: RuleExplorerProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-100 text-red-700 border-red-200";
      case "major":
        return "bg-orange-100 text-orange-700 border-orange-200";
      case "minor":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "vulnerability":
        return <AlertTriangle className="w-5 h-5" />;
      case "bug":
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-lg ${getSeverityColor(rule.severity)}`}>
            {getTypeIcon(rule.type)}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900">{rule.name}</h2>
            <p className="text-sm text-gray-500">{rule.key}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(
              rule.severity
            )}`}
          >
            {rule.severity}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {rule.type.replace("_", " ")}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {rule.language}
          </span>
        </div>

        <p className="text-slate-700 leading-relaxed">{rule.description}</p>
      </div>

      {rule.nonCompliantExample && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Non-Compliant Code
            </h3>
          </div>
          <CodeBlock
            code={rule.nonCompliantExample}
            language={rule.language.toLowerCase()}
          />
        </div>
      )}

      {rule.compliantExample && (
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Compliant Solution
            </h3>
          </div>
          <CodeBlock
            code={rule.compliantExample}
            language={rule.language.toLowerCase()}
          />
        </div>
      )}

      {rule.tags.length > 0 && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags</h4>
          <div className="flex flex-wrap gap-2">
            {rule.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
