"use client";

import { useState } from "react";
import { features } from "@/data/features";
import FeatureCard from "@/components/FeatureCard";
import { Sparkles } from "lucide-react";

export default function FeaturesPage() {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(features.map((f) => f.category))];

  const getCategoryButtonStyle = (category: string) => {
    const isSelected = selectedCategory === category;

    switch (category) {
      case "all":
        return isSelected
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
          : "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 hover:from-purple-200 hover:to-pink-200";
      case "Analysis":
        return isSelected
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          : "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 hover:from-blue-200 hover:to-blue-300";
      case "Security":
        return isSelected
          ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
          : "bg-gradient-to-r from-red-100 to-red-200 text-red-700 hover:from-red-200 hover:to-red-300";
      case "Governance":
        return isSelected
          ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white"
          : "bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 hover:from-emerald-200 hover:to-emerald-300";
      case "Testing":
        return isSelected
          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white"
          : "bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-700 hover:from-cyan-200 hover:to-cyan-300";
      case "Maintainability":
        return isSelected
          ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
          : "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-700 hover:from-orange-200 hover:to-orange-300";
      case "Workflow":
        return isSelected
          ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white"
          : "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-700 hover:from-purple-200 hover:to-purple-300";
      case "Coverage":
        return isSelected
          ? "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
          : "bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-700 hover:from-indigo-200 hover:to-indigo-300";
      case "Reporting":
        return isSelected
          ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white"
          : "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 hover:from-pink-200 hover:to-pink-300";
      case "DevOps":
        return isSelected
          ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white"
          : "bg-gradient-to-r from-teal-100 to-teal-200 text-teal-700 hover:from-teal-200 hover:to-teal-300";
      default:
        return isSelected
          ? "bg-gradient-to-r from-slate-500 to-slate-600 text-white"
          : "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:from-slate-200 hover:to-slate-300";
    }
  };

  const filteredFeatures = features.filter(
    (f) => selectedCategory === "all" || f.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-10 h-10" />
            <h1 className="text-4xl font-bold">SonarQube Features</h1>
          </div>
          <p className="text-xl text-purple-100 max-w-3xl">
            Explore the powerful capabilities that make SonarQube the leading
            platform for continuous code quality inspection
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all shadow-md hover:shadow-lg ${getCategoryButtonStyle(
                  category
                )}`}
              >
                {category === "all" ? "All Features" : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFeatures.map((feature) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              expanded={expandedFeature === feature.id}
              onToggle={() =>
                setExpandedFeature(
                  expandedFeature === feature.id ? null : feature.id
                )
              }
            />
          ))}
        </div>
      </div>
    </main>
  );
}
