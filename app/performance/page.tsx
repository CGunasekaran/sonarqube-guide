"use client";

import { useState } from "react";
import { Zap, Server, Database, Code, TrendingUp, AlertCircle } from "lucide-react";

interface Tip {
  id: string;
  title: string;
  category: string;
  icon: any;
  impact: "High" | "Medium" | "Low";
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  implementation: string[];
  codeExample?: string;
  metrics: string[];
  gradient: string;
  border: string;
  iconBg: string;
}

export default function PerformancePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImpact, setSelectedImpact] = useState("all");

  const tips: Tip[] = [
    {
      id: "jvm-memory",
      title: "Optimize JVM Memory Settings",
      category: "Server",
      icon: Server,
      impact: "High",
      difficulty: "Easy",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "from-blue-500 to-blue-600",
      description: "Properly configure JVM heap size for SonarQube server components to prevent OutOfMemory errors and improve analysis speed.",
      implementation: [
        "Edit sonar.properties file",
        "Adjust heap sizes based on your server resources",
        "Monitor memory usage and adjust accordingly",
        "Consider server RAM (recommend 4GB minimum)",
      ],
      codeExample: `# In sonar.properties
sonar.web.javaOpts=-Xmx2048m -Xms512m
sonar.ce.javaOpts=-Xmx2048m -Xms512m
sonar.search.javaOpts=-Xmx1024m -Xms512m`,
      metrics: ["Faster analysis processing", "Reduced OOM errors", "Better concurrent user support"],
    },
    {
      id: "database-tuning",
      title: "Database Connection Pool Optimization",
      category: "Database",
      icon: Database,
      impact: "High",
      difficulty: "Medium",
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-emerald-600",
      description: "Configure database connection pool size to handle concurrent analyses and reduce database wait times.",
      implementation: [
        "Adjust connection pool settings in sonar.properties",
        "Monitor database connection usage",
        "Balance pool size with database server capacity",
        "Consider using connection pooling at database level",
      ],
      codeExample: `# In sonar.properties
sonar.jdbc.maxActive=60
sonar.jdbc.maxIdle=5
sonar.jdbc.minIdle=2
sonar.jdbc.maxWait=5000`,
      metrics: ["30% faster query execution", "Better concurrent analysis handling", "Reduced connection timeouts"],
    },
    {
      id: "worker-count",
      title: "Configure Compute Engine Workers",
      category: "Server",
      icon: TrendingUp,
      impact: "High",
      difficulty: "Easy",
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      iconBg: "from-purple-500 to-purple-600",
      description: "Adjust the number of Compute Engine workers to process background tasks faster based on available CPU cores.",
      implementation: [
        "Set worker count based on CPU cores (1 worker per 2 cores recommended)",
        "Monitor CPU usage during analysis",
        "Balance with memory availability",
        "Consider peak analysis times",
      ],
      codeExample: `# In sonar.properties
# For a 8-core server:
sonar.ce.workerCount=4`,
      metrics: ["Parallel analysis processing", "Reduced queue wait times", "Better throughput during peak hours"],
    },
    {
      id: "scanner-exclusions",
      title: "Optimize File Exclusions",
      category: "Scanner",
      icon: Code,
      impact: "High",
      difficulty: "Easy",
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      iconBg: "from-orange-500 to-orange-600",
      description: "Exclude unnecessary files and directories from analysis to significantly reduce scan time and resource usage.",
      implementation: [
        "Exclude vendor/third-party code",
        "Exclude generated files and build artifacts",
        "Exclude test coverage reports",
        "Use specific patterns instead of wildcards when possible",
      ],
      codeExample: `# In sonar-project.properties
sonar.exclusions=\\
  **/node_modules/**,\\
  **/vendor/**,\\
  **/dist/**,\\
  **/build/**,\\
  **/*.min.js,\\
  **/coverage/**,\\
  **/*.generated.ts`,
      metrics: ["50-70% faster scans", "Reduced memory usage", "Lower false positives"],
    },
    {
      id: "incremental-analysis",
      title: "Enable Incremental Analysis",
      category: "Scanner",
      icon: Zap,
      impact: "High",
      difficulty: "Medium",
      gradient: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      iconBg: "from-yellow-500 to-yellow-600",
      description: "Use incremental analysis to scan only changed files in pull requests, dramatically reducing analysis time.",
      implementation: [
        "Configure SCM integration (Git, SVN, etc.)",
        "Enable pull request decoration",
        "Set up proper new code period",
        "Ensure .git directory is accessible",
      ],
      codeExample: `# For pull request analysis
sonar.pullrequest.key=123
sonar.pullrequest.branch=feature/xyz
sonar.pullrequest.base=main

# Scanner will automatically analyze only changed files`,
      metrics: ["80% faster PR analysis", "Immediate feedback on new code", "Reduced CI/CD pipeline time"],
    },
    {
      id: "rule-optimization",
      title: "Optimize Quality Profile Rules",
      category: "Configuration",
      icon: AlertCircle,
      impact: "Medium",
      difficulty: "Easy",
      gradient: "from-red-50 to-red-100",
      border: "border-red-200",
      iconBg: "from-red-500 to-red-600",
      description: "Disable unnecessary rules and focus on critical issues to reduce analysis time and computational overhead.",
      implementation: [
        "Review enabled rules in quality profile",
        "Disable rules not relevant to your codebase",
        "Focus on security and critical bug rules",
        "Create custom profiles for different project types",
      ],
      codeExample: `# Via UI: Quality Profiles > [Your Profile] > Rules
# Deactivate rules with:
# - Low severity and low value
# - Not applicable to your tech stack
# - Duplicates of other rules`,
      metrics: ["20-30% faster analysis", "Reduced noise in results", "Better focused feedback"],
    },
    {
      id: "elasticsearch-tuning",
      title: "Elasticsearch Index Optimization",
      category: "Database",
      icon: Database,
      impact: "Medium",
      difficulty: "Hard",
      gradient: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
      iconBg: "from-cyan-500 to-cyan-600",
      description: "Optimize Elasticsearch settings for faster search and better UI responsiveness.",
      implementation: [
        "Increase Elasticsearch heap size",
        "Configure appropriate index settings",
        "Regular index maintenance",
        "Monitor cluster health",
      ],
      codeExample: `# In sonar.properties
sonar.search.javaOpts=-Xmx1536m -Xms512m

# Disable swapping for better performance
bootstrap.memory_lock=true`,
      metrics: ["Faster search results", "Improved UI responsiveness", "Better dashboard load times"],
    },
    {
      id: "parallel-scanning",
      title: "Enable Parallel File Processing",
      category: "Scanner",
      icon: TrendingUp,
      impact: "Medium",
      difficulty: "Easy",
      gradient: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
      iconBg: "from-indigo-500 to-indigo-600",
      description: "Configure scanner to process files in parallel using multiple CPU cores.",
      implementation: [
        "Set sonar.scanner.parallelThreads property",
        "Monitor CPU usage during scans",
        "Balance with available resources",
        "Consider I/O bottlenecks",
      ],
      codeExample: `# Scanner property
sonar.scanner.parallelThreads=4

# Or via command line
sonar-scanner -Dsonar.scanner.parallelThreads=4`,
      metrics: ["30-40% faster scans", "Better CPU utilization", "Reduced overall scan time"],
    },
    {
      id: "cache-management",
      title: "Scanner Cache Optimization",
      category: "Scanner",
      icon: Zap,
      impact: "Low",
      difficulty: "Easy",
      gradient: "from-pink-50 to-pink-100",
      border: "border-pink-200",
      iconBg: "from-pink-500 to-pink-600",
      description: "Properly manage scanner cache to speed up repeated analyses.",
      implementation: [
        "Use scanner cache in CI/CD pipelines",
        "Configure cache directory location",
        "Clean cache periodically to prevent corruption",
        "Monitor cache hit rates",
      ],
      codeExample: `# Cache directory
sonar.userHome=/path/to/.sonar

# In CI/CD (GitHub Actions example)
- name: Cache SonarQube packages
  uses: actions/cache@v3
  with:
    path: ~/.sonar/cache
    key: \${{ runner.os }}-sonar`,
      metrics: ["10-15% faster subsequent scans", "Reduced network calls", "Lower server load"],
    },
    {
      id: "webhook-optimization",
      title: "Optimize Webhook Configuration",
      category: "Configuration",
      icon: Server,
      impact: "Low",
      difficulty: "Easy",
      gradient: "from-teal-50 to-teal-100",
      border: "border-teal-200",
      iconBg: "from-teal-500 to-teal-600",
      description: "Configure webhooks efficiently to reduce unnecessary network calls and processing.",
      implementation: [
        "Only enable necessary webhooks",
        "Set appropriate timeout values",
        "Use webhook secret for security",
        "Monitor webhook delivery status",
      ],
      codeExample: `# Configure via UI: Administration > Webhooks
# Best practices:
# - Use HTTPS endpoints
# - Set timeout to 10s
# - Enable only for active integrations
# - Monitor failed deliveries`,
      metrics: ["Faster analysis completion", "Reduced network overhead", "Better integration reliability"],
    },
  ];

  const categories = ["all", ...new Set(tips.map(t => t.category))];
  const impacts = ["all", "High", "Medium", "Low"];

  const filteredTips = tips.filter(tip => {
    const matchesCategory = selectedCategory === "all" || tip.category === selectedCategory;
    const matchesImpact = selectedImpact === "all" || tip.impact === selectedImpact;
    return matchesCategory && matchesImpact;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-emerald-100 text-emerald-700";
      case "Medium":
        return "bg-blue-100 text-blue-700";
      case "Hard":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Performance Optimization</h1>
          </div>
          <p className="text-xl text-yellow-100 max-w-3xl">
            Expert tips to maximize SonarQube performance and reduce analysis time
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Performance Impact
              </label>
              <select
                value={selectedImpact}
                onChange={(e) => setSelectedImpact(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {impacts.map(impact => (
                  <option key={impact} value={impact}>
                    {impact === "all" ? "All Impact Levels" : `${impact} Impact`}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <Zap className="w-4 h-4" />
            <span>Showing <span className="font-semibold text-slate-900">{filteredTips.length}</span> optimization{filteredTips.length !== 1 ? 's' : ''}</span>
          </div>
        </div>

        {/* Tips Grid */}
        <div className="space-y-6">
          {filteredTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className={`bg-gradient-to-br ${tip.gradient} backdrop-blur-sm rounded-xl shadow-lg border ${tip.border} overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${tip.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {tip.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(tip.impact)}`}>
                          {tip.impact} Impact
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(tip.difficulty)}`}>
                          {tip.difficulty}
                        </span>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-slate-700">
                          {tip.category}
                        </span>
                      </div>
                      <p className="text-slate-700 mb-4">{tip.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    {/* Implementation Steps */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3">📝 Implementation</h4>
                      <ol className="space-y-2">
                        {tip.implementation.map((step, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="font-semibold text-slate-500 min-w-[1.5rem]">{idx + 1}.</span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Code Example */}
                    <div className="md:col-span-2">
                      <div className="bg-slate-900 rounded-lg p-4">
                        <h4 className="font-semibold text-white mb-3">💻 Configuration</h4>
                        <pre className="text-green-400 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
                          {tip.codeExample}
                        </pre>
                      </div>
                      {/* Expected Improvements */}
                      <div className="mt-4 bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                        <h4 className="font-semibold text-slate-900 mb-3">📊 Expected Improvements</h4>
                        <ul className="space-y-2">
                          {tip.metrics.map((metric, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="text-green-600">✓</span>
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Performance Monitoring */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">📈 Monitor Your Performance</h2>
          <p className="text-purple-100 mb-6">
            After implementing these optimizations, monitor these key metrics:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">⏱️ Analysis Time</h3>
              <p className="text-sm text-purple-100">Track scan duration before and after</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">💾 Memory Usage</h3>
              <p className="text-sm text-purple-100">Monitor heap and system memory</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔄 Queue Times</h3>
              <p className="text-sm text-purple-100">Check Compute Engine processing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">📊 DB Performance</h3>
              <p className="text-sm text-purple-100">Review query execution times</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
