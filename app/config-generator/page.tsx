"use client";

import { useState } from "react";
import { Settings, Download, Copy, CheckCircle } from "lucide-react";

interface ConfigOption {
  id: string;
  label: string;
  value: string;
  type: "text" | "select" | "checkbox" | "number";
  options?: string[];
  description?: string;
  defaultValue: string | boolean | number;
}

export default function ConfigGeneratorPage() {
  const [projectType, setProjectType] = useState("javascript");
  const [sonarUrl, setSonarUrl] = useState("http://localhost:9000");
  const [projectKey, setProjectKey] = useState("my-project");
  const [projectName, setProjectName] = useState("My Project");
  const [sourceDir, setSourceDir] = useState("src");
  const [testDir, setTestDir] = useState("test");
  const [exclusions, setExclusions] = useState(
    "**/node_modules/**,**/dist/**,**/build/**"
  );
  const [coveragePath, setCoveragePath] = useState("coverage/lcov.info");
  const [encoding, setEncoding] = useState("UTF-8");
  const [verbose, setVerbose] = useState(false);
  const [copied, setCopied] = useState(false);

  const projectTypes = {
    javascript: {
      name: "JavaScript/Node.js",
      defaultCoverage: "coverage/lcov.info",
      defaultExclusions:
        "**/node_modules/**,**/dist/**,**/build/**,**/*.test.js,**/*.spec.js",
      defaultTestDir: "test",
    },
    typescript: {
      name: "TypeScript",
      defaultCoverage: "coverage/lcov.info",
      defaultExclusions:
        "**/node_modules/**,**/dist/**,**/build/**,**/*.test.ts,**/*.spec.ts",
      defaultTestDir: "test",
    },
    java: {
      name: "Java/Maven",
      defaultCoverage: "target/site/jacoco/jacoco.xml",
      defaultExclusions: "**/target/**,**/*.jar",
      defaultTestDir: "src/test/java",
    },
    python: {
      name: "Python",
      defaultCoverage: "coverage.xml",
      defaultExclusions: "**/__pycache__/**,**/*.pyc,**/venv/**,**/.venv/**",
      defaultTestDir: "tests",
    },
    csharp: {
      name: "C#/.NET",
      defaultCoverage: "coverage.xml",
      defaultExclusions: "**/bin/**,**/obj/**",
      defaultTestDir: "Tests",
    },
    react: {
      name: "React",
      defaultCoverage: "coverage/lcov.info",
      defaultExclusions:
        "**/node_modules/**,**/build/**,**/public/**,**/*.test.jsx,**/*.spec.jsx",
      defaultTestDir: "src/__tests__",
    },
  };

  const generateConfig = () => {
    const lines = [
      "# SonarQube Configuration",
      `# Generated for ${
        projectTypes[projectType as keyof typeof projectTypes].name
      }`,
      "",
      "# Project identification",
      `sonar.projectKey=${projectKey}`,
      `sonar.projectName=${projectName}`,
      `sonar.projectVersion=1.0`,
      "",
      "# Source and test directories",
      `sonar.sources=${sourceDir}`,
      `sonar.tests=${testDir}`,
      "",
      "# Exclusions",
      `sonar.exclusions=${exclusions}`,
      "",
      "# Coverage",
      projectType === "javascript" ||
      projectType === "typescript" ||
      projectType === "react"
        ? `sonar.javascript.lcov.reportPaths=${coveragePath}`
        : projectType === "java"
        ? `sonar.coverage.jacoco.xmlReportPaths=${coveragePath}`
        : `sonar.python.coverage.reportPaths=${coveragePath}`,
      "",
      "# Source encoding",
      `sonar.sourceEncoding=${encoding}`,
      "",
    ];

    if (verbose) {
      lines.push("# Verbose logging", "sonar.verbose=true", "");
    }

    if (
      projectType === "javascript" ||
      projectType === "typescript" ||
      projectType === "react"
    ) {
      lines.push(
        "# JavaScript/TypeScript specific",
        "sonar.javascript.node.maxspace=4096",
        ""
      );
    }

    if (projectType === "java") {
      lines.push(
        "# Java specific",
        "sonar.java.binaries=target/classes",
        "sonar.java.libraries=target/dependency/*.jar",
        ""
      );
    }

    return lines.join("\n");
  };

  const generateCIConfig = () => {
    if (
      projectType === "javascript" ||
      projectType === "typescript" ||
      projectType === "react"
    ) {
      return `# GitHub Actions Example
name: SonarQube Analysis
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  sonarqube:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests with coverage
        run: npm test -- --coverage
      
      - name: SonarQube Scan
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: ${sonarUrl}`;
    } else if (projectType === "java") {
      return `# GitHub Actions Example for Java
name: SonarQube Analysis
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  sonarqube:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
      
      - name: Cache Maven packages
        uses: actions/cache@v3
        with:
          path: ~/.m2
          key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}
      
      - name: Build and analyze
        run: |
          mvn clean verify sonar:sonar \\
            -Dsonar.projectKey=${projectKey} \\
            -Dsonar.host.url=${sonarUrl} \\
            -Dsonar.login=\${{ secrets.SONAR_TOKEN }}`;
    }
    return "";
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  const config = generateConfig();
  const ciConfig = generateCIConfig();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Configuration Generator</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Generate SonarQube configuration files for your project
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Project Settings
            </h2>

            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => {
                    const type = e.target.value;
                    setProjectType(type);
                    const typeConfig =
                      projectTypes[type as keyof typeof projectTypes];
                    setCoveragePath(typeConfig.defaultCoverage);
                    setExclusions(typeConfig.defaultExclusions);
                    setTestDir(typeConfig.defaultTestDir);
                  }}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {Object.entries(projectTypes).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* SonarQube URL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  SonarQube Server URL
                </label>
                <input
                  type="text"
                  value={sonarUrl}
                  onChange={(e) => setSonarUrl(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="http://localhost:9000"
                />
              </div>

              {/* Project Key */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Key
                </label>
                <input
                  type="text"
                  value={projectKey}
                  onChange={(e) => setProjectKey(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="my-project"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Unique identifier for your project
                </p>
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="My Project"
                />
              </div>

              {/* Source Directory */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Source Directory
                </label>
                <input
                  type="text"
                  value={sourceDir}
                  onChange={(e) => setSourceDir(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="src"
                />
              </div>

              {/* Test Directory */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Test Directory
                </label>
                <input
                  type="text"
                  value={testDir}
                  onChange={(e) => setTestDir(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="test"
                />
              </div>

              {/* Exclusions */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  File Exclusions
                </label>
                <textarea
                  value={exclusions}
                  onChange={(e) => setExclusions(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="**/node_modules/**"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Comma-separated patterns
                </p>
              </div>

              {/* Coverage Report Path */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Coverage Report Path
                </label>
                <input
                  type="text"
                  value={coveragePath}
                  onChange={(e) => setCoveragePath(e.target.value)}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="coverage/lcov.info"
                />
              </div>

              {/* Verbose */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="verbose"
                  checked={verbose}
                  onChange={(e) => setVerbose(e.target.checked)}
                  className="w-4 h-4 text-green-600 border-slate-300 rounded focus:ring-2 focus:ring-green-500"
                />
                <label
                  htmlFor="verbose"
                  className="text-sm font-medium text-slate-700"
                >
                  Enable verbose logging
                </label>
              </div>
            </div>
          </div>

          {/* Generated Configuration */}
          <div className="space-y-6">
            {/* sonar-project.properties */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-lg p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-900">
                  sonar-project.properties
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(config)}
                    className="p-2 bg-white hover:bg-slate-50 rounded-lg border border-slate-300 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <Copy className="w-5 h-5 text-slate-600" />
                    )}
                  </button>
                  <button
                    onClick={() =>
                      handleDownload(config, "sonar-project.properties")
                    }
                    className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    title="Download file"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
                {config}
              </pre>
            </div>

            {/* CI/CD Configuration */}
            {ciConfig && (
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-lg p-6 border border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">
                    CI/CD Configuration
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleCopy(ciConfig)}
                      className="p-2 bg-white hover:bg-blue-50 rounded-lg border border-blue-300 transition-colors"
                      title="Copy to clipboard"
                    >
                      <Copy className="w-5 h-5 text-slate-600" />
                    </button>
                    <button
                      onClick={() =>
                        handleDownload(
                          ciConfig,
                          ".github/workflows/sonarqube.yml"
                        )
                      }
                      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      title="Download file"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <pre className="bg-slate-900 text-blue-400 p-4 rounded-lg overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto">
                  {ciConfig}
                </pre>
              </div>
            )}

            {/* Quick Start Instructions */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl shadow-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                📋 Quick Start
              </h3>
              <ol className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 min-w-[1.5rem]">
                    1.
                  </span>
                  <span>
                    Download the{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      sonar-project.properties
                    </code>{" "}
                    file
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 min-w-[1.5rem]">
                    2.
                  </span>
                  <span>Place it in your project root directory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 min-w-[1.5rem]">
                    3.
                  </span>
                  <span>
                    Set up your SonarQube token:{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      export SONAR_TOKEN=your-token
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 min-w-[1.5rem]">
                    4.
                  </span>
                  <span>
                    Run the scanner:{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      sonar-scanner
                    </code>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-600 min-w-[1.5rem]">
                    5.
                  </span>
                  <span>
                    For CI/CD, add the workflow file to{" "}
                    <code className="bg-white px-2 py-1 rounded text-xs">
                      .github/workflows/
                    </code>
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
