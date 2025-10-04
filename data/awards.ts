export type AwardAssociation =
  | {
      kind: 'experience'
      experienceId: string
      label?: string
      roleHighlight?: string
    }
  | {
      kind: 'project'
      projectId: string
      label?: string
    }
  | {
      kind: 'organization'
      organization: string
      label?: string
    }
  | {
      kind: 'independent'
      context?: string
    }

export type Award = {
  id: string
  title: string
  issuer?: string
  date?: string
  blurb?: string
  link?: string
  imageUrl?: string
  association: AwardAssociation
  tags?: string[]
}

export const AWARDS: Award[] = [
  {
    id: 'samsung-incredibles',
    title: 'Employee of the Quarter – Incredibles Award',
    issuer: 'Samsung Research Institute Noida',
    date: '2025-Q2',
    blurb: 'Recognised for contribution in development of shared memory communication system between user and kernel.',
    association: {
      kind: 'experience',
      experienceId: 'samsung-camera-iq',
      label: 'Samsung Research Institute Noida (Camera IQ)',
      roleHighlight: 'Software Engineer – Camera System & Camera IQ Team',
    },
    tags: ['Innovation', 'Platform'],
  },
  {
    id: 'samsung-spot-2023',
    title: 'Spot Award',
    issuer: 'Samsung Research Institute Noida',
    date: '2023-Q4',
    blurb: 'Awarded for my contribution to the team while collaborating with HQ colleagues in S24 IQ stabilization.',
    association: {
      kind: 'experience',
      experienceId: 'samsung-camera-iq',
      label: 'Samsung Research Institute Noida (Camera IQ)',
    },
    tags: ['Recognition'],
  },
  {
    id: 'samsung-spot-2024',
    title: 'Spot Award',
    issuer: 'Samsung Research Institute Noida',
    date: '2024-Aug–Sep',
    blurb: 'Awarded for my contribution in Innovation model bring-up and development of automation tool.',
    association: {
      kind: 'experience',
      experienceId: 'samsung-camera-iq',
      label: 'Samsung Research Institute Noida (Camera IQ)',
    },
    tags: ['Collaboration'],
  }
]

export const getAwardsForExperience = (experienceId: string) =>
  AWARDS.filter(
    (award) =>
      award.association.kind === 'experience' && award.association.experienceId === experienceId,
  )

export const getAwardsForProject = (projectId: string) =>
  AWARDS.filter(
    (award) => award.association.kind === 'project' && award.association.projectId === projectId,
  )

export const getIndependentAwards = () =>
  AWARDS.filter((award) => award.association.kind === 'independent')
