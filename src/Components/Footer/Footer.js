import React from "react";
import mainstyles from "../Main/Main.module.css";
import Footerstyles from "./Footer.module.css";

function Footer() {
  return (
    <div className={Footerstyles.navbar}>
      <div className={`${mainstyles.logowrapper} ${Footerstyles.logowrapper}`}>
        <div className={mainstyles.logo} style={{ color: "#000000" }}>
          Your Logo
        </div>
        <div className={Footerstyles.copyright}>
          © 2021 Company Name All rights reserved
        </div>
      </div>
      <div className={mainstyles.textwrapper}>
        <div className={mainstyles.navtext} style={{ color: "#000000" }}>
          Explore
        </div>
        <div className={mainstyles.navtext} style={{ color: "#000000" }}>
          About Us
        </div>
        <div className={mainstyles.navtext} style={{ color: "#000000" }}>
          <span>Cities &nbsp; </span>
        </div>
        <div
          className={mainstyles.navtext}
          style={{
            color: "#000000",
            borderColor: "#000000",
            border: "2px solid",
            borderRadius: "10px",
          }}
        >
          Call
        </div>
      </div>
    </div>
  );
}
export default Footer;
