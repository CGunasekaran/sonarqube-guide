import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import { Workflow } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Workflow className="w-10 h-10" />
            <h1 className="text-4xl font-bold">How SonarQube Works</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Understanding the architecture and workflow of SonarQube
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Architecture */}
        <ArchitectureDiagram />

        {/* Analysis Workflow */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Analysis Workflow
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Code Analysis
                </h3>
                <p className="text-slate-700 mb-4">
                  SonarScanner analyzes your source code locally using
                  configured rules and quality profiles.
                </p>
                <CodeBlock
                  language="bash"
                  code={`# Run analysis
sonar-scanner \\
  -Dsonar.projectKey=my-project \\
  -Dsonar.sources=src \\
  -Dsonar.host.url=http://localhost:9000 \\
  -Dsonar.token=your-token`}
                  showLineNumbers={false}
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Report Generation
                </h3>
                <p className="text-gray-600 mb-4">
                  Scanner generates a detailed report containing all detected
                  issues, metrics, and code coverage data.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-700 font-mono">
                    Report includes: Issues, Metrics, Coverage, Duplications,
                    Complexity
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Report Submission
                </h3>
                <p className="text-gray-600 mb-4">
                  The report is sent to SonarQube Server via HTTP/HTTPS.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Processing
                </h3>
                <p className="text-gray-600 mb-4">
                  Compute Engine processes the report asynchronously, evaluates
                  quality gates, and updates the database.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  5
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Results Display
                </h3>
                <p className="text-gray-600 mb-4">
                  Web interface displays results, quality gate status, and
                  detailed metrics for review.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Concepts */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Key Concepts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality Profiles
              </h3>
              <p className="text-slate-700">
                Collections of rules that define which issues to detect. Each
                language has default profiles, and you can create custom ones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality Gates
              </h3>
              <p className="text-slate-700">
                Pass/fail criteria based on metrics thresholds. Projects must
                meet quality gate conditions to pass.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Issues</h3>
              <p className="text-slate-700">
                Problems detected in code: Bugs (errors), Vulnerabilities
                (security), Code Smells (maintainability).
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                New Code Period
              </h3>
              <p className="text-slate-700">
                Focus on new or changed code. SonarQube can analyze only code
                added since a specific date or version.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
