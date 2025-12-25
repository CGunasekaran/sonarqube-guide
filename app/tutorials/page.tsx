"use client";

import { useState } from "react";
import { Video, Play, Clock, Tag } from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  thumbnail: string;
  videoUrl: string;
  topics: string[];
  gradient: string;
  border: string;
}

export default function TutorialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const tutorials: Tutorial[] = [
    {
      id: "getting-started",
      title: "Getting Started with SonarQube",
      description:
        "Learn how to install and configure SonarQube for the first time. This comprehensive guide covers installation, basic setup, and your first code analysis.",
      duration: "15:30",
      category: "Getting Started",
      level: "Beginner",
      thumbnail: "🚀",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      topics: ["Installation", "Basic Setup", "First Analysis"],
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
    {
      id: "quality-gates",
      title: "Understanding Quality Gates",
      description:
        "Deep dive into quality gates - how to configure them, set thresholds, and enforce code quality standards across your projects.",
      duration: "12:45",
      category: "Configuration",
      level: "Intermediate",
      thumbnail: "🎯",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      topics: ["Quality Gates", "Thresholds", "Best Practices"],
      gradient: "from-emerald-50 to-emerald-100",
      border: "border-emerald-200",
    },
    {
      id: "ci-cd-integration",
      title: "CI/CD Integration with Jenkins",
      description:
        "Step-by-step tutorial on integrating SonarQube with Jenkins. Learn how to automate code analysis in your CI/CD pipeline.",
      duration: "18:20",
      category: "Integration",
      level: "Intermediate",
      thumbnail: "🔗",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      topics: ["Jenkins", "CI/CD", "Automation"],
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
    },
    {
      id: "security-analysis",
      title: "Security Vulnerability Detection",
      description:
        "Learn how SonarQube detects security vulnerabilities and how to interpret and fix security hotspots in your codebase.",
      duration: "20:15",
      category: "Security",
      level: "Advanced",
      thumbnail: "🔒",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      topics: ["Security", "Vulnerabilities", "OWASP"],
      gradient: "from-red-50 to-red-100",
      border: "border-red-200",
    },
    {
      id: "custom-rules",
      title: "Creating Custom Rules",
      description:
        "Advanced tutorial on creating custom SonarQube rules. Learn how to write rules specific to your organization's coding standards.",
      duration: "25:40",
      category: "Advanced",
      level: "Advanced",
      thumbnail: "⚙️",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      topics: ["Custom Rules", "Java API", "Plugin Development"],
      gradient: "from-indigo-50 to-indigo-100",
      border: "border-indigo-200",
    },
    {
      id: "code-coverage",
      title: "Maximizing Code Coverage",
      description:
        "Best practices for improving code coverage. Learn how to configure coverage reports and interpret coverage metrics.",
      duration: "14:25",
      category: "Best Practices",
      level: "Intermediate",
      thumbnail: "📊",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      topics: ["Code Coverage", "Testing", "Metrics"],
      gradient: "from-cyan-50 to-cyan-100",
      border: "border-cyan-200",
    },
    {
      id: "github-actions",
      title: "SonarQube with GitHub Actions",
      description:
        "Integrate SonarQube analysis into your GitHub Actions workflow. Includes pull request decoration and quality gate checks.",
      duration: "16:10",
      category: "Integration",
      level: "Beginner",
      thumbnail: "🐙",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      topics: ["GitHub Actions", "PR Decoration", "Automation"],
      gradient: "from-orange-50 to-orange-100",
      border: "border-orange-200",
    },
    {
      id: "performance-tuning",
      title: "Performance Tuning and Optimization",
      description:
        "Optimize your SonarQube server for large codebases. Learn about memory management, database tuning, and scaling strategies.",
      duration: "22:30",
      category: "Performance",
      level: "Advanced",
      thumbnail: "⚡",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      topics: ["Performance", "Scaling", "Database"],
      gradient: "from-yellow-50 to-yellow-100",
      border: "border-yellow-200",
    },
    {
      id: "quality-profiles",
      title: "Managing Quality Profiles",
      description:
        "Learn how to create and manage quality profiles for different languages. Customize rules to match your team's standards.",
      duration: "13:50",
      category: "Configuration",
      level: "Beginner",
      thumbnail: "📝",
      videoUrl: "https://www.youtube.com/watch?v=example9",
      topics: ["Quality Profiles", "Rules", "Configuration"],
      gradient: "from-pink-50 to-pink-100",
      border: "border-pink-200",
    },
    {
      id: "branch-analysis",
      title: "Branch and Pull Request Analysis",
      description:
        "Configure branch analysis and pull request decoration. Learn how to analyze feature branches and provide feedback on PRs.",
      duration: "17:45",
      category: "Advanced",
      level: "Intermediate",
      thumbnail: "🌿",
      videoUrl: "https://www.youtube.com/watch?v=example10",
      topics: ["Branches", "Pull Requests", "DevOps"],
      gradient: "from-teal-50 to-teal-100",
      border: "border-teal-200",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting Common Issues",
      description:
        "Solutions to the most common SonarQube problems. Covers scanner issues, connection problems, and performance bottlenecks.",
      duration: "19:20",
      category: "Troubleshooting",
      level: "Intermediate",
      thumbnail: "🔧",
      videoUrl: "https://www.youtube.com/watch?v=example11",
      topics: ["Debugging", "Error Resolution", "Support"],
      gradient: "from-rose-50 to-rose-100",
      border: "border-rose-200",
    },
    {
      id: "docker-deployment",
      title: "Deploying SonarQube with Docker",
      description:
        "Complete guide to deploying SonarQube using Docker and Docker Compose. Includes PostgreSQL setup and volume management.",
      duration: "21:15",
      category: "Getting Started",
      level: "Intermediate",
      thumbnail: "🐳",
      videoUrl: "https://www.youtube.com/watch?v=example12",
      topics: ["Docker", "Deployment", "PostgreSQL"],
      gradient: "from-sky-50 to-sky-100",
      border: "border-sky-200",
    },
  ];

  const categories = ["all", ...new Set(tutorials.map((t) => t.category))];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesCategory =
      selectedCategory === "all" || tutorial.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || tutorial.level === selectedLevel;
    return matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-700";
      case "Intermediate":
        return "bg-blue-100 text-blue-700";
      case "Advanced":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Video className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Video Tutorials</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Step-by-step video guides to master SonarQube
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
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Difficulty Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level === "all" ? "All Levels" : level}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
            <Tag className="w-4 h-4" />
            <span>
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredTutorials.length}
              </span>{" "}
              tutorial{filteredTutorials.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tutorial) => (
            <div
              key={tutorial.id}
              className={`bg-gradient-to-br ${tutorial.gradient} backdrop-blur-sm rounded-xl shadow-lg border ${tutorial.border} overflow-hidden hover:shadow-xl transition-all group`}
            >
              {/* Thumbnail */}
              <div className="relative bg-slate-900 h-40 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="text-6xl">{tutorial.thumbnail}</div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-black/70 px-2 py-1 rounded-lg flex items-center gap-1 text-white text-sm">
                  <Clock className="w-3 h-3" />
                  {tutorial.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                      tutorial.level
                    )}`}
                  >
                    {tutorial.level}
                  </span>
                  <span className="px-2 py-1 bg-white/50 rounded-full text-xs font-semibold text-slate-700">
                    {tutorial.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tutorial.title}
                </h3>

                <p className="text-slate-700 text-sm mb-4 line-clamp-3">
                  {tutorial.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {tutorial.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-white/50 rounded text-xs text-slate-600"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Watch Button */}
                <button
                  onClick={() => window.open(tutorial.videoUrl, "_blank")}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Tutorial
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTutorials.length === 0 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-12 text-center border border-slate-200">
            <Video className="w-16 h-16 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No Tutorials Found
            </h3>
            <p className="text-slate-600">
              Try adjusting your filters to see more tutorials
            </p>
          </div>
        )}

        {/* Learning Path */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white shadow-lg">
          <h2 className="text-2xl font-bold mb-4">
            🎓 Suggested Learning Path
          </h2>
          <p className="text-indigo-100 mb-6">
            New to SonarQube? Follow this recommended learning path:
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-semibold mb-1">Getting Started</h3>
              <p className="text-sm text-indigo-100">Install and basic setup</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-semibold mb-1">Configuration</h3>
              <p className="text-sm text-indigo-100">
                Quality gates & profiles
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-semibold mb-1">Integration</h3>
              <p className="text-sm text-indigo-100">CI/CD pipeline setup</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-semibold mb-1">Advanced</h3>
              <p className="text-sm text-indigo-100">Custom rules & scaling</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
