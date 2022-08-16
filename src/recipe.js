import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}> 
            <h1>{title}</h1>
            <img className={style.image} src={image} alt="" />
            <h4>Ingredients</h4>
            <ul className="ingre">
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            
            <h4>calories</h4>
            <p className="cal">{calories}</p>
        
        </div>
    )
}

export default Recipe; 