// data/experience.ts
export type Experience = {
  company: string
  logoUrl?: string
  role: string
  employmentType?: 'Full-time' | 'Intern' | 'Contract'
  location?: string
  start: string // ISO "2023-04"
  end?: string  // undefined => "Present"
  mission: string
  impact: { result: string; how?: string; metric?: string }[]
  scope?: { users?: string; team?: string; budget?: string; uptime?: string } 
  tech: string[]
  awards?: { title: string; date?: string; blurb?: string }[]
  certifications?: { title: string; date?: string; blurb?: string }[]
  links?: { label: string; href: string }[]
  caseStudy?: {
    context: string
    constraints?: string[]
    decisions?: string[]
    impact: string[]
    lessons?: string[]
  }
  testimonial?: { quote: string; name: string; title?: string; avatarUrl?: string }
}

export const EXPERIENCES: Experience[] = [
  {
    company: "Samsung Research Institute Noida (SRIN)",
    logoUrl: "/assets/samsungLogo.avif",
    role: "Software Engineer – Camera System & Camera IQ Team",
    employmentType: "Full-time",
    location: "Noida, India · Seoul, South Korea (5-month collaboration)",
    start: "2022-07", // adjust if earlier
    end: undefined,   // "Present" if ongoing
    mission:
      "Part of a newly formed strategic Camera IQ team and Camera System, Contributed to platform stability and core software development, focusing on automation, debugging, and system-level enhancements for mobile platforms.",
    impact: [
      {
        result: "Stabilized Galaxy S24 platform and innovation models",
        how: "Worked 5 months on-site in Korea with HQ counterparts on bring-up and development.",
      },
      {
        result: "Automated crash log analysis",
        how: "Built a Python + BeautifulSoup + Perforce tool to trace crash points, fetch binaries, and accelerate RCA.",
      },
      {
        result: "Implemented generic shared memory communication system",
        how: "Designed modular packet handling with C++ and applied Singleton/Observer patterns for kernel ↔ user space comms.",
      },
      {
        result: "Optimized imaging pipelines",
        how: "Added new nodes and contributed to creation of new pipelines, ensuring robustness in complex camera workflows.",
      },
      {
        result: "Reduced hardware costs",
        how: "Proposed and implemented virtual memory over physical RAM for local builds on Linux, cutting resource demand.",
      },
      {
        result: "Enhanced cross-team productivity",
        how: "Supported colleagues with ITS/system debugging, Linux PC setup, and environment configurations.",
      },
      {
        result: "Improved product features via VoC",
        how: "Analyzed market/customer feedback and contributed to feature optimizations.",
      },
      {
        result: "Ensured quality and compliance",
        how: "Led sanity and functional testing across ITS/CTS to guarantee stable releases.",
      },
    ],
    tech: [
      "C++",
      "Python",
      "BeautifulSoup",
      "Perforce",
      "Linux",
      "Design Patterns"
    ],
    awards: [
      {
        title: "Employee of the Quarter – Incredibles Award",
        blurb: "Awarded for developing and delivering the shared memory communication system.",
        date: "2025-Q2",
      },
      {
        title: "Spot Award",
        blurb: "Recognized for cross-team innovation and impactful contributions.",
        date: "2023-Q4",
      },
      {
        title: "Spot Award",
        blurb: "Recognized for team collaboration and platform stability improvements.",
        date: "2024-Aug–Sep",
      },
    ],
    certifications: [
      {
        title: "SWC – Professional Certification",
        blurb: "Cleared Samsung’s Software Professional Competency Certification.",
        date: "2024",
      },
    ],
  },
]
