import Badges from "../category/Badges";
import Certificates from "../category/Certificates";
import Certifications from "../category/Certifications";
import { AccoladesData } from "../data/accolades";

export const categorySwitch = (state: any) => {
  const states = {
    badges: <Badges />,
    certificates: <Certificates />,
    certifications: <Certifications />
  };
  return states[state] || <div></div>;
};
