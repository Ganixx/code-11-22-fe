import React from "react";
import mainstyles from "./Main.module.css";

function HelperCardForm({ subtext, maintext }) {
  return (
    <div className={mainstyles.formhelpercard}>
      <div>{subtext}</div>
      <div>{maintext}</div>
    </div>
  );
}

export default HelperCardForm;
