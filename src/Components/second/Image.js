import React from "react";
import SecondStyles from "./Second.module.css";

function Image({ src, data }) {
  return (
    <div className={SecondStyles.imagemainwrapper}>
      <img src={src} className={SecondStyles.imga} />
      <div className={SecondStyles.gridwrapper}>
        <div className={SecondStyles.text} style={{ gridColumn: "1 / 3" }}>
          {data[0]}
        </div>
        <div className={SecondStyles.smallbtn}>
          <p className={SecondStyles.text}>{data[1]}</p>
        </div>
        <div className={SecondStyles.smallbtn}>
          <p className={SecondStyles.text}>{data[2]}</p>
        </div>
        <div
          className={`${SecondStyles.smallbtn}  ${SecondStyles.bigbtn}`}
          style={{ "grid-column": "3 / 3", gridRow: "1 / 3" }}
        >
          <p className={SecondStyles.text}>{data[3]}</p>
        </div>
      </div>
    </div>
  );
}

export default Image;
