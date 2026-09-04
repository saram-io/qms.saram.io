export interface BuyerSegment {
  id: string;
  name: string;
  subtitle: string;
  recommendedVendors: {
    name: string;
    note: string;
  }[];
  selectionCriteria: string[];
  watchOuts: string[];
  summary: string;
}

export const BUYER_SHORTLISTS: BuyerSegment[] = [
  {
    id: 'big-pharma',
    name: 'Big-Pharma',
    subtitle: 'Global commercial footprint, multi-site validation, deep IT estates',
    recommendedVendors: [
      { name: 'Veeva Systems', note: 'De facto strategic platform across Vault Quality, LIMS, and Regulatory.' },
      { name: 'Honeywell (ETQ)', note: 'Dominates large-scale high-throughput manufacturing with Forge IIoT.' },
      { name: 'SAP (S/4HANA QM)', note: 'Plays when enterprise IT consolidation supersedes standalone best-of-breed.' },
      { name: 'Oracle', note: 'Standard where Argus Safety and Oracle clinical estates dominate.' },
      { name: 'Siemens (Opcenter)', note: 'Preferred for mega-scale discrete & process manufacturing automation.' }
    ],
    selectionCriteria: [
      'Multi-tenant validated cloud with predictable quarterly release cadence',
      'Unified data model connecting QMS, LIMS, Batch Records, and Safety',
      'Global 21 CFR Part 11 and EU Annex 11 compliance defense records',
      'High-throughput API & enterprise integration architecture (ERP, MES, SCADA)'
    ],
    watchOuts: [
      'Multi-million dollar implementation cycles and extensive change management',
      'Vendor lock-in across adjacent clinical/regulatory applications'
    ],
    summary: 'Global top-50 pharmaceutical enterprises prioritize compliance bulletproofing, multi-site data governance, and strategic multi-app vendor alignment over agility.'
  },
  {
    id: 'mid-pharma',
    name: 'Mid-Pharma',
    subtitle: 'Commercial & late-stage clinical companies needing agile rigor',
    recommendedVendors: [
      { name: 'MasterControl', note: '$200M ARR platform with ISO 42001 AI certification and integrated MES.' },
      { name: 'Qualio', note: 'Agentic compliance platform tailored for fast-scaling mid-market pharma.' },
      { name: 'Veeva Systems', note: 'Vault Quality footprint scaled for mid-size biopharma.' },
      { name: 'Dot Compliance', note: 'AI-first QMS on Salesforce with Dottie AI agentic personas.' }
    ],
    selectionCriteria: [
      'Out-of-the-box GxP validation packages (rapid time to value)',
      'Pre-configured best practice workflows for deviations, CAPA, and audits',
      'Clear total cost of ownership without onerous consulting overhead',
      'Native AI capabilities for automated drafting and compliance checks'
    ],
    watchOuts: [
      'Risk of overpaying for enterprise features never deployed',
      'Inflexible customizations that break during cloud version updates'
    ],
    summary: 'Mid-sized pharma companies balance stringent regulatory scrutiny with lean quality teams, requiring rapid deployment and automated agentic assistance.'
  },
  {
    id: 'med-device',
    name: 'Medical Device / MedTech',
    subtitle: 'Hardware, SaMD, IVD, and combination products facing FDA QMSR & MDR',
    recommendedVendors: [
      { name: 'Greenlight Guru', note: 'Purpose-built for 1,100+ MedTech firms with QMSR hub & ISO 42001 certification.' },
      { name: 'PTC (Arena Solutions)', note: 'Dominates CAD/BOM engineering alignment with Design History Files (DHF).' },
      { name: 'Veeva Systems', note: 'Enterprise combination products with dedicated Product Surveillance module.' }
    ],
    selectionCriteria: [
      'Native compliance with FDA QMSR (21 CFR Part 820 alignment with ISO 13485)',
      'Interactive Design History File (DHF) and Device Master Record (DMR) traceability',
      'Risk management matrix fully aligned with ISO 14971',
      'SaMD software release validation and automated change impact scoring'
    ],
    watchOuts: [
      'Traditional pharma-centric QMS often lack proper DHF matrix structures',
      'Disconnect between R&D hardware CAD tools and quality change control'
    ],
    summary: 'MedTech buyers require tight synchronization between product engineering (CAD/BOMs) and regulatory risk files under the new FDA QMSR mandate.'
  },
  {
    id: 'cdmos',
    name: 'CDMOs & Contract Manufacturers',
    subtitle: 'Multi-sponsor firewalls, electronic batch records, fast turnaround',
    recommendedVendors: [
      { name: 'Veeva Systems', note: 'Standard client portal for top-tier biopharma sponsor collaboration.' },
      { name: 'MasterControl', note: 'Unmatched shop-floor MES (Manufacturing Excellence) and calibration.' },
      { name: 'Seal (seal.run)', note: 'AI-native newcomer engineered specifically for modern CDMO velocity.' }
    ],
    selectionCriteria: [
      'Sponsor-specific multi-tenant tenant isolation and permissioning',
      'Direct synchronization between batch deviation management and shop-floor MES',
      'Automated Certificate of Analysis (CoA) generation and release-by-exception',
      'Flexible client audit defense and rapid document retrieval'
    ],
    watchOuts: [
      'Sponsors often mandate access to their own external QMS/LIMS systems',
      'High transaction volume of client-specific batch variants'
    ],
    summary: 'Contract development and manufacturing organizations require rock-solid electronic batch execution, multi-client partitioning, and real-time deviation triage.'
  },
  {
    id: 'biotech-emerging',
    name: 'Biotech / Emerging Life Sciences',
    subtitle: 'Pre-clinical to Phase II startups with lean quality personnel',
    recommendedVendors: [
      { name: 'Qualio', note: 'Agentic compliance, fast onboarding, intuitive interface for scientists.' },
      { name: 'Veeva Quality Basics', note: 'Turnkey pre-configured package allowing future growth into full Vault.' },
      { name: 'Dot Compliance', note: 'Salesforce cloud foundation with pre-trained Dottie AI personas.' }
    ],
    selectionCriteria: [
      'Deployment measured in weeks with turnkey validation starter packs',
      'Low initial administrative friction for non-quality specialist teams',
      'Scalable architecture that survives IND filing and Phase III clinical expansion',
      'Transparent subscription pricing without surprise validation service fees'
    ],
    watchOuts: [
      'Starting on SharePoint/Google Drive creates painful backlog when filing IND',
      'Selecting a complex tier-1 incumbent too early can overwhelm a 15-person startup'
    ],
    summary: 'Emerging biotechs need an instant, audit-ready compliance backbone that imposes zero bureaucratic drag on scientific discovery.'
  },
  {
    id: 'supplements-food',
    name: 'Supplements & Food Manufacturing',
    subtitle: 'High-volume production, FSMA compliance, supplier transparency',
    recommendedVendors: [
      { name: 'Honeywell (ETQ)', note: 'ETQ Reliance is an established leader in high-volume food & beverage.' },
      { name: 'SafetyChain', note: 'Dedicated plant-floor food safety and supplier compliance platform.' },
      { name: 'SafetyCulture', note: 'Mobile-first frontline quality inspections and checklist auditing.' }
    ],
    selectionCriteria: [
      'FDA FSMA (Food Safety Modernization Act) and GFSI/SQF/BRC compliance',
      'Mobile-friendly frontline plant audit and sanitation inspection tools',
      'Supplier ingredient qualification and certificate verification automation',
      'High transaction tolerance with low per-transaction overhead'
    ],
    watchOuts: [
      'Life sciences pharma systems carry unnecessary 21 CFR Part 11 complexity and cost',
      'Frontline factory operators reject desktop-centric document interfaces'
    ],
    summary: 'Food and dietary supplement operations require mobile frontline checklists, supplier ingredient verification, and fast HACCP/FSMA record keeping.'
  }
];
