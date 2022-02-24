import axios from 'axios';
import {useEffect, useState} from 'react';

const DataFetching = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([
    {id: 4, title: 'grilled cheese', ingredients: []},
    {id: 5, title: 'egg foo yung', ingredients: []},
  ]);

  useEffect(() => {
    const baseUrl = 'http://my-json-server.typicode.com/andydlindsay/chef-andy';

    const recipesPromise = axios.get(`${baseUrl}/recipes`);
    const ingredientsPromise = axios.get(`${baseUrl}/ingredients`);

    const promises = [recipesPromise, ingredientsPromise];

    Promise.all(promises)
      .then((arrayOfResults) => {
        const recipeResults = arrayOfResults[0].data;
        const ingredientResults = arrayOfResults[1].data;

        setRecipes((prevRecipes) => {
          return [
            ...prevRecipes,
            ...recipeResults
          ]
        });

        setIngredients(ingredientResults);
      });

    // axios.get(url)
    //   .then((response) => {
    //     console.log(response.data);
    //     // setRecipes([
    //     //   ...recipes,
    //     //   ...response.data
    //     // ]);
    //     setRecipes((prevRecipes) => {
    //       return [
    //         ...prevRecipes,
    //         ...response.data
    //       ];
    //     });
    //   });
  }, []);

  return (
    <div>
      <h2>Data Fetching!!!</h2>

      <h2>Ingredient count: {ingredients.length}</h2>

      <h2>Recipe List</h2>

      { recipes.map((recipe) => {
        return <p key={recipe.id}>Title: {recipe.title}</p>
      }) }
    </div>
  );
};

export default DataFetching;
