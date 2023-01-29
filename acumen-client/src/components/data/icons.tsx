import { GiPolarStar, GiOpenBook } from "react-icons/gi";
import { SiReact, SiJavascript, SiPython, SiAmazonaws } from "react-icons/si";
import { MdStars } from "react-icons/md";
import { TfiMedall } from "react-icons/tfi";

const randIdx = (length: number) => Math.floor(Math.random() * length);

const StarIcon = (Component, key, color, size) => (
  <Component size={size} key={key} color={color} />
);
export const starSkillFill = (lvl: number) =>
  [...Array(7).fill(0)].map((_, idx) =>
    idx < lvl ? (
      <GiPolarStar key={lvl * idx} color={"gold"} />
    ) : (
      <GiPolarStar key={lvl * idx + 1} color={"white"} />
    )
  );

export const skillSwitch = (skillName) => {
  const sz = "2.33rem";
  const skills = {
    React: <SiReact className="skill-icon icon-react" size={sz} />,
    JavaScript: <SiJavascript className="skill-icon" size={sz} />,
    Python: <SiPython className="skill-icon" size={sz} />,
    AWS: <SiAmazonaws className="skill-icon" size={sz} />
  };
  return skills[skillName] || <></>;
};

export const statusSwitch = (status) => {
  const sz = "3rem";
  const states = {
    complete: <TfiMedall color={"rgba(225,165,0, .66)"} size={sz} />
  };
  return states[status] || <GiOpenBook size={sz} />;
};
