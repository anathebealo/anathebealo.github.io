import { useParams, useNavigate } from 'react-router-dom';

import './recipes.css';

function Recipes() {
  const navigate = useNavigate();
  let recipeName = useParams().recipe;
  const recipe = require(`./recipe_data/${recipeName}.json`);

  const goBack = () => {
    navigate(`/recipes`);
  }

  return <div className={`recipes-container recipe-link`} >
    <button onClick={goBack}>Back to All Recipes</button>
    <h1>{recipe.title}</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: "40px" }}>
        <div>
            <p>Ingredients</p>
            <ul>
                {recipe.ingredients.map(ingredient=> {
                    return <li>{ingredient}</li>
                })}
            </ul>
        </div>

        <div>
            <p>Directions</p>
            <ul>
                {recipe.directions.map(direction=> {
                    return <li>{direction}</li>
                })}
            </ul>
        </div>
     
    </div>
  </div>
}

export default Recipes;
