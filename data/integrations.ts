import { Integration } from "@/types";
import {
  GitBranch,
  GitPullRequest,
  Code2,
  Github,
  Gitlab,
  Hammer,
  FolderGit2,
  Boxes,
} from "lucide-react";

export const integrations: Integration[] = [
  {
    id: "jenkins",
    name: "Jenkins",
    type: "ci-cd",
    icon: Boxes,
    description:
      "Integrate SonarQube analysis into your Jenkins CI/CD pipeline",
    setupSteps: [
      "Install SonarQube Scanner for Jenkins plugin",
      "Configure SonarQube server in Jenkins Global Configuration",
      "Add SonarQube Scanner step to your Jenkinsfile",
      "Configure quality gate status check",
    ],
    configuration: {
      language: "groovy",
      filename: "Jenkinsfile",
      code: `pipeline {
  agent any
  
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }
    
    stage('SonarQube Analysis') {
      steps {
        script {
          def scannerHome = tool 'SonarScanner'
          withSonarQubeEnv('SonarQube') {
            sh "\${scannerHome}/bin/sonar-scanner"
          }
        }
      }
    }
    
    stage('Quality Gate') {
      steps {
        timeout(time: 1, unit: 'HOURS') {
          waitForQualityGate abortPipeline: true
        }
      }
    }
  }
}`,
    },
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    type: "ci-cd",
    icon: Github,
    description: "Run SonarQube analysis on every pull request and commit",
    setupSteps: [
      "Add SONAR_TOKEN to GitHub repository secrets",
      "Create a sonar-project.properties file",
      "Add SonarQube workflow to .github/workflows",
      "Commit and push to trigger analysis",
    ],
    configuration: {
      language: "yaml",
      filename: ".github/workflows/sonarqube.yml",
      code: `name: SonarQube Analysis

on:
  push:
    branches:
      - main
      - develop
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  sonarqube:
    name: SonarQube Scan
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: SonarQube Scan
        uses: sonarsource/sonarqube-scan-action@master
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}
          SONAR_HOST_URL: \${{ secrets.SONAR_HOST_URL }}
      
      - name: SonarQube Quality Gate Check
        uses: sonarsource/sonarqube-quality-gate-action@master
        timeout-minutes: 5
        env:
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}`,
    },
  },
  {
    id: "gitlab-ci",
    name: "GitLab CI",
    icon: Gitlab,
    type: "ci-cd",
    description: "Integrate SonarQube into your GitLab CI/CD pipeline",
    setupSteps: [
      "Add SONAR_TOKEN to GitLab CI/CD variables",
      "Create sonar-project.properties file",
      "Add SonarQube job to .gitlab-ci.yml",
      "Configure merge request decoration",
    ],
    configuration: {
      language: "yaml",
      filename: ".gitlab-ci.yml",
      code: `stages:
  - test
  - sonarqube

sonarqube-check:
  stage: sonarqube
  image: 
    name: sonarsource/sonar-scanner-cli:latest
    entrypoint: [""]
  variables:
    SONAR_USER_HOME: "\${CI_PROJECT_DIR}/.sonar"
    GIT_DEPTH: "0"
  cache:
    key: "\${CI_JOB_NAME}"
    paths:
      - .sonar/cache
  script: 
    - sonar-scanner
  allow_failure: true
  only:
    - merge_requests
    - main
    - develop`,
    },
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: Code2,
    type: "ide",
    description:
      "Get real-time feedback on code quality issues directly in VS Code",
    setupSteps: [
      "Install SonarLint extension from VS Code marketplace",
      "Open VS Code settings and search for SonarLint",
      "Connect to SonarQube server (optional)",
      "Configure project binding for synchronized rules",
    ],
    configuration: {
      language: "json",
      filename: ".vscode/settings.json",
      code: `{
  "sonarlint.connectedMode.connections.sonarqube": [
    {
      "serverUrl": "http://localhost:9000",
      "token": "your-token-here"
    }
  ],
  "sonarlint.connectedMode.project": {
    "projectKey": "your-project-key"
  },
  "sonarlint.rules": {
    "javascript:S1481": {
      "level": "on"
    }
  }
}`,
    },
  },
  {
    id: "intellij",
    icon: Code2,
    name: "IntelliJ IDEA",
    type: "ide",
    description:
      "Integrate SonarLint with IntelliJ IDEA for instant code quality feedback",
    setupSteps: [
      "Install SonarLint plugin from JetBrains marketplace",
      "Go to Settings > Tools > SonarLint",
      "Configure connection to SonarQube server",
      "Bind project to SonarQube project key",
    ],
    configuration: {
      language: "text",
      description: "Configuration steps in IDE",
      code: `1. Open Settings (Ctrl+Alt+S / Cmd+,)
2. Navigate to Tools > SonarLint > SonarQube Connections
3. Click '+' to add new connection
4. Enter:
   - Configuration Name: My SonarQube
   - Server URL: http://localhost:9000
   - Authentication Type: Token
   - Token: your-token-here
5. Click 'Test Connection'
6. Apply and OK
7. Right-click project > SonarLint > Bind to SonarQube
8. Select your project key`,
    },
  },
  {
    id: "maven",
    icon: Hammer,
    name: "Maven",
    type: "build-tool",
    description: "Run SonarQube analysis as part of your Maven build",
    setupSteps: [
      "Add SonarQube properties to pom.xml",
      "Set SONAR_TOKEN environment variable",
      "Run mvn sonar:sonar command",
      "View results on SonarQube dashboard",
    ],
    configuration: {
      language: "xml",
      filename: "pom.xml",
      code: `<properties>
  <sonar.organization>your-org</sonar.organization>
  <sonar.host.url>http://localhost:9000</sonar.host.url>
  <sonar.projectKey>your-project-key</sonar.projectKey>
</properties>

<build>
  <plugins>
    <plugin>
      <groupId>org.sonarsource.scanner.maven</groupId>
      <artifactId>sonar-maven-plugin</artifactId>
      <version>3.10.0.2594</version>
    </plugin>
  </plugins>
</build>

<!-- Run with: mvn clean verify sonar:sonar -->`,
    },
  },
  {
    icon: Hammer,
    id: "gradle",
    name: "Gradle",
    type: "build-tool",
    description: "Integrate SonarQube into your Gradle builds",
    setupSteps: [
      "Add SonarQube plugin to build.gradle",
      "Configure sonarqube properties",
      "Run gradle sonarqube task",
      "Check analysis results",
    ],
    configuration: {
      language: "groovy",
      filename: "build.gradle",
      code: `plugins {
  id "org.sonarqube" version "4.4.1.3373"
}

sonarqube {
  properties {
    property "sonar.projectKey", "your-project-key"
    property "sonar.organization", "your-org"
    property "sonar.host.url", "http://localhost:9000"
  }
}

// Run with: ./gradlew sonarqube`,
    },
  },
  {
    icon: FolderGit2,
    id: "azure-devops",
    name: "Azure DevOps",
    type: "ci-cd",
    description: "Add SonarQube analysis to Azure DevOps pipelines",
    setupSteps: [
      "Install SonarQube extension from Azure Marketplace",
      "Create service connection to SonarQube",
      "Add SonarQube tasks to azure-pipelines.yml",
      "Configure quality gate check",
    ],
    configuration: {
      language: "yaml",
      filename: "azure-pipelines.yml",
      code: `trigger:
  - main
  - develop

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: SonarQubePrepare@5
    inputs:
      SonarQube: 'SonarQube-Connection'
      scannerMode: 'CLI'
      configMode: 'manual'
      cliProjectKey: 'your-project-key'
      cliProjectName: 'Your Project'
  
  - script: |
      npm install
      npm run build
      npm test
    displayName: 'Build and Test'
  
  - task: SonarQubeAnalyze@5
  
  - task: SonarQubePublish@5
    inputs:
      pollingTimeoutSec: '300'`,
    },
  },
];
