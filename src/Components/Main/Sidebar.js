import React from "react";
import mainstyles from "./Main.module.css";

function Sidebar({ setsideBarenabled }) {
  const [isclosing, setIsClosing] = React.useState(false);

  return (
    <div
      className={`${mainstyles.sidebar} ${
        isclosing && mainstyles.sidebarcloser
      }`}
      onAnimationEnd={() =>
        isclosing && setsideBarenabled((oldstate) => !oldstate)
      }
    >
      <span
        className={mainstyles.closebutton}
        onClick={() => {
          setIsClosing(true);
        }}
      >
        &times;
      </span>
      <div className={mainstyles.logowrapper}>
        <div data-testid="sidebarLogo" className={mainstyles.logo}>
          Your Logo
        </div>
      </div>
      <div>
        <div className={mainstyles.navtext}>Explore</div>
        <div className={mainstyles.navtext}>About Us</div>
        <div className={mainstyles.navtext}>
          <span>Cities &nbsp; </span>
          <span className={mainstyles.navdowarrimg}></span>
        </div>
        <div className={mainstyles.navtext}>Call</div>
      </div>
    </div>
  );
}

export default Sidebar;
