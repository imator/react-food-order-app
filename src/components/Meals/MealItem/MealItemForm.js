import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    //enteredAmount is string
    const enteredAmount = amountInputRef.current.value;
    const enetedAmontNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || enetedAmontNumber < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToChart(enetedAmontNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5)</p>}
    </form>
  );
};

export default MealItemForm;
