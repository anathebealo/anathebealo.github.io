import { useNavigate } from 'react-router-dom';

import allRecipes from './recipe_data/recipe_index';
import './recipes.css';

function Recipes() {
  const navigate = useNavigate();

  const goToRecipe = (recipeName) => {
    navigate(`./${recipeName}`);
  }

  const getRecipeDetails = (recipeName) => {
    const recipe = require(`./recipe_data/${recipeName}.json`);
    return {
      ...recipe,
      url: recipeName
    };
  }

  const recipeDetails = allRecipes.map(x => {
    return getRecipeDetails(x);
  });

  return <div className={`recipes-container recipe-link`} >
    <h1>My Favorite Recipes</h1>
    <p>This is a collection of recipes that I cook a lot at home and also have written down. Some are old family recipes and others are ones I found froms sources on the internet</p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: "40px" }}>
      {recipeDetails.map(x => {
        return <div className="recipeCard" style={{ cursor: "pointer", width: "200px", height: "200px" }} onClick={() => goToRecipe(x.url)}>
          <img alt={`${x.title}`} style={{ width: "100%", height: "150px", objectFit: "cover" }} src={x.image_url} />
          <p>{x.title}</p>
        </div>

      })}
    </div>
  </div>
}

export default Recipes;
