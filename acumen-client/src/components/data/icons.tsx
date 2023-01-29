import { GiPolarStar } from "react-icons/gi";
import { SiReact, SiJavascript, SiPython, SiAmazonaws } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
export const starSkillFill = (lvl) =>
  [...Array(7).fill(0)].map((_, idx) =>
    idx < lvl ? (
      <GiPolarStar key={lvl * idx} color={"gold"} />
    ) : (
      <GiPolarStar color={"white"} />
    )
  );

export const skillSwitch = (skillName) => {
  const skills = {
    React: <SiReact className="skill-icon icon-react" size={"2rem"} />,
    JavaScript: (
      <SiJavascript className="skill-icon icon-react" size={"2rem"} />
    ),
    Python: <SiPython className="skill-icon icon-react" size={"2rem"} />,
    AWS: <SiAmazonaws className="skill-icon icon-react" size={"2rem"} />
  };
  return skills[skillName] || <></>;
};
