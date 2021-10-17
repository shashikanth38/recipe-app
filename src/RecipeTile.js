import React from 'react'
import App from './App'
import './RecipeTile.css'

export default function RecipeTile( {recipe}){
    return(
      recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null &&  (
      <div className="recipeTile" onClick={()=>{
          window.open(recipe["recipe"]["url"])
        }}>
        <img className="recipeTile__img" src={recipe["recipe"]["image"]}/>
        <h2 className="recipeTile__name">{recipe["recipe"]["label"]}</h2>
        <ol className="ingredients">
        {
              recipe["recipe"]["ingredients"].map(ingredient=>(
              <li>
                  {ingredient["text"]}
              </li>
              )
            )
        }
        </ol>
        <h3 className="recipeTile__name">Calories:{Math.round(recipe["recipe"]["calories"])} cal.</h3>
      </div>
    )
  );
}
