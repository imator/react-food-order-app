import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (prop) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactFood</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
