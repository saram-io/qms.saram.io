export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'AI & Protocols' | 'Regulatory & QMSR' | 'Certification' | 'Agentic Compliance' | 'Platform & M&A' | 'AI Disruptors' | 'Market Research';
  source: string;
  badge?: string;
  summary: string;
  linkText?: string;
  url: string;
  featured?: boolean;
}

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'veeva-falcon-router-agent',
    title: 'Veeva Announces Falcon Router to Automate Complaint and Adverse Event Triage into Vault QMS',
    date: 'September 22, 2026',
    category: 'Agentic Compliance',
    source: 'Veeva Systems Press Release',
    badge: 'Product Launch',
    featured: false,
    summary: 'Veeva Systems introduced Falcon Router, an autonomous AI agent engineered to ingest, classify, and route incoming product quality complaints, adverse events, and medical information inquiries across web and email channels. The agent dynamically directs records into Veeva QMS, Veeva Safety, or Veeva MedInquiry, eliminating manual triage reconciliation while enforcing GxP audit trails.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'nucleus-research-qms-value-matrix-2026',
    title: 'Nucleus Research Releases 2026 QMS Value Matrix, Highlighting Agentic Workflows and Total Cost of Change',
    date: 'September 22, 2026',
    category: 'Market Research',
    source: 'Nucleus Research Technology Value Matrix',
    badge: 'Market Research',
    featured: false,
    summary: 'Nucleus Research published its 2026 QMS Technology Value Matrix, evaluating enterprise platforms on usability, functional breadth, and total cost of change under harmonized QMSR standards. MasterControl, Honeywell Technologies, ComplianceQuest, and Octave (ETQ Reliance) were recognized as Leaders, while Qualio and Greenlight Guru advanced in the Accelerators quadrant for rapid time-to-value.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'fda-genai-cdrh-discussion-paper',
    title: 'FDA CDRH Solicits Feedback on Generative AI Discussion Paper, Outlining Dynamic Lifecycle Risk Controls',
    date: 'September 21, 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Notice / Federal Register',
    badge: 'Regulatory Watch',
    featured: true,
    summary: 'The FDA CDRH published its regulatory discussion paper on Generative AI-Enabled Medical Devices (Docket No. FDA-2026-N-7874), soliciting public comment through October 19, 2026. The agency outlines expectations for Total Product Life Cycle (TPLC) governance, mandating dynamic risk management under harmonized QMSR Clause 7.1, post-market hallucination monitoring, and Predetermined Change Control Plans (PCCPs) for non-deterministic models.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'ideagen-mazlan-agentic-qms',
    title: 'Ideagen Deploys Mazlan Agentic AI Platform to Automate QMS Workflows and Predictive Deviation Routing',
    date: 'September 21, 2026',
    category: 'Agentic Compliance',
    source: 'Ideagen Corporate Announcement',
    badge: 'Agentic QMS',
    featured: false,
    summary: 'Ideagen rolled out its Mazlan agentic compliance engine across Ideagen Quality Management, autonomously generating ISO-compliant workflows and drafting audit-ready CAPAs directly against 21 CFR Part 11 audit trails. The platform reduces workflow authoring cycles by up to 50% and was recognized as a Leader in the Verdantix Green Quadrant for operational AI integration.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'fda-qmsr-clause-7-1-enforcement',
    title: 'FDA Enforces QMSR Clause 7.1 in Post-QSIT Audits, Citing Deficiencies in Dynamic Risk Management',
    date: 'September 20, 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Compliance Enforcement Data',
    badge: 'QMSR Citations',
    featured: false,
    summary: 'CDRH inspectional analyses under the harmonized QMSR (21 CFR Part 820 / ISO 13485:2016) reveal that Clause 7.1 (Risk Management in Product Realization) now represents over 20% of Form 483 observations and recent warning letters. FDA investigators are penalizing manufacturers relying on static risk management files, mandating closed-loop feedback where field complaints, adverse events, and supplier deviations dynamically update risk controls and Design History Files (DHFs).',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'veeva-falcon-safety-agentic-operations',
    title: 'Veeva Unveils Falcon Safety to Automate Pharmacovigilance Across Multi-Vendor Safety Databases',
    date: 'September 20, 2026',
    category: 'Agentic Compliance',
    source: 'Veeva Systems Corporate Announcement',
    badge: 'Agentic Safety',
    featured: false,
    summary: 'Veeva Systems launched Veeva Falcon Safety, an agentic safety operations application built to automate adverse event intake, triage, and regulatory case reporting across enterprise biopharma. Built on Veeva’s MAAP architecture, the autonomous agent engine interoperates with both Veeva Safety and third-party E2B-compliant systems—such as Oracle Argus and ArisGlobal LifeSphere MultiVigilance—while generating 21 CFR Part 11 compliant audit trails.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'qualio-pydantic-ai-evals',
    title: 'Qualio Deploys Pydantic AI Architecture with 300+ Automated Evals for Defensible Agentic Compliance',
    date: 'September 19, 2026',
    category: 'Agentic Compliance',
    source: 'Qualio Engineering Architecture Brief',
    badge: 'Agentic Evals',
    featured: false,
    summary: 'Qualio detailed its production agentic compliance architecture built on Pydantic AI and Pydantic Evals, enforcing over 300 automated regression evaluation gates per deployment. The type-safe orchestration layer translates natural-language quality criteria into structured, auditable validation checkpoints, ensuring that autonomous SOP generation and FDA QMSR gap analyses remain verifiable under 21 CFR Part 11.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'ptc-arena-2026-2-ai-engine',
    title: 'PTC Deploys Arena 2026.2 Introducing Arena Connect and Bedrock-Powered AI Engine',
    date: 'September 19, 2026',
    category: 'AI & Protocols',
    source: 'PTC Arena Release Notes',
    badge: 'Release 2026.2',
    featured: false,
    summary: 'PTC deployed Arena release 2026.2, introducing Arena Connect to provide visual, low-code integration pipelines between enterprise MES, ERP, and quality records. The update embeds the Amazon Bedrock-powered Arena AI Engine, automating BOM compliance verifications, engineering change summaries, and conversational guidance for Engineering Change Orders (ECOs) and CAPAs.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'greenlight-guru-mcp-server',
    title: 'Greenlight Guru Ships Production Model Context Protocol (MCP) Server for GG Quality',
    date: 'September 18, 2026',
    category: 'AI & Protocols',
    source: 'Greenlight Guru Engineering Announcement',
    badge: 'MCP Server',
    featured: false,
    summary: 'Greenlight Guru released its production Model Context Protocol (MCP) Server for the GG Quality suite, enabling MedTech teams to query CAPAs, nonconformances, and design trace records directly via Claude, ChatGPT, and Copilot. The implementation establishes an open, standardized protocol interface that bypasses proprietary API lock-in while maintaining 21 CFR Part 11 audit trails.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'ennov-ceo-oxana-pickeral',
    title: 'Ennov Appoints Former Sparta Systems CEO Dr. Oxana Pickeral to Lead Global Agentic QMS Expansion',
    date: 'September 2026',
    category: 'Platform & M&A',
    source: 'Ennov Corporate Announcement',
    badge: 'Executive Move',
    featured: false,
    summary: 'European life sciences software platform Ennov named Dr. Oxana Pickeral, former President and CEO of Sparta Systems (Honeywell TrackWise), as Chief Executive Officer following strategic growth investments from Bregal Sagemount and Ardian Growth. Pickeral will lead Ennov\'s global scaling and accelerated rollout of agentic compliance across unified QMS, RIM, and clinical solutions.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'kivo-headless-gxp',
    title: 'Kivo Unveils Headless GxP™ Agent-Native Architecture Across Unified Quality and Regulatory Suite',
    date: 'September 2026',
    category: 'Agentic Compliance',
    source: 'Kivo Product Announcement',
    badge: 'Headless GxP',
    featured: false,
    summary: 'Kivo launched Headless GxP™, an open agent-native architecture unifying Quality, Clinical eTMF, and Regulatory Information Management for emerging biopharma. The architecture establishes a permissioned data layer allowing autonomous AI agents to orchestrate SOP reviews, deviation investigations, and trial records without cross-system middleware.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'compliancequest-summer26-agentic-ai',
    title: "ComplianceQuest Deploys Agentic AI in Summer '26 Release for Autonomous QMS and Safety Workflows",
    date: 'September 2026',
    category: 'Agentic Compliance',
    source: 'ComplianceQuest Corporate Announcement',
    badge: 'Agentic AI',
    featured: false,
    summary: 'ComplianceQuest rolled out native Agentic AI capabilities within its Summer \'26 release on the Salesforce AppExchange. The platform deploys autonomous agents designed to ingest nonconformances, perform root-cause investigations, and auto-draft CAPA action plans directly against 21 CFR Part 11 electronic audit trails.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'ketryx-series-b-validated-ai',
    title: 'Ketryx Secures $39M Series B Led by Transformation Capital, Deploys Validated AI Agents',
    date: 'September 2026',
    category: 'AI Disruptors',
    source: 'Ketryx Press Release',
    badge: '$39M Series B',
    featured: false,
    summary: 'Medical software lifecycle platform Ketryx closed a $39M Series B funding round led by Transformation Capital, bringing total capital to $55M as former Medtronic CEO Bill Hawkins joined the board. The company also expanded deployment of its validated AI agents, automating DHF cross-traceability and IEC 62304/ISO 14971 compliance across top MedTech enterprises.',
    linkText: 'View Disruptor Tier 4',
    url: '/tiers'
  },
  {
    id: 'qualio-iso-42001-certification',
    title: 'Qualio Achieves Accredited ISO/IEC 42001 Certification for Compliance Intelligence Platform',
    date: 'September 2026',
    category: 'Certification',
    source: 'Qualio Corporate Announcement',
    badge: 'ISO 42001',
    featured: false,
    summary: 'Qualio secured formal ISO/IEC 42001 certification for Artificial Intelligence Management Systems (AIMS), validating risk governance and explainability for its Compliance Intelligence engine. The accreditation reinforces automated gap analysis across FDA QMSR and ISO 13485 for emerging biopharma and MedTech innovators.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'fda-cp-7382-850-qmsr',
    title: 'FDA Operationalizes CP 7382.850 for QMSR Inspections, Formally Retiring QSIT',
    date: 'September 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Compliance Program Notice',
    badge: 'Regulatory Watch',
    featured: false,
    summary: 'The FDA has formally operationalized Compliance Program CP 7382.850 ("Inspection of Medical Device Manufacturers"), fully retiring the legacy Quality System Inspection Technique (QSIT). Field investigators are now conducting inspections under the harmonized QMSR framework with heightened scrutiny into Total Product Life Cycle (TPLC) risk management, supplier audit records, and automated design control trace matrices.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  }
];
