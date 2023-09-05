// RecipeDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiKey, apiUrl } from "../apiConfig";
import "./Recipe.css";
import ScrollRevealContainer from "./ScrollRevealContainer";
import Navbar from "./Navbar";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch detailed information about the selected recipe
    axios
      .get(`${apiUrl}/${id}/information?apiKey=${apiKey}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error("Error fetching recipe details:", error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <ScrollRevealContainer>
            <div className="sr-left left-content">
              <div className="left-content">
                <img src={recipe.image} alt={recipe.title} />
                <ScrollRevealContainer>
                  <div className="sr-top">
                    <p className="left-content-sub">dish</p>
                  </div>
                </ScrollRevealContainer>
              </div>
            </div>
          </ScrollRevealContainer>
          <ScrollRevealContainer>
            <div className="sr-left">
              <div className="right-content">
                <h1 className="heading">{recipe.title}</h1>
                <h2 className="sub-heading">Ingredients:</h2>
                <ul>
                  {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
                <h2 className="sub-heading">Instructions:</h2>
                <div
                  className="ins-content"
                  dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                />
              </div>
            </div>
          </ScrollRevealContainer>
        </div>
      </div>
    </>
  );
}

export default RecipeDetails;
