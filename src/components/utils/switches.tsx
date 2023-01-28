import Accolades from "../Accolades";
import { badges, certificates, certifications } from "../data/accolades";

export const categorySwitch = (state: any) => {
  const states = {
    badges,
    certificates,
    certifications,
    "": ""
  };

  return <Accolades data={states[state]} /> || <div></div>;
};
