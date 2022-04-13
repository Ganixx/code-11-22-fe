import React from "react";
import mainstyles from "./Main.module.css";

function HelperCardForm({ subtext, value: input, setter }) {
  return (
    <div className={mainstyles.formhelpercard}>
      <div>{subtext}</div>
      <input
        data-testid="formHelperCardId"
        name={subtext}
        value={input[subtext]}
        onChange={(e) => {
          const name = e.target.name;
          const value = e.target.value;
          setter((values) => ({ ...values, [name]: value }));
        }}
      />
    </div>
  );
}

export default HelperCardForm;
