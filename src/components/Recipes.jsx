import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../../public/recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    console.log(recipes);

    return (
        <div className="">
            <div className="text-center">
            <h2 className="text-[#150B2B] text-[40px] font-semibold mb-6">Our Recipes</h2>
            <p className="text-[16px] font-normal text-[#150B2B]
             opacity-60 mx-5 lg:w-[823px] lg:mx-auto mb-12">Embark on a flavor-filled journey with our thoughtfully curated recipes, designed to delight your palate and ignite your passion for cooking. From zesty appetizers to indulgent desserts, savor the harmony of taste and creativity in every dish.</p>
        </div>

        {/* result */}
        <div className='lg:flex lg:mx-10'>
        <div className='food-container lg:w-3/5 grid lg:grid-cols-2 gap-6'>
          {/* {
            foods.map((food) => <Food food={food} handleCookBtn={handleCookBtn}></Food>)
          } */}
          {
            recipes.map((recipe) => <RecipeCard key={recipe.recipe_id} recipe={recipe}></RecipeCard>)
          }
        </div>
        </div>
            
        </div>
    );
};

export default Recipes;