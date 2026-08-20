export const profile = {
  name: 'Sushant Paikarao',
  role: 'Frontend Engineer — Systems of Record',
  location: 'Pune, India · Open to remote',
  domains: 'Banking · Financial Services · Industrial Telemetry',
  currently: 'Lead Frontend Engineer, Synechron Technology',
  stack: 'React · TypeScript · Next.js · Redux Toolkit',
  headline: [
    'I build the interface layer for operations that ',
    { accent: "can't afford to be wrong." },
  ],
  subhead:
    '8+ years engineering React/TypeScript platforms for banking transactions, portfolio analytics, and industrial equipment monitoring — where the UI is the last checkpoint before a costly mistake reaches someone real.',
  aboutLede: "I'm Sushant, a Lead Frontend Engineer based in Pune, India.",
  aboutParagraphs: [
    "For the past eight years I've built and owned frontend systems for banks — HSBC, U.S. Bank — and for industrial equipment monitoring at HPE. The common thread: environments where a rendering bug, a stale API response, or a mishandled edge case has real financial or operational consequences, not just a bad UX rating.",
    "I lead a team of seven, but I stay hands-on — architecture decisions, code review, and the occasional late-night production incident. I care about the parts of frontend work that don't show up in a demo: audit trails, exception handling, release discipline, and the quiet reliability that lets someone trust a number on a screen.",
  ],
  email: 'sushant.paikarao.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/sushantpaikarao',
  github: 'https://github.com/Sushantplive',
}

export const stats = [
  { num: '8+', label: 'YEARS · ENTERPRISE FRONTEND' },
  { num: '7', label: 'ENGINEERS LED AT SYNECHRON' },
  { num: '30+', label: 'APIS INTEGRATED · LIVE BANKING DATA' },
  { num: '0', label: 'CRITICAL DEFECTS · TCR POST-RELEASE' },
]

export type CaseStudy = {
  tag: string
  title: string
  org: string
  dates: string
  issue: string
  approach: string
  result: string
  stack: string[]
}

export const cases: CaseStudy[] = [
  {
    tag: 'Banking · Device Integration',
    title: 'Teller Cash Recycler (TCR)',
    org: 'U.S. Bank',
    dates: '03/2026 — Present',
    issue:
      'Tellers had no fast, reliable way to reconcile expected vs. actual cash after a shift, and physical device response failures could surface as confusing, unhandled transaction errors.',
    approach:
      "Architected the audit module reconciling software transaction records against the TCR device's own responses, and built dedicated validation and exception-handling layers between the UI and the device API.",
    result:
      'Faster, more reliable discrepancy investigation for branch tellers — and zero critical defects across every post-release cycle so far.',
    stack: ['React', 'TypeScript', 'REST', 'Device APIs'],
  },
  {
    tag: 'Banking · Analytics',
    title: 'OMNIA — GPS Insights Dashboard',
    org: 'HSBC',
    dates: '06/2022 — 03/2026',
    issue:
      'Portfolio managers needed to monitor profitability and revenue trends across regions and industries, without dashboards buckling under large financial datasets.',
    approach:
      'Led a team of 7 building React/TypeScript dashboards integrating 30+ backend REST APIs, then re-architected rendering and MTD/YTD filtering logic for real analytical speed.',
    result:
      "Materially faster period-analysis workflows for managers monitoring accounts across multiple regions, sustained through HSBC's compliance-driven release cadence.",
    stack: ['React', 'TypeScript', 'Highcharts', 'REST'],
  },
  {
    tag: 'Banking · Trade Finance',
    title: 'Global Trade & Receivables Finance',
    org: 'HSBC',
    dates: '07/2021 — 04/2022',
    issue:
      'Corporate clients and compliance teams needed accurate, real-time visibility into bank-guarantee workflows across multiple internal systems.',
    approach:
      'Built the React UI modules for those workflows and partnered directly with compliance teams to validate business-rule accuracy across high-volume, multi-system transaction data.',
    result:
      'Real-time visibility for corporate clients, and a compliance-critical module that stayed stable in production.',
    stack: ['React', 'REST', 'Compliance Reporting'],
  },
  {
    tag: 'Industrial · Telemetry',
    title: 'InfoSight Integration',
    org: 'HPE',
    dates: '04/2018 — 05/2021',
    issue:
      'IT and field teams needed to catch infrastructure hardware problems before they caused downtime, not after.',
    approach:
      'Built React dashboards surfacing real-time telemetry, system health, and predictive failure alerts, and optimized handling of high-frequency data streams from monitored equipment.',
    result:
      'Earlier equipment-issue detection for IT and field teams, backed by an end-to-end testing strategy across environments.',
    stack: ['React', 'Telemetry', 'Concurrent APIs'],
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'AngularJS'],
  },
  {
    category: 'Architecture',
    items: [
      'Microfrontend / Module Federation',
      'Design Systems',
      'Redux Toolkit',
      'Context API',
    ],
  },
  {
    category: 'Integration',
    items: ['REST', 'GraphQL', 'WebSocket', 'Highcharts', 'D3.js'],
  },
  {
    category: 'Quality & Delivery',
    items: ['Jest', 'React Testing Library', 'SonarQube', 'Git · GitLab', 'Jenkins CI/CD'],
  },
]
