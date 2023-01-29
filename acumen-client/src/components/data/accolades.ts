type Category = "badges" | "certificates" | "certifications" | "skills";
type Status = "complete" | "in-progress";

export interface AccoladeType {
  id: number;
  category: Category;
  name: String;
  active: boolean;
  status?: Status;
  level?: number;
}

/* 
  Mock, hard-coded image data revealing structure of upload information
*/
const badgesData: AccoladeType[] = [
  {
    id: 11,
    category: "badges",
    name: "Cloud Quest - DevOps",
    active: false,
    status: "complete"
  },
  {
    id: 99,
    category: "badges",
    name: "Cloud Quest - Security",
    active: false,
    status: "complete"
  },
  {
    id: 18,
    category: "badges",
    name: "Cloud Quest - Solutions Architect",
    active: false,
    status: "complete"
  }
];

const certificatesData: AccoladeType[] = [
  {
    id: 2,
    category: "certificates",
    name: "SMU BootCamp",
    active: false,
    status: "in-progress"
  },
  {
    id: 22,
    category: "certificates",
    name: "Intro to Programming with Python",
    active: false,
    status: "in-progress"
  },
  {
    id: 222,
    category: "certificates",
    name: "CS50 - Intro to Computer Science",
    active: false,
    status: "in-progress"
  }
];

const certificationsData: AccoladeType[] = [
  {
    id: 3,
    category: "certifications",
    name: "AWS Cloud Practitioner",
    active: false,
    status: "complete"
  },
  {
    id: 36,
    category: "certifications",
    name: "AWS DevOps - Associate",
    active: false,
    status: "complete"
  },
  {
    id: 39,
    category: "certifications",
    name: "AWS Solutions Architect - Associate",
    active: false,
    status: "complete"
  }
];

const skillsData: AccoladeType[] = [
  {
    id: 14,
    category: "skills",
    name: "JavaScript",
    active: false,
    level: 7
  },
  {
    id: 65,
    category: "skills",
    name: "Python",
    active: false,
    level: 5
  },
  {
    id: 669,
    category: "skills",
    name: "AWS",
    active: false,
    level: 4
  },
  {
    id: 966,
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
