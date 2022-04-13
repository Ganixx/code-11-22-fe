import React from "react";
import mainstyles from "./Main.module.css";
import HelperCardForm from "./HelperCardForm";
import search from "../../images/search.svg";

function Form() {
  const [loading, setLoading] = React.useState(false);
  const [input, setInput] = React.useState({
    CITY: "Select your city",
    DATES: "Select your dates",
    GUESTS: "Add guests",
  });
  const timePromise = function (time = 1000) {
    return new Promise(function (resolve, reject) {
      try {
        setTimeout(() => {
          resolve("done");
        }, time);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <div className={mainstyles.formwrapper}>
      <div className={mainstyles.form}>
        <HelperCardForm subtext="CITY" value={input} setter={setInput} />
        <HelperCardForm subtext="DATES" value={input} setter={setInput} />
        <HelperCardForm subtext="GUESTS" value={input} setter={setInput} />
        <form
          className={` ${mainstyles.formhelpersearch} ${
            loading && mainstyles.fader
          }`}
        >
          <img
            src={search}
            alt="search"
            style={{ width: "30px", height: "30px" }}
            type="submit"
            onClick={async (e) => {
              e.preventDefault();
              setLoading(true);
              await timePromise(4000);
              setLoading(false);
            }}
          ></img>
          <p
            type="submit"
            data-testid="SearchId"
            onClick={async (e) => {
              e.preventDefault();
              setLoading(true);
              await timePromise(4000);
              setLoading(false);
            }}
          >
            {loading ? "Searching.." : "Search"}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Form;
