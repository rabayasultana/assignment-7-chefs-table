const RecipeCard = ({ recipe, handleCookBtn }) => {
  let recipeIngredients = recipe.ingredients;
  return (
    <div className="">
      <div className="card  bg-base-100 border ">
        <figure>
          <img
            className="w-[330px] h-[200px] p-6 "
            src={recipe.recipe_image}
            alt="recipe"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">
            {recipe.recipe_name}
          </h2>
          <p className="text-[#878787] text-xs font-normal">
            {recipe.short_description}
          </p>
          <hr className="my-3" />
          <h3 className="text-[#282828] text-xl font-medium">
            Ingredients: {recipe.ingredients.length}
          </h3>
          <ul className="list-disc ml-10 text-[#878787] text-xs font-normal">
            {recipeIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <hr className="my-3" />

          <div className="flex">
            <i
              className="far fa-clock flex items-center"
              width="24"
              height="24"
            ></i>
            <p className="text-[16px] text-[#282828] opacity-80 ml-3">
              {recipe.preparing_time}
            </p>
            <i
              className="fas fa-fire-alt flex items-center"
              width="24"
              height="24"
            ></i>
            <p className="text-[16px] text-[#282828] opacity-80 ml-3">
              {recipe.calories}
            </p>
          </div>

          <div className="card-actions mt-6">
            <button
              onClick={() => {
                console.log("Button clicked!");
                handleCookBtn(recipe);
              }}
              className="btn cook-btn btn-accent rounded-full"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
