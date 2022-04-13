import React from "react";
import mainstyles from "./Main.module.css";
import mainimg from "../../images/mainimg.png";
import mainvectorsvg from "../../images/mainVector.svg";
import Navbar from "./navbar";
import Form from "./Form";
import downarrow from "../../images/navbardown.svg";

function Main() {
  const Mainref = React.useRef();
  return (
    <div className={mainstyles.main} ref={Mainref}>
      <Navbar />
      <div className={mainstyles.headtextwrapper}>
        <div className={mainstyles.headtext}>Rethink your living & renting</div>
        <div className={mainstyles.headtextsubtitle}>
          Make your stay painless with us
        </div>
      </div>
      <div className={mainstyles.headtextwrapper}></div>
      <img src={mainimg} className={mainstyles.mainimg} alt="hotel" />
      <img src={mainvectorsvg} className={mainstyles.mainvector} alt="hotel" />
      <Form />
      <div
        className={mainstyles.navdowarrimgwrapper}
        onClick={() =>
          window.scroll({
            top: Mainref.current.scrollHeight,
            behavior: "smooth",
          })
        }
      >
        <img src={downarrow} alt="downarrow" />
      </div>
    </div>
  );
}

export default Main;
