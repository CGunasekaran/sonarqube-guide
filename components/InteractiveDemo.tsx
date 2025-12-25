"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { Play, AlertCircle, CheckCircle2, XCircle } from "lucide-react";

interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  issues: {
    line: number;
    severity: "critical" | "major" | "minor";
    message: string;
    rule: string;
  }[];
}

const codeExamples: CodeExample[] = [
  {
    id: "sql-injection",
    title: "SQL Injection Vulnerability",
    description:
      "This code is vulnerable to SQL injection attacks because user input is directly concatenated into the query.",
    language: "javascript",
    code: `function getUserById(userId) {
  // CRITICAL: SQL Injection vulnerability
  const query = "SELECT * FROM users WHERE id = " + userId;
  return db.execute(query);
}`,
    issues: [
      {
        line: 3,
        severity: "critical",
        message: "SQL query is vulnerable to injection attacks",
        rule: "javascript:S1533",
      },
    ],
  },
  {
    id: "unused-variable",
    title: "Unused Variables",
    description: "Dead code that should be removed to improve readability.",
    language: "javascript",
    code: `function calculatePrice(quantity, unitPrice) {
  const taxRate = 0.08; // Unused variable
  const discount = 10;  // Unused variable
  return quantity * unitPrice;
}`,
    issues: [
      {
        line: 2,
        severity: "minor",
        message: 'Remove this unused "taxRate" variable',
        rule: "javascript:S1481",
      },
      {
        line: 3,
        severity: "minor",
        message: 'Remove this unused "discount" variable',
        rule: "javascript:S1481",
      },
    ],
  },
  {
    id: "null-check",
    title: "Null Pointer Dereference",
    description: "Code that may throw null pointer exceptions.",
    language: "typescript",
    code: `function getUserName(user: User | null) {
  // CRITICAL: Potential null pointer dereference
  return user.name.toUpperCase();
}`,
    issues: [
      {
        line: 3,
        severity: "critical",
        message:
          "user may be null. Add null check before accessing properties.",
        rule: "typescript:S2259",
      },
    ],
  },
  {
    id: "complexity",
    title: "High Cognitive Complexity",
    description: "Deeply nested code that is hard to understand and maintain.",
    language: "javascript",
    code: `function processData(data) {
  if (data) {
    if (data.items) {
      for (let item of data.items) {
        if (item.valid) {
          if (item.price > 100) {
            if (item.discount) {
              // Too deeply nested!
              item.finalPrice = item.price * 0.9;
            }
          }
        }
      }
    }
  }
}`,
    issues: [
      {
        line: 1,
        severity: "major",
        message:
          "Refactor this function to reduce its Cognitive Complexity from 16 to the 15 allowed.",
        rule: "javascript:S3776",
      },
    ],
  },
];

export default function InteractiveDemo() {
  const [selectedExample, setSelectedExample] = useState(codeExamples[0]);
  const [showIssues, setShowIssues] = useState(true);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-600 bg-red-50";
      case "major":
        return "text-orange-600 bg-orange-50";
      default:
        return "text-yellow-600 bg-yellow-50";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <XCircle className="w-4 h-4" />;
      case "major":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Example Selector */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {codeExamples.map((example) => (
          <button
            key={example.id}
            onClick={() => setSelectedExample(example)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedExample.id === example.id
                ? "border-orange-500 bg-orange-50"
                : "border-gray-200 hover:border-orange-300 bg-white"
            }`}
          >
            <h3 className="font-semibold text-gray-900 mb-1">
              {example.title}
            </h3>
            <p className="text-sm text-gray-600">
              {example.issues.length} issue
              {example.issues.length !== 1 ? "s" : ""}
            </p>
          </button>
        ))}
      </div>

      {/* Demo Area */}
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-slate-200">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
          <div className="flex items-center gap-3 mb-2">
            <Play className="w-6 h-6" />
            <h3 className="text-2xl font-bold">{selectedExample.title}</h3>
          </div>
          <p className="text-orange-100">{selectedExample.description}</p>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Code Sample</h4>
            <button
              onClick={() => setShowIssues(!showIssues)}
              className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
            >
              <AlertCircle className="w-4 h-4" />
              {showIssues ? "Hide" : "Show"} Issues
            </button>
          </div>

          <CodeBlock
            code={selectedExample.code}
            language={selectedExample.language}
          />

          {showIssues && (
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-4">
                Detected Issues ({selectedExample.issues.length})
              </h4>
              <div className="space-y-3">
                {selectedExample.issues.map((issue, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      issue.severity === "critical"
                        ? "border-red-500 bg-red-50"
                        : issue.severity === "major"
                        ? "border-orange-500 bg-orange-50"
                        : "border-yellow-500 bg-yellow-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`mt-1 ${getSeverityColor(issue.severity)}`}
                      >
                        {getSeverityIcon(issue.severity)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">
                            Line {issue.line}
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(
                              issue.severity
                            )}`}
                          >
                            {issue.severity.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-2">{issue.message}</p>
                        <p className="text-sm text-gray-500">{issue.rule}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Try it yourself!
            </h4>
            <p className="text-gray-700 mb-3">
              Install SonarLint in your IDE to get real-time feedback as you
              code. These issues would be detected immediately as you type.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.sonarsource.com/products/sonarlint/features/visual-studio-code/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get SonarLint for VS Code
              </a>
              <a
                href="https://www.sonarsource.com/products/sonarlint/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
