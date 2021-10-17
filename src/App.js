 import react from "react"
 import './App.css';
 import './key.js';
 import Axios from "axios";
 import RecipeTile from "./RecipeTile.js"
 import {useState} from "react";

function App() {

  const [query,setquery]=useState("")
  const[recipes,setrecipes]=useState([])
  const[healthLabel, sethealthLabel]=useState("vegan")
  const high=150;
  const YOUR_APP_ID="a80f3ba8"
  const YOUR_APP_KEY="70c8e5c75a7c527157469f6cda8be7ec"
  // var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${healthLabel}`
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`
  // var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=vegan`
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  function handleChange(e){
    // e.preventDefault();
    sethealthLabel(e.target.value);
 };

  const onSubmmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>🥭what are you craving?🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmmit}>
        <input
        type="text"
        className="app__input"
        placeholder="Ingredients"
        value={query}
        onChange={(e)=>setquery(e.target.value)}
        />
        <select onChange={handleChange} value={healthLabel} className="app__healthLabel">
            <option value="vegan">vegan</option>
            <option value="vegetarian">vegetarian</option>
            <option value="paleo">paleo</option>
            <option value="dairy-free">dairy-free</option>
            <option value="gluten-free">gluten-free</option>
            <option value="wheat-free">wheat-free</option>
            <option value="low-sugar">low-sugar</option>
            <option value="peanut-free">peanut-free</option>
            <option value="tree-nut-free">tree-nut-free</option>
            <option value="soy-free">soy-free</option>
            <option value="fish-free">fish-free</option>
            <option value="shellfish-free">shellfish-free</option>


        </select>
      <input
        className="app__button"
        type="submit"
        value="Search"
        />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe)=>{
              return <RecipeTile recipe={recipe}/>;
        })}
      </div>
    </div>
  );
}

export default App;
