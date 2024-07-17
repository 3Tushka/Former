export interface User {
  name: string;
  email: string;
  password: string;
  address?: {
    street: string;
    city: string;
    zip: string;
  };
  skills: {
    skillName: string;
    experienceInYears: number;
    proficiency: string;
  }[];
}
