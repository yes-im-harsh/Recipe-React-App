import React, { useState, useEffect } from "react";
import "./App.css";
import ShowRecipe from "./Components/ShowRecipe/ShowRecipe";

// link=`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`

function App() {
  const APP_ID = "d8810201";
  const APP_KEY = "e5f6ec9f15e7554e8ed47788463a0840";

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [quary, setquary] = useState("chicken");

  useEffect(() => {
    const getRecipe = async (e) => {
      const recipe = await fetch(
        `https://api.edamam.com/search?q=${quary}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await recipe.json();
      setrecipes(data.hits);
      console.log(data.hits);
      // console.log(data);
      // console.log(recipes);
    };

    getRecipe();
  }, [quary]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setquary(search);
    setsearch("");
  };

  return (
    <div className="App">
      <h2>Hotel LakeView</h2>
      <form onSubmit={handleSubmit} className="Search-Form">
        <input
          className="Search-Bar"
          type="text"
          value={search}
          placeholder="Search Recipe"
          onChange={(e) => setsearch(e.target.value)}
        ></input>
        <button className="Search-Button">Search</button>
      </form>
      <div className="Recipe">
        {recipes.map((items) => (
          <ShowRecipe
            key={items.recipe.label}
            label={items.recipe.label}
            img={items.recipe.image}
            calories={items.recipe.calories}
            ingredients={items.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
