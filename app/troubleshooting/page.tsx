"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, Search, Database, Server, Code, Network, Lock } from "lucide-react";

interface Issue {
  id: string;
  title: string;
  category: string;
  icon: any;
  symptoms: string[];
  causes: string[];
  solutions: string[];
  gradient: string;
  border: string;
  iconBg: string;
}

export default function TroubleshootingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const issues: Issue[] = [
    {
      id: "scanner-fails",
      title: "Scanner Fails to Complete",
      category: "Scanner",
      icon: Code,
      gradient: "from-red-50 to-red-100",
      border: "border-red-200",
      iconBg: "from-red-500 to-red-600",
      symptoms: [
        "Analysis stops midway through execution",
        "OutOfMemoryError in scanner logs",
        "Scanner process exits with error code",
      ],
      causes: [
        "Insufficient memory allocation",
        "Large codebase requiring more resources",
        "Corrupted cache files",
      ],
      solutions: [
        "Increase scanner memory: sonar.scanner.javaOpts=-Xmx2048m",
        "Clean scanner cache: rm -rf ~/.sonar/cache",
        "Exclude large binary or generated files from analysis",
        "Split large projects into multiple SonarQube projects",
      ],
    },
    {
      id: "connection-refused",
      title: "Connection to SonarQube Server Refused",
      category: "Network",
      icon: Network,
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      iconBg: "from-orange-500 to-orange-600",
      symptoms: [
        "Connection refused error during analysis",
        "Cannot access SonarQube web interface",
        "Timeout errors in scanner logs",
      ],
      causes: [
        "SonarQube server not running",
        "Firewall blocking port 9000",
        "Incorrect server URL configuration",
      ],
      solutions: [
        "Verify server is running: systemctl status sonarqube",
        "Check sonar.host.url property in scanner configuration",
        "Ensure firewall allows connections on port 9000",
        "Test connectivity: curl http://localhost:9000/api/system/status",
      ],
    },
    {
      id: "authentication-failed",
      title: "Authentication Failed",
      category: "Security",
      icon: Lock,
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      iconBg: "from-purple-500 to-purple-600",
      symptoms: [
        "401 Unauthorized error",
        "Invalid token or credentials message",
        "Scanner cannot authenticate with server",
      ],
      causes: [
        "Invalid or expired authentication token",
        "Incorrect credentials",
        "Missing sonar.login property",
      ],
      solutions: [
        "Generate new token: User > My Account > Security > Generate Token",
        "Set token in scanner: sonar.login=your-token-here",
        "For CI/CD, use environment variable: SONAR_TOKEN",
        "Verify token has correct permissions for the project",
      ],
    },
    {
      id: "database-migration",
      title: "Database Migration Issues",
      category: "Database",
      icon: Database,
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "from-blue-500 to-blue-600",
      symptoms: [
        "SonarQube won't start after upgrade",
        "Database migration fails with errors",
        "Web interface shows migration required",
      ],
      causes: [
        "Skipped intermediate versions during upgrade",
        "Database backup corruption",
        "Insufficient database permissions",
      ],
      solutions: [
        "Always backup database before upgrading",
        "Follow upgrade path: don't skip LTS versions",
        "Check database user has DDL permissions",
        "Review migration logs: $SONAR_HOME/logs/sonar.log",
        "Restore backup and retry with correct upgrade path",
      ],
    },
    {
      id: "quality-gate-stuck",
      title: "Quality Gate Status Not Updating",
      category: "Server",
      icon: Server,
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-emerald-600",
      symptoms: [
        "Quality gate shows old status",
        "New analysis doesn't update gate",
        "Pull request decoration not working",
      ],
      causes: [
        "Compute Engine service not processing background tasks",
        "Webhook configuration issues",
        "Branch analysis not detecting new code period correctly",
      ],
      solutions: [
        "Check Compute Engine: Administration > System > Background Tasks",
        "Restart Compute Engine if tasks are pending",
        "Verify webhook configuration in project settings",
        "Check new code period definition: Project Settings > New Code",
        "Review CE logs: $SONAR_HOME/logs/ce.log",
      ],
    },
    {
      id: "high-memory-usage",
      title: "High Memory Usage / OOM Errors",
      category: "Server",
      icon: AlertTriangle,
      gradient: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      iconBg: "from-yellow-500 to-yellow-600",
      symptoms: [
        "SonarQube becomes unresponsive",
        "OutOfMemoryError in logs",
        "Web server crashes periodically",
      ],
      causes: [
        "Insufficient JVM heap size",
        "Too many concurrent analyses",
        "Large projects with many files",
        "Memory leak in plugins",
      ],
      solutions: [
        "Increase heap size in sonar.properties: sonar.web.javaOpts=-Xmx2048m",
        "Increase Elasticsearch memory: sonar.search.javaOpts=-Xmx1024m",
        "Limit concurrent CE workers: sonar.ce.workerCount=2",
        "Review and remove unnecessary plugins",
        "Enable GC logging to diagnose memory issues",
      ],
    },
    {
      id: "analysis-slow",
      title: "Slow Analysis Performance",
      category: "Scanner",
      icon: Code,
      gradient: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
      iconBg: "from-cyan-500 to-cyan-600",
      symptoms: [
        "Analysis takes much longer than expected",
        "Scanner appears to hang on certain files",
        "Build pipeline timeout due to slow scans",
      ],
      causes: [
        "Analyzing unnecessary files (node_modules, vendor, etc.)",
        "Complex code requiring extensive analysis",
        "Network latency to SonarQube server",
        "Insufficient scanner resources",
      ],
      solutions: [
        "Exclude directories: sonar.exclusions=**/node_modules/**,**/vendor/**",
        "Disable unnecessary rules in quality profile",
        "Use incremental analysis (if supported)",
        "Increase scanner memory allocation",
        "Run scanner closer to SonarQube server (same network)",
        "Use parallel processing: sonar.scanner.parallelThreads=4",
      ],
    },
    {
      id: "missing-coverage",
      title: "Code Coverage Not Showing",
      category: "Scanner",
      icon: Search,
      gradient: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
      iconBg: "from-indigo-500 to-indigo-600",
      symptoms: [
        "Coverage shows 0% despite running tests",
        "Coverage report not imported",
        "Unit test metrics missing",
      ],
      causes: [
        "Coverage report not generated before analysis",
        "Wrong coverage report path specified",
        "Incompatible coverage report format",
      ],
      solutions: [
        "Generate coverage before scanning: npm test -- --coverage",
        "Specify report path: sonar.javascript.lcov.reportPaths=coverage/lcov.info",
        "Verify report file exists and is readable",
        "Use correct format for language (LCOV for JS/TS, JaCoCo for Java)",
        "Check scanner logs for coverage import messages",
      ],
    },
  ];

  const categories = ["all", ...new Set(issues.map(issue => issue.category))];

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = searchTerm === "" || 
      issue.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issue.symptoms.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())) ||
      issue.solutions.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || issue.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Troubleshooting Guide</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Solutions to common SonarQube issues and problems
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-8 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Search Issues
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by symptom, cause, or solution..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Found <span className="font-semibold text-slate-900">{filteredIssues.length}</span> issue{filteredIssues.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Issues List */}
        <div className="space-y-6">
          {filteredIssues.map((issue) => {
            const Icon = issue.icon;
            return (
              <div
                key={issue.id}
                className={`bg-gradient-to-br ${issue.gradient} backdrop-blur-sm rounded-xl shadow-lg border ${issue.border} overflow-hidden`}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${issue.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-slate-900">
                          {issue.title}
                        </h3>
                        <span className="px-3 py-1 bg-white/50 rounded-full text-xs font-semibold text-slate-700">
                          {issue.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Symptoms */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        Symptoms
                      </h4>
                      <ul className="space-y-2">
                        {issue.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-red-600 mt-0.5">•</span>
                            <span>{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Causes */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <Search className="w-4 h-4 text-orange-600" />
                        Common Causes
                      </h4>
                      <ul className="space-y-2">
                        {issue.causes.map((cause, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-orange-600 mt-0.5">•</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        Solutions
                      </h4>
                      <ul className="space-y-2">
                        {issue.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <span className="text-emerald-600 mt-0.5">✓</span>
                            <span className="font-mono text-xs bg-slate-900/5 px-1 rounded">
                              {solution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredIssues.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-12 text-center border border-slate-200">
            <Search className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Issues Found</h3>
            <p className="text-slate-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}

        {/* Additional Help */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6">
            If you can't find a solution to your problem, here are some additional resources:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://docs.sonarqube.org/latest/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold mb-2">📚 Documentation</h3>
              <p className="text-sm text-blue-100">
                Official SonarQube docs
              </p>
            </a>
            <a
              href="https://community.sonarsource.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold mb-2">💬 Community</h3>
              <p className="text-sm text-blue-100">
                Ask questions on the forum
              </p>
            </a>
            <a
              href="https://github.com/SonarSource/sonarqube/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
            >
              <h3 className="font-semibold mb-2">🐛 GitHub Issues</h3>
              <p className="text-sm text-blue-100">
                Report bugs or feature requests
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
