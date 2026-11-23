import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromChefClaude } from '../ai'

const Main = () => {
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipe, setRecipe] = useState(false)

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, ingredient])
  }

  async function getRecipe() {
      console.log("Getting recipe....")
      const responseRecipe = await getRecipeFromChefClaude(ingredients)
      console.log("Recipe: ", responseRecipe)
      setRecipe(responseRecipe)
  }


  return (
    <main>
      <form className='add-ingredient-form' action={addIngredient}>
        <input
          aria-label='add-ingredient'
          type='text'
          name='ingredient'
          placeholder='e.g. Oregano'
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && 
      <IngredientsList 
      getRecipe={getRecipe} 
      ingredients={ingredients}/>}


      {recipe && <ClaudeRecipe recipe={recipe}/>}
    </main>
  )
}

export default Main
