import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import CookTable from "./CookTable";
import CookingTable from "./CookingTable";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [cart, setCart] = useState([]);
    const [prepareCart, setPrepareCart] = useState([]);

    useEffect(() => {
        fetch('/recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])


    // console.log(recipes);

    // add recipe to table
    const handleCookBtn = (recipe) => {
        const isExist = cart.find((cartRecipe) => cartRecipe.recipe_id === recipe.recipe_id);
        if (!isExist) {
            setCart([...cart, recipe]);
        } else {
            toast('Item already in the table');
        }
    };
    
    const handlePreparingBtn =(item) =>{
        const newCart = cart.filter(preparingItem => preparingItem.recipe_id != item.recipe_id);
        setCart(newCart);
        const isPrepare = prepareCart.find((pFood) => pFood.recipe_id == item.recipe_id);
        if(!isPrepare){
          setPrepareCart([...prepareCart, item]);
        }
      }

    return (
        <div className="">
            <div className="text-center">
            <h2 className="text-[#150B2B] text-[40px] font-semibold mb-6">Our Recipes</h2>
            <p className="text-[16px] font-normal text-[#150B2B]
             opacity-60 mx-5 lg:w-[823px] lg:mx-auto mb-12">Embark on a flavor-filled journey with our thoughtfully curated recipes, designed to delight your palate and ignite your passion for cooking. From zesty appetizers to indulgent desserts, savor the harmony of taste and creativity in every dish.</p>
        </div>
        <ToastContainer />

        {/* result */}
        <div className='lg:flex'>
            {/* left */}
        <div className='food-container lg:w-3/5 grid lg:grid-cols-2 gap-6'>
          {
            recipes.map((recipe) => <RecipeCard key={recipe.recipe_id} recipe={recipe} handleCookBtn={handleCookBtn}></RecipeCard>)
          }
        </div>

        {/* right side */}
         {/* cook table */}
         <div className='lg:w-2/5 border mx-10 lg:mx-0  lg:mr-10  mt-5 lg:mt-0 rounded-2xl'>
          <div className=''>
            <h2 className='text-center my-6 text-[24px] font-semibold'>Want to Cook: {cart.length}</h2>
            <hr className='mx-10' />
            <table className='mt-6 text-[#878787] text-xs font-normal'>
              <thead>
                <tr>
                  <th className="py-2 px-4"></th>
                  <th className="py-2 pr-10 lg:pl-4">Name</th>
                  <th className="py-2 px-10">Time</th>
                  <th className="py-2 px-10">Calories</th>
                  <th className="py-2 px-10"></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map((item, index) => (
                    <CookTable key={index} item={item} index={index} handlePreparingBtn = {handlePreparingBtn}></CookTable>
                  ))
                }

              </tbody>
            </table>
          </div>

          {/* Cooking table */}

          <div className=''>
            <h2 className='text-center my-6 text-[24px] font-semibold'>Currently cooking: {prepareCart.length}</h2>
            <hr className='mx-10' />
            <table className='mt-6 text-[#878787] text-xs font-normal'>
              <thead>
                <tr>
                  <th className="py-2 px-4"></th>
                  <th className="py-2 pr-10 lg:pl-4">Name</th>
                  <th className="py-2 px-10">Time</th>
                  <th className="py-2 px-10 ">Calories</th>
                </tr>
              </thead>
              <tbody>
                {prepareCart.map((item, index) => (
                    <CookingTable key={index} item={item} index={index} ></CookingTable>
        ))}

              </tbody>
            </table>
          </div>
        </div>
        </div>
            
        </div>
    );
};

export default Recipes;