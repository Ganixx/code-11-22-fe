import React from "react";
import mainstyles from "./Main.module.css";
import Hamburger from "../../images/hamburger.svg";
import Sidebar from "./Sidebar";

function Navbar() {
  const [sideBarenabled, setsideBarenabled] = React.useState(false);
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
      <img
        data-testid="hamId"
        src={Hamburger}
        className={mainstyles.hamburger}
        alt="hamburger"
        onClick={() => setsideBarenabled((oldstate) => !oldstate)}
      />
      {sideBarenabled && <Sidebar setsideBarenabled={setsideBarenabled} />}
    </div>
  );
}

export default Navbar;
