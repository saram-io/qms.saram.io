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
    id: 'salesforce-life-sciences-mcp-agentforce',
    title: 'Salesforce Introduces Life Sciences MCP to Extend Governed Agentforce Workflows Across Enterprise Surfaces',
    date: 'September 26, 2026',
    category: 'AI & Protocols',
    source: 'Salesforce Corporate Announcement',
    badge: 'MCP Standard',
    featured: true,
    summary: 'Salesforce unveiled Life Sciences MCP (Model Context Protocol), bringing open agentic interoperability to its life sciences cloud platform and Agentforce engine. The protocol layer natively enforces 21 CFR Part 11 audit trails, GxP validation, HIPAA data segregation, and zero-retention privacy across Slack, Microsoft Teams, WhatsApp, and developer agents like Claude Code without custom integration middleware.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'sware-res-q-connect-mcp-gxp',
    title: 'Sware Launches Res_Q Connect as MCP-Native GxP Integration Engine for Regulated eQMS and ERP Systems',
    date: 'September 26, 2026',
    category: 'Agentic Compliance',
    source: 'Business Wire / Sware Announcement',
    badge: 'MCP Platform',
    featured: false,
    summary: 'Sware released Res_Q Connect, an AI-validated integration platform built natively on the Model Context Protocol (MCP) to automate bidirectional data synchronization across eQMS, ERP, and laboratory systems. The architecture allows life sciences organizations to orchestrate cross-platform compliance workflows using natural language while recording every automated action into an immutable 21 CFR Part 11-compliant audit trail.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'fda-boston-scientific-imager-ii-recall',
    title: 'FDA Classifies Boston Scientific Imager II Angiographic Catheter Removal as Class I Recall',
    date: 'September 26, 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Medical Device Recalls',
    badge: 'Class I Recall',
    featured: false,
    summary: 'The FDA CDRH officially classified the nationwide removal of Boston Scientific Imager II Angiographic Catheters as a Class I recall following reports of catheter tip degradation and detachment caused by insufficient stabilizer concentrations during manufacturing. The enforcement underscores heightened FDA QMSR Clause 7.1 and Clause 7.4 scrutiny on in-process manufacturing controls and closed-loop risk file remediation.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'fda-rasd-premarket-guidance',
    title: 'FDA CDRH Issues Draft Guidance on Robotically-Assisted Surgical Devices, Mandating Dynamic Lifecycle Risk Controls',
    date: 'September 25, 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Notice / Federal Register',
    badge: 'Draft Guidance',
    featured: true,
    summary: 'The FDA CDRH published comprehensive draft guidance on premarket submissions for Robotically-Assisted Surgical Devices (RASDs, Docket No. FDA-2026-N-9505), establishing rigorous expectations across 510(k), De Novo, and PMA pathways. The agency mandates total product lifecycle risk management under harmonized QMSR Clause 7.1, software lifecycle controls under IEC 62304, cybersecurity verification, and human factors validation (IEC 62366), while introducing an umbrella framework to evaluate modular indications.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'eu-ivdr-class-c-written-agreement-deadline',
    title: 'EU IVDR Class C Legacy Device Deadline Reached as Manufacturers Finalize Notified Body Agreements',
    date: 'September 25, 2026',
    category: 'Regulatory & QMSR',
    source: 'European Commission / Regulation (EU) 2024/1860',
    badge: 'IVDR Deadline',
    featured: false,
    summary: 'Medical device manufacturers across Europe face the September 26, 2026 statutory deadline under Regulation (EU) 2024/1860 to execute signed written agreements with Notified Bodies for legacy Class C in vitro diagnostics. Securing these agreements requires audit-ready proof of a fully compliant quality management system under IVDR Article 10(8), granting extended market placement through December 2028 while uncontracted devices face immediate distribution bans.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'profusa-gmed-iso-13485-certification',
    title: 'Profusa Secures Positive Decision from GMED for ISO 13485 Medical Device QMS Certification',
    date: 'September 25, 2026',
    category: 'Certification',
    source: 'GlobeNewswire / GMED Notified Body',
    badge: 'ISO 13485',
    featured: false,
    summary: 'Profusa received a positive certification decision from French notified body GMED for its Quality Management System under ISO 13485:2016 for the Lumee® Oxygen Platform. The milestone validates the company’s QMS architecture against international device standards, serving as the required prerequisite for completing EU MDR conformity assessments toward CE mark commercialization across European member states.',
    linkText: 'View Directory Details',
    url: '/vendors'
  },
  {
    id: 'usdm-mcp-gxp-validation-framework',
    title: 'USDM Life Sciences Unveils GxP Validation Framework for Model Context Protocol (MCP) in Regulated eQMS',
    date: 'September 25, 2026',
    category: 'AI & Protocols',
    source: 'USDM Life Sciences Architecture Brief',
    badge: 'MCP Governance',
    featured: false,
    summary: 'USDM Life Sciences published a validation architecture for implementing the Model Context Protocol (MCP) across regulated life sciences systems, establishing bounded decision boundaries for autonomous AI agents. The framework applies Computer Software Assurance (CSA) principles under FDA QMSR and 21 CFR Part 11, providing standardized protocols for tool authentication, tamper-evident audit logging, and automated eval verification.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'veeva-study-builder-agent',
    title: 'Veeva Announces Study Builder Agent to Autonomously Configure Clinical EDC and Data Quality from Protocols',
    date: 'September 24, 2026',
    category: 'Agentic Compliance',
    source: 'Veeva Systems Press Release',
    badge: 'Agentic AI',
    featured: false,
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
  }
];
