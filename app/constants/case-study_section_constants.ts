export const caseStudyItems = [
  {
    title: "Audit Logs Visualization",
    challenge:
      "Surface trends and anomalies across audit log events from multiple entities in a highly interactive, data-intensive application, without choking the UI under heavy data volumes.",
    whatIDid:
      "Designed and implemented a D3.js + React visualization component built for scale. Optimized data fetching, improved rendering efficiency through memoization and virtualization, and partnered with backend teams to refine API contracts and shrink payload sizes.",
    impact:
      "Users can now spot CRUD trends and anomalies across entities at a glance, with an interactive graph that stays responsive even under heavy data load. Cut perceived dashboard wait time noticeably and made audit investigations workable for non-engineering teams.",
  },
  {
    title: "Fast Search and Filtering",
    challenge:
      "Eliminate latency and performance issues in the search and filtering features of a large enterprise application.",
    whatIDid:
      "Replaced the SQL-based search with Elastic App Search, added debounced queries, refactored filter logic, and improved data indexing.",
    impact:
      "Search latency dropped 95% (from 2s to 100ms), giving users near-instant feedback and unblocking workflows that previously felt sluggish under load.",
  },
  {
    title: "Natural Language Search via MCP Server",
    challenge:
      "Enable non-technical stakeholders to query application data conversationally instead of navigating multi-step filter UIs to investigate routine questions.",
    whatIDid:
      "Built an MCP (Model Context Protocol) server as an LLM tool-integration layer and connected it with Cline. Designed Node.js endpoints with input validation and RBAC authorization so the LLM could only access data the requesting user was permitted to see.",
    impact:
      "Stakeholders can now ask questions in plain English (like 'show audit logs from last week for user X') and get authorized, structured results back. Eliminated multi-click filter chains for the most common investigations and demonstrated a safe LLM-tooling pattern other teams can build on.",
  },
];
