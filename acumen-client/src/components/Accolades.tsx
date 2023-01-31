import React, { useState } from "react";
import Accolade from "./Accolade";
import HorizonScroll from "./Buttons/HorizonScroll";
import { AccoladeType } from "./data/accolades";
const Accolades = ({ data }) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="category-container" key={current}>
        <HorizonScroll
          type="left"
          current={current}
          setCurrent={setCurrent}
          length={data.length}
        />
        {data ? (
          data
            .filter((_: null, idx: number) => idx === current)
            .map(
              (
                {
                  category,
                  id,
                  name,
                  description,
                  level,
                  status,
                  active
                }: AccoladeType,
                idx
              ) => (
                <Accolade
                  id={id}
                  name={name}
                  category={category}
                  description={description}
                  status={status}
                  level={level}
                  active={active}
                />
              )
            )
        ) : (
          <></>
        )}
        <HorizonScroll
          type="right"
          current={current}
          setCurrent={setCurrent}
          length={data.length}
        />
      </div>
    </>
  );
};

export default React.memo(Accolades);
