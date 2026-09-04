export interface Vendor {
  id: string;
  name: string;
  ticker?: string;
  parentCompany?: string;
  product: string;
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  category: 
    | 'Platform Incumbent'
    | 'Pure-Play QMS'
    | 'Vertical Specialist: LIMS'
    | 'Vertical Specialist: RIM'
    | 'Vertical Specialist: Validation'
    | 'Vertical Specialist: PLM'
    | 'Vertical Specialist: MES'
    | 'Vertical Specialist: Safety'
    | 'Vertical Specialist: EHS'
    | 'Vertical Specialist: Training'
    | 'Disruptor / AI-Native'
    | 'Enterprise Workflow';
  targetBuyers: string[];
  summary: string;
  scope?: string[];
  aiMilestones?: string;
  aiReadiness: 
    | 'High (Agentic & MCP)' 
    | 'High (ISO 42001 Certified)' 
    | 'Moderate (AI Agents/Personas)' 
    | 'Emerging (AI-Native)' 
    | 'Sub-process Specialist' 
    | 'Conventional / Legacy';
  keyDifferentiator: string;
  website?: string;
}

export const VENDORS: Vendor[] = [
  // ==========================================
  // TIER 1 — PLATFORM INCUMBENTS
  // (multi-app, strategic, validated cloud)
  // ==========================================
  {
    id: 'veeva',
    name: 'Veeva Systems',
    ticker: 'NYSE: VEEV',
    product: 'Vault Quality Cloud / QualityOne',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'CDMOs', 'Med device', 'Biotech/emerging'],
    summary: 'The preeminent life sciences cloud platform. Unifies enterprise QMS, LIMS, Batch Release, Validation Management, and Training within a single 21 CFR Part 11 validated data substrate.',
    scope: ['Enterprise QMS', 'LIMS', 'Batch Release', 'Validation Management', 'Training Management', 'Document Control'],
    aiMilestones: 'AI Agents achieved General Availability in Dec 2025. Vault MCP (Model Context Protocol) Server shipped in Aug 2026, opening Vault quality data to agentic orchestration.',
    aiReadiness: 'High (Agentic & MCP)',
    keyDifferentiator: 'Strategic multi-application footprint and industry standard data layer across top-tier biopharma enterprises.',
    website: 'https://veeva.com/products/vault-quality'
  },
  {
    id: 'mastercontrol',
    name: 'MasterControl',
    product: 'MasterControl Quality Excellence (Qx) + MES + CMMS',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Mid-pharma', 'CDMOs', 'Med device', 'Contract Labs'],
    summary: '$200M ARR platform combining enterprise QMS, Manufacturing Excellence (MES), and asset management following its Qualer acquisition in March 2025. Serves over 1,100 customers with FedRAMP authorized hosting.',
    scope: ['Cloud QMS', 'MES / Electronic Batch Records', 'CMMS / Calibration (Qualer)', 'Supplier Quality', 'Training'],
    aiMilestones: 'ISO/IEC 42001 (AI Management System) certified in July 2025. Shipped 6 production AI features in 14 months across document summary, CAPA routing, and audit review.',
    aiReadiness: 'High (ISO 42001 Certified)',
    keyDifferentiator: 'Seamless bridge from QMS directly into shop-floor MES and asset calibration, backed by ISO 42001 AI certification.',
    website: 'https://mastercontrol.com'
  },
  {
    id: 'honeywell-etq',
    name: 'Honeywell (ETQ)',
    parentCompany: 'Honeywell International',
    product: 'ETQ Reliance',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Supplements/food', 'Industrial & Process Manufacturing'],
    summary: 'Acquired by Honeywell in September 2021 for $960M. Strong in mid/large manufacturing and process industries, featuring tight integration with Honeywell Forge IIoT and plant-floor automation.',
    scope: ['Document Control', 'CAPA & Non-Conformance', 'Audits', 'IIoT Connected Plant Quality', 'EHS'],
    aiMilestones: 'Honeywell Forge AI analytics integration with automated anomaly detection across manufacturing equipment.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Industrial automation pedigree and deep IIoT plant sensor connectivity for high-throughput process manufacturers.',
    website: 'https://etq.com'
  },
  {
    id: 'ptc-arena',
    name: 'PTC (Arena Solutions)',
    parentCompany: 'PTC Inc.',
    product: 'Arena QMS & PLM',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Med device', 'Discrete Manufacturing', 'High-Tech Electronics'],
    summary: 'Acquired by PTC in 2021 for $715M. Unifies product lifecycle management (PLM) and quality management (QMS) into a single cloud source of truth, dominating discrete medical device hardware and change control.',
    scope: ['PLM-Centric QMS', 'Design History File (DHF)', 'Device Master Record (DMR)', 'Engineering Change Orders (ECO)', 'CAPA'],
    aiMilestones: 'PTC generative design and automated BOM/change-impact analysis integrations.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Zero-friction alignment between engineering CAD/BOMs, Design Controls, and FDA QSR/QMSR compliance.',
    website: 'https://arenasolutions.com'
  },
  {
    id: 'siemens-opcenter',
    name: 'Siemens',
    product: 'Siemens Opcenter Quality (MOM / MES Suite)',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Large Discrete & Process Manufacturing'],
    summary: 'Part of Siemens Digital Industries Software manufacturing operations management (MOM) ecosystem. Delivers closed-loop quality from design through execution for mega-scale industrial plants.',
    scope: ['Closed-Loop Quality', 'Statistical Process Control (SPC)', 'FMEA', 'Incoming Inspection', 'Complaint Handling'],
    aiMilestones: 'Siemens Industrial Copilot integrations for engineering and manufacturing quality monitoring.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Industrial scale and integration with Siemens Teamcenter PLM and Opcenter Execution MES.',
    website: 'https://siemens.com/opcenter'
  },
  {
    id: 'sap-qm',
    name: 'SAP',
    product: 'SAP S/4HANA Quality Management (QM)',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Global Enterprise Conglomerates'],
    summary: 'Embedded directly within the SAP S/4HANA ERP core. The default choice when IT consolidation and unified supply-chain/financial ledgers supersede standalone best-of-breed QMS tooling.',
    scope: ['Quality Planning', 'Quality Inspection', 'Quality Certificates', 'Quality Notifications', 'Batch Release Integration'],
    aiMilestones: 'SAP Joule generative AI assistant rolled out across supply chain and quality inspection workflows.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Zero data transfer latency between procurement, inventory, batch records, finance, and quality holds.',
    website: 'https://sap.com/products/scm/quality-management.html'
  },
  {
    id: 'oracle-health',
    name: 'Oracle',
    product: 'Oracle Health Sciences / Argus Safety / Fusion SCM QM',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Large Clinical Enterprises'],
    summary: 'Comprehensive quality and safety management for enterprises standardized on the Oracle enterprise stack. Tightly coupled with Oracle Argus Safety for global pharmacovigilance and clinical data estates.',
    scope: ['Pharmacovigilance & Safety', 'Clinical Trial Quality', 'Supply Chain QM', 'Batch Release'],
    aiMilestones: 'Oracle Cloud Infrastructure (OCI) GenAI agents applied to clinical documentation and adverse event narratives.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Unmatched dominance in global pharmacovigilance (Argus) and database infrastructure in legacy big-pharma.',
    website: 'https://oracle.com/life-sciences'
  },

  // ==========================================
  // TIER 2 — PURE-PLAY QMS
  // (mid-market sweet spot, cloud-native)
  // ==========================================
  {
    id: 'greenlight-guru',
    name: 'Greenlight Guru',
    product: 'Greenlight Guru Quality Suite',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Med device', 'SaMD', 'IVD Innovators'],
    summary: 'Purpose-built for Medical Device, SaMD, and IVD companies with 1,100+ customers. Its FDA QMSR resource hub serves as the commercial wedge. Shipped its AI Connector in Q2 2026 and achieved ISO/IEC 42001 certification in June 2026.',
    scope: ['Design Controls', 'Risk Management (ISO 14971)', 'Document Management', 'CAPA', 'FDA QMSR Alignment'],
    aiMilestones: 'Shipped AI Connector in Q2 2026 supporting ChatGPT, Claude, Copilot, and Gemini. Achieved ISO/IEC 42001 certification in June 2026.',
    aiReadiness: 'High (ISO 42001 Certified)',
    keyDifferentiator: 'MedTech-native workflows pre-aligned with FDA QMSR, ISO 13485, and ISO 14971 out-of-the-box.',
    website: 'https://greenlight.guru'
  },
  {
    id: 'qualio',
    name: 'Qualio',
    product: 'Qualio Agentic Compliance Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Biotech/emerging', 'Med device'],
    summary: 'Positioned as the "Agentic Compliance Platform," Qualio equips fast-growing biotech and MedTech companies with AI agents for automated gap analysis, regulatory monitoring, and SOP authoring.',
    scope: ['Cloud QMS', 'Automated Gap Analysis', 'Document Controls', 'Training', 'Supplier Management', 'CAPA'],
    aiMilestones: 'Native autonomous AI agents for automated regulatory gap analysis, audit readiness scoring, and regulatory watch.',
    aiReadiness: 'High (Agentic & MCP)',
    keyDifferentiator: 'High velocity of onboarding (weeks, not months) paired with native agentic regulatory compliance intelligence.',
    website: 'https://qualio.com'
  },
  {
    id: 'dot-compliance',
    name: 'Dot Compliance',
    product: 'Dot Compliance (Powered by Salesforce)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Biotech/emerging', 'Med device'],
    summary: 'AI-first QMS natively built on the Salesforce platform. Features "Dottie AI" which evolved from Gen 1 (April 2023) to Gen 5.0 with specialized agentic Personas in April 2026. Claims ISO 42001 alignment.',
    scope: ['Document Management', 'Change Control', 'CAPA', 'Complaints', 'Supplier Management', 'Training'],
    aiMilestones: 'Dottie AI Gen 5.0 launched April 2026 with autonomous agentic Personas for automated investigation, review, and authoring.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Pioneering AI-first architecture leveraging Salesforce FedRAMP-grade infrastructure and CRM data.',
    website: 'https://dotcompliance.com'
  },
  {
    id: 'compliancequest',
    name: 'ComplianceQuest',
    product: 'ComplianceQuest Suite (Salesforce Native)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Med device', 'Manufacturing & EHS'],
    summary: '100% Salesforce AppExchange native solution unifying QMS, EHS, and Supplier Quality into a single platform for medical device and process manufacturers.',
    scope: ['QMS', 'EHS (Environmental Health & Safety)', 'Supplier Quality', 'Risk Management', 'Clinical / Complaints'],
    aiMilestones: 'Salesforce Einstein AI integrations for predictive supplier risk and automated incident categorization.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Native blend of QMS and EHS on the Salesforce platform, simplifying vendor management and EH&S compliance.',
    website: 'https://compliancequest.com'
  },
  {
    id: 'ideagen',
    name: 'Ideagen Quality Management',
    product: 'Ideagen Quality Management (fka Q-Pulse)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Healthcare', 'Aviation', 'Life-Sciences-Adjacent'],
    summary: 'Nottingham, UK-based software company with over 18,000 customers globally across highly regulated sectors including aviation, healthcare, and life sciences. Transitioning rapidly into an AI-first compliance platform.',
    scope: ['Audit Management', 'Incident Reporting', 'Document Control', 'Asset Management', 'CAPA'],
    aiMilestones: 'CTO-led "AI-first" initiative declared February 2026, rolling out automated document review and audit checklist generation.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Vast customer scale (18,000+ organizations) and multi-industry regulatory accreditation expertise.',
    website: 'https://ideagen.com'
  },
  {
    id: 'scilife',
    name: 'Scilife',
    product: 'Scilife Smart Quality Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Biotech/emerging', 'European Life Sciences'],
    summary: 'Backed by Five Elms Capital, Scilife brands itself as the "Smart Quality Platform," optimizing life sciences quality workflows through gamified engagement and modern automation across Europe and North America.',
    scope: ['Document Management', 'CAPA', 'Deviations', 'Change Controls', 'Audit & Inspection', 'Training'],
    aiMilestones: 'Smart analytics and workflow recommendations with automated document validation pipelines.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Strong European regulatory roots (EMA, Annex 11) with modern, user-friendly interface and rapid rollout.',
    website: 'https://scilife.net'
  },
  {
    id: 'simplerqms',
    name: 'SimplerQMS',
    product: 'SimplerQMS',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['European MedTech', 'Mid-pharma', 'Biotech/emerging'],
    summary: 'Cloud eQMS purpose-built for pharma, medical device, and biotech companies, uniquely built atop Microsoft 365 and SharePoint technologies for familiar document collaboration.',
    scope: ['Document Control', 'Change Control', 'CAPA', 'Training', 'Audits', 'Supplier Quality'],
    aiMilestones: 'Integration with Microsoft 365 Copilot for GxP document drafting and SOP search.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Deep native integration with Microsoft Word, Excel, and 365 environments while maintaining 21 CFR Part 11 validation.',
    website: 'https://simplerqms.com'
  },
  {
    id: 'zenqms',
    name: 'ZenQMS',
    product: 'ZenQMS',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Biotech/emerging', 'Contract Labs', 'Med device'],
    summary: '100% cloud-native, validated, and audit-ready eQMS catering to clinical-stage biotechs, contract testing facilities, and mid-sized life sciences teams with all-inclusive pricing.',
    scope: ['Document Management', 'Training Management', 'Audits', 'CAPA & Issues', 'Vendor Qualification'],
    aiMilestones: 'Structured quality data APIs enabling LLM ingestion for audit preparation.',
    aiReadiness: 'Conventional / Legacy',
    keyDifferentiator: 'Predictable all-inclusive pricing without seat license gouging, making it favored by emerging biotechs.',
    website: 'https://zenqms.com'
  },
  {
    id: 'assurx',
    name: 'AssurX',
    product: 'AssurX EQMS',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Manufacturing & Utilities', 'Supplements/food'],
    summary: 'A 25+ year veteran in enterprise quality management systems, offering highly configurable workflow automation across life sciences, energy, and high-precision manufacturing.',
    scope: ['CAPA', 'Document Management', 'Complaint Handling', 'Supplier Quality', 'Training', 'Audit Management'],
    aiMilestones: 'AssurX automated workflow rules and predictive risk matrix calculation.',
    aiReadiness: 'Conventional / Legacy',
    keyDifferentiator: 'Quarter-century mature configurable workflow engine capable of handling complex hybrid regulatory mandates.',
    website: 'https://assurx.com'
  },
  {
    id: 'qualityze',
    name: 'Qualityze',
    product: 'Qualityze EQMS (Salesforce Cloud)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Mid-pharma', 'Med device', 'Manufacturing'],
    summary: 'Salesforce-native EQMS suite helping regulated manufacturers streamline compliance, non-conformances, and supplier audits with real-time Salesforce reporting.',
    scope: ['Document Management', 'Non-Conformance', 'CAPA', 'Change Management', 'Training', 'Supplier Quality'],
    aiMilestones: 'Predictive compliance scoring using Salesforce Einstein analytics.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Enterprise Salesforce integration with flexible modular deployment for mid-market budgets.',
    website: 'https://qualityze.com'
  },
  {
    id: 'iqvia-quality',
    name: 'IQVIA',
    product: 'IQVIA Quality Compliance',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'Clinical CROs'],
    summary: 'Grounded in IQVIA’s world-leading Contract Research Organization (CRO) context. Seamlessly connects clinical trial quality, GCP/GLP compliance, post-marketing surveillance, and pharmacovigilance safety.',
    scope: ['Clinical QMS', 'GCP / GLP Compliance', 'Post-Marketing Surveillance', 'Audit Trails', 'CAPA'],
    aiMilestones: 'IQVIA Connected Intelligence AI models applied to adverse events and clinical site risk scoring.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Incomparable clinical trial dataset and CRO domain expertise for clinical-stage biopharma.',
    website: 'https://iqvia.com'
  },

  // ==========================================
  // TIER 3 — VERTICAL / ADJACENT SPECIALISTS
  // (sub-process owners)
  // ==========================================
  {
    id: 'lims-specialists',
    name: 'LIMS Specialists',
    product: 'LabWare, Thermo Fisher SampleManager, Waters, Agilent, STARLIMS, LabVantage',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: LIMS',
    targetBuyers: ['Big-pharma', 'CDMOs', 'Testing Labs'],
    summary: 'Laboratory Information Management Systems governing sample tracking, analytical instrument data, raw material testing, and certificate of analysis (CoA) generation.',
    scope: ['Sample Management', 'QC Testing', 'Instrument Data Capture', 'CoA Release'],
    aiMilestones: 'Automated peak integration and spectroscopic anomaly detection via proprietary algorithms.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Direct instrument bus integration and sub-process data integrity at the laboratory bench.',
    website: 'https://labware.com'
  },
  {
    id: 'rim-specialists',
    name: 'RIM Specialists',
    product: 'Veeva RIM, Lorenz (Anju), Rimsys, Generis CARA',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: RIM',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'Global Regulatory Affairs'],
    summary: 'Regulatory Information Management platforms governing electronic Common Technical Document (eCTD) submissions, health authority interactions, and global product registrations.',
    scope: ['eCTD Submissions', 'Regulatory Dossiers', 'Labeling Governance', 'Health Authority Inquiries'],
    aiMilestones: 'AI-assisted dossier translation and submission document health-check validators.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Standardized global regulatory submission gateways for FDA, EMA, PMDA, and NMPA.',
    website: 'https://veeva.com/products/vault-rim'
  },
  {
    id: 'validation-gamp',
    name: 'Validation Specialists (GAMP 5 / CSA)',
    product: 'Kneat Gx, ValGenesis VLMS, Veeva Validation Management',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: Validation',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'CDMOs'],
    summary: 'Paperless Computer Systems Validation (CSV) and Computer Software Assurance (CSA) platforms managing protocol execution, automated trace matrices, and electronic signatures.',
    scope: ['Paperless Validation', 'GAMP 5 Lifecycle', 'CSA Testing', 'Electronic Protocol Execution'],
    aiMilestones: 'ValGenesis VAL™ Agentic AI launched Apr 2026; Veeva MCP Server GA Aug 2026; Kneat AI governance.',
    aiReadiness: 'High (Agentic & MCP)',
    keyDifferentiator: '100% digital protocol generation and dynamic requirement-to-test traceability.',
    website: 'https://kneat.com'
  },
  {
    id: 'plm-design-controls',
    name: 'PLM / Design Controls Specialists',
    product: 'PTC Arena, Dassault ENOVIA, Siemens Teamcenter, Aras Innovator',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: PLM',
    targetBuyers: ['Med device', 'Hardware Engineering', 'Complex Devices'],
    summary: 'Product Lifecycle Management software maintaining CAD geometries, component bills of materials (BOM), Design History Files (DHF), and engineering change orders.',
    scope: ['CAD/BOM Management', 'Design History Files (DHF)', 'Device Master Records (DMR)', 'Engineering Change Management'],
    aiMilestones: 'Generative CAD design and predictive component obsolescence alerting.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Engineering design source of truth directly feeding QMS change and risk matrices.',
    website: 'https://ptc.com'
  },
  {
    id: 'mes-ebr-specialists',
    name: 'MES / eBR Specialists',
    product: 'Werum PAS-X, Rockwell PharmaSuite, MasterControl Manufacturing Excellence',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: MES',
    targetBuyers: ['Big-pharma', 'CDMOs', 'Biotech Commercial Plants'],
    summary: 'Manufacturing Execution Systems executing electronic batch records (eBR), real-time recipe dispatch, equipment line clearance, and review-by-exception (RBE).',
    scope: ['Electronic Batch Records (eBR)', 'Recipe Execution', 'Review-by-Exception (RBE)', 'Line Clearance'],
    aiMilestones: 'AI review-by-exception analyzing thousands of continuous parameters for automated batch release.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Hard real-time integration with plant-floor PLCs, SCADA, and DCS systems.',
    website: 'https://werum.com'
  },
  {
    id: 'safety-pharmacovigilance',
    name: 'Safety & Pharmacovigilance Specialists',
    product: 'Veeva Vault Safety, Oracle Argus, IQVIA Vigilance',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: Safety',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'Biotech with commercial drugs'],
    summary: 'Dedicated adverse event intake, case processing, signal detection, and regulatory E2B(R3) expedited reporting to global health authorities.',
    scope: ['Adverse Event Intake', 'Medical Review', 'Signal Detection', 'E2B(R3) Regulatory Transmissions'],
    aiMilestones: 'LLMs for automated case narrative extraction from medical literature and spontaneous call logs.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    keyDifferentiator: 'Mission-critical compliance with strict 7-day and 15-day fatal/life-threatening safety reporting clocks.',
    website: 'https://veeva.com/products/vault-safety'
  },
  {
    id: 'ehs-specialists',
    name: 'EHS Specialists',
    product: 'Intelex, Cority, VelocityEHS, Sphera, Enablon',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: EHS',
    targetBuyers: ['Chemical Plants', 'Heavy Manufacturing', 'Global Biopharma Facilities'],
    summary: 'Environmental Health and Safety platforms governing worker safety, OSHA/EPA reporting, chemical inventory, greenhouse gas emissions, and industrial hygiene.',
    scope: ['Incident Management', 'OSHA Reporting', 'ESG / Carbon Accounting', 'Chemical Safety'],
    aiMilestones: 'Computer vision analysis of workplace video feeds for PPE compliance and slip/trip hazard detection.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Environmental sustainability and occupational worker safety specialized regulatory compliance.',
    website: 'https://intelex.com'
  },
  {
    id: 'training-specialists',
    name: 'Training & LMS Specialists',
    product: 'Veeva LearnGxP, MasterControl Training, UL ComplianceWire',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialists',
    category: 'Vertical Specialist: Training',
    targetBuyers: ['Big-pharma', 'CDMOs', 'Contract Testing'],
    summary: 'Regulated Learning Management Systems (LMS) guaranteeing SOP read-and-understood verification, curriculum matrices, and role-based training qualification before cleanroom entry.',
    scope: ['21 CFR Part 11 LMS', 'Curriculum Pathways', 'Read-and-Understood SOP Tracking', 'Inspection Defense'],
    aiMilestones: 'AI-generated interactive comprehension quizzes based on updated SOP text.',
    aiReadiness: 'Sub-process Specialist',
    keyDifferentiator: 'Audit-bulletproof training records defending against FDA 483 observations on operator qualification.',
    website: 'https://compliancewire.com'
  },

  // ==========================================
  // TIER 4 — NEW ENTRANTS / DISRUPTORS
  // (AI-native, venture-backed, copilots)
  // ==========================================
  {
    id: 'seal',
    name: 'Seal',
    product: 'Seal AI-Native QMS (seal.run)',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    targetBuyers: ['CDMOs', 'Biologics', 'Med device'],
    summary: 'Venture-backed by Y Combinator and SNR. Designed from the ground up as an AI-native QMS for biologics, medical devices, and CDMOs based on a 17-capability blueprint. Dual-headquartered in Durham, NC and London.',
    scope: ['AI-Native QMS', '17-Capability Blueprint', 'Automated Deviation Drafting', 'Dynamic Traceability'],
    aiMilestones: 'Built natively with LLM foundation models as first-class architectural entities rather than bolt-on copilot interfaces.',
    aiReadiness: 'Emerging (AI-Native)',
    keyDifferentiator: 'Zero legacy technical debt; engineered natively for autonomous agentic life sciences compliance.',
    website: 'https://seal.run'
  },
  {
    id: 'complere',
    name: 'Complere',
    product: 'Complere Platform (complere.tech)',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    targetBuyers: ['Early-stage Startups'],
    summary: 'Marketing-heavy new entrant promoting AI compliance and quality management. Promising theoretical concepts but remains unproven at scale with limited verified enterprise reference accounts in 2026.',
    scope: ['Compliance Copilot', 'Automated Document Drafting'],
    aiMilestones: 'Generative AI compliance assistant.',
    aiReadiness: 'Emerging (AI-Native)',
    keyDifferentiator: 'Aggressive marketing targeting seed-stage biotech founders.',
    website: 'https://complere.tech'
  },
  {
    id: 'ai-copilots-cluster',
    name: 'AI-Native Copilots (Cluster)',
    product: 'AkelaHub, Extractable, Shoreline AI, OnRamp QA',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    targetBuyers: ['Emerging Biotech', 'Point-Solution Seekers'],
    summary: 'A fast-growing cluster of specialized point-solution AI assistants focusing on discrete quality bottlenecks such as CAPA root cause synthesis, audit packet assembly, and deviation drafting.',
    scope: ['Root Cause Synthesis', 'Audit Packet Assembly', 'Deviation Writing Copilots'],
    aiMilestones: 'Prompt engineering and RAG workflows atop commercial frontier models.',
    aiReadiness: 'Emerging (AI-Native)',
    keyDifferentiator: 'Fast deployment as external overlay tools on top of legacy documentation stores.',
    website: 'https://saram.io'
  },
  {
    id: 'servicenow-grc',
    name: 'ServiceNow',
    ticker: 'NYSE: NOW',
    product: 'ServiceNow GRC / Quality Management Modules',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Enterprise Workflow',
    targetBuyers: ['Enterprise IT Organizations'],
    summary: 'Massive enterprise workflow engine offering governance, risk, and compliance (GRC) modules. Frequently evaluated by corporate IT for consolidation, but not yet a validated life-sciences product ready for FDA 21 CFR Part 11 or QMSR compliance.',
    scope: ['Enterprise GRC', 'IT Incident Management', 'Vendor Risk'],
    aiMilestones: 'ServiceNow Now Assist generative AI workflow automation.',
    aiReadiness: 'Conventional / Legacy',
    keyDifferentiator: 'Dominance in corporate enterprise IT service management (ITSM) and general workflow routing.',
    website: 'https://servicenow.com'
  }
];
