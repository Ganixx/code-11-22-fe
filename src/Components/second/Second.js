import React from "react";
import SecondStyles from "./Second.module.css";
import Image from "./Image";
import image1 from "../../images/pexels-dmitry-zvolskiy-2082087 1.png";
import image2 from "../../images/pexels-naim-benjelloun-2029670 1.png";

function Second() {
  return (
    <div className={SecondStyles.wrapper}>
      <div className={SecondStyles.headtext}>Explore</div>
      <p className={SecondStyles.headtextsubtitle}>
        From one-guest rooms to penthouses with pools and gardens
      </p>
      <div className={SecondStyles.imgwrapper}>
        <Image
          src={image1}
          data={["Room with one king-size bed", "35$", "28м²", "Book!"]}
        />
        <Image
          src={image2}
          data={["Penthouse for 8 person", "2039$", "438м²", "Book!"]}
        />
      </div>
    </div>
  );
}

export default Second;
