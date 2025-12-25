"use client";

import { useState } from "react";
import { rules } from "@/data/rules";
import RuleExplorer from "@/components/RuleExplorer";
import { BookText } from "lucide-react";

export default function RulesPage() {
  const [selectedRule, setSelectedRule] = useState(rules[0]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all");

  const languages = ["all", ...new Set(rules.map((r) => r.language))];
  const severities = ["all", ...new Set(rules.map((r) => r.severity))];

  const filteredRules = rules.filter(
    (r) =>
      (selectedLanguage === "all" || r.language === selectedLanguage) &&
      (selectedSeverity === "all" || r.severity === selectedSeverity)
  );

  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <BookText className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Rules & Guidelines</h1>
          </div>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Explore SonarQube rules and understand how to write better code
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang === "all" ? "All Languages" : lang}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Severity
              </label>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {severities.map((sev) => (
                  <option key={sev} value={sev}>
                    {sev === "all" ? "All Severities" : sev}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rules List */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 sticky top-4 max-h-[calc(100vh-8rem)] overflow-y-auto border border-slate-200">
              <h3 className="font-semibold text-gray-900 mb-4">
                Rules ({filteredRules.length})
              </h3>
              <div className="space-y-2">
                {filteredRules.map((rule) => (
                  <button
                    key={rule.id}
                    onClick={() => setSelectedRule(rule)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedRule.id === rule.id
                        ? "bg-indigo-50 border-2 border-indigo-500"
                        : "hover:bg-gray-50 border-2 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-900">
                        {rule.name}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          rule.severity === "critical"
                            ? "bg-red-100 text-red-700"
                            : rule.severity === "major"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {rule.severity}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">{rule.language}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Rule Details */}
          <div className="lg:col-span-2">
            <RuleExplorer rule={selectedRule} />
          </div>
        </div>
      </div>
    </main>
  );
}
