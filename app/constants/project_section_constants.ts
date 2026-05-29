export const projectItems = [
  {
    title: "Locket",
    brief:
      "A privacy-first offline diary PWA. Entries are encrypted on-device using AES-GCM via the Web Crypto API and stored locally in IndexedDB. No server, no cloud, no recovery. Ships with encrypted export/import for moving entries between devices.",
    techs: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vite",
      "PWA",
      "Web Crypto API",
      "IndexedDB",
    ],
    code_link: "https://github.com/Poorniiii/locket",
    demo_link: "https://locket-poornima-rajappan.vercel.app/",
  },
  {
    title: "Sovereign AI Platform",
    status: "Work in Progress",
    brief:
      "Local-first AI compliance tool. Upload contracts, ask compliance questions, get LangGraph-orchestrated RAG verdicts grounded in policy. FastAPI + Ollama (llama3.1:8b) backend, React Flow canvas frontend, OPA for policy-as-code RBAC, and a tamper-evident audit log. Auth, RAG agents, and UI are functional; Kubernetes deployment in progress.",
    techs: [
      "Python",
      "FastAPI",
      "React",
      "LangGraph",
      "ChromaDB",
      "Ollama",
      "OPA",
      "Docker",
    ],
    code_link: "https://github.com/Poorniiii/sovereign-ai-platform",
    demo_link: "",
  },
  {
    title: "Emotion-Based Song Recommendation",
    brief:
      "Real-time facial emotion detection that suggests songs matched to your current mood. Captures webcam frames, classifies emotion with AWS Rekognition, then prompts Bedrock/Claude to generate personalized picks. Built at She Loves Data Hackathon 2024 (placed 2nd).",
    techs: [
      "Python",
      "Flask",
      "OpenCV",
      "AWS Rekognition",
      "AWS Bedrock",
      "Claude",
    ],
    code_link: "https://github.com/Poorniiii/SLD_hack_team_2",
    demo_link: "",
  },
];
