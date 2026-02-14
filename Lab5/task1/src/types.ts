export interface Person {
  fullName: string;
  emailAddress: string;
  yearsOld: number;
}

export type Proficiency = 'Novice' | 'Competent' | 'Master';

export interface Ability {
  abilityId: number;
  abilityName: string;
  proficiencyLevel: Proficiency;
}