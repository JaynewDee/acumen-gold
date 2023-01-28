import { GiPolarStar } from "react-icons/gi";

export const starSkillFill = (lvl) =>
  [...Array(7).fill(0)].map((_, idx) =>
    idx < lvl ? <GiPolarStar color={"gold"} /> : <GiPolarStar color={"white"} />
  );
