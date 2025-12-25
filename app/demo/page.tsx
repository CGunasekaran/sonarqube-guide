"use client";

import InteractiveDemo from "@/components/InteractiveDemo";
import { Play } from "lucide-react";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Play className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Interactive Demo</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Explore SonarQube's code analysis capabilities with live examples
          </p>
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <InteractiveDemo />
      </div>
    </main>
  );
}
