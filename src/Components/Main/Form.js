import React from "react";
import mainstyles from "./Main.module.css";
import HelperCardForm from "./HelperCardForm";
import search from "../../images/search.svg";

function Form() {
  return (
    <div className={mainstyles.formwrapper}>
      <div className={mainstyles.form}>
        <HelperCardForm subtext="CITY" maintext="Select your city" />
        <HelperCardForm subtext="DATES" maintext="Select your dates" />
        <HelperCardForm subtext="GUESTS" maintext="Add guests" />
        <div className={mainstyles.formhelpersearch}>
          <img
            src={search}
            alt="search"
            style={{ width: "30px", height: "30px" }}
          ></img>
          <p>Search</p>
        </div>
      </div>
    </div>
  );
}

export default Form;
