import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

const Main = () => {
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)

  const addIngredient = (formData) => {
    const ingredient = formData.get("ingredient")
    setIngredients((prevIngredients) => [...prevIngredients, ingredient])
  }

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
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
      toggleRecipeShown={toggleRecipeShown} 
      ingredients={ingredients}/>}


        {recipeShown && <ClaudeRecipe />}
    </main>
  )
}

export default Main
