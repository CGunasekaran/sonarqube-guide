import { SetupStep } from "@/types";
import { CheckCircle2, AlertCircle, Lightbulb, Terminal } from "lucide-react";
import CodeBlock from "./CodeBlock";

interface SetupStepProps {
  step: SetupStep;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
}

export default function SetupStepComponent({
  step,
  isCompleted = false,
  onToggleComplete,
}: SetupStepProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-slate-200">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isCompleted
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6" />
                ) : (
                  <span className="font-bold">{step.order}</span>
                )}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h3>
              <p className="text-slate-700">{step.description}</p>
            </div>
          </div>
          {onToggleComplete && (
            <button
              onClick={onToggleComplete}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isCompleted
                  ? "bg-green-100 text-green-700 hover:bg-green-200"
                  : "bg-blue-100 text-blue-700 hover:bg-blue-200"
              }`}
            >
              {isCompleted ? "Completed" : "Mark Complete"}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Prerequisites */}
        {step.prerequisites && step.prerequisites.length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">
                  Prerequisites
                </h4>
                <ul className="space-y-1">
                  {step.prerequisites.map((prereq, index) => (
                    <li key={index} className="text-sm text-yellow-800">
                      • {prereq}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Commands */}
        {step.commands && step.commands.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-5 h-5 text-gray-600" />
              <h4 className="font-semibold text-gray-900">Commands</h4>
            </div>
            <div className="space-y-3">
              {step.commands.map((cmd, index) => (
                <div key={index}>
                  <p className="text-sm text-gray-600 mb-2">
                    {cmd.description}
                  </p>
                  <CodeBlock
                    code={cmd.command}
                    language="bash"
                    showLineNumbers={false}
                  />
                  {cmd.platform && cmd.platform !== "all" && (
                    <p className="text-xs text-gray-500 mt-1">
                      Platform: {cmd.platform}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Example */}
        {step.code && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">
              {step.code.description || "Configuration"}
            </h4>
            <CodeBlock
              code={step.code.code}
              language={step.code.language}
              filename={step.code.filename}
            />
          </div>
        )}

        {/* Tips */}
        {step.tips && step.tips.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Tips</h4>
                <ul className="space-y-1">
                  {step.tips.map((tip, index) => (
                    <li key={index} className="text-sm text-blue-800">
                      • {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Troubleshooting */}
        {step.troubleshooting && step.troubleshooting.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Common Issues</h4>
            <div className="space-y-3">
              {step.troubleshooting.map((item, index) => (
                <div
                  key={index}
                  className="border border-red-200 bg-red-50 rounded-lg p-4"
                >
                  <p className="font-medium text-red-900 mb-1">
                    ⚠️ {item.issue}
                  </p>
                  <p className="text-sm text-red-800">
                    <strong>Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
