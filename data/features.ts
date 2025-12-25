import { Feature } from '@/types';

export const features: Feature[] = [
  {
    id: 'code-quality',
    name: 'Code Quality Analysis',
    category: 'Analysis',
    description: 'Automatically detect bugs, vulnerabilities, and code smells across 30+ programming languages',
    benefits: [
      'Identify bugs before they reach production',
      'Detect security vulnerabilities',
      'Find code smells and technical debt',
      'Track code complexity and maintainability',
    ],
    icon: 'bug',
    examples: [
      {
        language: 'javascript',
        code: `// SonarQube detects this potential null pointer
function getUserName(user) {
  return user.name.toUpperCase(); // What if user is null?
}

// Better approach
function getUserName(user) {
  return user?.name?.toUpperCase() ?? 'Unknown';
}`,
      },
    ],
  },
  {
    id: 'security',
    name: 'Security Hotspot Detection',
    category: 'Security',
    description: 'Identify security vulnerabilities and hotspots in your codebase',
    benefits: [
      'OWASP Top 10 vulnerability detection',
      'CWE/SANS Top 25 coverage',
      'Security hotspot review workflow',
      'Sensitive data exposure detection',
    ],
    icon: 'shield',
    examples: [
      {
        language: 'javascript',
        code: `// Security vulnerability: SQL Injection
const query = "SELECT * FROM users WHERE id = " + userId;

// Secure approach: Parameterized query
const query = "SELECT * FROM users WHERE id = ?";
db.execute(query, [userId]);`,
      },
    ],
  },
  {
    id: 'quality-gates',
    name: 'Quality Gates',
    category: 'Governance',
    description: 'Define quality standards and prevent code from being released if it doesn\'t meet criteria',
    benefits: [
      'Customizable quality thresholds',
      'Pass/fail criteria for CI/CD pipelines',
      'New code vs overall code metrics',
      'Email notifications on quality gate status',
    ],
    icon: 'gate',
  },
  {
    id: 'code-coverage',
    name: 'Code Coverage',
    category: 'Testing',
    description: 'Track test coverage and identify untested code',
    benefits: [
      'Line and branch coverage metrics',
      'Visual coverage reports',
      'Coverage on new code',
      'Integration with popular test frameworks',
    ],
    icon: 'target',
  },
  {
    id: 'duplications',
    name: 'Code Duplication Detection',
    category: 'Maintainability',
    description: 'Find and eliminate duplicate code across your project',
    benefits: [
      'Detect copy-pasted code',
      'Reduce maintenance burden',
      'Encourage code reusability',
      'Track duplication trends over time',
    ],
    icon: 'copy',
  },
  {
    id: 'technical-debt',
    name: 'Technical Debt Management',
    category: 'Maintainability',
    description: 'Quantify and track technical debt in your codebase',
    benefits: [
      'Estimate time to fix issues',
      'Prioritize remediation efforts',
      'Track debt ratio over time',
      'Make informed refactoring decisions',
    ],
    icon: 'trending-down',
  },
  {
    id: 'branch-analysis',
    name: 'Branch & Pull Request Analysis',
    category: 'Workflow',
    description: 'Analyze branches and pull requests before merging',
    benefits: [
      'Quality gate status on PRs',
      'Comment on pull requests',
      'Compare branches',
      'Prevent quality degradation',
    ],
    icon: 'git-branch',
  },
  {
    id: 'multi-language',
    name: 'Multi-Language Support',
    category: 'Coverage',
    description: 'Support for 30+ programming languages',
    benefits: [
      'JavaScript, TypeScript, Java, Python, C#, and more',
      'Framework-specific rules',
      'Language-agnostic metrics',
      'Polyglot project support',
    ],
    icon: 'code',
  },
  {
    id: 'dashboards',
    name: 'Custom Dashboards',
    category: 'Reporting',
    description: 'Create custom dashboards to visualize code quality metrics',
    benefits: [
      'Project and portfolio views',
      'Customizable widgets',
      'Historical trend analysis',
      'Executive summary reports',
    ],
    icon: 'layout-dashboard',
  },
  {
    id: 'integration',
    name: 'CI/CD Integration',
    category: 'DevOps',
    description: 'Seamlessly integrate with your CI/CD pipeline',
    benefits: [
      'Jenkins, GitLab CI, GitHub Actions support',
      'Azure DevOps, CircleCI, Travis CI',
      'Bamboo, TeamCity integration',
      'Webhook notifications',
    ],
    icon: 'workflow',
  },
];
