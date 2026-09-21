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
    id: 'fda-qmsr-clause-7-1-enforcement',
    title: 'FDA Enforces QMSR Clause 7.1 in Post-QSIT Audits, Citing Deficiencies in Dynamic Risk Management',
    date: 'September 20, 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Compliance Enforcement Data',
    badge: 'QMSR Citations',
    featured: true,
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
    featured: true,
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
  },
  {
    id: 'veeva-vault-release-26r2-2',
    title: 'Veeva Deploys Vault Release 26R2.2 to Production Across Quality and Regulatory Clouds',
    date: 'September 17, 2026',
    category: 'Platform & M&A',
    source: 'Veeva Systems Maintenance Notice',
    badge: 'Production Upgrade',
    featured: false,
    summary: 'Veeva Systems deployed Vault Release 26R2.2 into global production environments, delivering targeted stability updates and document governance hardening following the 26R2 major cycle. The release reinforces the foundation for Vault Quality AI agent swarms and mandates platform-wide multi-factor authentication for enterprise tenants.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'dot-compliance-iso-42001',
    title: 'Dot Compliance Achieves Accredited ISO/IEC 42001 Certification for AI Governance',
    date: 'September 2026',
    category: 'Certification',
    source: 'Dot Compliance Corporate Announcement',
    badge: 'ISO 42001',
    featured: false,
    summary: 'Dot Compliance achieved formal ISO/IEC 42001 certification for Artificial Intelligence Management Systems (AIMS), validating risk controls and explainability for its Salesforce-native Dottie AI Personas. The certification positions Dot Compliance alongside MasterControl and Greenlight Guru in auditable AI quality management.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'hexagon-etq-reliance-ai',
    title: 'Hexagon Launches ETQ Reliance AI Ecosystem with Automated Form and Complaint Advisors',
    date: 'September 2026',
    category: 'AI & Protocols',
    source: 'Hexagon ETQ Press Release',
    badge: 'Product Launch',
    featured: false,
    summary: 'Hexagon launched Reliance AI™ for ETQ Reliance, introducing native Form Field and Complaint & Feedback Advisors to automate intake and contextual investigation routing. The release advances Hexagon’s digital thread strategy, directly linking metrology anomaly detection with automated QMS non-conformance records.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'veeva-vault-mcp-ga',
    title: 'Veeva Systems Ships Vault Model Context Protocol (MCP) Server in GA (Release 26R2)',
    date: 'August 2026',
    category: 'AI & Protocols',
    source: 'Veeva Systems Press Release',
    badge: 'GA Release',
    featured: false,
    summary: 'Veeva Systems officially shipped its Model Context Protocol (MCP) Server for the Vault Quality Cloud. Enterprise biopharma can now deploy standardized Anthropic-protocol AI agent swarms to query validated quality documents, deviations, and batch release records without proprietary vendor lock-in.',
    linkText: 'Read Architectural Analysis',
    url: '/ai-trends'
  }
];
