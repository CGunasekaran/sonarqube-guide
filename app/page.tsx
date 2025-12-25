import Link from "next/link";
import {
  Code2,
  Shield,
  Zap,
  GitBranch,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Play,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg">
              <Code2 className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master SonarQube
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Your complete guide to setting up, understanding, and leveraging
              SonarQube for continuous code quality inspection
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/setup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                Start Setup Guide
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all"
              >
                <Play className="w-5 h-5" />
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is SonarQube */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What is SonarQube?
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              SonarQube is an open-source platform for continuous inspection of
              code quality to perform automatic reviews with static analysis of
              code to detect bugs, code smells, and security vulnerabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Security
              </h3>
              <p className="text-slate-700">
                Detect vulnerabilities and security hotspots across 30+
                languages
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quality</h3>
              <p className="text-slate-700">
                Enforce quality gates to prevent degradation of code quality
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <GitBranch className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Integration
              </h3>
              <p className="text-slate-700">
                Seamlessly integrate with your CI/CD pipeline
              </p>
            </div>

            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-orange-200">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Insights
              </h3>
              <p className="text-slate-700">
                Track metrics and trends to make data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-slate-700">
              Powerful capabilities to ensure code quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 backdrop-blur-sm rounded-xl p-8 border border-cyan-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Multi-Language Support
              </h3>
              <p className="text-slate-700 mb-4">
                Analyze code in 30+ programming languages including Java,
                JavaScript, Python, C#, TypeScript, and more.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Language-specific rules
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Framework detection
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 backdrop-blur-sm rounded-xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Security Analysis
              </h3>
              <p className="text-slate-700 mb-4">
                Identify security vulnerabilities following OWASP Top 10 and
                CWE/SANS Top 25 standards.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SQL injection detection
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  XSS vulnerability scanning
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Quality Gates
              </h3>
              <p className="text-slate-700 mb-4">
                Set quality standards and automatically pass or fail builds
                based on defined criteria.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Customizable thresholds
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  CI/CD integration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border border-indigo-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <GitBranch className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Branch Analysis
              </h3>
              <p className="text-slate-700 mb-4">
                Analyze pull requests and branches before merging to prevent
                quality degradation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  PR decoration
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  New code focus
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Follow our comprehensive setup guide to install SonarQube
                locally in minutes
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/setup"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all"
                >
                  Setup Guide
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-all"
                >
                  How It Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Quality Rules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">400K+</div>
              <div className="text-gray-600">Instances Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7M+</div>
              <div className="text-gray-600">Developers Using</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
