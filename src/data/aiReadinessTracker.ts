export type WalledGardenStatus = 
  | 'Open Ecosystem'          // Active MCP Server or open multi-LLM connectors, published modern APIs
  | 'Selective / Conditional'  // REST APIs available, but proprietary AI prioritized or API usage throttled/paywalled
  | 'Proprietary Silo'         // Forced adoption of vendor's proprietary copilot; 3rd-party AI/MCP blocked or discouraged
  | 'Legacy Walled Garden';    // Monolithic database, SOAP/legacy endpoints, zero modern agentic access

export type McpStatus = 
  | 'GA (Shipped)'
  | 'In Beta / Preview'
  | 'Roadmap / Announced'
  | 'Proprietary Alternative Only'
  | 'None / Refusal';

export type ApiMaturityGrade = 
  | 'Grade A (Modern REST/GraphQL + Webhooks)'
  | 'Grade B (Standard REST, Rate Limited)'
  | 'Grade C (Legacy SOAP/Restricted APIs)'
  | 'Grade D (Closed / Expensive Add-on)';

export type ByoAiPolicy = 
  | 'Full BYO-AI Allowed'        // Customer can point arbitrary frontier LLMs/agents directly via MCP/API
  | 'Connector Add-on Required'  // Supported through optional vendor integration pack/bridge
  | 'Vendor AI Only (Locked)'    // Must buy vendor's proprietary copilot; no external model routing
  | 'No AI Capability';          // No AI features or integrations supported

export type Iso42001Status = 
  | 'Certified'
  | 'In Audit / Self-Attested'
  | 'SOC 2 AI Trust Only'
  | 'Uncertified / None';

export interface VendorAiReadiness {
  id: string;
  vendorName: string;
  ticker?: string;
  productName: string;
  tier: 1 | 2 | 3 | 4;
  tierLabel: string;
  category: string;
  
  // Walled Garden & Open Data Stance
  walledGardenStatus: WalledGardenStatus;
  openReadinessScore: number; // 0 - 100
  
  // Protocols & Interfaces
  mcpStatus: McpStatus;
  mcpDetails: string;
  apiGrade: ApiMaturityGrade;
  apiDetails: string;
  webhooksSupported: boolean;
  
  // AI Architecture & Trust
  byoAiPolicy: ByoAiPolicy;
  iso42001Status: Iso42001Status;
  part11AuditTrailDefensibility: 'Native Audit Log of AI Calls' | 'Partial / Workaround Required' | 'Not Supported';
  
  // Commercial & Strategic Analysis
  verdictSummary: string;
  commercialMoatRisk: 'Low (Open Protocols)' | 'Medium (Conditional Access)' | 'High (Severe Lock-in)';
  apiPricingPosture: 'Included in Base License' | 'Tiered / Usage Surcharges' | 'Expensive Add-on / Paywall';
  lastAudited: string;
  website?: string;
}

export const AI_READINESS_DATA: VendorAiReadiness[] = [
  // ==========================================
  // TIER 1 — PLATFORM INCUMBENTS
  // ==========================================
  {
    id: 'veeva',
    vendorName: 'Veeva Systems',
    ticker: 'NYSE: VEEV',
    productName: 'Vault Quality Cloud (QMS, LIMS, Docs, Batch Release)',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Open Ecosystem',
    openReadinessScore: 92,
    mcpStatus: 'GA (Shipped)',
    mcpDetails: 'Shipped official Vault Model Context Protocol (MCP) Server in August 2026 (release 26R2). Enables external AI agents to securely query and orchestrate across Vault QualityDocs, QMS, LIMS, and Validation Management using validated OAuth tokens.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Comprehensive Vault REST API v26.x with event-driven Spark messaging and Vault Java SDK. High throughput with 21 CFR Part 11 compliant audit logging.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Veeva made a historic strategic pivot from a proprietary walled garden to an open agentic hub by shipping the first validated enterprise QMS MCP Server in August 2026. External agent frameworks can now securely query GxP quality records.',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://veeva.com/products/vault-quality'
  },
  {
    id: 'mastercontrol',
    vendorName: 'MasterControl',
    productName: 'Quality Excellence (Qx) + Manufacturing Excellence (MES)',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Proprietary Silo',
    openReadinessScore: 61,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No public MCP server roadmap. MasterControl requires clients to consume its proprietary in-house AI features (CAPA router, document summary, audit review) rather than opening data schemas to external multi-agent protocols.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'REST API available but gated behind enterprise tiers. Focuses primarily on MES-ERP synchronization rather than open semantic data extraction for external LLMs.',
    webhooksSupported: true,
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Certified',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'MasterControl leads in compliance certification (achieved ISO 42001 in July 2025), but aggressively defends a closed walled garden. Customers must use MasterControl’s proprietary AI and face friction if attempting to pipe data into third-party agent swarms.',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    lastAudited: 'August 2026',
    website: 'https://mastercontrol.com'
  },
  {
    id: 'honeywell-etq',
    vendorName: 'Honeywell (ETQ)',
    productName: 'ETQ Reliance',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 54,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No announced MCP support. AI development is funneled through Honeywell Forge industrial IoT analytics and proprietary automated anomaly detection algorithms.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'ETQ Reliance Integration Management module exposes REST endpoints, but integration packages require professional services configuration and lack real-time agentic streaming.',
    webhooksSupported: false,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'ETQ Reliance functions as an industrial operations silo. While reliable for manufacturing quality and plant telemetry, it treats data access as a system-to-system batch pipe rather than an open AI-ready fabric.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'July 2026',
    website: 'https://etq.com'
  },
  {
    id: 'ptc-arena',
    vendorName: 'PTC (Arena Solutions)',
    productName: 'Arena QMS & PLM',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Proprietary Silo',
    openReadinessScore: 48,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No public plans for MCP. AI efforts are centralized within PTC enterprise generative design and internal CAD/BOM change impact algorithms.',
    apiGrade: 'Grade C (Legacy SOAP/Restricted APIs)',
    apiDetails: 'Arena REST API has strict transaction throttles and requires specialized integration licenses. Primarily oriented around CAD/ERP sync (Altium, SolidWorks, NetSuite).',
    webhooksSupported: true,
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'Arena retains heavy proprietary control over Design History Files (DHF) and Device Master Records (DMR). Extremely difficult to connect external frontier models without substantial middleware.',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    lastAudited: 'July 2026',
    website: 'https://arenasolutions.com'
  },
  {
    id: 'sap-qm',
    vendorName: 'SAP',
    productName: 'SAP S/4HANA Quality Management (QM)',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Proprietary Silo',
    openReadinessScore: 50,
    mcpStatus: 'Proprietary Alternative Only',
    mcpDetails: 'SAP rejects MCP in favor of SAP Joule and the SAP Business Technology Platform (BTP) Generative AI Hub. All third-party model access must route through SAP BTP consumption credits.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Exhaustive OData and REST APIs via SAP API Business Hub. Powerful but extraordinarily complex; requires dedicated ABAP/BTP integration architects.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'SAP operates the ultimate enterprise walled garden. While technically programmable via BTP and OData, customers must pay SAP consumption tolls (Joule / AI units) to access enterprise quality data.',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'August 2026',
    website: 'https://sap.com'
  },
  {
    id: 'oracle-health',
    vendorName: 'Oracle',
    productName: 'Oracle Health Sciences / Argus Safety / Fusion SCM QM',
    tier: 1,
    tierLabel: 'Tier 1 — Platform Incumbent',
    category: 'Platform Incumbent',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 52,
    mcpStatus: 'Proprietary Alternative Only',
    mcpDetails: 'Routes AI capabilities exclusively through Oracle Cloud Infrastructure (OCI) GenAI Agents and OCI Generative AI Service, bypassing open MCP protocol adoption.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Oracle Integration Cloud (OIC) REST APIs. Highly capable for database-level ETL, but rigid for ad-hoc agentic context retrieval.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Oracle prioritizes locking customers into OCI compute. GxP data access is technically feasible via OIC, but optimized to drive Oracle Cloud consumption rather than open developer ecosystem interoperability.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'July 2026',
    website: 'https://oracle.com/life-sciences'
  },

  // ==========================================
  // TIER 2 — PURE-PLAY QMS
  // ==========================================
  {
    id: 'greenlight-guru',
    vendorName: 'Greenlight Guru',
    productName: 'Greenlight Guru Quality Suite & MedTech Hub',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Open Ecosystem',
    openReadinessScore: 88,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'Shipped open multi-model AI Connector in Q2 2026 supporting ChatGPT, Claude, Microsoft Copilot, and Google Gemini. Committed to formal Model Context Protocol (MCP) server support by Q4 2026.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Modern public REST API with developer portal documentation, granular scopes, and webhook subscriptions for design controls, CAPA, and risk files.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Certified',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Greenlight Guru has embraced an open AI architecture for MedTech. By pairing ISO/IEC 42001 certification (June 2026) with a BYO-AI connector, it actively counters the traditional walled garden paradigm.',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://greenlight.guru'
  },
  {
    id: 'qualio',
    vendorName: 'Qualio',
    productName: 'Qualio Agentic Compliance Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Open Ecosystem',
    openReadinessScore: 86,
    mcpStatus: 'In Beta / Preview',
    mcpDetails: 'Qualio developer preview currently includes an experimental MCP server endpoint allowing approved compliance agents to perform autonomous regulatory gap evaluations against live tenant SOPs.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Clean REST API with comprehensive webhooks for document life-cycle events, supplier audits, and non-conformances. Well-documented OpenAPI 3.0 specification.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'In Audit / Self-Attested',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Qualio is aggressively positioning itself around agentic compliance. It treats programmatic API and agent access as a competitive weapon against legacy incumbents like MasterControl and ETQ.',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://qualio.com'
  },
  {
    id: 'dot-compliance',
    vendorName: 'Dot Compliance',
    productName: 'Dot Compliance (Salesforce Platform)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 74,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'Exploring Salesforce Agentforce MCP bridge adapters. Current agentic features are tightly bundled inside proprietary Dottie AI Gen 5.0 Personas.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Inherits Salesforce robust REST, SOAP, and GraphQL composite APIs. Full support for Salesforce Platform Events and Change Data Capture (CDC).',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'In Audit / Self-Attested',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Benefiting from the open developer foundation of Salesforce, Dot Compliance offers strong APIs. However, its commercial model heavily pushes in-house Dottie AI Personas over external agent routing.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://dotcompliance.com'
  },
  {
    id: 'compliancequest',
    vendorName: 'ComplianceQuest',
    productName: 'ComplianceQuest Suite (Salesforce Native)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 70,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'Relying exclusively on Salesforce Einstein 1 Studio and Agentforce rather than standalone MCP server development.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Complete Salesforce AppExchange API suite. High-performance event streaming and external services connectors.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Data is accessible via Salesforce standard endpoints, but advanced AI agent orchestration is channeled through Salesforce Einstein licenses rather than an open protocol standard.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'July 2026',
    website: 'https://compliancequest.com'
  },
  {
    id: 'ideagen',
    vendorName: 'Ideagen Quality Management',
    productName: 'Ideagen Quality Management (fka Q-Pulse)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 62,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'CTO AI-first initiative announced exploratory support for open contextual interfaces across its healthcare and life sciences lines.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Modern REST API endpoints deployed across cloud editions; on-premise legacy deployments remain difficult to integrate.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'Transitioning from a legacy desktop/monolith heritage into modern cloud APIs. Willingness to open up is high in marketing statements, but technical rollout is staged across 2026–2027.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'July 2026',
    website: 'https://ideagen.com'
  },
  {
    id: 'scilife',
    vendorName: 'Scilife',
    productName: 'Scilife Smart Quality Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 68,
    mcpStatus: 'In Beta / Preview',
    mcpDetails: 'Beta testing webhook-driven agent hooks for document review automation and CAPA classification with select European mid-pharma clients.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Clean modern REST API with comprehensive documentation for documents, deviations, and training matrices.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Scilife maintains an open posture towards customer integrations. Its European base demands strict data sovereignty, which encourages open on-prem/private LLM connectivity over closed cloud AI lock-in.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'July 2026',
    website: 'https://scilife.net'
  },
  {
    id: 'simplerqms',
    vendorName: 'SimplerQMS',
    productName: 'SimplerQMS (Microsoft 365 / SharePoint Native)',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 65,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'Inherits Microsoft Copilot Studio and Graph API connectors; roadmap plans to expose M365-compatible agent endpoints by early 2027.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Built on Microsoft Azure and M365; programmatic access is mediated through Microsoft Graph API and custom SharePoint REST services.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Because it is embedded within Microsoft 365, customers can utilize Azure OpenAI and Copilot Studio. However, non-Microsoft LLMs and open protocols face structural impedance.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'June 2026',
    website: 'https://simplerqms.com'
  },
  {
    id: 'zenqms',
    vendorName: 'ZenQMS',
    productName: 'ZenQMS',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 58,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No current MCP development. ZenQMS emphasizes simple, unbundled human-friendly pricing rather than complex automated agent ecosystems.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Standard REST API available to export and sync user training, documents, and audit logs.',
    webhooksSupported: false,
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'ZenQMS does not deliberately build anti-competitive walled gardens, but its lack of advanced webhooks, MCP endpoints, or native AI agents leaves integration burden on the customer.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'June 2026',
    website: 'https://zenqms.com'
  },
  {
    id: 'assurx',
    vendorName: 'AssurX',
    productName: 'AssurX Platform',
    tier: 2,
    tierLabel: 'Tier 2 — Pure-Play QMS',
    category: 'Pure-Play QMS',
    walledGardenStatus: 'Legacy Walled Garden',
    openReadinessScore: 36,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No MCP development. Highly customized legacy workflow engine resisting external automated data retrieval.',
    apiGrade: 'Grade C (Legacy SOAP/Restricted APIs)',
    apiDetails: 'Proprietary integration exchange requiring custom database views and legacy web services. Zero webhook or event-driven agent infrastructure.',
    webhooksSupported: false,
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Not Supported',
    verdictSummary: 'Classic legacy walled garden. High switching costs, tightly wound on-prem or private cloud setups, and virtually zero modern programmatic readiness for agentic AI.',
    commercialMoatRisk: 'High (Severe Lock-in)',
    apiPricingPosture: 'Expensive Add-on / Paywall',
    lastAudited: 'June 2026',
    website: 'https://assurx.com'
  },

  // ==========================================
  // TIER 3 — VERTICAL SPECIALISTS
  // ==========================================
  {
    id: 'valgenesis',
    vendorName: 'ValGenesis',
    productName: 'ValGenesis VLMS + VAL™ Agentic AI',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialist (Validation)',
    category: 'Vertical Specialist: Validation',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 72,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'Developing connector bridges between VAL™ agentic engine and external GxP data lakes. Evaluating MCP for CSA test case orchestration.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'REST API covering validation protocols, test execution logs, and deviation linkage.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'In Audit / Self-Attested',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'Strong agentic ambitions specifically within CSV/CSA validation. Willing to interface with external systems, but guards its proprietary protocol generation logic closely.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'July 2026',
    website: 'https://valgenesis.com'
  },
  {
    id: 'kneat',
    vendorName: 'Kneat Solutions',
    productName: 'Kneat Gx (Paperless Validation)',
    tier: 3,
    tierLabel: 'Tier 3 — Vertical Specialist (Validation)',
    category: 'Vertical Specialist: Validation',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 60,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'No public MCP roadmap. Focuses on bulletproof Part 11 audit trails and computerized system validation workflows.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'REST API for user provisioning, document metadata extraction, and ERP/MES asset linking.',
    webhooksSupported: false,
    byoAiPolicy: 'No AI Capability',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'While highly defensible for compliance, Kneat remains a conservative validation repository. Data is accessible for reporting, but not architected for dynamic AI agent query loops.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'June 2026',
    website: 'https://kneat.com'
  },

  // ==========================================
  // TIER 4 — DISRUPTORS & NEW ENTRANTS
  // ==========================================
  {
    id: 'seal',
    vendorName: 'Seal',
    productName: 'Seal AI-Native QMS (seal.run)',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    walledGardenStatus: 'Open Ecosystem',
    openReadinessScore: 94,
    mcpStatus: 'In Beta / Preview',
    mcpDetails: 'Engineered natively with open MCP client and server interfaces. External LLM agents can query the 17-capability compliance graph, stream deviations, and execute automated Part 11 electronic signatures.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'GraphQL + modern TypeScript/REST API with first-class streaming webhooks and event triggers for all compliance objects.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'In Audit / Self-Attested',
    part11AuditTrailDefensibility: 'Native Audit Log of AI Calls',
    verdictSummary: 'The antithesis of the incumbent walled garden. Seal was built from day one on open agentic protocols, allowing biopharma engineering teams to orchestrate quality records with any foundation model.',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://seal.run'
  },
  {
    id: 'complere',
    vendorName: 'Complere',
    productName: 'Complere Platform (complere.tech)',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 64,
    mcpStatus: 'None / Refusal',
    mcpDetails: 'Focuses on standalone web chat UI copilot; lacks open protocol endpoints or certified GxP MCP servers.',
    apiGrade: 'Grade B (Standard REST, Rate Limited)',
    apiDetails: 'Basic REST API endpoints for document upload and prompt execution.',
    webhooksSupported: false,
    byoAiPolicy: 'Vendor AI Only (Locked)',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'Despite marketing itself as an AI-first compliance tool, it operates as a mini-walled garden: customers must use its interface with little support for external agentic orchestration.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'June 2026',
    website: 'https://complere.tech'
  },
  {
    id: 'ai-copilots-cluster',
    vendorName: 'AI Copilot Cluster',
    productName: 'AkelaHub, Extractable, Shoreline AI, OnRamp QA',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Disruptor / AI-Native',
    walledGardenStatus: 'Open Ecosystem',
    openReadinessScore: 82,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'Most copilot startups are actively building MCP connectors to bridge the gap between customers’ legacy QMS silos and frontier LLMs.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Modern cloud-native endpoints, lightweight webhooks, and REST/JSON interfaces.',
    webhooksSupported: true,
    byoAiPolicy: 'Full BYO-AI Allowed',
    iso42001Status: 'Uncertified / None',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'Open and eager for interoperability, but enterprise buyers must verify their 21 CFR Part 11 audit trails and data segregation before connecting to validated quality records.',
    commercialMoatRisk: 'Low (Open Protocols)',
    apiPricingPosture: 'Included in Base License',
    lastAudited: 'August 2026',
    website: 'https://saram.io'
  },
  {
    id: 'servicenow-grc',
    vendorName: 'ServiceNow',
    ticker: 'NYSE: NOW',
    productName: 'ServiceNow GRC / Quality Modules',
    tier: 4,
    tierLabel: 'Tier 4 — New Entrants / Disruptors',
    category: 'Enterprise Workflow',
    walledGardenStatus: 'Selective / Conditional',
    openReadinessScore: 73,
    mcpStatus: 'Roadmap / Announced',
    mcpDetails: 'ServiceNow announced deep agentic interoperability partnerships with Hugging Face and NVIDIA; enterprise MCP gateway integrations slated for late 2026.',
    apiGrade: 'Grade A (Modern REST/GraphQL + Webhooks)',
    apiDetails: 'Extensive REST and Table APIs with Flow Designer, IntegrationHub, and real-time Kafka event streams.',
    webhooksSupported: true,
    byoAiPolicy: 'Connector Add-on Required',
    iso42001Status: 'SOC 2 AI Trust Only',
    part11AuditTrailDefensibility: 'Partial / Workaround Required',
    verdictSummary: 'ServiceNow has best-in-class workflow APIs, but life sciences GxP validation (Part 11, electronic signatures, Annex 11) is not turnkey and requires heavy custom qualification.',
    commercialMoatRisk: 'Medium (Conditional Access)',
    apiPricingPosture: 'Tiered / Usage Surcharges',
    lastAudited: 'July 2026',
    website: 'https://servicenow.com'
  }
];

// Helper functions for summary metrics
export function getTrackerStats() {
  const total = AI_READINESS_DATA.length;
  const openCount = AI_READINESS_DATA.filter(v => v.walledGardenStatus === 'Open Ecosystem').length;
  const mcpShippedCount = AI_READINESS_DATA.filter(v => v.mcpStatus === 'GA (Shipped)' || v.mcpStatus === 'In Beta / Preview').length;
  const proprietarySiloCount = AI_READINESS_DATA.filter(v => v.walledGardenStatus === 'Proprietary Silo' || v.walledGardenStatus === 'Legacy Walled Garden').length;
  const avgScore = Math.round(AI_READINESS_DATA.reduce((acc, curr) => acc + curr.openReadinessScore, 0) / total);

  return {
    total,
    openCount,
    openPct: Math.round((openCount / total) * 100),
    mcpShippedCount,
    mcpShippedPct: Math.round((mcpShippedCount / total) * 100),
    proprietarySiloCount,
    proprietarySiloPct: Math.round((proprietarySiloCount / total) * 100),
    avgScore
  };
}
