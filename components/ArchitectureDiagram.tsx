"use client";

export default function ArchitectureDiagram() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        SonarQube Architecture
      </h3>

      <div className="space-y-8">
        {/* Web Server Layer */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-6 text-white shadow-lg">
            <h4 className="text-xl font-bold mb-2">Web Server</h4>
            <p className="text-sm opacity-90">
              User interface for developers and managers (Port 9000)
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
                Project Dashboard
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
                Quality Gates
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
                Rules & Profiles
              </div>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        </div>

        {/* Compute Engine */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 text-white shadow-lg">
          <h4 className="text-xl font-bold mb-2">Compute Engine</h4>
          <p className="text-sm opacity-90">
            Processes analysis reports and updates database
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Report Processing
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Quality Gate Evaluation
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        </div>

        {/* Search Server (Elasticsearch) */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-lg p-6 text-white shadow-lg">
          <h4 className="text-xl font-bold mb-2">
            Search Server (Elasticsearch)
          </h4>
          <p className="text-sm opacity-90">
            Provides fast search capabilities and indexes
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Code Search
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Issue Search
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        </div>

        {/* Database */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white shadow-lg">
          <h4 className="text-xl font-bold mb-2">Database</h4>
          <p className="text-sm opacity-90">
            Stores configuration, snapshots, and metrics
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              PostgreSQL
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Oracle
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              MS SQL Server
            </div>
          </div>
        </div>

        {/* Scanners (External) */}
        <div className="bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg p-6 text-white shadow-lg border-2 border-indigo-300">
          <h4 className="text-xl font-bold mb-2">Scanners (External)</h4>
          <p className="text-sm opacity-90 mb-4">
            Analyze source code and send reports to SonarQube
          </p>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              SonarScanner
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Maven Plugin
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Gradle Plugin
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-3 text-center text-sm font-semibold shadow-md">
              Azure DevOps
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Description */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="font-bold text-blue-900 mb-3">How It Works:</h4>
        <ol className="space-y-2 text-sm text-blue-800">
          <li className="flex gap-3">
            <span className="font-bold">1.</span>
            <span>Scanner analyzes source code and generates a report</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">2.</span>
            <span>Report is sent to SonarQube Server via HTTP</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">3.</span>
            <span>Compute Engine processes the report asynchronously</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">4.</span>
            <span>
              Results are stored in Database and indexed in Elasticsearch
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold">5.</span>
            <span>Web Server displays results and quality gate status</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
