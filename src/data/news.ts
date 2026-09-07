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
    id: 'veeva-vault-mcp-ga',
    title: 'Veeva Systems Ships Vault Model Context Protocol (MCP) Server in GA (Release 26R2)',
    date: 'August 2026',
    category: 'AI & Protocols',
    source: 'Veeva Systems Press Release',
    badge: 'GA Release',
    featured: true,
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
    featured: true,
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
  },
  {
    id: 'dot-compliance-dottie-gen5',
    title: 'Dot Compliance Launches Dottie AI Gen 5.0 with Specialized Agentic Compliance Personas',
    date: 'April 2026',
    category: 'Agentic Compliance',
    source: 'Dot Compliance Release Brief',
    badge: 'Product Launch',
    featured: false,
    summary: 'Dot Compliance deployed Dottie AI Gen 5.0 on Salesforce, introducing autonomous agentic personas that trigger on shop-floor events to proactively investigate deviations, generate CAPA action plans, and predict inspection readiness.',
    linkText: 'Check Vendor Score',
    url: '/ai-readiness-tracker'
  },
  {
    id: 'seal-ai-native-qms',
    title: 'YC & SNR-Backed Seal Unveils 17-Capability AI-Native QMS Blueprint for CDMOs',
    date: 'March 2026',
    category: 'AI Disruptors',
    source: 'Seal / Y Combinator Showcase',
    badge: 'New Entrant',
    featured: false,
    summary: 'Challenger startup Seal (seal.run) launched its 17-capability autonomous quality operating system, engineered to replace manual document handling with real-time continuous data validation for high-velocity biologics manufacturers.',
    linkText: 'View Disruptor Tier 4',
    url: '/tiers'
  },
  {
    id: 'ideagen-ai-overhaul',
    title: 'Ideagen Accelerates AI Modernization Across 18,000+ Regulated Customer Sites',
    date: 'February 2026',
    category: 'Platform & M&A',
    source: 'Ideagen Interim Report',
    badge: 'Corporate Shift',
    featured: false,
    summary: 'Ideagen announced an architectural transformation of its Quality Management suite (fka Q-Pulse), deploying AI-driven regulatory compliance monitoring and modernized REST endpoints for aviation and healthcare clients.',
    linkText: 'View Directory Details',
    url: '/vendors'
  }
];
