const thomsonReutersJobResponsibilities = [
  "Cut React SPA initial load 40% (3.2s to 1.9s) via code-splitting, lazy loading, and memoization, measured in Datadog RUM.",
  "Reduced deployment time from 2 hours to 15 minutes by enforcing Infrastructure as Code (Cumulus) for CI/CD pipelines, eliminating configuration drift.",
  "Owned AWS CodePipeline management, resolving deployment failures and reducing pipeline downtime by 60% across dev/staging/prod.",
  "Raised unit test coverage from 40% to 75% across 3 major applications (Jest + React Testing Library), reducing post-release defects.",
  "Maintained 0 critical vulnerabilities by triaging Snyk/Dependabot alerts weekly and enforcing secure dependency practices.",
  "Built an MCP server (LLM tool-integration layer) integrated with Cline, enabling natural language search over application data with RBAC-protected Node.js endpoints.",
  "Reduced transient failures in an AI summarization service by 65% via adaptive retry/fallback logic (exponential backoff, token reduction, alternate models) within a 5-minute SLA.",
  "Built a D3.js + React data visualization dashboard with real-time filtering, search, and interactive charts.",
  "Designed a secure routing system with protected routes and role-based access control (RBAC).",
  "Containerized applications with Rancher Desktop, deploying Docker images to AWS ECR for ECS across environments.",
  "Delivered 12+ features quarterly in Agile sprints with full-cycle ownership from API contract design through UI rendering.",
  "Mentored 2 junior developers on design patterns, testing strategies, and performance optimization.",
];

const cognizantJobResponsibilities = [
  "Built React enterprise application UI serving 10K+ daily users with cross-browser compatibility (Chrome, Safari, Edge).",
  "Refactored a 50K+ line legacy codebase, cutting component complexity 35% and feature delivery time 25% through custom hooks and shared components.",
  "Cut search query latency 95% (2s → 100ms) by integrating Elastic App Search with debounced queries and client-side caching.",
  "Drove a 20% lift in feature usage by integrating Pendo analytics and surfacing UX bottlenecks for product decisions.",
  "Reduced API payload size 40% through field selection and pagination, improving responsiveness on slower networks.",
  "Ensured WCAG accessibility across 20+ components: keyboard navigation, ARIA labels, and screen reader support.",
  "Automated dead-code detection via GitHub Actions, keeping the codebase lean as it grew.",
];

const internshipResponsibilities = [
  "Completed Cognizant's internship program in ASP.NET MVC and full-stack fundamentals.",
  "Worked through internal training projects covering routing, server-side logic, data flow, and separation of concerns. This formed the foundation for my transition from Electronics & Instrumentation into software engineering.",
];

export const experienceItems = [
  {
    title: "SOFTWARE DEVELOPMENT ENGINEER",
    company: "THOMSON REUTERS, Bangalore",
    duration: "November 2023 - Present",
    responsibilities: thomsonReutersJobResponsibilities,
  },
  {
    title: "SOFTWARE ENGINEER",
    company: "COGNIZANT, Bangalore",
    duration: "March 2021 - October 2023",
    responsibilities: cognizantJobResponsibilities,
  },
  {
    title: "SOFTWARE ENGINEER INTERN",
    company: "COGNIZANT, Coimbatore",
    duration: "December 2019 - April 2020",
    responsibilities: internshipResponsibilities,
  },
];
