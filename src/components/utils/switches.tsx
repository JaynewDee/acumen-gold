import Accolades from "../Accolades";
import { badges, certificates, certifications } from "../data/accolades";
import Landing from "../Landing";

export const categorySwitch = (state: any) => {
  const states = {
    badges,
    certificates,
    certifications,
    "": ""
  };

  return state === "" ? <Landing /> : <Accolades data={states[state]} />;
};
