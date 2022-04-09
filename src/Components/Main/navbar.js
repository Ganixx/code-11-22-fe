import React from "react";
import mainstyles from "./Main.module.css";
import Hamburger from "../../images/hamburger.svg";

function Navbar() {
  return (
    <div className={mainstyles.navbar}>
      <div className={mainstyles.logowrapper}>
        <div className={mainstyles.logo}>Your Logo</div>
      </div>
      <div className={mainstyles.textwrapper}>
        <div className={mainstyles.navtext}>Explore</div>
        <div className={mainstyles.navtext}>About Us</div>
        <div className={mainstyles.navtext}>
          <span>Cities &nbsp; </span>
          <span className={mainstyles.navdowarrimg}></span>
        </div>
        <div className={mainstyles.navtext}>Call</div>
      </div>
      <img src={Hamburger} className={mainstyles.hamburger} alt="hamburger" />
    </div>
  );
}

export default Navbar;
