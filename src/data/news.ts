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
    id: 'veeva-study-builder-agent',
    title: 'Veeva Announces Study Builder Agent to Autonomously Configure Clinical EDC and Data Quality from Protocols',
    date: 'September 24, 2026',
    category: 'Agentic Compliance',
    source: 'Veeva Systems Press Release',
    badge: 'Agentic AI',
    featured: true,
    summary: 'Veeva Systems introduced the Veeva Study Builder Agent, an autonomous AI solution engineered to configure Veeva EDC and Veeva DQS (Data Quality System) directly from study protocols. Delivered as a Claude Cowork plugin installed via a Veeva-managed GitHub repository, the agent automates forms, edit checks, and CQL-based listings using CDISC USDM standards while generating synthetic test data for audit-ready validation under GxP and 21 CFR Part 11.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'oxford-biomedica-veeva-quality-cloud',
    title: 'Oxford Biomedica Partners with Veeva to Standardize Global Viral Vector QMS Across UK, France, and US',
    date: 'September 24, 2026',
    category: 'Platform & M&A',
    source: 'PR Newswire / Oxford Biomedica',
    badge: 'CDMO Quality',
    featured: false,
    summary: 'Viral vector CDMO Oxford Biomedica selected Veeva Quality Cloud to drive its global quality transformation across manufacturing facilities in the UK, France, and the United States. The enterprise deployment unifies Veeva QMS, QualityDocs, Training, and Learn GxP onto a single validated data substrate, eliminating disparate site quality silos to accelerate batch release and maintain rigorous alignment with FDA QMSR and EU GMP standards.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'mastercontrol-playbook-qmsr-enforcement',
    title: 'MasterControl Releases 2026 Regulatory Playbook Synthesizing FDA QMSR Risk Enforcement Trends',
    date: 'September 24, 2026',
    category: 'Regulatory & QMSR',
    source: 'MasterControl Regulatory Affairs',
    badge: 'QMSR Playbook',
    featured: false,
    summary: 'MasterControl published its 2026 Regulatory Readiness Playbook for Life Sciences, evaluating early enforcement trends from post-QSIT FDA warning letters citing ISO 13485:2016 Clause 7.1. The analysis highlights an aggressive shift by CDRH investigators toward evaluating quality systems as integrated risk-management networks, warning MedTech manufacturers against static risk files and urging automated cross-linking between complaints, CAPAs, and Design History Files.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'veeva-vault-top-20-biopharma-expansion',
    title: 'Veeva Secures 14th Top-20 Biopharma on Vault Platform as Live Deployments Eclipse 190',
    date: 'September 23, 2026',
    category: 'Platform & M&A',
    source: 'Veeva Systems Press Release',
    badge: 'Enterprise Growth',
    featured: false,
    summary: 'Veeva Systems announced that an additional top 20 global biopharmaceutical manufacturer has committed to its Vault CRM and platform architecture, expanding its market penetration to 14 of the top 20 global biopharmas with more than 190 live customer deployments. The enterprise milestone establishes a standardized data substrate across commercial, quality, and regulatory operations, accelerating the rollout of agentic workflows such as Agentic Call Reports and Falcon automated complaint triage.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'zenqms-acrosian-biometrics-partnership',
    title: 'ZenQMS Selected by Acrosian to Anchor GxP Quality Infrastructure for AI-Augmented CRO Operations',
    date: 'September 23, 2026',
    category: 'Platform & M&A',
    source: 'BioSpace / ZenQMS Corporate Announcement',
    badge: 'CRO Partnership',
    featured: false,
    summary: 'AI-augmented biometrics contract research organization Acrosian selected ZenQMS as its electronic Quality Management System to underpin expanding clinical data management, biostatistics, and regulatory medical writing operations. The deployment provides a validated, audit-ready GxP quality foundation enforcing closed-loop traceability across AI-assisted biometric workflows while adhering to 21 CFR Part 11 and GCP integrity mandates.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'iso-9001-2026-publication-transition',
    title: 'ISO 9001:2026 Publication Triggers 3-Year Transition Cycle Across Dual-Certified Life Sciences QMS',
    date: 'September 23, 2026',
    category: 'Regulatory & QMSR',
    source: 'ISO / ANSI Standards Notice',
    badge: 'Standard Revision',
    featured: false,
    summary: 'The International Organization for Standardization (ISO) formally published ISO 9001:2026, establishing a three-year transition window through September 2029 for certified enterprises. Life sciences organizations maintaining dual ISO 9001 and ISO 13485:2016 certifications are initiating eQMS gap analyses to address new mandates around ethical quality culture, digital transformation governance, and decoupled risk/opportunity controls under the FDA QMSR regime.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
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
  }
];
