type Category = "badges" | "certificates" | "certifications" | "skills";
type Status = "complete" | "in-progress";

export interface AccoladeType {
  id: number;
  category: Category;
  name: String;
  active: boolean;
  status: Status;
}

/* 
  Mock, hard-coded image data revealing structure of upload information
*/

export const { badges, certificates, certifications } = {
  badges: [
    {
      id: 1,
      category: "badges",
      name: "Cloud Quest",
      active: false,
      status: "complete"
    }
  ],
  certificates: [
    {
      id: 2,
      category: "certificates",
      name: "SMU BootCamp",
      active: false,
      status: "in-progress"
    }
  ],
  certifications: [
    {
      id: 3,
      category: "certifications",
      name: "AWS Cloud Practitioner",
      active: false,
      status: "complete"
    }
  ]
};
