import React from "react";
import style from "./ShowRecipe.module.css";

function ShowRecipe({ key, calories, img, label, ingredients }) {
  return (
    <div className={style.Recipe}>
      <img className={style.image} src={img} alt="images"></img>
      <h2>Name: {label}</h2>
      <h5>Calories: {calories}</h5>
      {/* <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
    </div>
  );
}

export default ShowRecipe;
