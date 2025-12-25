export interface SetupStep {
  id: string;
  title: string;
  description: string;
  commands?: Command[];
  code?: CodeExample;
  prerequisites?: string[];
  tips?: string[];
  troubleshooting?: Troubleshooting[];
  order: number;
}

export interface Command {
  description: string;
  command: string;
  platform?: "windows" | "mac" | "linux" | "all";
}

export interface CodeExample {
  language: string;
  code: string;
  filename?: string;
  description?: string;
}

export interface Troubleshooting {
  issue: string;
  solution: string;
}

export interface Feature {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  icon: string;
  documentation?: string;
  examples?: CodeExample[];
}

export interface Integration {
  id: string;
  name: string;
  type: "ci-cd" | "ide" | "build-tool" | "vcs";
  description: string;
  setupSteps: string[];
  configuration: CodeExample;
  logo?: string;
  icon: any;
}

export interface QualityRule {
  id: string;
  key: string;
  name: string;
  severity: "blocker" | "critical" | "major" | "minor" | "info";
  type: "bug" | "vulnerability" | "code_smell";
  language: string;
  description: string;
  compliantExample?: string;
  nonCompliantExample?: string;
  tags: string[];
}

export interface ArchitectureComponent {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}
