import { nanoid } from "nanoid";

type Category = "badges" | "certificates" | "certifications" | "skills";
type Status = "complete" | "in-progress";

export interface AccoladeType {
  id: String;
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
    id: nanoid(),
    category: "badges",
    name: "Cloud Quest - DevOps",
    active: false,
    status: "complete"
  },
  {
    id: nanoid(),
    category: "badges",
    name: "Cloud Quest - Security",
    active: false,
    status: "complete"
  },
  {
    id: nanoid(),
    category: "badges",
    name: "Cloud Quest - Solutions Architect",
    active: false,
    status: "complete"
  }
];

const certificatesData: AccoladeType[] = [
  {
    id: nanoid(),
    category: "certificates",
    name: "SMU BootCamp",
    active: false,
    status: "in-progress"
  },
  {
    id: nanoid(),
    category: "certificates",
    name: "Intro to Programming with Python",
    active: false,
    status: "in-progress"
  },
  {
    id: nanoid(),
    category: "certificates",
    name: "CS50 - Intro to Computer Science",
    active: false,
    status: "in-progress"
  }
];

const certificationsData: AccoladeType[] = [
  {
    id: nanoid(),
    category: "certifications",
    name: "AWS Cloud Practitioner",
    active: false,
    status: "complete"
  },
  {
    id: nanoid(),
    category: "certifications",
    name: "AWS DevOps - Associate",
    active: false,
    status: "complete"
  },
  {
    id: nanoid(),
    category: "certifications",
    name: "AWS Solutions Architect - Associate",
    active: false,
    status: "complete"
  }
];

const skillsData: AccoladeType[] = [
  {
    id: nanoid(),
    category: "skills",
    name: "JavaScript",
    active: false,
    level: 7
  },
  {
    id: nanoid(),
    category: "skills",
    name: "Python",
    active: false,
    level: 5
  },
  {
    id: nanoid(),
    category: "skills",
    name: "AWS",
    active: false,
    level: 4
  },
  {
    id: nanoid(),
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
