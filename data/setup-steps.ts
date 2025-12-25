import { SetupStep } from '@/types';

export const setupSteps: SetupStep[] = [
  {
    id: 'prerequisites',
    title: 'Prerequisites',
    description: 'Ensure your system meets the requirements for running SonarQube',
    prerequisites: [
      'Java 17 or higher (SonarQube 10.x requires Java 17)',
      'At least 2GB of RAM available',
      'Database (PostgreSQL, Oracle, or MS SQL Server) - Optional for production',
      'Modern web browser (Chrome, Firefox, Safari, Edge)',
    ],
    commands: [
      {
        description: 'Check Java version',
        command: 'java -version',
        platform: 'all',
      },
    ],
    tips: [
      'SonarQube Community Edition includes an embedded H2 database for development',
      'For production, use PostgreSQL for better performance',
      'Ensure port 9000 is available (default SonarQube port)',
    ],
    order: 1,
  },
  {
    id: 'download',
    title: 'Download SonarQube',
    description: 'Download the latest version of SonarQube Community Edition',
    commands: [
      {
        description: 'Download using wget (Linux/Mac)',
        command: 'wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.3.0.82913.zip',
        platform: 'linux',
      },
      {
        description: 'Or download using curl',
        command: 'curl -O https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.3.0.82913.zip',
        platform: 'mac',
      },
    ],
    tips: [
      'Visit https://www.sonarsource.com/products/sonarqube/downloads/ for the latest version',
      'Community Edition is free and includes support for 19+ languages',
    ],
    order: 2,
  },
  {
    id: 'extract',
    title: 'Extract SonarQube',
    description: 'Extract the downloaded archive to your preferred location',
    commands: [
      {
        description: 'Extract on Linux/Mac',
        command: 'unzip sonarqube-10.3.0.82913.zip',
        platform: 'linux',
      },
      {
        description: 'Extract on Windows',
        command: 'Right-click > Extract All',
        platform: 'windows',
      },
      {
        description: 'Navigate to SonarQube directory',
        command: 'cd sonarqube-10.3.0.82913',
        platform: 'all',
      },
    ],
    order: 3,
  },
  {
    id: 'configure',
    title: 'Configure SonarQube (Optional)',
    description: 'Customize SonarQube configuration if needed',
    code: {
      language: 'properties',
      filename: 'conf/sonar.properties',
      description: 'Basic configuration example',
      code: `# Database Configuration (Optional - uses H2 by default)
# sonar.jdbc.username=sonarqube
# sonar.jdbc.password=mypassword
# sonar.jdbc.url=jdbc:postgresql://localhost/sonarqube

# Web Server Configuration
sonar.web.host=0.0.0.0
sonar.web.port=9000

# Elasticsearch Configuration
# sonar.search.javaOpts=-Xmx512m -Xms512m

# Logging
# sonar.log.level=INFO`,
    },
    tips: [
      'Default configuration works well for local development',
      'Change port if 9000 is already in use',
      'For production, configure external database',
    ],
    order: 4,
  },
  {
    id: 'start',
    title: 'Start SonarQube Server',
    description: 'Launch the SonarQube server',
    commands: [
      {
        description: 'Start on Linux',
        command: 'bin/linux-x86-64/sonar.sh start',
        platform: 'linux',
      },
      {
        description: 'Start on Mac',
        command: 'bin/macosx-universal-64/sonar.sh start',
        platform: 'mac',
      },
      {
        description: 'Start on Windows',
        command: 'bin\\windows-x86-64\\StartSonar.bat',
        platform: 'windows',
      },
    ],
    tips: [
      'First startup may take 2-3 minutes',
      'Check logs in logs/sonar.log if issues occur',
      'SonarQube starts on http://localhost:9000 by default',
    ],
    troubleshooting: [
      {
        issue: 'Port 9000 already in use',
        solution: 'Change sonar.web.port in conf/sonar.properties',
      },
      {
        issue: 'Java not found',
        solution: 'Ensure JAVA_HOME is set and Java 17+ is installed',
      },
      {
        issue: 'Elasticsearch fails to start',
        solution: 'Ensure vm.max_map_count is set (Linux): sudo sysctl -w vm.max_map_count=262144',
      },
    ],
    order: 5,
  },
  {
    id: 'access',
    title: 'Access SonarQube',
    description: 'Log in to SonarQube web interface',
    commands: [
      {
        description: 'Open in browser',
        command: 'http://localhost:9000',
        platform: 'all',
      },
    ],
    tips: [
      'Default credentials: admin / admin',
      'Change password on first login (recommended)',
      'You\'ll be prompted to create your first project',
    ],
    order: 6,
  },
  {
    id: 'scanner',
    title: 'Install SonarScanner',
    description: 'Install SonarScanner to analyze your projects',
    commands: [
      {
        description: 'Download SonarScanner',
        command: 'wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-5.0.1.3006.zip',
        platform: 'linux',
      },
      {
        description: 'Extract SonarScanner',
        command: 'unzip sonar-scanner-cli-5.0.1.3006.zip',
        platform: 'all',
      },
      {
        description: 'Add to PATH (Linux/Mac)',
        command: 'export PATH=$PATH:/path/to/sonar-scanner-5.0.1.3006/bin',
        platform: 'linux',
      },
    ],
    code: {
      language: 'properties',
      filename: 'sonar-project.properties',
      description: 'Create this file in your project root',
      code: `sonar.projectKey=my-project
sonar.projectName=My Project
sonar.projectVersion=1.0
sonar.sources=src
sonar.sourceEncoding=UTF-8
sonar.language=js
# sonar.exclusions=**/*.test.js,**/node_modules/**`,
    },
    order: 7,
  },
  {
    id: 'first-analysis',
    title: 'Run Your First Analysis',
    description: 'Analyze your first project with SonarQube',
    commands: [
      {
        description: 'Generate authentication token in SonarQube UI',
        command: 'User > My Account > Security > Generate Token',
        platform: 'all',
      },
      {
        description: 'Run analysis',
        command: 'sonar-scanner -Dsonar.token=your-token-here',
        platform: 'all',
      },
    ],
    tips: [
      'View results at http://localhost:9000',
      'First analysis may take a few minutes',
      'Results include bugs, vulnerabilities, code smells, and coverage',
    ],
    order: 8,
  },
];
