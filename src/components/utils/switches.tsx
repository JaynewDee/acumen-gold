import Accolades from "../Accolades";
import {
  badges,
  certificates,
  certifications,
  skills
} from "../data/accolades";
import { Landing as Default } from "../Landing";

export const categorySwitch = (state: any) => {
  const states = {
    badges,
    certificates,
    certifications,
    skills,
    "": ""
  };

  return state === "" ? <Default /> : <Accolades data={states[state]} />;
};
