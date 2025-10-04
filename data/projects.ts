export type ProjectStatus = 'prototype' | 'launched' | 'maintained'

export type MediaKind = 'image' | 'video' | 'embed' | 'iframe'

export type ProjectMedia = {
  kind: MediaKind
  src: string
  alt?: string
  poster?: string
  aspectRatio?: string
}

export type ProjectExperience =
  | {
      kind: 'live'
      href: string
      note?: string
    }
  | {
      kind: 'embed'
      src: string
      title: string
      aspectRatio?: string
    }
  | {
      kind: 'gallery'
      media: ProjectMedia[]
    }

export type ProjectAssociation =
  | {
      kind: 'experience'
      experienceId: string
      label?: string
      responsibility?: string
    }
  | {
      kind: 'independent'
      context?: string
    }
  | {
      kind: 'organization'
      organization: string
      label?: string
    }

export type ProjectMetric = {
  label: string
  value: string
  description?: string
}

export type ProjectLink = {
  label: string
  href: string
  kind?: 'repo' | 'design' | 'doc' | 'press' | 'demo'
}

export type Project = {
  id: string
  name: string
  tagline: string
  summary?: string
  problem?: string
  solution?: string
  outcomes?: string[]
  lessons?: string[]
  metrics?: ProjectMetric[]
  role: string
  start?: string
  end?: string
  status: ProjectStatus
  tech: string[]
  principles?: string[]
  patterns?: string[]
  stackNotes?: string[]
  keywords?: string[]
  association: ProjectAssociation
  experience: ProjectExperience
  media?: ProjectMedia[]
  links?: ProjectLink[]
}

export const PROJECTS: Project[] = [
  {
    id: 'shared-memory-transport',
    name: 'Shared Memory Communication System',
    tagline: 'Low-latency bridge enabling camera subsystems to talk without blocking.',
    summary:
      'Unified shared memory channel that allowed kernel and user-space consumers to exchange telemetry and frame data at scale.',
    problem:
      'Bring-up teams lacked a deterministic path to inspect live buffers which slowed critical RCA during innovation model testing.',
    solution:
      'Designed modular packet contracts with lifecycle hooks, enabling pluggable publishers/subscribers governed by shared semantics.',
    outcomes: [
      'Reduced debugging and log-correlation time by ~40%',
      'Became the reference implementation for Camera IQ bring-up scripts',
    ],
    lessons: [
      'Codified shared memory handshakes as diagrams first to align cross-geo teams',
      'Feature flags and telemetry budgets are crucial when rolling out to production firmware builds',
    ],
    metrics: [
      { label: 'Crash RCA Time', value: '-40%', description: 'Measured across 3 innovation models' },
    ],
    role: 'System design, integration, rollout enablement',
    start: '2024-01',
    end: '2024-06',
    status: 'launched',
    tech: ['C++', 'Linux IPC', 'Shared Memory', 'Design Patterns'],
    principles: ['Fail-fast instrumentation', 'Observability-first design'],
    patterns: ['Publisher/Subscriber', 'Command'],
    stackNotes: ['Upstreamed into Samsung Camera IQ toolkit'],
    keywords: ['Platform', 'Firmware', 'Debugging'],
    association: {
      kind: 'experience',
      experienceId: 'samsung-camera-iq',
      label: 'Samsung Research Institute Noida',
      responsibility: 'Led architecture, prototyping, and adoption enablement',
    },
    experience: {
      kind: 'gallery',
      media: [
        {
          kind: 'image',
          src: '/projects/shared-memory/architecture.png',
          alt: 'Architecture diagram of the shared memory communication system',
        },
      ],
    },
    links: [
      {
        label: 'Internal Design Spec',
        href: '#',
        kind: 'doc',
      },
    ],
  },
  {
    id: 'buildmyfolio',
    name: 'BuildMyFolio',
    tagline: 'A portfolio that treats storytelling and interaction as first-class citizens.',
    summary:
      'Personal site highlighting impact timeline, rich themes, and data-driven content so recruiters experience the journey, not just bullet points.',
    problem:
      'Traditional resumes undersell the nuance of cross-disciplinary work and leave no room for interaction.',
    solution:
      'Built a modular Next.js app with structured content sources, theme-aware components, and cinematic but performant motion.',
    outcomes: [
      'Reduced update friction via typed data sources for experiences, awards, and projects',
      'Achieved sub-second TTFB on Vercel even with animated routes',
    ],
    lessons: [
      'Design systems benefit from explicit color tokens for light/dark parity',
      'Motion should reinforce comprehension, not distract—entrance timing matters',
    ],
    role: 'Product design, engineering, UX writing',
    start: '2025-01',
    status: 'maintained',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    principles: ['Progressive disclosure', 'Accessibility-first'],
    patterns: ['Context Provider', 'Data-driven UI'],
    stackNotes: ['Deployed on Vercel with image optimization and edge caching'],
    keywords: ['Portfolio', 'Storytelling', 'Frontend'],
    association: {
      kind: 'independent',
      context: 'Personal Project',
    },
    experience: {
      kind: 'embed',
      src: 'https://buildmyfolio.example.com',
      title: 'BuildMyFolio Live Preview',
      aspectRatio: '16 / 9',
    },
    media: [
      {
        kind: 'image',
        src: '/projects/buildmyfolio/hero.png',
        alt: 'Hero section of BuildMyFolio showcasing animated experience timeline',
      },
    ],
    links: [
      {
        label: 'Live Site',
        href: 'https://buildmyfolio.example.com',
        kind: 'demo',
      },
      {
        label: 'Source Repo',
        href: 'https://github.com/bharath/buildmyfolio',
        kind: 'repo',
      },
    ],
  },
]

export const getProjectsForExperience = (experienceId: string) =>
  PROJECTS.filter(
    (project) =>
      project.association.kind === 'experience' && project.association.experienceId === experienceId,
  )

export const getIndependentProjects = () =>
  PROJECTS.filter((project) => project.association.kind === 'independent')

export const findProjectById = (projectId: string) =>
  PROJECTS.find((project) => project.id === projectId)
