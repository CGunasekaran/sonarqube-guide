import { Integration } from "@/types";
import CodeBlock from "./CodeBlock";
import { CheckCircle2 } from "lucide-react";

interface IntegrationGuideProps {
  integration: Integration;
}

export default function IntegrationGuide({
  integration,
}: IntegrationGuideProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-200">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-3xl font-bold text-gray-900">
            {integration.name}
          </h2>
          <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">
            {integration.type}
          </span>
        </div>
        <p className="text-slate-700">{integration.description}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Setup Steps
        </h3>
        <div className="space-y-3">
          {integration.setupSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-700 font-semibold">
                {index + 1}
              </div>
              <p className="text-slate-700 pt-1">{step}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Configuration
        </h3>
        {integration.configuration.description && (
          <p className="text-gray-600 mb-4">
            {integration.configuration.description}
          </p>
        )}
        <CodeBlock
          code={integration.configuration.code}
          language={integration.configuration.language}
          filename={integration.configuration.filename}
        />
      </div>

      <div className="mt-8 bg-cyan-50 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Next Steps</h4>
            <ul className="space-y-2 text-slate-700">
              <li>• Test your integration by triggering a build</li>
              <li>• Check the SonarQube dashboard for analysis results</li>
              <li>• Configure quality gates for your project</li>
              <li>• Set up notifications for failed quality gates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
