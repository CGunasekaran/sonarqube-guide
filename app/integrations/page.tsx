"use client";

import { useState } from "react";
import { integrations } from "@/data/integrations";
import IntegrationGuide from "@/components/IntegrationGuide";
import { Puzzle } from "lucide-react";

export default function IntegrationsPage() {
  const [selectedIntegration, setSelectedIntegration] = useState(
    integrations[0]
  );

  return (
    <main className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <Puzzle className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Integrations</h1>
          </div>
          <p className="text-xl text-cyan-100 max-w-3xl">
            Connect SonarQube with your development tools and workflows
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 sticky top-4 border border-slate-200">
              <h3 className="font-semibold text-gray-900 mb-4">Platforms</h3>
              <nav className="space-y-2">
                {integrations.map((integration) => {
                  const Icon = integration.icon;
                  return (
                    <button
                      key={integration.name}
                      onClick={() => setSelectedIntegration(integration)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        selectedIntegration.name === integration.name
                          ? "bg-cyan-50 text-cyan-700"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{integration.name}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <IntegrationGuide integration={selectedIntegration} />
          </div>
        </div>
      </div>
    </main>
  );
}
