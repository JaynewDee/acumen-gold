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
    id: 1,
    category: "badges",
    name: "Cloud Quest",
    active: false,
    status: "complete",
    level: 1
  }
];

const certificatesData: AccoladeType[] = [
  {
    id: 2,
    category: "certificates",
    name: "SMU BootCamp",
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
    name: "AWS Cloud Practitioner",
    active: false,
    status: "complete"
  },
  {
    id: 39,
    category: "certifications",
    name: "AWS Cloud Practitioner",
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
  status
});

export const { badges, certificates, certifications, skills } = {
  badges: badgesData,
  certificates: certificatesData,
  certifications: certificationsData,
  skills: skillsData
};
