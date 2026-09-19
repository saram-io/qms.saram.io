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
    featured: true,
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
  },
  {
    id: 'fda-qmsr-enforcement',
    title: 'FDA Quality Management System Regulation (QMSR) Reaches Full Inspectional Enforcement',
    date: 'August 2026',
    category: 'Regulatory & QMSR',
    source: 'FDA CDRH Notice',
    badge: 'Regulatory Watch',
    featured: false,
    summary: 'The FDA’s landmark QMSR rule harmonizing 21 CFR Part 820 with ISO 13485:2016 has entered full enforcement. Medical device manufacturers and SaMD developers face revised inspection models focusing on risk management files and automated design control trace matrices.',
    linkText: 'Explore MedTech Shortlist',
    url: '/shortlist'
  },
  {
    id: 'mastercontrol-200m-arr',
    title: 'MasterControl Surpasses $200M ARR Following Qualer Asset Calibration Integration',
    date: 'July 2026',
    category: 'Platform & M&A',
    source: 'MasterControl Financial Disclosures',
    badge: '$200M ARR',
    featured: false,
    summary: 'MasterControl crossed $200M in annual recurring revenue, accelerating cloud consolidation across 1,100+ customers by uniting core QMS with electronic batch records (MES) and calibrated equipment maintenance via its Qualer acquisition.',
    linkText: 'View MasterControl Profile',
    url: '/vendors'
  },
  {
    id: 'greenlight-guru-iso42001',
    title: 'Greenlight Guru Achieves ISO/IEC 42001 AI Certification, Launches Open AI Connector',
    date: 'June 2026',
    category: 'Certification',
    source: 'Greenlight Guru Corporate Announcement',
    badge: 'ISO 42001',
    featured: false,
    summary: 'Greenlight Guru became the second major QMS provider to achieve formal ISO/IEC 42001 certification for artificial intelligence governance, accompanying the rollout of an open AI Connector supporting ChatGPT, Claude, Copilot, and Gemini.',
    linkText: 'Compare AI Standards',
    url: '/ai-trends'
  },
  {
    id: 'saram-ai-readiness-benchmark',
    title: 'Saram Research Publishes QMS AI Readiness & Open Data Benchmark Index',
    date: 'July 2026',
    category: 'Market Research',
    source: 'Saram Intelligence Lab',
    badge: 'Benchmark',
    featured: false,
    summary: 'Our independent benchmark audits 16+ life sciences QMS suites across MCP support, modern REST API maturity, walled-garden lock-in policies, and 21 CFR Part 11 electronic audit trail defensibility for generative AI calls.',
    linkText: 'Open Live Benchmark',
    url: '/ai-readiness-tracker'
  }
];
