import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import { BiSearchAlt2 } from "react-icons/bi";
import './HomeScreen.css'

const HomeScreen = () => {
  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com").then((res) => {
      // setRecipes(res.data)
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const [search, setSearch] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setSearchInput(e.target.value)
  // }
  // if (searchInput.length > 0) {
  //   .filter(() => {
  //     return
  //   })
  // }

  return (
    <div>
      <AdBanner />
      {
        <span>
          <BiSearchAlt2 size="2em" color="#DA7635" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          />
        </span>
      }
      <div id='recipes'>
      <RecipeCard />
      </div>
    </div>
  );
};

export default HomeScreen;
