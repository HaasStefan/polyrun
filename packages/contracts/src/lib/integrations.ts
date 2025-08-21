
export const Integration = {
  NX: 'nx',
  TURBOREPO: 'turborepo',
  // Add other integrations here
} as const;

export type Integration = (typeof Integration)[keyof typeof Integration];