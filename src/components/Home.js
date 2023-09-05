// Home.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiKey, apiUrl } from "../apiConfig";
import Navbar from "./Navbar";
import "./home.css";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch a list of recipes from the Spoonacular API
    axios
      .get(`${apiUrl}/complexSearch?apiKey=${apiKey}&number=10`)
      .then((response) => {
        setRecipes(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <h1 className="wrapper-heading">select the Recipe </h1>
          <div className="wrapper-content">
            <ul className="list-items">
              {recipes.map((recipe) => (
                <li key={recipe.id} className="recipe-list-item">
                  <Link to={`/recipe/${recipe.id}`}>
                    <p className="recipe-title">
                      {recipe.title}
                      <span class="material-symbols-outlined">
                        chevron_right
                      </span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
