import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {

  const APP_ID = "5319bb40";
  const APP_KEY = "20a27191ab6e1e67a375c147a398d0c0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes(); 
  }, [])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
  }


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'> Search </button>
      </form> 
      {recipes.map(recipe => (
      <Recipe
        key = {recipe.recipe.label}
        title = {recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
      />
      ))}
    </div>
  );
}

export default App;
