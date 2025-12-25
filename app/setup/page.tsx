"use client";

import { useState } from "react";
import { setupSteps } from "@/data/setup-steps";
import SetupStepComponent from "@/components/SetupStep";
import { CheckCircle2, Download } from "lucide-react";

export default function SetupPage() {
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const toggleStepComplete = (stepId: string) => {
    setCompletedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) {
        newSet.delete(stepId);
      } else {
        newSet.add(stepId);
      }
      return newSet;
    });
  };

  const progress = (completedSteps.size / setupSteps.length) * 100;

  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Download className="w-10 h-10" />
            <h1 className="text-4xl font-bold">SonarQube Setup Guide</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Follow these step-by-step instructions to install and configure
            SonarQube on your local machine
          </p>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Setup Progress</span>
              <span className="text-sm font-medium">
                {completedSteps.size} / {setupSteps.length} steps completed
              </span>
            </div>
            <div className="w-full bg-blue-800 rounded-full h-3">
              <div
                className="bg-white rounded-full h-3 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {setupSteps
            .sort((a, b) => a.order - b.order)
            .map((step) => (
              <SetupStepComponent
                key={step.id}
                step={step}
                isCompleted={completedSteps.has(step.id)}
                onToggleComplete={() => toggleStepComplete(step.id)}
              />
            ))}
        </div>

        {/* Completion Message */}
        {completedSteps.size === setupSteps.length && (
          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              Congratulations! 🎉
            </h3>
            <p className="text-green-800 mb-6">
              You've successfully completed the SonarQube setup. Your instance
              should be running at http://localhost:9000
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="http://localhost:9000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Open SonarQube
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
