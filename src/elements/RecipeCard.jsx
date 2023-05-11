import styles from "./RecipeCard.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };
  return (
    <div className={styles.recipe_card}>
        <div className={styles.recipe_img_container}>
          <img src={recipe.image_url} />
        </div>
          <h3>{recipe.recipe_name}</h3>
          <button className="blue-btn" onClick={handleClick}>See More</button>
    </div>
  );
};

export default RecipeCard;
