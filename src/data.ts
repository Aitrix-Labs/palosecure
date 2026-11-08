import { asset } from './asset'
export type MenuItem = {
  name: string
  blurb: string
  href: string
  mark: 'airs' | 'strata' | 'cortex' | 'xcor' | 'sase' | 'idira' | 'cloud'
  badge?: string
}

export type MenuGroup = {
  id: string
  label: string
  badge?: string
  items: MenuItem[]
}

export const announcements = [
  {
    text: 'Build what’s next with Claude. Secure it with PaloSecure.',
    cta: 'Discover how.',
    href: '/solutions/ai-transformation',
  },
  {
    text: 'PHP attacks stopped before Day 1 with Frontier Virtual Patching.',
    cta: 'Start today.',
    href: '/solutions/secure-ai-coding',
  },
]

export const productMenu: MenuGroup[] = [
  {
    id: 'overview',
    label: 'Overview',
    items: [
      { name: 'PRISMA AIRS', blurb: 'Discover, assess and protect AI apps, agents and employee use of GenAI tools', href: '/products/prisma-airs', mark: 'airs' },
      { name: 'STRATA', blurb: 'AI-powered NetSec with next-gen firewalls, inline defense and unified management', href: '/products/strata', mark: 'strata' },
      { name: 'CORTEX', blurb: 'Stop cyberattackers with the industry’s premier platform for autonomous security operations', href: '/products/cortex', mark: 'cortex' },
      { name: 'CORTEX XCOR', blurb: 'Prevent downtime with the AI-driven platform that delivers autonomous remediation', href: '/products/cortex-xcor', mark: 'xcor', badge: 'NEW' },
      { name: 'PRISMA SASE', blurb: 'Protect with AI, secure AI use and operate with AI using agentic Prisma SASE', href: '/products/prisma-sase', mark: 'sase' },
      { name: 'IDIRA', blurb: 'Identity security platform to secure every identity: human, machine and agentic', href: '/products/idira', mark: 'idira' },
      { name: 'CORTEX CLOUD', blurb: 'Prevent risks from code to cloud with the leading agentic cloud security platform', href: '/products/cortex-cloud', mark: 'cloud' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Security',
    items: [
      { name: 'PRISMA AIRS', blurb: 'Secure AI apps, agents, models, and data at every step', href: '/products/prisma-airs', mark: 'airs' },
      { name: 'AI ACCESS SECURITY', blurb: 'Secure the use of GenAI applications in the enterprise', href: '/products/ai-access', mark: 'airs' },
      { name: 'SECURE AI BY DESIGN', blurb: 'Build AI systems that stay governed, private, and resilient', href: '/products/secure-ai', mark: 'strata' },
    ],
  },
  {
    id: 'network',
    label: 'Network Security',
    items: [
      { name: 'STRATA', blurb: 'AI-powered network security platform for Zero Trust', href: '/products/strata', mark: 'strata' },
      { name: 'NEXT-GENERATION FIREWALLS', blurb: 'Hardware and software firewalls with inline prevention', href: '/products/ngfw', mark: 'strata' },
      { name: 'CLOUD DELIVERED SECURITY', blurb: 'Advanced Threat Prevention, WildFire, DNS, and URL Filtering', href: '/products/cdss', mark: 'strata' },
    ],
  },
  {
    id: 'sase',
    label: 'SASE',
    items: [
      { name: 'PRISMA SASE', blurb: 'Secure access for every user, app, and device', href: '/products/prisma-sase', mark: 'sase' },
      { name: 'PRISMA ACCESS', blurb: 'Cloud-delivered secure access from anywhere', href: '/products/prisma-access', mark: 'sase' },
      { name: 'PRISMA BROWSER', blurb: 'Secure work on any device without friction', href: '/products/prisma-browser', mark: 'sase' },
    ],
  },
  {
    id: 'soc',
    label: 'Security Operations',
    items: [
      { name: 'CORTEX', blurb: 'AI-driven SOC platform for detection and response', href: '/products/cortex', mark: 'cortex' },
      { name: 'CORTEX XSIAM', blurb: 'Reign in security operations with one platform', href: '/products/xsiam', mark: 'cortex' },
      { name: 'CORTEX XDR', blurb: 'Accelerate threat detection and response', href: '/products/xdr', mark: 'cortex' },
      { name: 'CORTEX XSOAR', blurb: 'Deliver security at speed and scale with automation', href: '/products/xsoar', mark: 'cortex' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Security',
    items: [
      { name: 'CORTEX CLOUD', blurb: 'The future of real-time cloud, today', href: '/products/cortex-cloud', mark: 'cloud' },
      { name: 'PRISMA CLOUD', blurb: 'Stop risks at the source across any cloud', href: '/products/prisma-cloud', mark: 'cloud' },
      { name: 'CLOUD RUNTIME', blurb: 'Prevent cloud attacks in real time', href: '/products/cloud-runtime', mark: 'cloud' },
    ],
  },
  {
    id: 'observability',
    label: 'Observability',
    badge: 'NEW',
    items: [
      { name: 'CORTEX XCOR', blurb: 'Ask. Remediate. Optimize. AI-driven observability.', href: '/products/cortex-xcor', mark: 'xcor', badge: 'NEW' },
    ],
  },
  {
    id: 'identity',
    label: 'Identity Security',
    items: [
      { name: 'IDIRA', blurb: 'Secure human, machine, and agentic identities', href: '/products/idira', mark: 'idira' },
      { name: 'PRIVILEGED ACCESS', blurb: 'Eliminate standing privilege across the enterprise', href: '/products/pam', mark: 'idira' },
      { name: 'SECRETS MANAGEMENT', blurb: 'Unified secrets governance at AI scale', href: '/products/secrets', mark: 'idira' },
    ],
  },
]

export const solutionMenu = [
  { title: 'Drive AI Transformation', text: 'Scale enterprise AI adoption across employees, applications and agents with confidence and control', href: '/solutions/ai-transformation', icon: asset('images/nav/solutions/ai.svg') },
  { title: 'Secure Every Identity', text: 'Stop identity-led breaches: Secure human, machine, and agentic identities with zero trust', href: '/solutions/identity', icon: asset('images/nav/solutions/idira.svg') },
  { title: 'Accelerate Cloud Transformation', text: 'Build fast and innovate fearlessly with AI-driven protection from code to cloud', href: '/solutions/cloud', icon: asset('images/nav/solutions/cortex.svg') },
  { title: 'Enable Autonomous SOC', text: 'Fight AI with AI to stop threats at machine speed with the power of analytics and automation', href: '/solutions/soc', icon: asset('images/nav/solutions/cortex.svg') },
  { title: 'Secure AI Coding', text: 'Let AI coding do more, with you in control. Protect data, govern agents and control AI costs', href: '/solutions/secure-ai-coding', icon: asset('images/nav/solutions/default-orange.svg') },
  { title: 'Secure Critical Infrastructure', text: 'Stop machine-speed threats across OT, 5G and IoT with AI-driven cyber defense', href: '/solutions/infrastructure', icon: asset('images/nav/solutions/default-orange.svg') },
  { title: 'Protect the Modern Workplace', text: 'Protect all users, apps, devices and clouds', href: '/solutions/workplace', icon: asset('images/nav/solutions/strata.svg') },
  { title: 'Automate Root-Cause Analysis', text: 'Respond autonomously to incidents and accelerate remediation with agentic AI', href: '/solutions/root-cause', icon: asset('images/nav/solutions/cortex.svg') },
  { title: 'Frontier AI Defense', text: 'Use defender-grade models to stop AI-speed attacks before they start', href: '/solutions/frontier', icon: asset('images/nav/solutions/unit42.svg') },
]

export const serviceMenu = [
  { title: 'Unit 42 Incident Response', text: 'Every second counts when responding to an attack', href: '/services#response' },
  { title: 'Managed Detection & Response', text: 'Let our experts be an extension of your team', href: '/services#mdr' },
  { title: 'Threat Intelligence', text: 'Get world-class threat intelligence before, during, and after an incident', href: '/services#intel' },
  { title: 'Security Consulting', text: 'Build your security strategy with a threat-informed approach', href: '/services#consulting' },
  { title: 'Continuous Frontier AI Defense', text: 'Prepare for emerging risks with defender-grade models', href: '/services#frontier' },
]

export const industryMenu = [
  { title: 'Public sector', text: 'Protect missions, citizens, and critical services', href: '/industries/public-sector' },
  { title: 'Financial services', text: 'Stop fraud and keep trust in every transaction', href: '/industries/financial-services' },
  { title: 'Manufacturing', text: 'Defend plants, OT, and connected supply chains', href: '/industries/manufacturing' },
  { title: 'Healthcare', text: 'Secure care delivery, devices, and patient data', href: '/industries/healthcare' },
  { title: 'Small & medium business', text: 'Enterprise-grade protection without the complexity', href: '/industries/smb' },
]

export const partnerMenu = [
  { title: 'Partner Portal', text: 'Tools, deals, and enablement for the partner community', href: '/partners#portal' },
  { title: 'Become a Partner', text: 'Grow with the platform customers already trust', href: '/partners#join' },
  { title: 'Managed Services Program', text: 'Deliver PaloSecure as a service', href: '/partners#msp' },
  { title: 'Technology Alliances', text: 'Integrate best-of-breed technology into the platform', href: '/partners#alliances' },
]

export const resourceMenu = [
  { title: 'Blog', text: 'Perspectives on AI, resilience, and the threat landscape', href: '/resources' },
  { title: 'Content Library', text: 'Reports, guides, and analyst recognition', href: '/resources' },
  { title: 'Cyberpedia', text: 'Plain-language definitions for security teams', href: '/resources/cyberpedia' },
  { title: 'Event Center', text: 'Ignite on Tour and briefings around the world', href: '/resources/events' },
  { title: 'Tech Docs', text: 'Product documentation and release notes', href: '/resources/tech-docs' },
  { title: 'Unit 42', text: 'Research from our threat intelligence team', href: '/services' },
]

export const accounts = {
  accounts: [
    { label: 'Customer', href: '/accounts' },
    { label: 'Partner', href: '/accounts' },
    { label: 'Employee', href: '/accounts' },
    { label: 'Login to Download', href: '/accounts' },
    { label: 'Become a Member', href: '/accounts' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: "What's New", href: '/resources' },
    { label: 'Get Support', href: '/contact' },
  ],
}

export const languages = [
  'USA (ENGLISH)',
  'AUSTRALIA (ENGLISH)',
  'BRAZIL (PORTUGUÉS)',
  'CANADA (ENGLISH)',
  'CHINA (简体中文)',
  'FRANCE (FRANÇAIS)',
  'GERMANY (DEUTSCH)',
  'INDIA (ENGLISH)',
  'ITALY (ITALIANO)',
  'JAPAN (日本語)',
  'KOREA (한국어)',
  'LATIN AMERICA (ESPAÑOL)',
  'MEXICO (ESPAÑOL)',
  'SINGAPORE (ENGLISH)',
  'SPAIN (ESPAÑOL)',
  'TAIWAN (繁體中文)',
  'UK (ENGLISH)',
]

export const recommended = [
  { title: 'Idira: 8x a PAM Leader. 8x Furthest in Vision.', cta: 'See why', href: '/products/idira', image: asset('images/recommended/idira.jpg') },
  { title: 'Close your PHP exposure gap with Frontier Virtual Patching', cta: 'Protect yourself', href: '/solutions/secure-ai-coding', image: asset('images/recommended/php-patch.png') },
  { title: 'Secure AI coding across your enterprise', cta: 'Explore the solution', href: '/solutions/secure-ai-coding', image: asset('images/recommended/ai-coding.webp') },
  { title: 'Introducing Unit 42 Continuous Frontier AI Defense', cta: 'Register for threat briefing', href: '/services', image: asset('images/recommended/unit42.jpg') },
  { title: 'PaloSecure Recognized as a Market Shaper', cta: 'Read Gartner® report', href: '/resources/market-shaper', image: asset('images/recommended/market-shaper.jpg') },
  { title: 'A 2x Leader in Magic Quadrant™ for Hybrid Mesh Firewall', cta: 'Read report', href: '/resources/hybrid-mesh', image: asset('images/recommended/hybrid-mesh.jpg') },
  { title: 'The future of Frontier AI network security', cta: 'Watch now', href: '/resources/frontier-ai', image: asset('images/recommended/intersect.jpg') },
  { title: 'A 4X Gartner Leader in Security Service Edge', cta: 'Read report', href: '/resources/sse', image: asset('images/recommended/sse.jpg') },
  { title: 'A 4X Gartner® Magic Quadrant™ Leader for SASE Platforms', cta: 'Read report', href: '/resources/sase', image: asset('images/recommended/sase.jpg') },
]

export const platforms = [
  {
    id: 'network',
    theme: 'strata',
    label: 'AI-Powered Network Security',
    kicker: 'AI-powered Network Security',
    body: 'Securing everyone and everything from the latest threats in every location. Built for Zero Trust and powered by AI, the Strata™ Network Security Platform proactively monitors, analyzes and prevents sophisticated threats in real time with less complexity, enabling secure growth and innovation for your organization.',
    stats: [
      { value: '95%', label: 'of the Fortune 100' },
      { value: '75 K', label: 'Customers' },
    ],
    market: { perf: '13x', label: 'network security leader' },
    cta: 'Explore Network Security',
    href: '/products/strata',
    icon: asset('images/platforms/icon-strata.svg'),
    lines: asset('images/platforms/logo-lines-strata.svg'),
    awards: [
      { brand: 'gartner', title: '2026 Gartner® Magic Quadrant™ for Hybrid Mesh Firewall' },
      { brand: 'gartner', title: '2026 Gartner® Magic Quadrant™ for SASE Platforms' },
      { brand: 'forrester', title: 'The Forrester Wave™: Enterprise Firewall Solutions' },
      { brand: 'gartner', title: 'Gartner® Magic Quadrant™ for Single-Vendor SASE' },
      { brand: 'gartner', title: 'Gartner® Magic Quadrant™ for Network Firewalls' },
      { brand: 'gartner', title: 'Gartner® Magic Quadrant™ for SD-WAN' },
      { brand: 'gartner', title: '2026 Gartner® Magic Quadrant™ for Security Service Edge' },
      { brand: 'forrester', title: 'Forrester Wave™: Operational Technology Security Solutions' },
      { brand: 'forrester', title: 'Forrester New Wave™: ZTNA' },
      { brand: 'forrester', title: 'Forrester New Wave™: Zero Trust Platform Providers' },
    ],
  },
  {
    id: 'soc',
    theme: 'cortex',
    label: 'AI-Driven Security Operations',
    kicker: 'AI-Driven Security Operations',
    body: 'Transform the SOC and enable better, faster security with the #1 AI-driven SecOps platform powered by unified data, artificial intelligence and automation.',
    stats: [
      { value: '700+', label: 'partner integrations' },
      { value: '480 B', label: 'Endpoints scanned daily' },
    ],
    market: { perf: '15x', label: 'Leader from Code to Cloud to SOC' },
    cta: 'Explore Security Operations',
    href: '/products/cortex',
    icon: asset('images/platforms/icon-cortex.svg'),
    lines: asset('images/platforms/logo-lines-cortex.svg'),
    awards: [
      { brand: 'gartner', title: '2026 Gartner® Magic Quadrant™ for Endpoint Protection Platforms' },
      { brand: 'forrester', title: 'Forrester Cybersecurity IR Services Wave' },
      { brand: 'gartner', title: 'Frost & Sullivan MDR Radar' },
      { brand: 'forrester', title: 'Forrester Wave™: Extended Detection And Response Platforms, Q2 2024' },
    ],
  },
  {
    id: 'cloud',
    theme: 'cloud',
    label: 'Real-Time Cloud Security',
    kicker: 'Real-Time Cloud Security',
    body: 'See more, remediate faster, and prevent what others miss with independent, multi-cloud protection on the only platform that merges the industry’s leading CNAPP with best-in-class CDR.',
    stats: [
      { value: '90%', label: 'risk reduction with shift left' },
      { value: '25x', label: 'reduction in alerts & remediation workflows' },
    ],
    market: null,
    cta: 'Explore Cloud Security',
    href: '/products/cortex-cloud',
    icon: asset('images/platforms/icon-prisma.svg'),
    lines: asset('images/platforms/logo-lines-cortex.svg'),
    awards: [
      { brand: 'gartner', title: 'A Leader and Outperformer in the GigaOm Radar for CIEM' },
      { brand: 'gartner', title: 'Cloud Security Leader in First-Ever CNAPP Report' },
      { brand: 'forrester', title: 'The Forrester Wave™: Cloud Workload Security, Q1 2024' },
      { brand: 'gartner', title: 'Frost Radar™: Cloud Security Posture Management, 2024' },
      { brand: 'gartner', title: 'FrostRadar™ names PaloSecure a CNAPP Leader' },
      { brand: 'gartner', title: 'Overall leader: 2024 Leadership Compass: SOAR' },
    ],
  },
  {
    id: 'identity',
    theme: 'idira',
    label: 'Next-Generation Identity Security',
    kicker: 'Next-Generation Identity Security',
    body: 'Idira secures every identity for the enterprise — human, machine and agentic — with a unified control plane that discovers risk, applies privilege dynamically, and governs the full lifecycle from first access to final session.',
    stats: [
      { value: '10 K', label: 'Customers' },
      { value: '55%', label: 'OF THE FORTUNE 500' },
    ],
    market: null,
    cta: 'Explore Identity Security',
    href: '/products/idira',
    icon: asset('images/platforms/icon-idira.svg'),
    lines: asset('images/platforms/logo-lines-idira.svg'),
    awards: [
      { brand: 'gartner', title: 'Magic Quadrant® for Privileged Access Management, 2025' },
      { brand: 'forrester', title: 'The Forrester Wave™: Privileged Identity Management, 2025' },
      { brand: 'gartner', title: 'Leadership Compass: Access Management, 2025' },
      { brand: 'gartner', title: 'Leadership Compass: Identity Threat Detection & Response, 2025' },
      { brand: 'gartner', title: '2025 Frost Radar™: Key & Secrets Management' },
      { brand: 'gartner', title: 'Leadership Compass: Privileged Access Management, 2025' },
    ],
  },
  {
    id: 'observe',
    theme: 'cortex',
    label: 'AI-Driven Observability',
    kicker: 'AI-Driven Observability',
    body: 'Cortex XCOR redefines observability with an AI-driven platform that delivers autonomous remediation and nearly 90% data volume reduction—all driven by chat. Replace static dashboards to close the gap between shipping fast and fixing fast.',
    stats: [
      { value: '89%', label: 'Average Data Optimization' },
      { value: '3B', label: 'Data Points Processed Per Second (DPPS)' },
    ],
    market: null,
    cta: 'Explore Cortex XCOR',
    href: '/products/cortex-xcor',
    icon: asset('images/platforms/icon-cortex.svg'),
    lines: asset('images/platforms/logo-lines-cortex.svg'),
    awards: [
      { brand: 'gartner', title: '2026 Gartner® Magic Quadrant™ for Observability Platforms' },
      { brand: 'gartner', title: '2026 Gartner® Critical Capabilities for Observability Platforms' },
    ],
  },
]

export const solutionTabs = [
  {
    id: 'ai',
    label: 'Secure Your AI ecosystem',
    image: asset('images/solutions/ai-ecosystem.jpg'),
    links: [
      'Secure AI apps, agents, models, and data at every step',
      'Secure the use of GenAI applications in the enterprise',
      'Secure the whole enterprise consistently',
    ],
  },
  {
    id: 'network',
    label: 'Secure your network',
    image: asset('images/solutions/woman.jpg'),
    links: [
      'Apply AI inline to prevent evasive threats',
      'Simplify network security operations',
      'Adopt Zero Trust across the network',
      'Reduce complexity with AI-powered SASE',
      'Secure work on any device',
    ],
  },
  {
    id: 'cloud',
    label: 'Secure your cloud',
    image: asset('images/solutions/cloud.jpg'),
    links: [
      'The future of real-time cloud, today',
      'Stop risks at the source',
      'Rapidly prioritize and remediate risks across any cloud',
      'Prevent cloud attacks in real-time',
      'Detect, investigate and respond to threats across enterprise and cloud',
    ],
  },
  {
    id: 'identity',
    label: 'Secure Your Identities',
    image: asset('images/solutions/woman.jpg'),
    links: [
      'Close the access gaps attackers walk through',
      'Secure machine identities at the scale AI demands',
      'Secure agentic identities to accelerate AI innovation',
      'Discover and govern every entitlement',
      'Eliminate standing privilege',
    ],
  },
  {
    id: 'soc',
    label: 'Automate your SOC',
    image: asset('images/solutions/soc.jpg'),
    links: [
      'Reign in security operations with one platform',
      'Accelerate threat detection and response',
      'Deliver security at speed and scale with automation',
      'Secure and shrink your attack surface',
    ],
  },
  {
    id: 'intel',
    label: 'Threat intel and incident response services',
    image: asset('images/solutions/threat.jpg'),
    links: [
      'Let our experts be an extension of your team',
      'Every second counts when responding to an attack',
      'Move from reactive to proactive',
      'Make our experience your experience',
      'Get world-class threat intelligence',
    ],
  },
  {
    id: 'industry',
    label: 'Solutions by industry',
    image: asset('images/solutions/industry.jpg'),
    links: ['Public sector', 'Financial services', 'Manufacturing', 'Healthcare', 'Small & medium business solutions'],
  },
  {
    id: 'observe',
    label: 'Reimagine your observability',
    image: asset('images/solutions/xcor.jpg'),
    links: [
      'Resolve issues autonomously at machine speed',
      'Slash telemetry noise and cut costs by 90%',
      'Query metrics and investigate with an AI operator',
      'Trace end-to-end paths for instant root-cause analysis',
    ],
  },
]

export const engage = [
  {
    id: 'exec',
    label: 'Executives',
    cards: [
      {
        title: 'Ignite on Tour',
        desc: 'Meet decision-makers, experts and practitioners for a day of hands-on learning, strategy building and networking.',
        cta: 'Attend our global roadshow',
        href: '/resources/events',
        image: asset('images/engage/ignite.png'),
      },
      {
        title: 'Executive Briefing Center',
        desc: 'Get a customized plan to see how our platforms, threat intelligence and expert services help you secure the way forward.',
        cta: 'Plan a collaborative discussion',
        href: '/contact',
        image: asset('images/engage/briefing.png'),
      },
      {
        title: 'Under Attack? We’re Here.',
        desc: 'Unit 42® Incident Response explains the breach, works with you to contain and remedy it, and gets you back to business.',
        cta: 'Our experts are standing by',
        href: '/services',
        image: asset('images/engage/attack.png'),
      },
      {
        title: 'AI-powered security platforms',
        desc: 'Expert advice and insights for using AI-powered solutions to streamline your security posture and mitigate risk.',
        cta: 'Get expert insights',
        href: '/products',
        image: asset('images/engage/platforms.png'),
      },
    ],
  },
  {
    id: 'spec',
    label: 'Specialists',
    cards: [
      {
        title: 'Product Demo Center',
        desc: 'Visit the demo center to see solution experts walk you through our comprehensive cybersecurity portfolio in action.',
        cta: 'Take our products for a spin',
        href: '/demos',
        image: asset('images/engage/demo.png'),
      },
      {
        title: 'Future-proof your Security',
        desc: 'Meet the trusted, proven and awarded products that make a positive difference in your security and business outcomes.',
        cta: 'Get to know our products',
        href: '/products',
        image: asset('images/engage/products.png'),
      },
      {
        title: 'Events Around the World',
        desc: 'Browse all scheduled global events by cybersecurity technology interest, industry, region, use case and more.',
        cta: 'Join us in person or online',
        href: '/resources/events',
        image: asset('images/engage/events.png'),
      },
    ],
  },
  {
    id: 'partners',
    label: 'Partners',
    cards: [
      {
        title: 'Partner Portal',
        desc: 'Don’t try to tackle security challenges alone. Tap into the world’s most interoperable cloud and AI security platform.',
        cta: 'Log into our partner interface',
        href: '/partners',
        image: asset('images/engage/partner-portal.png'),
      },
      {
        title: 'Become a Partner',
        desc: 'Be part of a global community of world-class innovators committed to making security breaches a thing of the past.',
        cta: 'Apply to our partner community',
        href: '/partners#join',
        image: asset('images/engage/become-partner.png'),
      },
      {
        title: 'Managed Services Program',
        desc: 'Provide managed security services that reduce cost, increase average revenue per customer and maximize market reach.',
        cta: 'Experience specialized tech',
        href: '/partners',
        image: asset('images/engage/managed.png'),
      },
    ],
  },
  {
    id: 'customers',
    label: 'Customers',
    cards: [
      {
        title: 'Customer Login',
        desc: 'Security, performance and ease of use: Three qualities our customers like most about our cybersecurity products.',
        cta: 'Sign in',
        href: '/accounts',
        image: asset('images/engage/login.png'),
      },
      {
        title: 'Education and Training',
        desc: 'Expand your wisdom and skills with world-class training, certification and accreditation, including digital learning.',
        cta: 'Learn from security experts',
        href: '/resources',
        image: asset('images/engage/training.png'),
      },
      {
        title: 'Customer Success Tools',
        desc: 'Guidance, oversight and 24/7 support from cybersecurity experts to help expedite your setup and initial configuration.',
        cta: 'Make the most of our resources',
        href: '/contact',
        image: asset('images/engage/success.png'),
      },
    ],
  },
]

export const articles = [
  { kind: 'ARTICLE', title: 'Securing Your AI-Powered Network Transformation: A Guide for C-Suite Leaders', slug: 'ai-network-transformation', image: asset('images/articles/ai-network.png') },
  { kind: 'ARTICLE', title: 'A New Era of Cybersecurity with AI', slug: 'new-era', image: asset('images/articles/new-era.png') },
  { kind: 'ARTICLE', title: 'When It Comes to Cyber Resilience and AI, Be Sure to Stretch the Limits of Your Imagination', slug: 'resilience', image: asset('images/articles/resilience.png') },
  { kind: 'MAGAZINE', title: 'Quarterly thought leadership on the issues that matter most to cybersecurity executives', slug: 'magazine', image: asset('images/articles/new-era.png') },
]

export const logos = [
  { name: 'Resolution Life', image: asset('images/logos/resolution-life.svg') },
  { name: 'Better', image: asset('images/logos/better.svg') },
  { name: 'Dish', image: asset('images/logos/dish.svg') },
  { name: 'Salesforce', image: asset('images/logos/salesforce.svg') },
  { name: "Caesar's", image: asset('images/logos/caesars.png') },
  { name: 'Flex', image: asset('images/logos/flex.png') },
  { name: 'AutoNation', image: asset('images/logos/autonation.png') },
  { name: "Aaron's", image: asset('images/logos/aarons.png') },
  { name: 'Pfizer', image: asset('images/logos/pfizer.svg') },
  { name: 'NBCUniversal', image: asset('images/logos/nbc.svg') },
  { name: 'SLB', image: asset('images/logos/slb.svg') },
  { name: 'Grupo Bimbo', image: asset('images/logos/bimbo.svg') },
]

export const liveStats = [
  { value: '1 T', label: 'Cloud Events Processed', image: asset('images/stats/bg-1.jpg'), size: 'large' as const },
  { value: '3.0 K', label: 'Exploit Attempts Detected', image: asset('images/stats/bg-2.jpg'), size: 'small' as const },
  { value: '895.34 K', label: 'Malware Executions Blocked', image: asset('images/stats/bg-3.jpg'), size: 'small' as const },
  { value: '6.45 B', label: 'New Unique Objects Analyzed', image: asset('images/stats/bg-4.jpg'), size: 'small' as const },
  { value: '20.1 M', label: 'New Unique Attack Objects Identified', image: asset('images/stats/bg-5.jpg'), size: 'small' as const },
  { value: '11.3 B', label: 'Attacks Prevented Inline', image: asset('images/stats/bg-6.jpg'), size: 'large' as const },
]

export const productLogos: Record<string, string> = {
  airs: asset('images/nav/prisma-airs.svg'),
  strata: asset('images/nav/strata.svg'),
  cortex: asset('images/nav/cortex.svg'),
  xcor: asset('images/nav/xcor.svg'),
  sase: asset('images/nav/prisma-sase.svg'),
  idira: asset('images/nav/idira.svg'),
  cloud: asset('images/nav/cortex-cloud.svg'),
}

export const footerColumns = [
  {
    title: 'Network Security',
    links: [
      ['Prisma AIRS', '/products/prisma-airs'],
      ['Next-Generation Firewalls', '/products/ngfw'],
      ['Strata Cloud Manager', '/products/strata'],
      ['Cloud Delivered Security Services', '/products/cdss'],
    ],
  },
  {
    title: 'SASE',
    links: [
      ['Prisma SASE', '/products/prisma-sase'],
      ['Prisma Access', '/products/prisma-access'],
      ['Prisma Browser', '/products/prisma-browser'],
      ['Prisma SD-WAN', '/products/prisma-sase'],
    ],
  },
  {
    title: 'Security Operations',
    links: [
      ['Cortex Cloud', '/products/cortex-cloud'],
      ['Cortex XSIAM', '/products/xsiam'],
      ['Cortex XDR', '/products/xdr'],
      ['Cortex XCOR', '/products/cortex-xcor'],
      ['Unit 42', '/services'],
    ],
  },
  {
    title: 'Identity & Company',
    links: [
      ['Idira', '/products/idira'],
      ['About Us', '/company/about'],
      ['Careers', '/company/careers'],
      ['Contact Us', '/contact'],
      ['Resources', '/resources'],
      ['Privacy', '/privacy'],
    ],
  },
]

export const getStartedPortfolio = [
  {
    eyebrow: 'PA-Series & VM-Series',
    title: 'Proactively secure your network with ML-Powered NGFW',
    text: 'Stay ahead of unknown threats and see and protect everything with physical and virtual NGFWs.',
    href: '/products/strata',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'IoT Security',
    title: 'Monitor IoT devices in real time',
    text: 'Quickly and accurately discover all devices, assess risk, detect anomalies, and provide automatic policy recommendations.',
    href: '/products/strata',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Prisma AIRS',
    title: 'Discover, protect and monitor enterprise AI apps and agents',
    text: 'Empower network teams and developers to safeguard GenAI innovation across the enterprise.',
    href: '/products/prisma-airs',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Explore the solution', href: '/solutions/ai-transformation' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Prisma SD-WAN',
    title: 'Enable a secure, cloud-delivered branch',
    text: 'Increase ROI with Next-Gen SD-WAN capabilities offering a cloud-delivered model for security and branch services.',
    href: '/products/prisma-sase',
    actions: [
      { label: 'Watch a video', href: '/resources' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Prisma SASE',
    title: 'Get ultimate protection for your remote workforce',
    text: 'Seamlessly connect and secure any user, device, and app with a comprehensive SASE solution.',
    href: '/products/prisma-sase',
    actions: [
      { label: 'Watch a video', href: '/resources' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Prisma Browser',
    title: 'Any user. Any device. Any application.',
    text: 'Secure managed and unmanaged devices for hybrid workforces with enterprise browser security.',
    href: '/products/prisma-sase',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Cortex Cloud',
    title: 'Complete cloud security for the AI-driven world',
    text: 'Real-time security from code to cloud to SOC on the leading SecOps platform.',
    href: '/products/cortex-cloud',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Cortex XDR',
    title: 'Stop attacks with holistic threat detection',
    text: 'AI-driven visibility across security data sources that transcends the endpoint.',
    href: '/products/cortex',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Cortex XSOAR',
    title: 'The industry’s most open SOAR platform',
    text: 'Unify orchestration, automation, case management, collaboration, and threat intel.',
    href: '/products/cortex',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Unit 42',
    title: 'Comprehensive breach response services',
    text: 'Call in the experts to investigate and remediate a data breach so you can limit damage and get back to business.',
    href: '/services',
    actions: [
      { label: 'Explore services', href: '/services' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Idira',
    title: 'Next-generation identity security',
    text: 'Secure human, machine, and agentic identities with privileged access and zero standing privileges.',
    href: '/products/idira',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
  {
    eyebrow: 'Cortex XCOR',
    title: 'Ask. Remediate. Optimize.',
    text: 'Prevent downtime with the AI-driven observability platform that delivers autonomous remediation.',
    href: '/products/cortex-xcor',
    actions: [
      { label: 'Watch a demo', href: '/demos#portfolio' },
      { label: 'Take a test drive', href: '/demos#trial' },
      { label: 'Contact sales', href: '/contact' },
    ],
  },
]

export const getStartedIntents = [
  { id: 'cloud', title: 'Secure my cloud workloads', text: 'Protect VMs, containers, Kubernetes, and serverless across the development lifecycle.', href: '/products/cortex-cloud' },
  { id: 'network', title: 'Secure my network proactively', text: 'Prevent attacks with intelligent network security and ML-powered NGFWs.', href: '/products/strata' },
  { id: 'remote', title: 'Protect my remote workforce', text: 'Secure users and apps at scale with award-winning SASE deployment options.', href: '/products/prisma-sase' },
  { id: 'branch', title: 'Secure and connect my branch offices', text: 'Modernize branches with SD-WAN and flexible physical, virtual, and cloud-delivered security.', href: '/products/prisma-sase' },
  { id: 'endpoint', title: 'Secure my endpoints', text: 'Block advanced malware, exploits, and fileless attacks with coordinated endpoint protection.', href: '/products/cortex' },
  { id: 'soc', title: 'Automate my security operations', text: 'Improve outcomes with orchestration, automation, and native threat intelligence.', href: '/products/cortex' },
  { id: 'breach', title: 'Stop an ongoing attack', text: 'Get immediate Unit 42 assistance to investigate, contain, and recover from a breach.', href: '/services' },
  { id: 'identity', title: 'Secure my identities', text: 'Govern human, machine, and agentic identities with least privilege and continuous visibility.', href: '/products/idira' },
]

export const getStartedHelp = [
  { title: 'Reseller / Solution Provider', text: 'Find a certified PaloSecure partner that can help you build your security structure.', cta: 'Find a Partner', href: '/partners' },
  { title: 'Support Services', text: 'Award-winning support is there 24/7. Search, chat, or call to get back on track.', cta: 'Access Customer Support', href: '/accounts' },
  { title: 'Optimization Tools', text: 'Get the tools to help you realize the full potential of PaloSecure technology.', cta: 'Explore our tools', href: '/resources' },
  { title: 'Live Community', text: 'Tap into the expertise of our worldwide network of security and IT professionals.', cta: 'Join our community', href: '/resources' },
]

export const contactJobLevels = ['C-Suite', 'EVP/Executive Director', 'VP/SVP', 'Director', 'Manager', 'Individual Contributor']

export const contactTopics = [
  'Network Security',
  'Secure Access Service Edge',
  'Cloud-Native Security',
  'Security Operations',
  'Threat Intel & Consulting',
  'Work from Home',
  'Identity Security',
  'Observability',
]

export const contactCountries = [
  'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Netherlands', 'India', 'Singapore',
  'Australia', 'Japan', 'Brazil', 'United Arab Emirates', 'Saudi Arabia', 'Mexico', 'Other',
]

export const contactSupportPhones = [
  {
    region: 'North America',
    rows: [
      ['United States', '1 866 898 9087', 'Toll free'],
      ['Canada', '1 833 673 6176', 'Toll free'],
    ],
  },
  {
    region: 'Europe',
    rows: [
      ['United Kingdom', '800 023 4703', 'Toll free'],
      ['Germany', '699 4518 9855', 'Local'],
      ['France', '805 543 002', 'Toll free'],
      ['Netherlands', '800 394 9048', 'Toll free'],
    ],
  },
  {
    region: 'Asia Pacific',
    rows: [
      ['Australia', '1 800 002 378', 'Toll free'],
      ['India', '000 800 442 0164', 'Toll free'],
      ['Singapore', '1800 407 5110', 'Toll free'],
      ['Japan', '01 2018 4025', 'Toll free'],
    ],
  },
  {
    region: 'Middle East & Latin America',
    rows: [
      ['United Arab Emirates', '8000 444 0585', 'Toll free'],
      ['Saudi Arabia', '800 844 0412', 'Toll free'],
      ['Brazil', '0800 047 5053', 'Toll free'],
      ['Argentina', '800 266 7502', 'Toll free'],
    ],
  },
]

export const products = productMenu.flatMap((group) => group.items)

export function findProduct(slug: string) {
  return products.find((item) => item.href.endsWith('/' + slug))
}

export const searchable = [
  ...products.map((item) => ({ title: item.name, text: item.blurb, href: item.href })),
  ...solutionMenu.map((item) => ({ title: item.title, text: item.text, href: item.href })),
  ...articles.map((item) => ({ title: item.title, text: item.kind, href: '/resources/' + item.slug })),
  ...industryMenu.map((item) => ({ title: item.title, text: item.text, href: item.href })),
]
