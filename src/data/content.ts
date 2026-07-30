import { CompanyDetails, ServiceItem, ProjectItem, WhyChooseUsItem, ProcessStep, TestimonialItem, FAQItem, JobPosition, TeamMember } from '../types';

export const companyDetails: CompanyDetails = {
  name: "TESSCO LTD",
  number: "17370541",
  industry: "Construction of Domestic Buildings",
  address: {
    street: "204a Seaside",
    town: "Eastbourne",
    country: "England",
    postcode: "BN22 7QT"
  },
  phone: "07345 848506",
  email: "construction@tesscouk.com",
  website: "tesscouk.com",
  hours: {
    weekday: "9:00 AM – 5:00 PM",
    weekend: "10:00 AM – 3:00 PM"
  }
};

export const servicesData: ServiceItem[] = [
  {
    id: "domestic-building",
    title: "Domestic Building Construction",
    shortDesc: "Turnkey new build residential properties designed to meet rigorous UK building codes and modern architectural standards.",
    fullDesc: "TESSCO LTD specializes in custom ground-up domestic building construction across Eastbourne and the South East. From initial foundation laying to high-specification finishings, we deliver homes built to last with full structural compliance.",
    iconName: "Home",
    features: [
      "Custom Ground-up Residential Construction",
      "Full UK Building Regulations Compliance",
      "Energy Efficient & Sustainable Architecture",
      "Dedicated Project Director Oversight"
    ],
    estimatedTimeline: "6 – 12 Months",
    keyBenefit: "10-Year Structural Integrity Warranty Included"
  },
  {
    id: "home-renovations",
    title: "Home Renovations",
    shortDesc: "Complete internal and external property transformations crafted to maximize living space, aesthetic value, and energy efficiency.",
    fullDesc: "Revitalize your living spaces with precision craftsmanship. We handle comprehensive interior reconfigurations, kitchen and bathroom overhauls, high-performance insulation, and premium bespoke joinery.",
    iconName: "Hammer",
    features: [
      "Full Interior Layout Reconfiguration",
      "High-Spec Kitchen & Bath Upgrades",
      "Electrical & Plumbing Modernization",
      "Bespoke Carpentry & Finishes"
    ],
    estimatedTimeline: "4 – 10 Weeks",
    keyBenefit: "Minimal Disruption & Fixed Price Guarantee"
  },
  {
    id: "property-extensions",
    title: "Property Extensions",
    shortDesc: "Seamless single and multi-storey extensions that expand your home's footprint while complementing original character.",
    fullDesc: "Add high-value square footage with tailored house extensions. Whether adding an open-plan kitchen diner, master suite, or multi-level side extension, we handle planning liaison, foundations, steelwork, and roofing.",
    iconName: "Maximize2",
    features: [
      "Rear, Side-Return & Wraparound Extensions",
      "Structural Steel Beam Installation",
      "Permitted Development & Planning Compliance",
      "Seamless Architectural Integration"
    ],
    estimatedTimeline: "8 – 16 Weeks",
    keyBenefit: "Increases Property Market Value by up to 25%"
  },
  {
    id: "structural-work",
    title: "Structural Work",
    shortDesc: "Heavy structural modifications, load-bearing wall removals, chimney breast removals, and foundation reinforcement.",
    fullDesc: "Our structural engineering and construction teams carry out critical modifications safely. Using certified RSJ steel beams and rigorous propping techniques, we guarantee structural safety and stability.",
    iconName: "Building2",
    features: [
      "Load-Bearing Wall & Steel Work (RSJs)",
      "Foundation Underpinning & Reinforcement",
      "Structural Calculations & Sign-Off",
      "Chimney Breast & Barrier Removals"
    ],
    estimatedTimeline: "1 – 4 Weeks",
    keyBenefit: "Certified Structural Engineer Inspections"
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    shortDesc: "Full-service project management coordinating all certified sub-trades, procurement, and timeline execution.",
    fullDesc: "End-to-end management for private homeowners and property developers. We orchestrate plumbing, electrical, plastering, tiling, and roofing trades to deliver seamlessly on time and on budget.",
    iconName: "Briefcase",
    features: [
      "Single Point of Contact Project Management",
      "Vetted & Certified Trade Specialist Network",
      "Strict Material & Quality Audits",
      "Detailed Transparent Milestone Reporting"
    ],
    estimatedTimeline: "Project Dependent",
    keyBenefit: "Zero Hassle & Clear Weekly Progress Updates"
  },
  {
    id: "construction-consultation",
    title: "Construction Consultation",
    shortDesc: "Expert technical guidance, feasibility analysis, budgeting, and planning advisory before starting your build project.",
    fullDesc: "Mitigate risks and optimize your project scope before laying a single brick. Our senior consultants review architectural drawings, evaluate site conditions, and formulate accurate cost estimations.",
    iconName: "FileCheck2",
    features: [
      "Pre-construction Feasibility Audits",
      "Detailed Bill of Quantities (BoQ) Estimation",
      "UK Building Regs Advisory",
      "Material Selection & Eco-efficiency Advice"
    ],
    estimatedTimeline: "1 – 2 Weeks",
    keyBenefit: "Saves up to 15% in Unforeseen Site Overhead Costs"
  }
];

export const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: "experienced-team",
    title: "Experienced Team",
    description: "Decades of combined technical expertise in UK domestic construction and structural engineering.",
    iconName: "Users",
    badge: "15+ Years"
  },
  {
    id: "quality-materials",
    title: "Quality Materials",
    description: "We source only premium, UK-certified building materials tested for longevity and energy efficiency.",
    iconName: "ShieldCheck",
    badge: "Certified"
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing",
    description: "Itemized milestone quotes with zero hidden fees. What we quote is exactly what you pay.",
    iconName: "Receipt",
    badge: "Fixed Quote"
  },
  {
    id: "on-time-delivery",
    title: "On-Time Delivery",
    description: "Rigorously scheduled milestones and critical path management to ensure on-schedule completion.",
    iconName: "Clock",
    badge: "99% On-Time"
  },
  {
    id: "safety-standards",
    title: "Safety Standards",
    description: "Strict adherence to HSE UK safety regulations, site welfare standards, and comprehensive insurance.",
    iconName: "HardHat",
    badge: "HSE Compliant"
  },
  {
    id: "customer-satisfaction",
    title: "Customer Satisfaction",
    description: "Customer-first communication, clean site protocols, and dedicated post-completion customer care.",
    iconName: "Sparkles",
    badge: "4.9/5 Rating"
  }
];

export const processStepsData: ProcessStep[] = [
  {
    step: 1,
    title: "Consultation",
    subtitle: "Initial Technical Discovery",
    description: "We discuss your vision, architectural preferences, budget framework, and site requirements in a detailed initial briefing.",
    iconName: "MessageSquare",
    deliverable: "Project Scope & Preliminary Budget Summary"
  },
  {
    step: 2,
    title: "Planning",
    subtitle: "Design & Structural Alignment",
    description: "Detailed structural calculations, material specifications, schedule creation, and local council planning verification.",
    iconName: "DraftingCompass",
    deliverable: "Fixed Price Contract & Milestone Schedule"
  },
  {
    step: 3,
    title: "Construction",
    subtitle: "Precision Execution Phase",
    description: "Our certified tradespeople execute structural work, groundwork, bricklaying, roofwork, and interior fittings with strict quality controls.",
    iconName: "Hammer",
    deliverable: "Weekly Progress Logs & Site Inspections"
  },
  {
    step: 4,
    title: "Quality Inspection",
    subtitle: "Rigor & Certification",
    description: "Thorough 50-point quality audit and Building Control inspection to ensure full UK regulations compliance.",
    iconName: "CheckCircle2",
    deliverable: "Building Control Sign-Off Certificate"
  },
  {
    step: 5,
    title: "Project Delivery",
    subtitle: "Handover & Guarantee",
    description: "Formal walkthrough, handover of keys, operation manuals, and activation of your 10-year structural warranty.",
    iconName: "Award",
    deliverable: "10-Year Warranty & Completion Pack"
  }
];

export const featuredProjectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "Seaside Avenue Modern Residence",
    category: "domestic",
    location: "Eastbourne, BN22",
    status: "Completed",
    completionYear: "2025",
    image: "/images/finished-uk-homes.jpg",
    description: "A luxury 4-bedroom new build domestic property featuring energy-efficient solar integration, structural brickwork, and bay window architecture.",
    stats: {
      duration: "9 Months",
      area: "3,200 sq ft",
      type: "Ground-up Domestic Build"
    }
  },
  {
    id: "project-2",
    title: "Meads District Extension & Scaffolding",
    category: "extensions",
    location: "Eastbourne, BN20",
    status: "Completed",
    completionYear: "2025",
    image: "/images/newbuild-scaffolding.jpg",
    description: "Rear glass-framed kitchen and living space extension with subterranean foundation work and structural steel RSJs.",
    stats: {
      duration: "14 Weeks",
      area: "850 sq ft",
      type: "Single-Storey Rear Extension"
    }
  },
  {
    id: "project-3",
    title: "Old Town Heritage Cottage Restoration",
    category: "renovations",
    location: "Eastbourne, BN21",
    status: "Completed",
    completionYear: "2024",
    image: "/images/period-cottage.jpg",
    description: "Full internal restoration of a Period UK stone cottage, replacing structural roof timbers, upgrading insulation, and custom masonry.",
    stats: {
      duration: "5 Months",
      area: "2,400 sq ft",
      type: "Period Restoration"
    }
  },
  {
    id: "project-4",
    title: "Sovereign Harbour Eco-Townhouses",
    category: "domestic",
    location: "Eastbourne, BN23",
    status: "Completed",
    completionYear: "2025",
    image: "/images/eco-townhouses.jpg",
    description: "Multi-storey coastal eco-townhouses with integrated roof solar panels, high-performance insulation, and brick cladding.",
    stats: {
      duration: "11 Months",
      area: "4,500 sq ft",
      type: "Multi-Unit Build"
    }
  },
  {
    id: "project-5",
    title: "Brighton Ground-Up Timber Framing",
    category: "structural",
    location: "Brighton, BN1",
    status: "Completed",
    completionYear: "2024",
    image: "/images/timber-frame.jpg",
    description: "Precision timber frame house construction engineered for rapid deployment, structural integrity, and maximum energy efficiency.",
    stats: {
      duration: "6 Months",
      area: "2,800 sq ft",
      type: "Timber Structure"
    }
  },
  {
    id: "project-6",
    title: "Sussex Residential Development Site",
    category: "domestic",
    location: "Lewes, BN7",
    status: "Completed",
    completionYear: "2025",
    image: "/images/uk-residential-street.jpg",
    description: "Completed residential avenue of modern UK brick dwellings built to full statutory Building Control regulations.",
    stats: {
      duration: "12 Months",
      area: "6,200 sq ft",
      type: "Residential Development"
    }
  },
  {
    id: "project-7",
    title: "Eastbourne Structural Crane Operations",
    category: "structural",
    location: "Eastbourne, BN22",
    status: "Completed",
    completionYear: "2024",
    image: "/images/tower-cranes.jpg",
    description: "Heavy structural concrete and tower crane assembly for multi-unit residential apartment developments.",
    stats: {
      duration: "14 Months",
      area: "12,000 sq ft",
      type: "Heavy Structural Build"
    }
  },
  {
    id: "project-8",
    title: "Sussex Site Scaffolding & Roof Framing",
    category: "renovations",
    location: "Hastings, TN34",
    status: "Completed",
    completionYear: "2025",
    image: "/images/roof-scaffolding.jpg",
    description: "Full roof timber replacement and brickwork restoration with perimeter safety scaffolding.",
    stats: {
      duration: "8 Weeks",
      area: "1,200 sq ft",
      type: "Roof & Masonry Work"
    }
  }
];

export const statisticsData = [
  { value: 15, label: "Years Experience", suffix: "+", tagline: "Building Better Homes" },
  { value: 250, label: "Projects Completed", suffix: "+", tagline: "Excellence in Construction" },
  { value: 100, label: "Happy Clients", suffix: "%", tagline: "Built on Trust" },
  { value: 40, label: "Skilled Tradespeople", suffix: "+", tagline: "Reliable Construction Solutions" },
  { value: 10, label: "Structural Guarantee", suffix: " Yr", tagline: "Building with Confidence" }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Are you registered with UK Companies House?",
    answer: "Yes, TESSCO LTD is officially registered in England & Wales under Company Number 17370541 with headquarters at 204a Seaside, Eastbourne, BN22 7QT.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you provide fixed-price quotes?",
    answer: "Absolutely. We issue detailed, itemized Bill of Quantities with fixed milestone prices before commencing work, guaranteeing zero hidden surprises.",
    category: "Pricing & Quotes"
  },
  {
    id: "faq-3",
    question: "What structural warranties do you offer?",
    answer: "All structural domestic construction work completed by TESSCO LTD comes with a comprehensive 10-year structural integrity guarantee.",
    category: "Warranty & Safety"
  },
  {
    id: "faq-4",
    question: "How do you handle UK Building Control sign-offs?",
    answer: "We manage all coordination with local authority building control (LABC) or approved inspectors, securing completion certificates upon final handover.",
    category: "Permits & Planning"
  }
];

export const testimonialsData: TestimonialItem[] = [];

export const teamMembersData: TeamMember[] = [
  {
    id: "tm-1",
    name: "Arthur Pendelton",
    role: "Managing Director & Senior Site Manager",
    bio: "20+ years leading high-spec residential builds and structural restoration projects across East Sussex.",
    credentials: "MCIOB Certified, HNC Civil Engineering",
    image: "/images/uk-scaffolding.jpg"
  },
  {
    id: "tm-2",
    name: "Eleanor Vance, CEng",
    role: "Head of Structural Engineering",
    bio: "Specializes in complex RSJ beam calculations, foundation underpinning, and load-bearing alterations.",
    credentials: "Chartered Structural Engineer (MIStructE)",
    image: "/images/roof-scaffolding.jpg"
  },
  {
    id: "tm-3",
    name: "James Callaghan",
    role: "Senior Quantity Surveyor & Procurement Lead",
    bio: "Oversees itemized transparent billing, supplier contracts, and UK Building Regs compliance audits.",
    credentials: "MRICS Chartered Surveyor",
    image: "/images/newbuild-scaffolding.jpg"
  }
];

export const careersData: JobPosition[] = [
  {
    id: "job-1",
    title: "Senior Carpenter & Joiner",
    department: "Construction Operations",
    location: "Eastbourne & Sussex Sites",
    type: "Full-time",
    experience: "5+ Years UK Experience",
    description: "Seeking an experienced carpenter to lead high-spec timber framing, roof construction, and bespoke internal joinery.",
    requirements: [
      "NVQ Level 3 in Carpentry & Joinery",
      "Valid CSCS Card & Own Power Tools",
      "Clean UK Driving License",
      "Proven domestic extension & new build experience"
    ]
  },
  {
    id: "job-2",
    title: "Site Manager / Site Supervisor",
    department: "Project Management",
    location: "Eastbourne, BN22",
    type: "Full-time",
    experience: "7+ Years Lead Experience",
    description: "Responsible for daily site management, subcontractor coordination, HSE compliance, and client communication.",
    requirements: [
      "SMSTS Certification & First Aid",
      "In-depth knowledge of UK Building Regulations",
      "Strong leadership & milestone scheduling skills",
      "Experience managing £200k+ domestic builds"
    ]
  },
  {
    id: "job-3",
    title: "Certified Electrician (18th Edition)",
    department: "Sub-Contract Operations",
    location: "Sussex Region",
    type: "Contract",
    experience: "3+ Years Qualified",
    description: "Looking for a certified electrician to execute first and second fix wiring for extensions and new builds.",
    requirements: [
      "City & Guilds 2391 / 18th Edition Wiring Regulations",
      "NICEIC or NAPIT Registration",
      "High attention to safety and neat conduits"
    ]
  }
];
