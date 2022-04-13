import React from "react";
// import SecondStyles from "../second/Second.module.css";
import globalStyles from "../Global/Global.module.css";
import thirdStyles from "./Third.module.css";

function Image({ src, text }) {
  return (
    <div className={thirdStyles.imgsubwrapper}>
      <img src={src} className={thirdStyles.imga} />
      <div className={thirdStyles.imgTextWrapper}>
        <div className={thirdStyles.mainText}>{text}</div>
        <div className={thirdStyles.subText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun
        </div>
      </div>
    </div>
  );
}

export default Image;
