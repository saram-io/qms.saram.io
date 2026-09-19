export type PriceTransparencyRating = 
  | 'High (Transparent)' 
  | 'Moderate (Directional)' 
  | 'Low (Opaque)';

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
  priceTransparency: PriceTransparencyRating;
  pricingModel: string;
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
    aiMilestones: 'AI Agents achieved General Availability in Dec 2025. Vault MCP (Model Context Protocol) Server shipped in Aug 2026; Release 26R2.2 deployed to global production in Sept 2026.',
    aiReadiness: 'High (Agentic & MCP)',
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise multi-module annual contract; custom pricing based on organization size and modules with separate validation and implementation services.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Modular annual subscription (Qx, MES, Qualer) with tiered seat packaging; custom enterprise quote required.',
    keyDifferentiator: 'Seamless bridge from QMS directly into shop-floor MES and asset calibration, backed by ISO 42001 AI certification.',
    website: 'https://mastercontrol.com'
  },
  {
    id: 'honeywell-sparta',
    name: 'Honeywell (Sparta Systems)',
    ticker: 'NASDAQ: HON',
    parentCompany: 'Honeywell International',
    product: 'TrackWise & TrackWise Digital',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'CDMOs', 'Global Biologics'],
    summary: 'Acquired by Honeywell in December 2020 for $1.3B. The historically dominant enterprise QMS in commercial biopharma, pairing legacy on-premise TrackWise with cloud-native TrackWise Digital (built on Salesforce) and Honeywell Forge predictive plant analytics.',
    scope: ['Enterprise QMS', 'CAPA & Deviation Management', 'Batch Disposition', 'Complaint Handling', 'Supplier Quality', 'Audit Management'],
    aiMilestones: 'Integration with Honeywell Forge Life Sciences for predictive batch deviation analysis and automated quality event classification.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Custom enterprise contracts; on-premise or cloud licensing with substantial implementation, validation, and maintenance overhead.',
    keyDifferentiator: 'Decades of deep validation defense and ubiquitous presence across global Top-50 pharmaceutical manufacturing sites.',
    website: 'https://spartasystems.com'
  },
  {
    id: 'hexagon-etq',
    name: 'Hexagon (ETQ)',
    ticker: 'STO: HEXA-B',
    parentCompany: 'Hexagon AB',
    product: 'ETQ Reliance',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbents',
    category: 'Platform Incumbent',
    targetBuyers: ['Big-pharma', 'Supplements/food', 'Industrial & Process Manufacturing', 'Med device'],
    summary: 'Acquired by Hexagon AB in April 2022 for $1.2B and integrated into Hexagon Manufacturing Intelligence. An industry heavyweight in high-throughput process manufacturing, life sciences, and food & beverage with over 40 configurable quality applications.',
    scope: ['Document Control', 'CAPA & Non-Conformance', 'Audits', 'Connected Plant Quality', 'EHS', 'Supplier Quality'],
    aiMilestones: 'Launched Reliance AI™ (Form Field Advisor and Complaint & Feedback Advisor) alongside Hexagon digital reality sensor integrations for autonomous shop-floor anomaly detection.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Multi-tiered enterprise licensing based on plant sites, concurrent/named users, and module bundles; custom quotation.',
    keyDifferentiator: 'Broadest pre-built application library (40+ modules) combined with Hexagon industrial metrology and sensor-to-quality connectivity.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Per-user tiered SaaS subscription based on user roles (full, review, read-only); directional quotes available.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise manufacturing operations licensing; custom quoting based on plant sites, connected equipment, and user seats.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Bundled within SAP S/4HANA enterprise ERP licensing (FUE / named users); high systems-integrator consulting fees.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise cloud agreement; complex modular licensing for Argus Safety/Fusion with separate enterprise service contracts.',
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
    summary: 'Purpose-built for Medical Device, SaMD, and IVD companies with 1,100+ customers. Its FDA QMSR resource hub serves as the commercial wedge. Shipped its production Model Context Protocol (MCP) Server and AI Connector in 2026 alongside ISO/IEC 42001 certification.',
    scope: ['Design Controls', 'Risk Management (ISO 14971)', 'Document Management', 'CAPA', 'FDA QMSR Alignment'],
    aiMilestones: 'Shipped production Model Context Protocol (MCP) Server and AI Connector for Claude, ChatGPT, and Copilot; achieved accredited ISO/IEC 42001 certification.',
    aiReadiness: 'High (Agentic & MCP)',
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Tiered annual SaaS packages (Grow, Scale, Expand) scaled to MedTech headcount and required regulatory modules.',
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
    aiMilestones: 'Achieved accredited ISO/IEC 42001 certification; launched Compliance Intelligence platform with autonomous AI agents for automated regulatory gap analysis, audit readiness scoring, and regulatory watch.',
    aiReadiness: 'High (ISO 42001 Certified)',
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Tiered annual subscription based on company stage and user bands; directional starting tiers available on request.',
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
    summary: 'AI-first QMS natively built on the Salesforce platform. Features "Dottie AI" which evolved from Gen 1 (April 2023) to Gen 5.0 with specialized agentic Personas in April 2026. Formally certified under ISO/IEC 42001 for artificial intelligence management systems.',
    scope: ['Document Management', 'Change Control', 'CAPA', 'Complaints', 'Supplier Management', 'Training'],
    aiMilestones: 'Achieved accredited ISO/IEC 42001 certification; launched Dottie AI Gen 5.0 with autonomous agentic Personas for automated investigation, review, and authoring.',
    aiReadiness: 'High (ISO 42001 Certified)',
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Annual subscription per seat built on Salesforce OEM infrastructure; modular add-ons for AI Personas.',
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
    aiMilestones: 'Deployed Agentic AI in Summer \'26 release for autonomous CAPA and nonconformance investigations alongside Salesforce Einstein AI predictive risk modeling.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Per-user, per-module annual subscription on Salesforce platform; custom quotes based on QMS/EHS module scope.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Annual modular subscription scaled to user count and compliance modules; directional quotes by industry.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Tiered user subscription (Starter, Scale, Enterprise) based on active user count with transparent module upgrades.',
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
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Standardized per-user annual subscription plans including validation packages, cloud hosting, and support.',
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
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Predictable all-inclusive annual subscription with unlimited users and no unbundled validation pack fees.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Traditional enterprise licensing or cloud hosting; custom quote based on concurrent users and module configurations.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Modular per-user per-month licensing on Salesforce AppExchange with directional entry pricing.',
    keyDifferentiator: 'Enterprise Salesforce integration with flexible modular deployment for mid-market budgets.',
    website: 'https://qualityze.com'
  },
  {
    id: 'iqvia-quality',
    name: 'IQVIA',
    ticker: 'NYSE: IQV',
    product: 'IQVIA SmartSolve (Quality Compliance)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Big-pharma', 'Mid-pharma', 'Clinical CROs', 'Med device'],
    summary: 'Built upon the foundation of Pilgrim Quality Solutions (acquired 2017) and grounded in IQVIA’s world-leading Contract Research Organization (CRO) ecosystem. SmartSolve seamlessly connects clinical trial quality, GCP/GLP compliance, post-marketing surveillance, and pharmacovigilance.',
    scope: ['SmartSolve eQMS', 'Clinical QMS', 'GCP / GLP Compliance', 'Post-Marketing Surveillance', 'Audit Trails', 'CAPA'],
    aiMilestones: 'IQVIA Connected Intelligence AI models applied to adverse events and clinical site risk scoring.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise life sciences contract; custom pricing tied to CRO clinical scale and multi-module GxP requirements.',
    keyDifferentiator: 'Proven SmartSolve heritage paired with incomparable clinical trial dataset and global CRO domain expertise.',
    website: 'https://iqvia.com'
  },
  {
    id: 'kivo',
    name: 'Kivo',
    product: 'Kivo Unified GxP Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Biotech/emerging', 'Mid-pharma', 'Clinical CROs'],
    summary: 'A unified cloud platform purpose-built for emerging and mid-sized biopharma. Combines document management, QMS (SOPs, CAPA, Deviations, Training), RIM, and eTMF into a single cohesive data model with Headless GxP™ agent-native architecture.',
    scope: ['Unified QMS', 'Document Control', 'Training Management', 'CAPA & Deviations', 'eTMF', 'RIM'],
    aiMilestones: 'Launched Headless GxP™ agent-native architecture; automated cross-referencing and autonomous LLM orchestration across regulatory dossiers and quality SOPs.',
    aiReadiness: 'High (Agentic & MCP)',
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Transparent unified GxP platform pricing; flat packaging covering Quality, Regulatory, and Clinical without cross-module fees.',
    keyDifferentiator: 'Single cohesive data substrate uniting Quality, Regulatory, and Clinical for biotech teams with lean administrative resources.',
    website: 'https://kivo.io'
  },
  {
    id: 'safetychain',
    name: 'SafetyChain',
    product: 'SafetyChain Plant Quality & Compliance',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Supplements/food', 'Process Manufacturing', 'Consumer Packaged Goods'],
    summary: 'Specialized plant-floor quality, food safety, and supplier compliance platform. Built specifically for high-throughput food, beverage, and dietary supplement manufacturers to ensure real-time FSMA, GFSI, and SQF compliance.',
    scope: ['Food Safety (FSMA/GFSI)', 'Frontline Plant Quality', 'Supplier Compliance', 'HACCP Automation', 'SPC & Process Monitoring'],
    aiMilestones: 'Real-time statistical process control (SPC) anomaly alerts and automated certificate of analysis (CoA) ingestion.',
    aiReadiness: 'Conventional / Legacy',
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Annual subscription priced by manufacturing facility count and active production lines; directional quotes on request.',
    keyDifferentiator: 'Direct plant-floor focus tailored for food and supplement standards without unnecessary pharma 21 CFR Part 11 software bloat.',
    website: 'https://safetychain.com'
  },
  {
    id: 'safetyculture',
    name: 'SafetyCulture',
    product: 'SafetyCulture (formerly iAuditor)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    targetBuyers: ['Supplements/food', 'Frontline Operations', 'Multi-Site Facilities'],
    summary: 'Global mobile-first frontline operations platform used by over 75,000 organizations. Empowers plant workers, auditors, and technicians to execute digital checklists, log non-conformances, and conduct mobile inspections.',
    scope: ['Mobile Inspections & Checklists', 'Issue Reporting', 'Corrective Actions', 'Asset Auditing', 'Frontline Training'],
    aiMilestones: 'SafetyCulture AI template generator and automated photo-to-defect analysis.',
    aiReadiness: 'Moderate (AI Agents/Personas)',
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Public self-serve pricing tiers (Free tier, Premium at ~$24/user/mo, Enterprise custom).',
    keyDifferentiator: 'Frictionless mobile-first experience for frontline factory and field workers with instant checklist conversion.',
    website: 'https://safetyculture.com'
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Strict enterprise quote-only; heavy upfront licensing, laboratory instrument integration fees, and annual maintenance.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise custom contract; priced by active dossier count, global target markets, and regulatory user seats.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Subscription per validated site or system; directional pricing available with validation test-pack bundles.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Tiered engineering user seats plus CAD connector licensing; custom enterprise quotation.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Plant-wide enterprise capital expenditure or SaaS license; millions in custom plant integration and validation services.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Volume-based pricing on annual adverse event cases and regulatory gateway transmission fees.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Facility-based or employee-headcount subscription; modular packaging for ESG, OSHA, and chemical safety.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Annual subscription scaled to active learner count and regulated content library access.',
    keyDifferentiator: 'Audit-bulletproof training records defending against FDA 483 observations on operator qualification.',
    website: 'https://compliancewire.com'
  },

  // ==========================================
  // TIER 4 — NEW ENTRANTS / DISRUPTORS
  // (AI-native, venture-backed, copilots)
  // ==========================================
  {
    id: 'ketryx',
    name: 'Ketryx',
    product: 'Ketryx Connected Lifecycle & QMS/ALM',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    targetBuyers: ['Med device', 'SaMD', 'Connected Health', 'AI/ML Medical Systems'],
    summary: 'An AI-native connected lifecycle management and compliance platform backed by $55M in total capital ($39M Series B led by Transformation Capital). Purpose-built for medical devices and software-as-a-medical-device (SaMD), natively orchestrating developer tools (Jira, GitHub, GitLab) to enforce real-time compliance with FDA QMSR, IEC 62304, ISO 13485, and ISO 14971 while automating DHF and cyber-traceability.',
    scope: ['Connected QMS / ALM', 'Automated DHF & Trace Matrix', 'IEC 62304 & ISO 14971', 'SaMD Cyber Compliance', 'Jira/Git Orchestration'],
    aiMilestones: 'Shipped validated AI agents automating DHF synchronization, test generation, and regulatory trace matrices across four of the top five MedTech leaders.',
    aiReadiness: 'High (Agentic & MCP)',
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Predictable developer-seat and repository-based SaaS subscription; transparent tier structure for medical software teams.',
    keyDifferentiator: 'Native developer-tool orchestration that embeds medical device compliance into Git/Jira without forcing engineers into slow legacy desktop forms.',
    website: 'https://ketryx.com'
  },
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Venture-backed modern SaaS subscription; pilot deployments and founder-led custom onboarding tiers.',
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
    priceTransparency: 'Moderate (Directional)',
    pricingModel: 'Early-stage startup subscription pricing; directional pilot packages for pre-seed/seed biotechs.',
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
    priceTransparency: 'High (Transparent)',
    pricingModel: 'Usage-based SaaS or per-seat monthly/annual subscriptions; fast self-serve or directional trial onboarding.',
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
    priceTransparency: 'Low (Opaque)',
    pricingModel: 'Enterprise custom contract; core enterprise IT platform license plus GRC module surcharges.',
    keyDifferentiator: 'Dominance in corporate enterprise IT service management (ITSM) and general workflow routing.',
    website: 'https://servicenow.com'
  }
];
