import { nanoid } from "nanoid";

type Category = "badges" | "certificates" | "certifications" | "skills";
type Status = "complete" | "in-progress";

export interface AccoladeType {
  id: number;
  category: Category;
  name: String;
  active: boolean;
  status?: Status;
  level?: number;
  description?: String;
}

/* 
  Mock, hard-coded image data revealing structure of upload information
*/
const badgesData: AccoladeType[] = [
  {
    id: 1,
    category: "badges",
    name: "Cloud Quest - DevOps",
    active: false,
    status: "complete"
  },
  {
    id: 2,
    category: "badges",
    name: "Cloud Quest - Security",
    active: false,
    status: "complete"
  },
  {
    id: 3,
    category: "badges",
    name: "Cloud Quest - Solutions Architect",
    active: false,
    status: "complete"
  }
];

const certificatesData: AccoladeType[] = [
  {
    id: 4,
    category: "certificates",
    name: "SMU BootCamp",
    active: false,
    status: "in-progress"
  },
  {
    id: 5,
    category: "certificates",
    name: "Intro to Programming with Python",
    active: false,
    status: "in-progress"
  },
  {
    id: 6,
    category: "certificates",
    name: "CS50 - Intro to Computer Science",
    active: false,
    status: "in-progress"
  }
];

const certificationsData: AccoladeType[] = [
  {
    id: 7,
    category: "certifications",
    name: "AWS Cloud Practitioner",
    active: false,
    status: "complete"
  },
  {
    id: 8,
    category: "certifications",
    name: "AWS DevOps - Associate",
    active: false,
    status: "complete"
  },
  {
    id: 9,
    category: "certifications",
    name: "AWS Solutions Architect - Associate",
    active: false,
    status: "complete"
  }
];

const skillsData: AccoladeType[] = [
  {
    id: 10,
    category: "skills",
    name: "JavaScript",
    active: false,
    level: 7
  },
  {
    id: 11,
    category: "skills",
    name: "Python",
    active: false,
    level: 5
  },
  {
    id: 12,
    category: "skills",
    name: "AWS",
    active: false,
    level: 4
  },
  {
    id: 13,
    category: "skills",
    name: "React",
    active: false,
    level: 6
  }
];
const Accolade = ({
  id,
  category,
  name,
  active,
  status,
  level
}): AccoladeType => ({
  id,
  category,
  name,
  active,
  status,
  level
});

export const { badges, certificates, certifications, skills } = {
  badges: badgesData,
  certificates: certificatesData,
  certifications: certificationsData,
  skills: skillsData
};
