import React from "react";
import SecondStyles from "../second/Second.module.css";
import Image from "./Image";
import image1 from "../../images/Third/pexels-max-vakhtbovych-5998051 1 (1).png";
import image2 from "../../images/Third/pexels-max-vakhtbovych-6492403 1.png";
import image3 from "../../images/Third/dininingtable.png";
import image4 from "../../images/Third/pexels-oleg-zaicev-4834891 1.png";
import thirdStyles from "./Third.module.css";

function Second() {
  return (
    <div className={SecondStyles.wrapper}>
      <div className={SecondStyles.headtext}>About Us</div>
      <p className={SecondStyles.headtextsubtitle}>
        Allow us to tell you a short story...
      </p>
      <div className={thirdStyles.imgwrapper}>
        <Image src={image1} text={"Chapter I"} />
        <Image src={image2} text={"Chapter II"} />
        <Image src={image1} text={"Chapter III"} />
        <Image src={image4} text={"Chapter IV"} />
      </div>
    </div>
  );
}

export default Second;
