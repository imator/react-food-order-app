import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvaliableMeals from "./AvaliableMeals";
// import classes from "./Meals.module.css";

const Meals = (props) => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </Fragment>
  );
};
export default Meals;
