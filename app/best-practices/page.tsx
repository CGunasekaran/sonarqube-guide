import { Target, Shield, Zap, Users, TrendingUp, BookOpen } from "lucide-react";

export default function BestPracticesPage() {
  const practices = [
    {
      icon: Target,
      title: "Set Quality Gates",
      description:
        "Define clear quality gates that match your team's standards. Configure thresholds for code coverage, duplications, and technical debt.",
      tips: [
        "Start with default quality gates and adjust based on your needs",
        "Make quality gates mandatory for production branches",
        "Review and update gates quarterly as your codebase evolves",
      ],
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
      iconBg: "from-emerald-500 to-emerald-600",
      bulletColor: "text-emerald-600",
    },
    {
      icon: Shield,
      title: "Fix Security Vulnerabilities First",
      description:
        "Prioritize security issues over code smells. Address critical and high-severity vulnerabilities immediately.",
      tips: [
        "Set up security hotspot reviews in your workflow",
        "Use SonarQube's security reports to track trends",
        "Integrate security scanning in your CI/CD pipeline",
      ],
      gradient: "from-red-50 to-red-100",
      border: "border-red-200",
      iconBg: "from-red-500 to-red-600",
      bulletColor: "text-red-600",
    },
    {
      icon: Zap,
      title: "Regular Code Scans",
      description:
        "Run SonarQube analysis on every commit to catch issues early. Automate scans as part of your CI/CD pipeline.",
      tips: [
        "Scan feature branches before merging to main",
        "Set up automated analysis triggers",
        "Review new issues introduced in each PR",
      ],
      gradient: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
      iconBg: "from-yellow-500 to-yellow-600",
      bulletColor: "text-yellow-600",
    },
    {
      icon: Users,
      title: "Team Ownership",
      description:
        "Assign code ownership and make teams responsible for maintaining quality in their areas.",
      tips: [
        "Use SonarQube projects to organize by team or service",
        "Set up notifications for quality gate failures",
        "Review quality metrics in team retrospectives",
      ],
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
      iconBg: "from-blue-500 to-blue-600",
      bulletColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Track Metrics Over Time",
      description:
        "Monitor trends in code quality metrics to understand if you're improving or degrading over time.",
      tips: [
        "Focus on reducing technical debt ratio",
        "Track code coverage trends",
        "Set team goals for quality improvements",
      ],
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-200",
      iconBg: "from-orange-500 to-orange-600",
      bulletColor: "text-orange-600",
    },
    {
      icon: BookOpen,
      title: "Educate Your Team",
      description:
        "Ensure developers understand SonarQube rules and why they matter. Provide training on common issues.",
      tips: [
        "Share SonarQube findings in code reviews",
        "Create team documentation for common patterns",
        "Hold workshops on secure coding practices",
      ],
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
      iconBg: "from-purple-500 to-purple-600",
      bulletColor: "text-purple-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Best Practices
          </h1>
          <p className="text-lg text-slate-700">
            Follow these proven practices to get the most value from SonarQube
          </p>
        </div>

        <div className="grid gap-8">
          {practices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${practice.gradient} backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all border ${practice.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${practice.iconBg} rounded-xl flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-slate-700 mb-4">
                      {practice.description}
                    </p>
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 border border-slate-200">
                      <h4 className="font-semibold text-slate-900 mb-2">
                        Tips:
                      </h4>
                      <ul className="space-y-2">
                        {practice.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className={`${practice.bulletColor} mt-1`}>
                              •
                            </span>
                            <span className="text-slate-700">{tip}</span>
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

        {/* Additional Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-purple-100 mb-6">
            Don't try to fix everything at once. Start with new code and
            gradually improve legacy code over time.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Week 1-2</h3>
              <p className="text-sm text-purple-100">
                Set up quality gates and configure CI/CD integration
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Week 3-4</h3>
              <p className="text-sm text-purple-100">
                Focus on security vulnerabilities and critical bugs
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Ongoing</h3>
              <p className="text-sm text-purple-100">
                Continuously monitor and improve code quality metrics
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
